import React, { useState } from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { useAppStore } from '../store/useAppStore';
import { Trophy, Star, Shield, Medal, Target, Edit3, Settings, Calendar, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { EditProfileModal } from '../components/profile/EditProfileModal';

export function PerfilView() {
  const { user, trilhas } = useAppStore();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const progressPercentage = user.nextLevelXp > 0 ? (user.xp / user.nextLevelXp) * 100 : 100;
  
  // Calculate completed modules
  const completedModules = trilhas.reduce((acc, trilha) => {
    return acc + trilha.modules.filter(m => m.completed).length;
  }, 0);

  const totalModules = trilhas.reduce((acc, trilha) => acc + trilha.modules.length, 0);

  return (
    <>
      <div className="space-y-8 w-full max-w-5xl mx-auto pb-12 relative">
        <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-chico-dourado opacity-10 blur-[200px] rounded-full pointer-events-none mix-blend-screen" />
        
        {/* Profile Header Hero */}
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-chico-escuro/90 to-black/90 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] backdrop-blur-3xl group">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-chico-roxo opacity-20 blur-[120px] rounded-full pointer-events-none mix-blend-screen transition-opacity duration-700 group-hover:opacity-30" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-chico-azul opacity-20 blur-[120px] rounded-full pointer-events-none mix-blend-screen transition-opacity duration-700 group-hover:opacity-30" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
          
          <div className="p-8 md:p-14 relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="relative shrink-0">
               <div className="absolute inset-0 bg-chico-dourado rounded-full opacity-10 blur-[40px] transition-all duration-700 group-hover:opacity-30 group-hover:blur-[60px]" />
               <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-chico-dourado/40 p-1.5 relative shadow-[0_0_40px_rgba(212,163,115,0.4)] z-10 transition-transform duration-500 group-hover:scale-105 bg-black/50">
                 <img 
                   src={user.avatarUrl || `https://api.dicebear.com/7.x/notionists/svg?seed=${user.name}&backgroundColor=transparent`} 
                   alt={user.name}
                   className="w-full h-full object-cover rounded-full bg-chico-preto"
                 />
                 <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-chico border border-white/10 text-chico-preto text-xs font-black uppercase tracking-[0.2em] px-5 py-2 rounded-xl whitespace-nowrap shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                   Nível {user.level}
                 </div>
               </div>
            </div>
            
            <div className="flex-1 text-center md:text-left pt-2 md:pt-4 w-full">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-4">
                 <div>
                   <h1 className="text-4xl md:text-6xl font-normal text-white mb-3 tracking-tight font-display drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">{user.name}</h1>
                   <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-base font-medium">
                      <span className="text-slate-400 bg-black/40 px-3 py-1 rounded-lg border border-white/5 shadow-inner">@{user.username || user.name.toLowerCase().replace(/\s/g, '')}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span className="text-chico-dourado flex items-center gap-2 px-3 py-1 bg-chico-dourado/10 rounded-lg border border-chico-dourado/20">
                        <Shield size={16} /> {user.title}
                      </span>
                   </div>
                 </div>
                 <button 
                   onClick={() => setIsEditModalOpen(true)}
                   className="shrink-0 flex items-center gap-2 bg-white/5 hover:bg-chico-dourado/10 border border-white/10 hover:border-chico-dourado/30 text-white hover:text-chico-dourado px-6 py-3 rounded-2xl font-bold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(212,163,115,0.2)] uppercase tracking-widest text-xs"
                 >
                    <Edit3 size={16} />
                    Editar Perfil
                 </button>
              </div>

              {user.bio ? (
                 <p className="text-slate-300 mb-8 max-w-2xl leading-relaxed text-lg font-medium">
                    {user.bio}
                 </p>
              ) : (
                <p className="text-slate-500 mb-8 max-w-2xl leading-relaxed italic border border-dashed border-white/10 p-4 rounded-xl inline-block bg-white/5 cursor-pointer hover:bg-white/10 hover:text-white transition-colors" onClick={() => setIsEditModalOpen(true)}>
                  Adicione uma biografia e deixe seu perfil com a sua cara. Clique em "Editar Perfil".
                </p>
              )}
              
              <div className="max-w-xl w-full mx-auto md:mx-0 bg-black/50 p-5 rounded-[24px] border border-white/10 backdrop-blur-xl shadow-inner group/progress hover:border-chico-dourado/30 transition-colors">
                <div className="flex justify-between text-[10px] text-slate-400 mb-4 font-black uppercase tracking-[0.2em]">
                  <span className="text-chico-dourado group-hover/progress:drop-shadow-[0_0_5px_theme(colors.chico-dourado)] transition-all">XP Total: {user.xp}</span>
                  <span>Faltam {user.nextLevelXp - user.xp} XP para Lvl {user.level + 1}</span>
                </div>
                <div className="h-3 w-full bg-black/60 rounded-full overflow-hidden shadow-inner border border-white/5 p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-chico relative rounded-full shadow-[0_0_15px_rgba(212,163,115,0.6)]" 
                  >
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <GlassCard delay={0.1} className="flex flex-col py-8 px-6 bg-gradient-to-br from-chico-azul/20 to-black/40 border-chico-azul/30 hover:border-chico-azul/60 transition-all hover:shadow-[0_10px_40px_rgba(45,108,223,0.3)] group rounded-3xl">
            <div className="flex items-center gap-5 mb-5 relative">
               <div className="absolute inset-0 bg-chico-azul opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity"></div>
               <div className="w-14 h-14 rounded-2xl bg-chico-azul/20 flex items-center justify-center text-chico-azul relative z-10 border border-chico-azul/30 group-hover:scale-110 transition-transform">
                  <Trophy size={28} />
               </div>
               <div className="relative z-10">
                  <h3 className="text-4xl font-normal font-display text-white">{user.achievements.length}</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">Conquistas</p>
               </div>
            </div>
          </GlassCard>
          
          <GlassCard delay={0.2} className="flex flex-col py-8 px-6 bg-gradient-to-br from-chico-dourado/20 to-black/40 border-chico-dourado/30 hover:border-chico-dourado/60 transition-all hover:shadow-[0_10px_40px_rgba(212,163,115,0.3)] group rounded-3xl">
            <div className="flex items-center gap-5 mb-5 relative">
               <div className="absolute inset-0 bg-chico-dourado opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity"></div>
               <div className="w-14 h-14 rounded-2xl bg-chico-dourado/20 flex items-center justify-center text-chico-dourado relative z-10 border border-chico-dourado/30 group-hover:scale-110 transition-transform">
                  <Medal size={28} />
               </div>
               <div className="relative z-10">
                  <h3 className="text-4xl font-normal font-display text-white">{user.level}</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">Nível de Honra</p>
               </div>
            </div>
          </GlassCard>

          <GlassCard delay={0.3} className="flex flex-col py-8 px-6 bg-gradient-to-br from-chico-roxo/20 to-black/40 border-chico-roxo/30 hover:border-chico-roxo/60 transition-all hover:shadow-[0_10px_40px_rgba(130,87,229,0.3)] group rounded-3xl">
            <div className="flex items-center gap-5 mb-5 relative">
               <div className="absolute inset-0 bg-chico-roxo opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity"></div>
               <div className="w-14 h-14 rounded-2xl bg-chico-roxo/20 flex items-center justify-center text-chico-roxo relative z-10 border border-chico-roxo/30 group-hover:scale-110 transition-transform">
                  <Target size={28} />
               </div>
               <div className="relative z-10">
                  <h3 className="text-4xl font-normal font-display text-white">{completedModules} <span className="text-xl text-slate-500 font-medium">/ {totalModules}</span></h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">Módulos Concluídos</p>
               </div>
            </div>
          </GlassCard>
        </div>

        {/* Achievements Section */}
        <div className="relative z-10 pt-8">
          <div className="flex justify-between items-end mb-8">
             <h2 className="text-3xl font-normal font-display text-white flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-chico-dourado/20 flex items-center justify-center border border-chico-dourado/30">
                  <Star size={20} className="text-chico-dourado" />
               </div>
               Conquistas Épicas
             </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.achievements.map((acc, idx) => (
              <motion.div 
                key={acc.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1), ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden flex flex-col items-center text-center gap-4 bg-black/40 hover:bg-black/60 border border-white/5 hover:border-chico-dourado/30 p-8 rounded-[32px] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-chico-dourado/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-32 h-32 bg-chico-dourado opacity-0 blur-3xl group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
                
                <div className="w-24 h-24 rounded-full bg-gradient-chico flex items-center justify-center shrink-0 border-2 border-white/20 shadow-[0_0_30px_rgba(212,163,115,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,163,115,0.6)] transition-all duration-500 relative z-10">
                   <Trophy size={40} className="text-chico-preto fill-chico-preto drop-shadow-md" />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <h4 className="text-xl font-normal text-white leading-tight mb-2 font-display">{acc.title}</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed mb-5 max-w-[200px]">{acc.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-chico-dourado/10 text-[10px] text-chico-dourado uppercase font-black tracking-widest border border-chico-dourado/20 shadow-inner">
                    <Star size={12} className="fill-chico-dourado" /> Desbloqueado
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Locked Achievement placeholder */}
            <div className="group relative overflow-hidden flex flex-col items-center text-center gap-4 bg-black/20 border border-white/5 p-8 rounded-[32px] grayscale opacity-60 hover:opacity-100 transition-opacity duration-500">
                <div className="w-24 h-24 rounded-full bg-chico-preto flex items-center justify-center shrink-0 border-2 border-white/10 shadow-inner relative z-10">
                   <Shield size={40} className="text-slate-600" />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center w-full">
                  <h4 className="text-xl font-normal text-white leading-tight mb-2 font-display">Guardião Supremo</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed mb-5 max-w-[200px]">Complete todas as trilhas de segurança avançada.</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 text-[10px] text-slate-500 uppercase font-black tracking-widest border border-white/10 shadow-inner w-full justify-center">
                    Bloqueado
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </>
  );
}
