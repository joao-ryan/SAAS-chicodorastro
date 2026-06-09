import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Heart, Users2, Globe2 } from "lucide-react";
import chicoImg5 from "@/chico-imagens/chico05.jpeg";
import chicoImg6 from "@/chico-imagens/chico06.jpeg";

export function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section
      ref={ref}
      id="impacto"
      className="relative py-32 bg-brand-bg overflow-hidden flex flex-col items-center perspective-[1500px]"
    >
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
        {/* Secondary Chico Front Left Space */}
        <div className="hidden xl:flex xl:col-span-3 relative z-0 h-full flex-col justify-end pb-32">
          <motion.img
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 0.8, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            src={chicoImg6}
            alt="Chico Impacto Frontal"
            className="w-full max-w-[850px] object-contain filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] ml-auto"
          />
        </div>

        {/* Card space */}
        <div className="col-span-1 xl:col-span-3 relative group w-full max-w-xl mx-auto xl:mx-0">
          <motion.div
            style={{ scale }}
            className="absolute inset-0 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, rotateY: 15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] sm:aspect-square border border-white/10 rounded-[40px] bg-brand-black/80 backdrop-blur-3xl p-8 flex flex-col justify-center gap-8 overflow-hidden transform-gpu hover:rotate-y-[5deg] hover:rotate-x-[5deg] transition-transform duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-10"
          >
            {/* Abstract Data Visualization */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,163,115,0.1)_0%,transparent_70%)] opacity-50" />

            <div className="flex items-center gap-6 z-10 transform transition-transform hover:translate-x-4 duration-500 hover:bg-white/5 p-4 rounded-3xl group/card cursor-pointer">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#FF4444]/20 to-[#FF4444]/5 flex items-center justify-center border border-[#FF4444]/20 shadow-[0_0_20px_rgba(255,68,68,0.2)] group-hover/card:shadow-[0_0_30px_rgba(255,68,68,0.4)] transition-shadow">
                <Heart className="w-8 h-8 text-[#FF4444]" />
              </div>
              <div className="min-w-0">
                <h5 className="text-[28px] sm:text-[32px] font-alt font-bold text-white mb-1 tracking-tighter uppercase drop-shadow-md truncate">
                  Acolhimento
                </h5>
                <p className="text-brand-cream/60 font-light tracking-wide truncate">
                  Educação com empatia
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 z-10 transform transition-transform hover:translate-x-4 duration-500 hover:bg-white/5 p-4 rounded-3xl group/card cursor-pointer">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 flex items-center justify-center border border-brand-blue/20 shadow-[0_0_20px_rgba(45,108,223,0.2)] group-hover/card:shadow-[0_0_30px_rgba(45,108,223,0.4)] transition-shadow">
                <Users2 className="w-8 h-8 text-brand-blue" />
              </div>
              <div className="min-w-0">
                <h5 className="text-[28px] sm:text-[32px] font-alt font-bold text-white mb-1 tracking-tighter uppercase drop-shadow-md truncate">
                  Inclusão
                </h5>
                <p className="text-brand-cream/60 font-light tracking-wide truncate">
                  Todos os perfis
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 z-10 transform transition-transform hover:translate-x-4 duration-500 hover:bg-white/5 p-4 rounded-3xl group/card cursor-pointer">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 flex items-center justify-center border border-brand-gold/20 shadow-[0_0_20px_rgba(212,163,115,0.2)] group-hover/card:shadow-[0_0_30px_rgba(212,163,115,0.4)] transition-shadow">
                <Globe2 className="w-8 h-8 text-brand-gold" />
              </div>
              <div className="min-w-0">
                <h5 className="text-[28px] sm:text-[32px] font-alt font-bold text-white mb-1 tracking-tighter uppercase drop-shadow-md truncate">
                  Cidadania
                </h5>
                <p className="text-brand-cream/60 font-light tracking-wide truncate">
                  Ação no mundo real
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Text Content Space */}
        <div className="col-span-1 xl:col-span-3 flex flex-col items-start xl:px-4 relative z-20 w-full max-w-xl mx-auto xl:mx-0">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[52px] md:text-[64px] lg:text-[76px] font-heading font-medium mb-6 text-white leading-[1.0] tracking-[-0.01em] uppercase relative"
          >
            Da conscientização <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-brown">
              para a transformação.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-cream/70 leading-relaxed mb-8 font-light"
          >
            Acreditamos que todo jovem do Nordeste - e do Brasil - tem o
            potencial de ser um agente de mudança. O impacto do Chico do Rastro
            não fica apenas na tela; ele se traduz em jovens que conhecem seus
            direitos, debatem ideias e constroem um futuro mais justo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-brand-black/60 backdrop-blur-xl border border-brand-gold/20 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-gold/50 transition-colors shadow-2xl w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 via-brand-purple/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            <p className="font-serif italic text-xl md:text-2xl text-white font-medium leading-relaxed">
              "O sertão vai virar mar, e a educação é o vento que empurra o
              barco."
            </p>
            <div className="mt-6 inline-flex items-center gap-2">
              <div className="w-6 h-px bg-brand-gold" />
              <span className="text-xs font-bold text-brand-gold tracking-[0.3em] uppercase">
                Nosso Manifesto
              </span>
            </div>
          </motion.div>
        </div>

        {/* Abstract Floating Chico Right Space */}
        <div className="hidden xl:flex xl:col-span-3 relative z-0 h-full flex-col justify-start pt-32">
          <motion.img
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 0.6, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            src={chicoImg5}
            alt="Chico Impacto"
            className="w-full max-w-[850px] object-contain mix-blend-screen filter drop-shadow-[0_0_50px_rgba(212,163,115,0.6)] mr-auto"
          />
        </div>
      </div>
    </section>
  );
}
