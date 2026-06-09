import { motion } from "motion/react";
import { LogIn, FileText, Map, Sparkles, Trophy } from "lucide-react";
import chicoImg3 from "@/chico-imagens/chico03.jpeg";
import chicoImg1 from "@/chico-imagens/chico01.jpeg";
import chicoImg2 from "@/chico-imagens/chico2.jpeg";
import chicoImg4 from "@/chico-imagens/chico04.jpeg";
import chicoImg5 from "@/chico-imagens/chico05.jpeg";

const steps = [
  {
    id: 1,
    title: "Entrar na plataforma",
    desc: "Acesso seguro e acolhedor para o jovem.",
    icon: <LogIn className="w-5 h-5 text-brand-gold" />,
  },
  {
    id: 2,
    title: "Responder questionário",
    desc: "Coleta inteligente de interesses e perfil.",
    icon: <FileText className="w-5 h-5 text-brand-blue" />,
  },
  {
    id: 3,
    title: "Receber trilha",
    desc: "Uma jornada de cidadania personalizada.",
    icon: <Map className="w-5 h-5 text-brand-purple" />,
  },
  {
    id: 4,
    title: "Aprender interativamente",
    desc: "Experiências práticas e gamificadas.",
    icon: <Sparkles className="w-5 h-5 text-[#00FF00]" />,
  },
  {
    id: 5,
    title: "Ganhar conquistas",
    desc: "Evolução visível e reconhecimento.",
    icon: <Trophy className="w-5 h-5 text-[#FFD700]" />,
  },
];

export function Timeline() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand-purple/20 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[64px] md:text-[84px] lg:text-[110px] font-heading font-medium text-white tracking-[-0.01em] uppercase leading-[1.0]"
          >
            Como o Chico ajuda?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-center">
          {/* Left Chico Space */}
          <div className="hidden lg:flex lg:col-span-3 h-full flex-col items-center justify-between py-10 relative z-0 gap-20">
            <motion.img
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              src={chicoImg1}
              alt="Chico acompanhando"
              className="w-full max-w-[950px] object-contain filter drop-shadow-[0_30px_60px_rgba(130,87,229,0.3)] opacity-80 mix-blend-lighten"
            />
            <motion.img
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.1 }}
              src={chicoImg4}
              alt="Chico"
              className="w-full max-w-[950px] object-contain filter drop-shadow-[0_30px_60px_rgba(45,108,223,0.3)] opacity-80 mix-blend-lighten"
            />
          </div>

          {/* Timeline Center Space */}
          <div className="lg:col-span-6 relative z-10 w-full max-w-2xl mx-auto">
            {/* Center Line connected */}
            <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5" />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-10%" }}
              className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-brand-gold via-brand-purple to-brand-blue shadow-[0_0_15px_rgba(45,108,223,0.8)]"
            />

            <div className="flex flex-col gap-12 sm:gap-20 relative z-10 py-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className={`relative flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-brand-black border border-white/20 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.8)] cursor-pointer group hover:border-brand-gold transition-colors duration-300">
                    <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {step.icon}

                    {/* Glow on active line pass */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ delay: idx * 0.2 + 0.5 }}
                      className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(212,163,115,0.7)] pointer-events-none mix-blend-screen"
                    />
                  </div>

                  {/* Content Mobile padding to push it right of center line */}
                  <div className="w-full md:w-1/2 pl-24 md:pl-0 flex flex-col justify-center">
                    <div
                      className={`flex flex-col ${idx % 2 === 0 ? "md:items-end md:pr-16 md:text-right" : "md:items-start md:pl-16 md:text-left"} transform transition-transform duration-500 hover:scale-105`}
                    >
                      <span className="text-[10px] font-bold text-brand-gold bg-brand-gold/10 px-2 py-1 rounded inline-block mb-3 border border-brand-gold/20 backdrop-blur-sm opacity-80 uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(212,163,115,0.2)]">
                        Passo 0{step.id}
                      </span>
                      <h5 className="text-[32px] font-alt font-bold text-white mb-2 tracking-tighter uppercase drop-shadow-md leading-[1.1]">
                        {step.title}
                      </h5>
                      <p className="text-brand-cream/60 leading-relaxed max-w-sm font-light mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Chico Space */}
          <div className="hidden lg:flex lg:col-span-3 h-full flex-col items-center justify-around py-20 relative z-0 gap-20">
            <motion.img
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              src={chicoImg3}
              alt="Chico guiando"
              className="w-full max-w-[950px] object-contain filter drop-shadow-[0_30px_60px_rgba(212,163,115,0.4)] opacity-90 mix-blend-lighten"
            />
            <motion.img
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              src={chicoImg5}
              alt="Chico recebendo trilha"
              className="w-full max-w-[950px] object-contain filter drop-shadow-[0_30px_60px_rgba(130,87,229,0.4)] opacity-90 mix-blend-lighten"
            />
            <motion.img
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.1 }}
              src={chicoImg2}
              alt="Chico guiando"
              className="w-full max-w-[950px] object-contain filter drop-shadow-[0_30px_60px_rgba(0,255,0,0.3)] opacity-80 mix-blend-lighten"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
