import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1500); // Wait for exit animation
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black overflow-hidden flex-col gap-6"
        >
          {/* Subtle star particles background for preloader */}
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen" 
               style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-brand-gold) 1px, transparent 1px)', backgroundSize: '100px 100px', filter: 'blur(2px)' }} />
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center z-10"
          >
            <div className="text-brand-gold mb-2 h-16 w-16 mb-4 filter drop-shadow-[0_0_15px_rgba(212,163,115,0.4)]">
               {/* Abstract Star Logo */}
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" fillOpacity="0.2"/>
               </svg>
            </div>
            <motion.h1 
              initial={{ filter: "blur(4px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[40px] md:text-[56px] font-heading font-bold text-brand-cream text-center tracking-tighter uppercase leading-[0.9]"
            >
              Chico do <span className="text-brand-gold">Rastro</span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-brand-cream/70 font-sans text-xs font-bold tracking-[0.2em] uppercase mt-4 text-center max-w-xs z-10"
          >
            Todo jovem merece conhecer seu caminho.
          </motion.p>
          
          {/* Subtle loading line */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.8, ease: "circOut" }}
            className="absolute bottom-1/4 w-48 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent origin-center rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
