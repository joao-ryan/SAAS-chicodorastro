import { motion } from 'motion/react';
import React, { useState } from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { ArrowRight, Trophy, BookOpen, ShieldCheck, Flame, Zap, Sparkles, Send, ShieldAlert, BadgeCheck, MessageSquare } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { Link, useNavigate } from 'react-router-dom';
import { DicaDoDia } from '../components/ui/DicaDoDia';

export function DashboardView() {
  const { user } = useAppStore();
  const navigate = useNavigate();
  const [chatInput, setChatInput] = useState('');
  
  const latestAchievement = user.achievements[user.achievements.length - 1];

  const handleAskChico = () => {
    if (chatInput.trim()) {
      navigate('/ia-educativa', { state: { initialMessage: chatInput } });
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      {/* Topbar Dynamic */}
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 shrink-0 gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-2 font-display">Olá, <span className="text-transparent bg-clip-text bg-gradient-chico drop-shadow-[0_0_15px_rgba(212,163,115,0.4)]">{user.name.split(' ')[0]}!</span></h1>
          <p className="text-slate-400 text-lg font-medium">Pronto para continuar sua jornada de cidadania digital?</p>
        </div>
        <div className="flex gap-4">
          <div className="px-5 py-2.5 bg-black/40 border border-white/10 rounded-full flex items-center gap-3 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="relative flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] z-10"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full absolute animate-ping opacity-50"></div>
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-widest">Apoio Ativo</span>
          </div>
        </div>
      </header>

      {/* Hero Dashboard Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 relative">
        {/* Segurança Digital Hero Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 bg-gradient-to-br from-chico-escuro to-chico-preto border border-chico-dourado/20 rounded-[40px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] group"
        >
          {/* Ambient Glow & Textures */}
          <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-chico-dourado opacity-10 blur-[100px] rounded-full mix-blend-screen transition-opacity duration-700 group-hover:opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-chico-roxo opacity-10 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          
          <div className="relative z-10 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-chico-dourado/20 text-chico-dourado text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-chico-dourado/30 backdrop-blur-sm shadow-[0_0_10px_rgba(212,163,115,0.2)]">
                Em Destaque
              </span>
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Educação e Proteção</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal max-w-xl leading-[1.1] mb-5 text-white font-display tracking-tight">Segurança Digital Básica</h2>
            <p className="text-slate-300 text-lg max-w-md leading-relaxed font-medium">Aprenda a criar senhas fortes, ativar autenticação em duas etapas e proteger seus dados na internet.</p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mt-auto">
            <div className="space-y-6 w-full max-w-md">
              <Link to="/seguranca-digital" className="px-8 py-4 bg-gradient-chico text-chico-preto font-bold rounded-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-[0_10px_30px_rgba(212,163,115,0.3)] hover:shadow-[0_15px_40px_rgba(212,163,115,0.5)] uppercase tracking-wide">
                Acessar Cartilha <ArrowRight size={20} />
              </Link>
            </div>
            
            {/* Stylized Mascot Integration */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="w-48 h-48 relative hidden md:block shrink-0 -mb-6 -mr-4"
            >
              <div className="absolute inset-0 bg-chico-dourado blur-3xl opacity-20 Mix-blend-screen mix-blend-screen rounded-full animate-pulse"></div>
              <img src="/chico01.png" alt="Chico" className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Stats Column */}
        <div className="lg:col-span-4 space-y-6 flex flex-col">
          {/* IA Chico Card */}
          <GlassCard delay={0.2} className="p-8 rounded-[40px] flex-1 bg-gradient-to-br from-chico-escuro/60 to-black/60 border-white/10 group shadow-[0_10px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-chico-azul opacity-10 blur-[50px] rounded-full pointer-events-none transition-all duration-700 group-hover:opacity-30 group-hover:bg-chico-roxo"></div>
            
            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="w-12 h-12 bg-chico-dourado/10 border border-chico-dourado/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Sparkles size={24} className="text-chico-dourado flex-shrink-0" />
              </div>
              <h3 className="font-normal text-white text-xl font-display">Pergunte ao Chico</h3>
            </div>
            <p className="text-sm text-slate-300 mb-6 font-medium leading-relaxed relative z-10">Dúvidas sobre seus direitos ou segurança na web? Nossa IA está pronta para acolher você.</p>
            <div className="relative mt-auto z-10">
              <input 
                type="text" 
                value={chatInput} 
                onChange={e => setChatInput(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && handleAskChico()} 
                placeholder="Ex: O que é phishing?" 
                className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-chico-dourado/50 placeholder:text-slate-500 text-white shadow-inner transition-colors" 
              />
              <button onClick={handleAskChico} className="absolute right-2.5 top-2.5 p-2 bg-chico-dourado text-chico-preto rounded-xl hover:scale-110 transition-transform disabled:opacity-50">
                <Send size={18} />
              </button>
            </div>
          </GlassCard>

          {/* Quick Portal Support */}
          <GlassCard delay={0.3} className="p-8 rounded-[40px] bg-gradient-to-br from-chico-marrom/20 to-black/40 border-chico-marrom/30 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
            <h3 className="text-chico-dourado font-normal text-[10px] uppercase tracking-[0.2em] mb-5 font-display flex items-center gap-2">
               <span className="w-2 h-2 bg-chico-dourado rounded-full animate-pulse"></span> Portal de Apoio
            </h3>
            <div className="space-y-4">
              <Link to="/apoio" className="flex items-center justify-between p-4 bg-black/50 rounded-2xl border border-white/5 hover:border-chico-marrom/50 cursor-pointer transition-all duration-300 group hover:shadow-[0_0_20px_rgba(139,94,52,0.2)]">
                <div className="flex items-center gap-3 text-white">
                  <ShieldAlert size={20} className="text-chico-marrom group-hover:text-chico-dourado transition-colors" />
                  <span className="text-sm font-bold font-sans tracking-wide">Denúncia Segura</span>
                </div>
                <ArrowRight size={18} className="text-slate-500 group-hover:text-chico-dourado group-hover:translate-x-1 transition-all" />
              </Link>
              <Link to="/apoio" className="flex items-center justify-between p-4 bg-black/50 rounded-2xl border border-white/5 hover:border-chico-marrom/50 cursor-pointer transition-all duration-300 group hover:shadow-[0_0_20px_rgba(139,94,52,0.2)]">
                <div className="flex items-center gap-3 text-white">
                  <MessageSquare size={20} className="text-chico-marrom group-hover:text-chico-dourado transition-colors" />
                  <span className="text-sm font-bold font-sans tracking-wide">Falar com Monitor</span>
                </div>
                <ArrowRight size={18} className="text-slate-500 group-hover:text-chico-dourado group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </GlassCard>

          {/* Recent Achievement */}
          {latestAchievement && (
            <Link to="/perfil" className="block relative group">
              <div className="absolute inset-0 bg-chico-dourado/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-5 px-4 py-2 relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                <div className="w-14 h-14 bg-gradient-chico rounded-2xl flex items-center justify-center border border-white/20 shrink-0 shadow-[0_0_20px_rgba(212,163,115,0.4)] group-hover:scale-110 transition-transform duration-500">
                  <Trophy size={24} className="text-chico-preto fill-chico-preto" />
                </div>
                <div>
                  <div className="text-xs font-normal text-white font-display tracking-wide uppercase mb-1">Última Conquista!</div>
                  <div className="text-sm text-chico-dourado font-medium line-clamp-1">{latestAchievement.title}</div>
                </div>
              </motion.div>
            </Link>
          )}
        </div>
      </div>

      {/* Bottom Mini-Cards (Feed Inteligente) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <GlassCard delay={0.4} className="p-6 rounded-3xl flex flex-col gap-3 group hover:border-chico-azul/40 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-chico-azul/10 border border-chico-azul/20 flex items-center justify-center text-chico-azul text-lg font-black italic group-hover:scale-110 transition-transform">i</div>
          <div className="text-sm font-normal text-white font-display">Sabia que?</div>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">Seus dados são um tesouro. Não compartilhe senhas com estranhos.</p>
        </GlassCard>
        
        <GlassCard delay={0.5} className="p-6 rounded-3xl flex flex-col gap-3 group hover:border-chico-dourado/40 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-chico-dourado/10 border border-chico-dourado/20 flex items-center justify-center text-chico-dourado text-lg font-black group-hover:scale-110 transition-transform">!</div>
          <div className="text-sm font-normal text-white font-display">Alerta</div>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">Novo golpe de phishing detectado em redes sociais. Fique atento.</p>
        </GlassCard>

        <GlassCard delay={0.6} className="p-6 rounded-3xl flex flex-col gap-3 group hover:border-green-500/40 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-lg font-black group-hover:scale-110 transition-transform">✓</div>
          <div className="text-sm font-normal text-white font-display">Cidadania</div>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">Como denunciar perfis fakes de forma anônima e 100% segura.</p>
        </GlassCard>

        <GlassCard delay={0.7} className="p-6 rounded-3xl flex flex-col gap-3 group hover:border-chico-roxo/40 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-chico-roxo/10 border border-chico-roxo/20 flex items-center justify-center text-chico-roxo text-lg font-black group-hover:scale-110 transition-transform"><BookOpen size={20} /></div>
          <div className="text-sm font-normal text-white font-display">Seus Direitos</div>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">Conheça os principais direitos e deveres do cidadão conectado.</p>
        </GlassCard>
      </div>

      <DicaDoDia />
    </div>
  );
}
