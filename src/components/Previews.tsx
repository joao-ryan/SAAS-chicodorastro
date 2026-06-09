import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  CheckCircle2,
  ChevronRight,
  LayoutTemplate,
  Star,
  ArrowRight,
  ShieldCheck,
  Gamepad2,
} from "lucide-react";
import mascotImg from "@/assets/images/chico_mascot_1779216077361.png";
import chicoImg4 from "@/chico-imagens/chico04.jpeg";
import chicoImg5 from "@/chico-imagens/chico05.jpeg";

export function Previews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="plataforma"
      className="relative py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0a0a0f] via-[#050506] to-black overflow-hidden perspective-[2000px]"
    >
      {/* Background layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-brand-blue/5 to-brand-purple/5 blur-[150px] pointer-events-none rounded-[100%]" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 xl:px-20 relative z-10 flex flex-col gap-32">
        {/* Questionnaire Mockup Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:h-[700px]">
          {/* Chico Space Left */}
          <div className="hidden lg:flex lg:col-span-4 h-full items-center justify-center relative z-0">
            <motion.img
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              whileInView={{ opacity: 0.8, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              src={chicoImg4}
              alt="Chico Questionário"
              className="w-full max-w-[850px] object-contain filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] mr-auto"
            />
          </div>

          <div className="order-2 lg:order-1 lg:col-span-4 w-full relative z-10 flex items-center justify-center">
            <div className="relative group w-full max-w-[450px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold to-brand-brown rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative rounded-3xl bg-[#1C1C1E] border border-white/10 shadow-2xl overflow-hidden transform-gpu group-hover:rotate-y-[2deg] group-hover:rotate-x-[2deg] transition-transform duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
              >
                {/* Top Bar */}
                <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_5px_#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_5px_#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_5px_#27C93F]" />
                  <div className="mx-auto text-xs text-white/30 font-medium">
                    questionario.chico.app
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col gap-6 relative z-10 bg-gradient-to-b from-transparent to-brand-bg/50">
                  <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                    <img
                      src={mascotImg}
                      className="w-16 h-16 rounded-full object-cover bg-brand-gold/10 p-1 ring-1 ring-brand-gold/50 shadow-[0_0_20px_rgba(212,163,115,0.3)]"
                      alt="Mascote"
                    />
                    <div>
                      <h4 className="text-white font-medium text-lg">
                        Chico pergunta:
                      </h4>
                      <p className="text-brand-cream/70 text-sm mt-1 leading-tight">
                        Qual área você tem mais curiosidade de aprender
                        primeiro?
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {[
                      "Direitos do Consumidor",
                      "Voto e Eleições",
                      "Trabalho Jovem",
                      "Meio Ambiente",
                    ].map((item, i) => (
                      <div
                        key={item}
                        className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between group/item
                                ${i === 1 ? "bg-brand-gold/10 border-brand-gold shadow-[0_0_15px_rgba(212,163,115,0.15)] scale-[1.02]" : "bg-white/5 border-white/10 hover:bg-white/10 hover:scale-[1.02]"}`}
                      >
                        <span
                          className={`font-medium transition-colors ${i === 1 ? "text-brand-gold" : "text-brand-cream group-hover/item:text-white"}`}
                        >
                          {item}
                        </span>
                        {i === 1 && (
                          <CheckCircle2 className="w-5 h-5 text-brand-gold filter drop-shadow-[0_0_5px_rgba(212,163,115,0.8)]" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-1">
                      <div className="w-8 h-2 bg-gradient-to-r from-brand-gold to-brand-brown rounded-full shadow-[0_0_5px_rgba(212,163,115,0.5)]" />
                      <div className="w-8 h-2 bg-gradient-to-r from-brand-gold to-brand-brown rounded-full shadow-[0_0_5px_rgba(212,163,115,0.5)]" />
                      <div className="w-8 h-2 bg-white/10 rounded-full" />
                      <div className="w-8 h-2 bg-white/10 rounded-full" />
                    </div>
                    <button className="flex items-center gap-2 text-brand-black bg-gradient-to-r from-brand-gold to-brand-brown px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_15px_rgba(212,163,115,0.4)]">
                      Próximo{" "}
                      <ChevronRight className="w-4 h-4 text-brand-black" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 lg:col-span-4 flex flex-col gap-6 lg:pl-10 relative z-30"
          >
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/5 backdrop-blur-sm">
              <Star className="w-4 h-4 text-brand-blue" />
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] shadow-sm">
                Inteligência Acolhedora
              </span>
            </div>
            <h3 className="text-[48px] md:text-[56px] lg:text-[72px] font-heading font-medium text-white leading-[1.0] tracking-[-0.01em] uppercase relative">
              Descobrindo seu perfil{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-brown relative">
                único
                <span className="absolute inset-0 bg-blend-color-dodge bg-gradient-to-r from-brand-gold to-brand-brown blur-2xl opacity-40"></span>
              </span>
              .
            </h3>
            <p className="text-lg text-brand-cream/60 leading-relaxed font-light">
              Nossa inteligência entende as dúvidas e o nível de conhecimento do
              jovem em uma conversa gamificada, montando uma jornada exclusiva.
            </p>

            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#00FF00] drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]" />
                <span className="text-brand-cream/80 font-medium">
                  Ambiente seguro, sem respostas erradas.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Gamepad2 className="w-5 h-5 text-brand-purple drop-shadow-[0_0_5px_rgba(130,87,229,0.5)]" />
                <span className="text-brand-cream/80 font-medium">
                  Design de interface pensado para jogos.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Dashboard Mockup Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:h-[700px] mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-6 lg:pr-10 relative z-30"
          >
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-brand-purple/20 bg-brand-purple/10 backdrop-blur-sm">
              <LayoutTemplate className="w-4 h-4 text-brand-purple" />
              <span className="text-[10px] font-bold text-brand-purple uppercase tracking-[0.2em] shadow-sm">
                Dashboard Gamificado
              </span>
            </div>
            <h3 className="text-[48px] md:text-[56px] lg:text-[72px] font-heading font-medium text-white leading-[1.0] tracking-[-0.01em] uppercase relative">
              Evolução visível dia após dia.
              <span className="absolute -inset-10 bg-brand-purple/10 blur-[100px] pointer-events-none -z-10"></span>
            </h3>
            <p className="text-lg text-brand-cream/60 leading-relaxed font-light">
              Cada lição completada libera conquistas, XP e trilhas,
              transformando algo burocrático em um vício educacional construtivo
              e gratificante.
            </p>
            <button className="group mt-6 flex items-center gap-2 text-brand-gold font-bold w-fit hover:text-white transition-colors">
              Ver plataforma completa{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="lg:col-span-4 w-full relative z-10 flex items-center justify-center">
            <div className="relative group w-full max-w-[450px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative rounded-3xl bg-brand-black/95 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden flex transform-gpu group-hover:rotate-y-[-2deg] group-hover:rotate-x-[2deg] transition-transform duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] w-full"
              >
                {/* Sidebar */}
                <div className="hidden sm:flex flex-col bg-white/5 backdrop-blur-md border-r border-white/10 w-20 px-2 flex-shrink-0 items-center py-8 gap-8 z-10 shadow-[5px_0_15px_rgba(0,0,0,0.3)]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-gold to-brand-brown shadow-[0_0_15px_rgba(212,163,115,0.4)]"></div>
                  <div className="flex flex-col gap-6 mt-8">
                    <div className="w-6 h-6 rounded bg-white/30 shadow-[0_0_5px_rgba(255,255,255,0.3)] cursor-pointer hover:bg-brand-gold transition-colors"></div>
                    <div className="w-6 h-6 rounded bg-white/5 cursor-pointer hover:bg-brand-gold transition-colors"></div>
                    <div className="w-6 h-6 rounded bg-white/5 cursor-pointer hover:bg-brand-gold transition-colors"></div>
                  </div>
                </div>

                {/* Main Dash Content */}
                <div className="p-8 w-full relative flex-1 min-w-0 flex flex-col">
                  <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-brand-blue/10 blur-[80px] pointer-events-none" />

                  <div className="flex justify-between items-start flex-col sm:flex-row gap-4 mb-8 relative z-10">
                    <div>
                      <h4 className="text-xl font-alt font-bold text-white mb-1">
                        Olá, Jovem
                      </h4>
                      <p className="text-xs text-brand-cream/60 font-medium whitespace-nowrap">
                        Nível 4 <span className="text-brand-gold mx-1">•</span>{" "}
                        Atento
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-brown drop-shadow-sm">
                        1,450 XP
                      </div>
                      <div className="w-24 h-2 bg-white/10 rounded-full mt-2 overflow-hidden shadow-inner hidden sm:block">
                        <div className="h-full bg-gradient-to-r from-brand-gold to-brand-brown w-[70%] shadow-[0_0_10px_rgba(212,163,115,0.5)]" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                    {/* Modules Mock */}
                    <div className="bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 p-4 rounded-[16px] border border-brand-blue/40 relative overflow-hidden group/card hover:border-brand-blue/60 transition-colors">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/30 blur-2xl rounded-full mix-blend-screen group-hover:bg-brand-blue/40 transition-colors" />
                      <h5 className="text-base font-bold font-alt text-white mb-1 drop-shadow-md">
                        Direitos
                      </h5>
                      <p className="text-[10px] font-medium text-brand-cream/80 mb-4 tracking-wide">
                        MÓDULO 2
                      </p>
                      <div className="w-full h-1 bg-brand-bg rounded-full overflow-hidden">
                        <div className="h-full bg-brand-blue w-1/2 shadow-[0_0_10px_rgba(45,108,223,0.8)] rounded-full" />
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-[16px] border border-white/10 relative overflow-hidden opacity-70 group/card hover:opacity-100 transition-opacity">
                      <h5 className="text-base font-bold font-alt text-white mb-1">
                        Constituição
                      </h5>
                      <p className="text-[10px] text-brand-red font-medium mb-3 italic">
                        Bloqueado
                      </p>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mt-2 group-hover:border-white/40 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Chico Space Right */}
          <div className="hidden lg:flex lg:col-span-4 h-full items-center justify-center relative z-0">
            <motion.img
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 0.8, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              src={chicoImg5}
              alt="Chico Dashboard"
              className="w-full max-w-[850px] object-contain filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
