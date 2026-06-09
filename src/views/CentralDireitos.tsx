import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '../components/ui/GlassCard';
import { Scale, BookOpen, HeartPulse, Shield, Home, Wifi, ShieldAlert, BadgeCheck } from 'lucide-react';

export function CentralDireitosView() {
  const [activeTab, setActiveTab] = React.useState<string | null>(null);

  const categories = [
    { 
      id: 'educacao', title: 'Educação', icon: BookOpen, color: 'dourado',
      desc: 'O aprendizado é um direito inalienável. A escola deve ser um espaço de respeito e inclusão.',
      content: ['Direito de estudar e de permanecer na escola.', 'Respeito no ambiente escolar por educadores e alunos.', 'Apoio pedagógico adequado às suas necessidades.', 'Inclusão irrestrita de pessoas com deficiência.', 'Total proibição e combate a qualquer forma de racismo e discriminação.', 'Liberdade de aprendizagem e participação estudantil (grêmios).']
    },
    { 
      id: 'saude', title: 'Saúde Emocional e Física', icon: HeartPulse, color: 'azul',
      desc: 'Sua mente e corpo importam lado a lado. Cuidar de si mesmo é seu direito.',
      content: ['Acesso universal e igualitário ao Sistema Único de Saúde (SUS).', 'Direito ao acompanhamento em saúde mental (apoio psicológico para lidar com ansiedade, depressão e autoestima).', 'Acolhimento humanizado.', 'Importância do diálogo sobre autocuidado e desenvolvimento de inteligência emocional.', 'Preservação da dignidade da pessoa.']
    },
    { 
      id: 'seguranca', title: 'Segurança e Proteção', icon: Shield, color: 'roxo',
      desc: 'O Estatuto da Criança e do Adolescente (ECA) garante proteção absoluta contra violência e riscos.',
      content: ['Proteção integral contra qualquer forma de violência física, psicológica e sexual.', 'Proibição de trabalhos perigosos ou noturnos (segurança laboral juvenil).', 'Proteção contra exploração ou exploração pelo uso de substâncias.', 'Proteção contra ameaças locais e comunitárias.']
    },
    { 
      id: 'internet', title: 'Segurança Web', icon: Wifi, color: 'azul',
      desc: 'A internet é pública, mas a sua vida não é. Conheça suas defesas digitais.',
      content: ['Direito à Privacidade e à proteção de Dados Pessoais (LGPD).', 'Direito ao esquecimento e à remoção de material íntimo vazado.', 'Proteção contra golpes, deepfakes, e engenharia social.', 'Compreensão ampla e combate ativo ao Cyberbullying.', 'Precaução com a exposição excessiva (Over-sharing).']
    },
    { 
      id: 'familia', title: 'Convivência Familiar', icon: Home, color: 'dourado',
      desc: 'Ter uma família acolhedora e respeitosa é essencial para o desenvolvimento.',
      content: ['Direito fundamental à convivência familiar saudável.', 'Dever da família civil de garantir apoio emocional e estrutural.', 'Proteção em casos de conflitos gravosos (acompanhamento pelo Conselho Tutelar).', 'Necessidade de escuta ativa entre jovens e responsáveis.']
    },
  ];

  return (
    <div className="space-y-12 pb-12 max-w-6xl mx-auto w-full relative">
      <div className="absolute top-[20%] left-[-20%] w-[500px] h-[500px] bg-chico-dourado opacity-[0.05] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-5 pt-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center p-5 rounded-3xl bg-gradient-to-br from-chico-dourado/20 to-black/40 text-chico-dourado mb-6 border border-chico-dourado/30 shadow-[0_0_30px_rgba(212,163,115,0.2)]"
        >
          <Scale size={48} className="drop-shadow-lg" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal font-display tracking-tight text-white drop-shadow-sm"
        >
          Central de <span className="bg-clip-text text-transparent bg-gradient-to-r from-chico-dourado to-chico-creme">Direitos</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          A informação confiável e fundamentada no ECA é o seu maior escudo. Explore nossa biblioteca essencial.
        </motion.p>
      </div>

      {/* Hero Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <GlassCard className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-tr from-chico-escuro/90 to-black/90 border-white/10 p-10 md:p-14 relative overflow-hidden group hover:border-chico-dourado/30 transition-colors shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop')] bg-cover mix-blend-overlay opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000 mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="absolute left-[-20%] top-[-20%] w-[500px] h-[500px] bg-chico-dourado opacity-10 blur-[120px] rounded-full group-hover:bg-chico-roxo transition-colors duration-1000"></div>

          <div className="relative z-10 flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/40 rounded-lg text-[10px] font-black text-chico-dourado tracking-[0.2em] uppercase mb-2 border border-chico-dourado/20 shadow-inner">
              <BookOpen size={12} className="opacity-80" /> Legislação Aplicada
            </div>
            <h2 className="text-3xl md:text-5xl font-normal text-white leading-tight font-display tracking-tight drop-shadow-md">Você tem o direito de ser <span className="text-chico-dourado">ouvido com dignidade.</span></h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl font-medium">
              O artigo 16 do ECA garante seu direito incondicional à liberdade de opinião, expressão, crença e buscar refúgio, auxílio e orientação segura. O silêncio não constrói justiça.
            </p>
          </div>
          <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-[40px] bg-gradient-to-br from-chico-dourado/10 to-transparent border border-chico-dourado/20 backdrop-blur-2xl flex items-center justify-center p-8 transform rotate-[5deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 shadow-[0_0_50px_rgba(212,163,115,0.1)] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-[0.03] pointer-events-none" />
            <Scale className="text-chico-dourado w-full h-full opacity-90 drop-shadow-[0_10px_20px_rgba(212,163,115,0.4)]" />
          </div>
        </GlassCard>
      </motion.div>

      {/* Category Selection Tabs/Buttons */}
      <div className="relative z-10">
         <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              
              // Dynamic color themes based on the cat.color
              let activeColorClass = 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.4)]';
              let iconColorClass = 'text-white';
              
              if (isActive) {
                 if (cat.color === 'dourado') activeColorClass = 'bg-chico-dourado text-chico-preto border-chico-dourado shadow-[0_0_30px_rgba(212,163,115,0.4)]';
                 if (cat.color === 'azul') activeColorClass = 'bg-chico-azul text-white border-chico-azul shadow-[0_0_30px_rgba(45,108,223,0.4)] text-shadow-sm';
                 if (cat.color === 'roxo') activeColorClass = 'bg-chico-roxo text-white border-chico-roxo shadow-[0_0_30px_rgba(130,87,229,0.4)] text-shadow-sm';
              } else {
                 if (cat.color === 'dourado') iconColorClass = 'text-chico-dourado opacity-80';
                 if (cat.color === 'azul') iconColorClass = 'text-chico-azul opacity-80';
                 if (cat.color === 'roxo') iconColorClass = 'text-chico-roxo opacity-80';
              }

              return (
                <button 
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id === activeTab ? null : cat.id)}
                  className={`px-6 py-4 rounded-2xl border flex items-center gap-3 font-bold transition-all duration-300 text-sm md:text-base uppercase tracking-wider
                    ${isActive 
                      ? activeColorClass 
                      : 'bg-black/40 border-white/10 text-slate-400 hover:bg-white/5 hover:border-white/20 hover:text-white backdrop-blur-md'
                    }
                  `}
                >
                  <cat.icon size={20} className={isActive ? '' : iconColorClass} />
                  {cat.title}
                </button>
              );
            })}
         </div>

         {/* Content Area */}
         <AnimatePresence mode="wait">
           {activeTab ? (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {categories.map(cat => cat.id === activeTab && (
                  <GlassCard key={cat.id} className="p-8 md:p-14 border-white/10 shadow-2xl bg-gradient-to-b from-chico-escuro/90 to-black/90 overflow-hidden relative group">
                     {/* Dynamic background glow based on category color */}
                     <div className={`absolute top-[-50%] right-[-10%] w-[600px] h-[600px] opacity-10 blur-[150px] rounded-full pointer-events-none transition-colors duration-1000 ${cat.color === 'dourado' ? 'bg-chico-dourado' : cat.color === 'azul' ? 'bg-chico-azul' : 'bg-chico-roxo'}`} />
                     
                     <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10 relative z-10">
                        <div className={`p-6 rounded-3xl border shadow-xl flex items-center justify-center shrink-0 
                          ${cat.color === 'dourado' ? 'bg-chico-dourado/10 text-chico-dourado border-chico-dourado/30' : 
                            cat.color === 'azul' ? 'bg-chico-azul/10 text-chico-azul border-chico-azul/30' : 
                            'bg-chico-roxo/10 text-chico-roxo border-chico-roxo/30'}`}>
                           <cat.icon size={36} className="drop-shadow-lg" />
                        </div>
                        <div>
                           <h3 className="text-4xl md:text-5xl font-normal text-white mb-3 font-display tracking-tight">{cat.title}</h3>
                           <p className="text-slate-400 text-lg font-medium max-w-3xl">{cat.desc}</p>
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-6 pt-10 border-t border-white/5 relative z-10">
                        {cat.content.map((item, idx) => (
                           <motion.div 
                             initial={{ opacity: 0, x: -10 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ delay: 0.1 * idx, duration: 0.4 }}
                             key={idx} 
                             className="flex items-start gap-4 bg-black/40 p-6 rounded-2xl border border-white/5 hover:bg-white/5 hover:border-white/10 transition-colors shadow-inner"
                           >
                             <div className={`mt-1 shrink-0 ${cat.color === 'dourado' ? 'text-chico-dourado' : cat.color === 'azul' ? 'text-chico-azul' : 'text-chico-roxo'}`}>
                               <BadgeCheck size={24} />
                             </div>
                             <span className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">{item}</span>
                           </motion.div>
                        ))}
                     </div>
                  </GlassCard>
                ))}
              </motion.div>
           ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 px-6"
              >
                 <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-chico-escuro border-2 border-chico-dourado/30 shadow-[0_0_20px_rgba(212,163,115,0.3)] overflow-hidden">
                   <img src="/chico05.png" alt="Chico" className="w-full h-full object-cover object-top opacity-90" />
                 </div>
                 <p className="text-slate-400 font-medium text-lg max-w-lg mx-auto leading-relaxed">
                   Selecione um tópico acima para mergulhar no conhecimento e fortalecer seus direitos fundamentais.
                 </p>
              </motion.div>
           )}
         </AnimatePresence>
      </div>
    </div>
  );
}
