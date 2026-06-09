import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-chico-preto/90 backdrop-blur-3xl">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-chico-dourado opacity-10 blur-[150px] rounded-full pointer-events-none mix-blend-screen animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-chico-azul opacity-[0.15] blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* Animated Mascot / Icon */}
      <div className="relative w-32 h-32 mb-8">
        <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0 border-2 border-dashed border-chico-dourado/30 rounded-full"
        />
        <motion.div 
           animate={{ scale: [0.95, 1.05, 0.95] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="absolute inset-0 bg-gradient-chico rounded-full opacity-20 blur-xl"
        />
        <div className="absolute inset-2 bg-gradient-to-tr from-chico-escuro to-chico-preto rounded-full flex items-center justify-center border-2 border-chico-dourado/50 shadow-[0_0_30px_rgba(212,163,115,0.4)] overflow-hidden z-10 transition-transform">
           <img src="/logonavbaria.png" alt="Loading" className="w-full h-full object-cover object-center opacity-90 animate-pulse" />
        </div>
        
        {/* Floating Sparkles */}
        <div className="absolute -top-4 -right-4 text-chico-dourado animate-ping" style={{ animationDuration: '3s' }}>
           <Sparkles size={20} />
        </div>
        <div className="absolute -bottom-2 -left-4 text-chico-azul animate-ping" style={{ animationDuration: '2s' }}>
           <Sparkles size={16} />
        </div>
      </div>

      {/* Loading Text */}
      <div className="flex flex-col items-center gap-3 relative z-10">
        <h2 className="text-2xl font-normal font-display text-white tracking-widest uppercase flex items-center gap-2">
           Carregando <span className="flex gap-1">
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>.</motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>.</motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>.</motion.span>
           </span>
        </h2>
        <p className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em]">Preparando o Sertão Digital</p>
      </div>

      {/* Progress Bar (Visual Only) */}
      <div className="w-64 h-1.5 bg-black/50 rounded-full mt-10 overflow-hidden border border-white/10 shadow-inner">
         <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full bg-gradient-chico shadow-[0_0_10px_rgba(212,163,115,0.8)]"
         />
      </div>
    </div>
  );
}
