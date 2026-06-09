import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/ui/GlassCard';
import { ShieldCheck, Lock, EyeOff, MonitorOff, UserX, AlertTriangle, Fingerprint, Database, CheckSquare } from 'lucide-react';

export function SegurancaDigitalView() {
  const topics = [
    { title: 'Senhas Seguras', icon: Lock, desc: 'Evite o nome do seu cachorro. Crie senhas complexas e ative a autenticação em duas etapas (2FA).' },
    { title: 'Privacidade em Redes Sociais', icon: Fingerprint, desc: 'Configure quem pode acessar suas fotos, marcar seu perfil ou mandar DMs. Reduza a exposição excessiva (Over-sharing).' },
    { title: 'Cyberbullying', icon: EyeOff, desc: 'A agressão digital afeta todas as áreas da vida. Denuncie, guarde os prints e bloqueie os responsáveis imediatamente.' },
    { title: 'Golpes Digitais & Phishing', icon: AlertTriangle, desc: 'Desconfie de links prometendo prêmios repentinos ou ameaçando o bloqueio da sua conta. Nunca clique em urgências online.' },
    { title: 'Vazamento de Imagens', icon: MonitorOff, desc: 'Compartilhar mídia íntima de menores é crime severo. Quem envia comete infração. Aja de forma responsável e exclua o que ofende.' },
    { title: 'Engenharia Social', icon: UserX, desc: 'Criminosos fingem ser bancos, suporte técnico e até amigos. Verifique identidades sempre antes de ajudar "financeiramente".' },
  ];

  return (
    <div className="space-y-16 pb-12 w-full max-w-6xl mx-auto relative">
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-chico-azul opacity-[0.08] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[40px] overflow-hidden p-10 md:p-20 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] group bg-gradient-to-br from-chico-escuro/90 to-black/90 backdrop-blur-3xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop')] bg-cover opacity-30 z-0 mix-blend-overlay [mask-image:linear-gradient(to_left,black,transparent)] group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000" />
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-chico-azul opacity-20 blur-[150px] rounded-full z-0 group-hover:opacity-30 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-[0.03] pointer-events-none mix-blend-overlay z-10" />
        
        <div className="relative z-20 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-[14px] bg-chico-azul/20 border border-chico-azul/40 text-chico-azul font-black text-[11px] uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(45,108,223,0.3)] backdrop-blur-md"
          >
            <ShieldCheck size={18} />
            Defesa Digital Ativa
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-[1.1] font-display tracking-tight drop-shadow-md"
          >
            Seu escudo blindado no <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-chico-azul to-chico-creme drop-shadow-lg">mundo digital.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl leading-relaxed"
          >
            A internet é uma via pública planetária. Para que o conhecimento não ceda espaço ao risco, aprenda a blindar sua identidade  com cidadania digital.
          </motion.p>
        </div>
      </motion.div>

      {/* Grid of Topics */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-normal text-white mb-10 flex items-center justify-center lg:justify-start gap-4 font-display tracking-tight">
          <div className="w-12 h-12 rounded-2xl bg-chico-azul/10 flex items-center justify-center border border-chico-azul/20">
            <Database className="text-chico-azul" size={24} /> 
          </div>
          Módulos de Defesa Essenciais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topics.map((topic, idx) => (
            <GlassCard key={idx} delay={0.2 + (idx * 0.1)} className="group flex flex-col h-full bg-gradient-to-br from-black/60 to-black/90 border-white/5 hover:border-chico-azul/40 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(45,108,223,0.15)] p-8 md:p-10 rounded-[32px] overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-chico-azul opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none rounded-full" />
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-chico-azul/10 to-transparent flex items-center justify-center text-chico-azul mb-8 group-hover:scale-110 group-hover:bg-chico-azul group-hover:text-chico-preto group-hover:shadow-[0_0_30px_rgba(45,108,223,0.5)] transition-all duration-500 shrink-0 border border-chico-azul/20 relative z-10">
                <topic.icon size={28} />
              </div>
              <h3 className="text-2xl font-normal text-white mb-4 font-display tracking-tight relative z-10 group-hover:text-chico-azul transition-colors">{topic.title}</h3>
              <p className="text-slate-400 text-base font-medium leading-relaxed flex-1 relative z-10">
                {topic.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassCard className="mt-8 bg-gradient-to-r from-chico-escuro to-black border-chico-dourado/30 p-10 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center gap-10 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-[0.03] pointer-events-none" />
          <div className="absolute left-[-20%] bottom-[-50%] w-[500px] h-[500px] bg-chico-dourado opacity-10 blur-[120px] rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-1000" />
          
          <div className="flex-1 relative z-10">
            <h3 className="text-3xl md:text-4xl font-normal text-white mb-6 font-display tracking-tight flex items-center gap-4 justify-center md:justify-start">
              <span className="text-chico-dourado drop-shadow-[0_0_15px_theme(colors.chico-dourado)]">Prática:</span> O Protocolo BPP
            </h3>
            <p className="text-slate-300 mb-8 max-w-xl text-lg font-medium leading-relaxed">
              Em situações de ataques digitais, assédio ou abusos online, nunca subestime a eficácia das 3 regras fundamentais:
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-chico-dourado/30 hover:bg-chico-dourado/5 transition-all shadow-inner">
                <div className="p-2 bg-chico-dourado/10 rounded-lg shrink-0">
                  <CheckSquare className="text-chico-dourado" size={24} />
                </div>
                <span className="text-slate-200 font-bold text-base">Bloquear o contato agressor imediatamente nas redes.</span>
              </div>
              <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-chico-dourado/30 hover:bg-chico-dourado/5 transition-all shadow-inner">
                <div className="p-2 bg-chico-dourado/10 rounded-lg shrink-0">
                  <CheckSquare className="text-chico-dourado" size={24} />
                </div>
                <span className="text-slate-200 font-bold text-base">Printar e salvar links (Preservação material de Provas).</span>
              </div>
              <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-chico-dourado/30 hover:bg-chico-dourado/5 transition-all shadow-inner">
                <div className="p-2 bg-chico-dourado/10 rounded-lg shrink-0">
                  <CheckSquare className="text-chico-dourado" size={24} />
                </div>
                <span className="text-slate-200 font-bold text-base">Procurar um adulto de confiança e formalizar a denúncia.</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto shrink-0 mt-8 md:mt-0 relative z-10 flex flex-col gap-4 items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-chico-dourado/30 shadow-[0_0_30px_rgba(212,163,115,0.3)] shrink-0 mb-2 md:mb-4 bg-chico-escuro">
               <img src="/chico06.png" alt="Chico Proteção" className="w-full h-full object-cover object-top" />
            </div>
            <button className="w-full md:w-auto px-10 py-5 bg-gradient-chico text-chico-preto font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:shadow-[0_10px_30px_rgba(212,163,115,0.4)] hover:scale-105 transition-all duration-300">
              Acessar Módulo Prático
            </button>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center font-bold">500 XP Disponíveis</p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
