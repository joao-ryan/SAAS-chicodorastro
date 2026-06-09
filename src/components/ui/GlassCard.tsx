import { motion } from 'motion/react';
import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  interactive?: boolean;
  onClick?: () => void;
  glowColor?: 'gold' | 'marrom' | 'azul' | 'roxo' | 'white' | 'none';
}

export function GlassCard({ children, className = '', delay = 0, interactive = false, onClick, glowColor = 'none' }: GlassCardProps) {
  const glowClasses = {
    gold: 'hover:shadow-[0_0_30px_rgba(212,163,115,0.2)] hover:border-chico-dourado/50',
    marrom: 'hover:shadow-[0_0_30px_rgba(139,94,52,0.2)] hover:border-chico-marrom/50',
    azul: 'hover:shadow-[0_0_30px_rgba(45,108,223,0.3)] hover:border-chico-azul/50',
    roxo: 'hover:shadow-[0_0_30px_rgba(130,87,229,0.3)] hover:border-chico-roxo/50',
    white: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/20',
    none: ''
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={interactive ? { y: -4, scale: 1.01 } : {}}
      onClick={onClick}
      className={`
        bg-glass-base backdrop-blur-2xl border border-glass-border rounded-2xl p-6 relative overflow-hidden
        shadow-[shadow-glass-shadow]
        ${interactive ? 'cursor-pointer transition-all duration-300' : ''}
        ${glowClasses[glowColor]}
        ${className}
      `}
    >
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      {/* Ambient noise overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
