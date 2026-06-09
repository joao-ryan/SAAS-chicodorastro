import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

import chicoImg from "@/chico-imagens/chico01.jpeg";
import chicoImg3 from "@/chico-imagens/chico03.jpeg";

import { CinematicHeroBackground } from "./CinematicHeroBackground";
import { Link } from "react-router-dom";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const mascotY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const mascotScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-[100svh] w-full flex items-center pt-20 overflow-hidden bg-[#0a0a0b]">
      {/* Background Layers */}
      <CinematicHeroBackground />

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10 pb-20">
        
        {/* Left: Text Content */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="flex flex-col gap-6 items-start z-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">
              Tecnologia com raízes nordestinas
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[80px] sm:text-[110px] lg:text-[144px] font-heading font-medium leading-[1.0] tracking-[-0.01em] uppercase"
          >
            RASTRO DE <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-gold via-brand-cream to-brand-purple">PROPÓSITO.</span>
            <br />
            IMPACTO.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-brand-cream/70 font-sans max-w-2xl leading-relaxed mt-4 font-light"
          >
            Ensino sobre cidadania e consciência social com tecnologia e arte.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto items-center"
          >
            {/* Primary Button */}
            <Link to="/auth" className="relative group px-10 py-5 bg-gradient-to-r from-brand-gold to-brand-brown text-brand-black rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl shadow-brand-gold/20 overflow-hidden hover:scale-105 transition-transform w-full sm:w-auto text-center inline-block">
              <span className="relative z-10">Começar jornada</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>

            {/* Secondary Button */}
             <button className="relative overflow-hidden group px-10 py-5 border border-brand-cream/20 bg-transparent rounded-2xl font-bold text-sm uppercase tracking-widest text-brand-cream transition-all hover:border-brand-cream/50 w-full sm:w-auto">
              <span className="relative z-10 transition-colors group-hover:text-brand-gold">Explorar plataforma</span>
              <div className="absolute inset-0 bg-brand-cream/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Mascot 3D Representation */}
        <motion.div 
           style={{ y: mascotY, scale: mascotScale }}
           className="relative w-full h-[500px] lg:h-[700px] pointer-events-none z-10 flex items-center justify-center lg:justify-end"
        >
          {/* Secondary Chico Parallax */}
          <motion.div
             style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]) }}
             className="absolute bottom-[-20%] left-[-10%] w-[500px] h-auto pointer-events-none z-0 hidden lg:block opacity-30 blur-[3px]"
          >
            <motion.img 
               src={chicoImg3}
               alt="Chico Secundário"
               className="w-full h-auto object-contain"
            />
          </motion.div>


          
          <motion.div
             initial={{ opacity: 0, y: 50, scale: 0.9 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
             viewport={{ once: false, amount: 0.3 }}
             className="relative w-full max-w-[550px] lg:max-w-[750px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-10"
          >
             <motion.img 
               src={chicoImg}
               alt="Mascote Chico do Rastro" 
               className="w-full h-auto object-contain filter drop-shadow-[0_0_30px_rgba(212,163,115,0.15)]"
             />
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-[20%] right-[10%] w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl z-20"
          >
             <span className="text-2xl">✨</span>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[25%] left-[5%] w-20 h-20 rounded-2xl bg-brand-gold/10 backdrop-blur-xl border border-brand-gold/20 flex items-center justify-center shadow-2xl z-20"
          >
             <span className="text-3xl font-heading font-bold text-brand-gold drop-shadow-lg">+XP</span>
          </motion.div>
        </motion.div>
      </div>

       {/* Subtle bottom gradient to blend with next section */}
       <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-brand-bg to-transparent z-20 pointer-events-none" />
    </section>
  );
}
