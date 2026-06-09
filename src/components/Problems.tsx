import { motion } from "motion/react";
import {
  AlertCircle,
  HelpCircle,
  ShieldAlert,
  BookOpen,
  MessageSquareX,
} from "lucide-react";
import { cn } from "@/lib/utils";
import chicoImg2 from "@/chico-imagens/chico2.jpeg";
import chicoImg4 from "@/chico-imagens/chico04.jpeg";

const problems = [
  {
    icon: <AlertCircle className="w-6 h-6 text-[#FF4444]" />,
    title: "Falta de informação",
    desc: "Desconhecimento sobre onde e como buscar direitos básicos.",
    color: "from-[#FF4444]/20 to-transparent",
    border: "group-hover:border-[#FF4444]/50",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-brand-gold" />,
    title: "Medo de perguntar",
    desc: "Ambientes educacionais que não encorajam dúvidas reais.",
    color: "from-brand-gold/20 to-transparent",
    border: "group-hover:border-brand-gold/50",
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-brand-purple" />,
    title: "Desconhecimento dos direitos",
    desc: "Não saber reivindicar o que é garantido por lei.",
    color: "from-brand-purple/20 to-transparent",
    border: "group-hover:border-brand-purple/50",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-brand-blue" />,
    title: "Linguagem complicada",
    desc: "Direito falado em 'juridiquês' afasta o jovem.",
    color: "from-brand-blue/20 to-transparent",
    border: "group-hover:border-brand-blue/50",
  },
  {
    icon: <MessageSquareX className="w-6 h-6 text-[#00FF00]" />,
    title: "Dificuldade de acesso",
    desc: "Plataformas não otimizadas para a realidade do estudante.",
    color: "from-[#00FF00]/20 to-transparent",
    border: "group-hover:border-[#00FF00]/50",
  },
];

export function Problems() {
  return (
    <section
      id="problema"
      className="relative py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111115] via-[#050506] to-black overflow-hidden flex flex-col items-center perspective-[1000px]"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 xl:grid-cols-12 gap-8 px-6 lg:px-12 relative z-10 items-center">
        {/* Left Chico Space */}
        <div className="hidden xl:flex xl:col-span-3 relative z-0 h-full flex-col justify-end pb-32">
          <motion.img
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            src={chicoImg2}
            alt="Chico"
            className="w-full max-w-[700px] object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] opacity-60 ml-auto"
          />
        </div>

        {/* Content Space */}
        <div className="col-span-1 xl:col-span-6">
          <div className="max-w-5xl mx-auto w-full z-10">
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-[64px] md:text-[84px] lg:text-[110px] font-heading font-medium mb-6 tracking-[-0.01em] text-white uppercase leading-[1.0]"
              >
                A barreira entre <br className="hidden md:block" />o{" "}
                <span className="text-brand-brown/80 font-serif lowercase italic tracking-tight">
                  jovem
                </span>{" "}
                e a <span className="text-brand-gold">cidadania</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="text-brand-cream/60 max-w-2xl mx-auto text-lg"
              >
                Entendemos as dores que impedem o adolescente de exercer seu
                papel na sociedade de forma plena.
              </motion.p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              {problems.map((prob, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] [perspective:1000px]"
                >
                  {/* Card Container with subtle gradient border */}
                  <div
                    className={cn(
                      "h-full p-[1px] rounded-[24px] overflow-hidden transition-all duration-700 ease-out transform-gpu group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] group-hover:-translate-y-4 shadow-xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]",
                      "bg-gradient-to-b from-white/10 to-white/5",
                      prob.border,
                    )}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none z-0"
                      style={{ backgroundImage: `var(--tw-gradient-stops)` }}
                    />
                    {/* Inner Glass Card */}
                    <div className="relative h-full bg-brand-black/90 backdrop-blur-2xl rounded-[23px] p-8 flex flex-col items-start border border-white/5 z-10 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[23px]" />
                      <div
                        className={cn(
                          "inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8 bg-gradient-to-br border border-white/10 shadow-lg relative z-20 group-hover:scale-110 transition-transform duration-500",
                          prob.color,
                        )}
                      >
                        {prob.icon}
                      </div>
                      <h5 className="text-[32px] font-alt font-bold text-white mb-2 tracking-tighter uppercase drop-shadow-md leading-[1.1] relative z-20">
                        {prob.title}
                      </h5>
                      <p className="text-brand-cream/60 leading-relaxed font-light relative z-20 mt-1">
                        {prob.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Chico Space */}
        <div className="hidden xl:flex xl:col-span-3 relative z-0 h-full flex-col justify-start pt-32">
          <motion.img
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            src={chicoImg4}
            alt="Chico Observando"
            className="w-full max-w-[700px] object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] opacity-50 mix-blend-lighten mr-auto"
          />
        </div>
      </div>
    </section>
  );
}
