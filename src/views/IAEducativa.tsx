import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Bot, User, LayoutPanelLeft, ShieldAlert } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useAppStore } from '../store/useAppStore';

type MessageRole = 'user' | 'assistant';

interface Message {
  role: MessageRole;
  content: string;
}

export function IAEducativaView() {
  const location = useLocation();
  const { user, trilhas } = useAppStore();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Olá! Sou Chico IA, seu assistente pessoal de cidadania. Como posso te orientar hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Format context for the API
  const userContext = {
    name: user.name,
    title: user.title,
    xp: user.xp,
    trilhas: trilhas.filter(t => t.status !== 'locked').map(t => t.title).join(', ')
  };

  useEffect(() => {
    // Auto-scroll to bottom
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);

  useEffect(() => {
    if (location.state?.initialMessage) {
      handleSend(location.state.initialMessage);
      window.history.replaceState({}, document.title);
    }
  }, []);

  const suggestions = [
    "O que é engenharia social?",
    "O que é cyberbullying e como agir?",
    "Quais são meus direitos na escola?",
    "Como criar uma senha mais forte?"
  ];

  const handleSend = async (textToUse?: string) => {
    const messageText = textToUse || input;
    if (!messageText.trim() || isStreaming) return;
    
    setInput('');
    setIsStreaming(true);

    const newMessages = [...messages, { role: 'user', content: messageText } as Message];
    setMessages(newMessages);

    // Add empty assistant message that will be populated via SSE
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: messageText,
          history: messages, // Current history without the new ones
          context: userContext
        }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      
      let done = false;
      
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunkStr = decoder.decode(value, { stream: true });
          const messagesData = chunkStr.split('\n\n');
          
          for (const msgData of messagesData) {
            if (msgData.startsWith('data: ')) {
               const dataStr = msgData.replace('data: ', '').trim();
               if (dataStr === '[DONE]') {
                 setIsStreaming(false);
                 break;
               }
               
               if (dataStr) {
                 try {
                   const parsed = JSON.parse(dataStr);
                   if (parsed.error) {
                     setMessages(prev => {
                       const updated = [...prev];
                       updated[updated.length - 1].content = parsed.error;
                       return updated;
                     });
                     setIsStreaming(false);
                     break;
                   }
                   if (parsed.text) {
                     setMessages(prev => {
                       const updated = [...prev];
                       updated[updated.length - 1].content += parsed.text;
                       return updated;
                     });
                   }
                 } catch (e) {
                   console.error("Failed to parse SSE data", dataStr, e);
                 }
               }
            }
          }
        }
      }
    } catch (error) {
      console.error("Failed stream:", error);
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1].content = "Desculpe, a conexão com o núcleo cerebral caiu. Tente novamente.";
        return updated;
      });
      setIsStreaming(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-chico-preto border border-white/5 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative w-full lg:max-w-5xl mx-auto">
      {/* Cinematic ambient tech background */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-chico-roxo opacity-10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-chico-azul opacity-[0.05] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-chico-dourado opacity-[0.03] blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-[0.03] pointer-events-none z-0" />
      
      {/* Top Navigation */}
      <div className="h-16 shrink-0 border-b border-white/5 flex items-center px-6 justify-between bg-black/40 backdrop-blur-xl z-10 relative">
         <div className="flex items-center gap-3">
            <LayoutPanelLeft size={20} className="text-slate-400" />
            <div className="h-4 w-px bg-white/10 mx-1" />
            <div className="flex items-center gap-2">
              <span className="font-normal text-white font-display tracking-widest text-sm uppercase">Chico IA</span>
              <span className="w-2 h-2 rounded-full bg-chico-dourado animate-pulse shadow-[0_0_8px_theme(colors.chico-dourado)]"></span>
            </div>
            <span className="px-2 py-0.5 rounded-full border border-chico-azul/30 bg-chico-azul/10 text-chico-azul text-[10px] font-bold tracking-widest uppercase ml-2 shadow-[0_0_10px_rgba(45,108,223,0.2)]">
              GPT Modelo
            </span>
         </div>
      </div>

      {/* Main Chat Feed */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth py-10 px-4 sm:px-8 z-10 relative">
        <div className="max-w-3xl mx-auto space-y-10">
           
           {/* Welcome area (Only shown if very few messages) */}
           {messages.length <= 2 && (
             <motion.div 
               initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
               className="flex flex-col items-center text-center justify-center py-10"
             >
                <div className="relative w-32 h-32 mb-6 group cursor-default">
                  <div className="absolute inset-0 bg-chico-azul blur-3xl opacity-20 mix-blend-screen animate-pulse rounded-full" />
                  <div className="relative z-10 w-full h-full rounded-full border-4 border-chico-dourado/30 overflow-hidden bg-gradient-to-tr from-chico-escuro to-chico-preto shadow-[0_0_30px_rgba(212,163,115,0.2)] group-hover:shadow-[0_0_40px_rgba(45,108,223,0.3)] transition-all duration-700">
                    <img src="/chico03.png" alt="Chico IA" className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-chico-preto flex items-center justify-center border border-white/10 shadow-lg">
                     <Sparkles size={14} className="text-chico-azul animate-ping absolute opacity-50" />
                     <Sparkles size={14} className="text-chico-azul relative z-10" />
                  </div>
                </div>
                <h1 className="text-4xl font-normal text-white mb-2 font-display tracking-tight">Chico <span className="text-transparent bg-clip-text bg-gradient-to-r from-chico-azul to-chico-roxo drop-shadow-[0_0_10px_rgba(45,108,223,0.5)]">IA</span></h1>
                <p className="text-slate-400 mb-8 max-w-sm font-medium">Estou aqui para orientar você, tirar suas dúvidas e garantir navegação segura.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                   {suggestions.map((s, i) => (
                      <button 
                         key={i}
                         onClick={() => handleSend(s)}
                         className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-chico-azul/40 transition-all duration-300 text-left text-sm text-slate-300 hover:text-white group hover:shadow-[0_0_20px_rgba(45,108,223,0.1)]"
                      >
                         <Bot size={18} className="text-chico-azul shrink-0 group-hover:scale-110 transition-transform" />
                         <span className="font-medium">{s}</span>
                      </button>
                   ))}
                </div>
             </motion.div>
           )}

           {/* Conversations */}
           {messages.map((msg, idx) => {
             // Hide welcome message if history grows large, keep it if it's the only one
             if (idx === 0 && messages.length > 3) return null;
             
             return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 sm:gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg overflow-hidden border border-white/10 ${
                  msg.role === 'assistant' 
                    ? 'bg-chico-escuro' 
                    : 'bg-black/60'
                }`}>
                  {msg.role === 'assistant' ? (
                     <img src="/logonavbaria.png" alt="Chico" className="w-full h-full object-cover object-center opacity-90" />
                  ) : (
                     <User size={16} className="text-slate-400" />
                  )}
                </div>

                <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-[85%]`}>
                  <div className="mb-1.5 px-2 flex items-center gap-2">
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-sans">{msg.role === 'assistant' ? 'Chico IA' : 'Você'}</span>
                  </div>
                  <div className={`prose prose-invert max-w-none text-sm md:text-base leading-relaxed p-5 rounded-[24px] shadow-sm
                    ${msg.role === 'assistant' 
                      ? 'bg-transparent border-0 text-slate-300 px-2' // Assistant has seamless background
                      : 'bg-glass-base backdrop-blur-md border border-white/10 text-white rounded-tr-sm shadow-[0_5px_15px_rgba(0,0,0,0.3)]' 
                    }
                  `}>
                    {msg.role === 'assistant' && msg.content === '' && isStreaming ? (
                       <span className="inline-flex gap-1.5 items-center h-6">
                          <span className="w-2 h-2 rounded-full bg-chico-azul animate-[bounce_1s_infinite] drop-shadow-[0_0_5px_theme(colors.chico-azul)]" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 rounded-full bg-chico-roxo animate-[bounce_1s_infinite] drop-shadow-[0_0_5px_theme(colors.chico-roxo)]" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 rounded-full bg-chico-dourado animate-[bounce_1s_infinite] drop-shadow-[0_0_5px_theme(colors.chico-dourado)]" style={{ animationDelay: '300ms' }} />
                       </span>
                    ) : (
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              </motion.div>
             )
           })}
        </div>
      </div>

      {/* Input Arena */}
      <div className="shrink-0 p-4 sm:p-6 bg-black/40 backdrop-blur-xl border-t border-white/5 z-10 w-full relative">
         {/* Shadow gradient transition */}
         <div className="absolute top-[-40px] left-0 right-0 h-10 bg-gradient-to-t from-chico-preto to-transparent pointer-events-none" />
         
         <div className="relative max-w-4xl mx-auto flex items-end bg-chico-preto/80 border border-white/10 rounded-3xl p-2 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] focus-within:border-chico-azul/50 focus-within:shadow-[0_0_20px_rgba(45,108,223,0.1),inset_0_2px_10px_rgba(0,0,0,0.5)] transition-all duration-300">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Digite sua mensagem ao Chico..."
              className="w-full bg-transparent border-none text-white focus:outline-none focus:ring-0 resize-none px-5 py-4 min-h-[56px] max-h-[200px] placeholder:text-slate-500 font-medium"
              rows={1}
              style={{ overflow: 'hidden' }}
            />
            <button
               onClick={() => handleSend()}
               disabled={!input.trim() || isStreaming}
               className={`shrink-0 p-3.5 m-1 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                 input.trim() && !isStreaming
                 ? 'bg-gradient-to-tr from-chico-azul to-chico-roxo text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(45,108,223,0.5)]' 
                 : 'bg-white/5 text-slate-600 cursor-not-allowed'
               }`}
            >
               <Send size={20} className={input.trim() && !isStreaming ? 'drop-shadow-md' : ''} />
            </button>
         </div>
         <div className="max-w-4xl mx-auto mt-4 px-2">
           <div className="flex items-center justify-center gap-2 opacity-50">
              <ShieldAlert size={12} className="text-chico-dourado" />
              <p className="text-[10px] text-slate-400 text-center font-medium tracking-wide">A IA pode cometer erros. Dados sensíveis não são armazenados. Reporte comportamentos atípicos.</p>
           </div>
         </div>
      </div>
    </div>
  );
}
