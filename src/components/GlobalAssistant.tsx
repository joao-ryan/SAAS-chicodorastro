import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function GlobalAssistant() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  // Hidden if we are already in the IA route
  if (location.pathname === '/ia-educativa') {
    return null;
  }

  const handleClick = () => {
    navigate('/ia-educativa');
  };

  return (
    <div className="fixed bottom-6 right-8 z-50 flex items-center gap-4">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="bg-glass-base backdrop-blur-2xl border border-chico-dourado/30 text-white px-5 py-3 rounded-2xl shadow-[0_0_30px_rgba(212,163,115,0.3)] shrink-0"
          >
            <div className="flex flex-col">
              <span className="text-sm font-normal text-chico-dourado font-display">Chico IA</span>
              <span className="text-xs text-slate-300">Precisa de ajuda?</span>
            </div>
            
            {/* Pointer triangle */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-chico-preto border-r border-t border-chico-dourado/30 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-[72px] h-[72px] rounded-full z-50 transition-all"
      >
        {/* Breathing tech glow effect */}
        <div className="absolute inset-0 rounded-full bg-chico-roxo blur-[30px] opacity-40 animate-[pulse_3s_ease-in-out_infinite] group-hover:opacity-70 group-hover:blur-[40px] transition-all duration-700" />
        <div className="absolute inset-0 rounded-full bg-chico-azul blur-[20px] opacity-30 animate-[pulse_4s_ease-in-out_infinite] group-hover:opacity-60 transition-all duration-700" />
        
        {/* Core Button (Avatar wrapper) */}
        <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-tr from-chico-escuro to-chico-preto flex items-center justify-center overflow-hidden border-2 border-chico-dourado/50 shadow-[0_0_40px_rgba(212,163,115,0.4)]">
           <img src="/logonavbaria.png" alt="Chico IA" className="w-full h-full object-cover object-center opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
           
           {/* Glass overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay" />
           {/* Shimmer effect */}
           <div className="absolute inset-0 -translate-x-[150%] animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-30deg]" />
        </div>

        {/* Floating particles (Tech themed) */}
        <div className="absolute -inset-6 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-chico-azul rounded-full animate-ping shadow-[0_0_5px_theme(colors.chico-azul)]" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-4 right-8 w-2 h-2 bg-chico-roxo rounded-full animate-pulse shadow-[0_0_8px_theme(colors.chico-roxo)]" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-8 left-0 w-1.5 h-1.5 bg-chico-dourado rounded-full animate-ping shadow-[0_0_5px_theme(colors.chico-dourado)]" style={{ animationDelay: '1s' }} />
        </div>
      </motion.button>
    </div>
  );
}
