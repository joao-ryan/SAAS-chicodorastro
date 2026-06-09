import { motion } from "motion/react";
import chicoImg6 from "@/chico-imagens/chico06.jpeg";
import chicoImg2 from "@/chico-imagens/chico2.jpeg";
import chicoImg4 from "@/chico-imagens/chico04.jpeg";

export function Footer() {
  return (
    <footer id="footer" className="relative pt-40 pb-16 bg-[#050505] overflow-hidden flex flex-col items-center border-t border-brand-gold/10">
       
       {/* Deep starry background layer */}
       <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(212,163,115,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
       <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-[#0a0a0b]/80 to-transparent pointer-events-none" />

       {/* Floating Horizon Glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-brand-gold/10 blur-[100px] pointer-events-none rounded-t-[100%]" />

       <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
          <div className="flex flex-col items-center text-center mb-32 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none" />
             
             <motion.div
               initial={{ opacity: 0, y: 100, scale: 0.5 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               viewport={{ once: false, margin: "-100px" }}
               className="relative mb-10 w-full max-w-[450px] z-10"
             >
                <motion.img 
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  src={chicoImg6} 
                  alt="Chico observando o horizonte" 
                  className="w-full h-auto object-contain filter drop-shadow-[0_0_60px_rgba(212,163,115,0.6)]" 
                />
             </motion.div>

             {/* Left side peeking chico */}
             <motion.div
                 initial={{ opacity: 0, x: -150, rotate: -20, scale: 0.8 }}
                 whileInView={{ opacity: 0.4, x: -20, rotate: 0, scale: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 viewport={{ once: false, amount: 0.1 }}
                 className="absolute bottom-0 left-[-10%] w-[500px] h-auto pointer-events-none z-0 hidden lg:block blur-[4px]"
             >
                <img src={chicoImg2} alt="Chico" className="w-full h-full object-contain opacity-50" />
             </motion.div>

             {/* Right side peeking chico */}
             <motion.div
                 initial={{ opacity: 0, x: 150, rotate: 20, scale: 0.8 }}
                 whileInView={{ opacity: 0.3, x: 20, rotate: 0, scale: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                 viewport={{ once: false, amount: 0.1 }}
                 className="absolute bottom-20 right-[-10%] w-[450px] h-auto pointer-events-none z-0 hidden lg:block blur-[6px]"
             >
                <img src={chicoImg4} alt="Chico" className="w-full h-full object-contain opacity-40" />
             </motion.div>
             
             <h2 className="text-[72px] md:text-[120px] font-heading font-bold text-white tracking-tighter uppercase leading-[0.8] mb-12 drop-shadow-2xl">
                Deixe seu <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-cream to-brand-brown">rastro.</span>
             </h2>

             <button className="group relative px-12 py-6 bg-gradient-to-r from-brand-gold to-brand-brown text-brand-black rounded-full font-bold uppercase tracking-widest overflow-hidden hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(212,163,115,0.3)] hover:shadow-[0_0_50px_rgba(212,163,115,0.6)]">
               <span className="relative z-10 drop-shadow-sm text-sm">Faça parte da revolução</span>
               <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 px-4 relative z-20">
             <div className="flex flex-col gap-5">
                <h6 className="font-alt font-bold text-white uppercase tracking-widest text-xs mb-2">Plataforma</h6>
                <a href="#" className="text-sm font-light text-brand-cream/50 hover:text-brand-gold transition-colors">Como funciona</a>
                <a href="#" className="text-sm font-light text-brand-cream/50 hover:text-brand-gold transition-colors">Para escolas</a>
                <a href="#" className="text-sm font-light text-brand-cream/50 hover:text-brand-gold transition-colors">Metodologia</a>
             </div>
             <div className="flex flex-col gap-5">
                <h6 className="font-alt font-bold text-white uppercase tracking-widest text-xs mb-2">Sobre</h6>
                <a href="#" className="text-sm font-light text-brand-cream/50 hover:text-brand-gold transition-colors">Nossa história</a>
                <a href="#" className="text-sm font-light text-brand-cream/50 hover:text-brand-gold transition-colors">O Mascote</a>
                <a href="#" className="text-sm font-light text-brand-cream/50 hover:text-brand-gold transition-colors">Impacto</a>
             </div>
             <div className="flex flex-col gap-5">
                <h6 className="font-alt font-bold text-white uppercase tracking-widest text-xs mb-2">Legal</h6>
                <a href="#" className="text-sm font-light text-brand-cream/50 hover:text-brand-gold transition-colors">Termos de Uso</a>
                <a href="#" className="text-sm font-light text-brand-cream/50 hover:text-brand-gold transition-colors">Privacidade</a>
             </div>
             <div className="flex flex-col gap-5">
                <h6 className="font-alt font-bold text-white uppercase tracking-widest text-xs mb-2">Social</h6>
                <a href="#" className="text-sm font-light text-brand-cream/50 hover:text-brand-gold transition-colors">Instagram</a>
                <a href="#" className="text-sm font-light text-brand-cream/50 hover:text-brand-gold transition-colors">LinkedIn</a>
                <a href="#" className="text-sm font-light text-brand-cream/50 hover:text-brand-gold transition-colors">X / Twitter</a>
             </div>
          </div>

          <div className="pt-10 border-t border-brand-gold/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-20">
             <div className="flex items-center gap-3 group cursor-pointer">
               <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5 group-hover:bg-brand-gold/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
               </div>
               <span className="text-sm font-sans font-bold text-brand-cream/60 group-hover:text-brand-gold transition-colors">Chico do Rastro &copy; {new Date().getFullYear()}</span>
             </div>
             <p className="text-sm text-brand-cream/40 font-mono tracking-widest uppercase">Feito com <span className="text-brand-brown">propósito</span> no Sertão.</p>
          </div>
       </div>
    </footer>
  );
}
