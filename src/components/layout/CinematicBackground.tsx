import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

export function CinematicBackground() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; s: number; a: number }[]>([]);

  useEffect(() => {
    // Generate stars/particles only on client side after mount
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2 + 1,
      a: Math.random() * 0.4 + 0.1,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-chico-preto pointer-events-none">
      
      {/* Texture Overlay (Noise/Leather/Sand) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 mix-blend-overlay z-[1]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-10 mix-blend-overlay z-[1]" />

      {/* Volumetric Nebulae / Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-chico-dourado rounded-full blur-[140px] opacity-10 mix-blend-screen" 
      />
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.15, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-chico-escuro rounded-full blur-[150px] opacity-20 mix-blend-screen" 
      />
      
      {/* Tech Blue Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.05, 1] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-chico-azul rounded-full blur-[160px] opacity-[0.05] mix-blend-screen" 
      />

      {/* Futuristic Cinematic Premium Dunes */}
      <div className="absolute bottom-[-5%] left-0 right-0 h-[40vh] bg-gradient-to-t from-chico-preto to-transparent z-[2]">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-[200vw] text-chico-escuro opacity-40 translate-x-[-20%] translate-y-[20%] blur-3xl">
          <path fill="currentColor" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,144C384,139,480,181,576,197.3C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-[200vw] text-chico-dourado opacity-10 translate-x-[10%] translate-y-[10%] blur-2xl">
          <path fill="currentColor" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,128C640,117,800,75,960,74.7C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      {/* Floating Particles / Stars / Golden Dust */}
      <div className="absolute inset-0 z-[3]">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-chico-dourado shadow-[0_0_10px_rgba(212,163,115,0.8)]"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.s}px`,
              height: `${star.s}px`,
              opacity: star.a,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [star.a, star.a * 2.5, star.a],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Cinematic Deep Shadow Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(28,28,30,1)] z-[4] pointer-events-none" />
    </div>
  );
}
