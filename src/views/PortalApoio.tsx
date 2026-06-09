import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '../components/ui/GlassCard';
import { HeartHandshake, Phone, AlertTriangle, ShieldAlert, BadgeCheck, FileWarning, EyeOff, XCircle, HandMetal, Smartphone, Lock, Scale, Building2, Brain, Activity, BookOpen, Key, Link, ShieldCheck, HelpCircle, Search } from 'lucide-react';

type InfoTab = 'organs' | 'glossary' | 'tips' | 'violations';

export function PortalApoioView() {
  const [activeTab, setActiveTab] = useState<InfoTab>('organs');
  const [searchTerm, setSearchTerm] = useState('');

  const organs = [
    { 
      name: 'Disque 100', 
      desc: 'Canal nacional de denúncias de violações de direitos humanos. Anônimo, gratuito, 24h. Atende violência física, psicológica, sexual, bullying e mais.', 
      icon: <Phone size={28} />, 
      action: 'Ligar 100',
      tag: 'Nacional'
    },
    { 
      name: 'Conselho Tutelar', 
      desc: 'Proteção dos direitos infantojuvenis (ECA). Atua em casos de abandono, negligência, violência doméstica e evasão escolar.', 
      icon: <ShieldAlert size={28} />, 
      action: 'Encontrar CT',
      tag: 'Local'
    },
    { 
      name: 'Defensoria Pública', 
      desc: 'Assistência jurídica gratuita para orientação e defesa de direitos. Ajuda em conflitos familiares e proteção legal.', 
      icon: <Scale size={28} />, 
      action: 'Acessar DP',
      tag: 'Jurídico'
    },
    { 
      name: 'SaferNet Brasil', 
      desc: 'Segurança e combate a crimes virtuais. Denúncias online para cyberbullying, golpes e exposição indevida (helpline disponível).', 
      icon: <AlertTriangle size={28} />, 
      action: 'Denunciar Online',
      tag: 'Digital'
    },
    { 
      name: 'Polícia Civil', 
      desc: 'Investigação criminal. Procurar para crimes online, ameaças físicas ou perseguição virtual. Faça o Boletim de Ocorrência (BO).', 
      icon: <Lock size={28} />, 
      action: 'Registrar BO',
      tag: 'Criminal'
    },
    {
      name: 'CVV (188)',
      desc: 'Centro de Valorização da Vida. Apoio emocional sigiloso e prevenção ao suicídio, 24 horas por dia.',
      icon: <HeartHandshake size={28} />,
      action: 'Ligar 188',
      tag: 'Emocional'
    },
    {
      name: 'CAPS',
      desc: 'Centro de Atenção Psicossocial. Apoio psicológico para tratamento de ansiedade, depressão e sofrimento mental.',
      icon: <Brain size={28} />,
      action: 'Buscar Apoio',
      tag: 'Saúde'
    },
    {
      name: 'CRAS / CREAS',
      desc: 'Centros de Referência de Assistência Social. Apoio familiar, acolhimento em vulnerabilidade e proteção em violações de direitos.',
      icon: <Building2 size={28} />,
      action: 'Aprender Mais',
      tag: 'Social'
    }
  ];

  type ViolationKey = 'fisica' | 'psicologica' | 'sexual' | 'patrimonial' | 'bullying' | 'cyberbullying';
  const [activeViolation, setActiveViolation] = React.useState<ViolationKey | null>(null);

  const violationsContent = {
    fisica: {
      title: 'Violência Física',
      icon: <HandMetal size={24} className="text-red-400" />,
      desc: 'Uso de força física para machucar ou ferir alguém.',
      examples: ['Tapas, socos e empurrões', 'Queimaduras', 'Agressões com objetos'],
      signs: ['Hematomas', 'Medo constante e encolhimento', 'Isolamento e comportamento retraído'],
      conseq: ['Ansiedade e insegurança', 'Traumas e danos emocionais']
    },
    psicologica: {
      title: 'Violência Psicológica',
      icon: <EyeOff size={24} className="text-chico-roxo" />,
      desc: 'Agressões emocionais que afetam a autoestima, a liberdade e o bem-estar mental.',
      examples: ['Humilhação e ridicularização', 'Chantagem e manipulação', 'Ameaças constantes', 'Isolamento social imposto'],
      signs: ['Mudanças bruscas de humor', 'Dificuldade de concentração', 'Isolamento forçado'],
      conseq: ['Depressão profunda', 'Ansiedade clínica', 'Baixa autoestima persistente']
    },
    sexual: {
      title: 'Violência Sexual',
      icon: <XCircle size={24} className="text-chico-dourado" />,
      desc: 'Qualquer ato sexual sem consentimento, aliciamento ou exploração.',
      examples: ['Toques indesejados', 'Aliciamento online', 'Obrigação a presenciar ou participar de atos de cunho sexual'],
      signs: ['Medo exacerbado de pessoas específicas', 'Mudança na conduta corporal', 'Silêncio incomum'],
      conseq: ['Traumas profundos', 'Dificuldade em confiar e formar vínculos']
    },
    patrimonial: {
      title: 'Violência Patrimonial',
      icon: <FileWarning size={24} className="text-chico-azul" />,
      desc: 'Controle, destruição ou retenção de bens, documentos ou recursos da vítima.',
      examples: ['Destruir objetos pessoais', 'Controlar ou roubar seu dinheiro', 'Esconder documentos importantes'],
      signs: ['Falta repentina de pertences essenciais', 'Dependência forçada'],
      conseq: ['Impotência', 'Dependência financeira', 'Isolamento forçado']
    },
    bullying: {
      title: 'Bullying Escolar',
      icon: <BadgeCheck size={24} className="text-green-400" />,
      desc: 'Agressões intencionais e repetitivas (verbais ou físicas) exercidas por colegas.',
      examples: ['Apelidos ofensivos', 'Exclusão proposital do grupo', 'Fofocas e humilhações em público'],
      signs: ['Desânimo para ir à escola', 'Hematomas ou roupas rasgadas', 'Queda no desempenho escolar'],
      conseq: ['Fobia escolar', 'Ansiedade social', 'Sensação profunda de inadequação']
    },
    cyberbullying: {
      title: 'Cyberbullying',
      icon: <Smartphone size={24} className="text-teal-400" />,
      desc: 'Bullying e humilhação intensificados através da internet e redes sociais.',
      examples: ['Perseguição virtual (stalking)', 'Exposição pública maliciosa', 'Vazamento de imagens íntimas', 'Criação de perfis fakes ofensivos'],
      signs: ['Agitação extrema ao usar o celular', 'Desespero ou choro ao ver mensagens', 'Esconder a tela'],
      conseq: ['Sofrimento psicológico grave', 'Sensação de não ter para onde fugir (afeta qualquer lugar, 24h)']
    }
  };

  const glossary = [
    { term: 'ECA', desc: 'Estatuto da Criança e do Adolescente. Conjunto de leis que garante os direitos.', icon: <BookOpen className="text-chico-dourado" size={20} /> },
    { term: 'LGPD', desc: 'Lei Geral de Proteção de Dados. Regras sobre como seus dados podem ser usados na web.', icon: <ShieldCheck className="text-chico-azul" size={20} /> },
    { term: 'BO', desc: 'Boletim de Ocorrência. Registro oficial de um crime ou incidente feito na polícia.', icon: <FileWarning className="text-slate-300" size={20} /> },
    { term: 'Cyberbullying', desc: 'Violência, humilhação ou intimidação realizada através da internet.', icon: <Smartphone className="text-teal-400" size={20} /> },
    { term: 'Phishing', desc: 'Golpe digital para roubo de dados, senhas ou informações bancárias.', icon: <Link className="text-red-400" size={20} /> },
    { term: 'Fake News', desc: 'Informações falsas espalhadas intencionalmente na internet.', icon: <EyeOff className="text-chico-roxo" size={20} /> },
    { term: 'Grooming', desc: 'Manipulação e aliciamento online de menores por criminosos.', icon: <AlertTriangle className="text-orange-400" size={20} /> },
    { term: 'Engenharia Social', desc: 'Técnicas de manipulação psicológica usadas em golpes para obter informações.', icon: <Brain className="text-chico-marrom" size={20} /> }
  ];

  const alerts = [
    "Nunca compartilhe senhas com amigos ou namorados.",
    "Desconfie de links suspeitos recebidos por mensagem.",
    "Guardar prints das telas ajuda muito em denúncias.",
    "Se algo te faz sentir medo ou desconforto, procure ajuda.",
    "Privacidade digital é um direito seu. Proteja seus perfis.",
    "Nem toda informação online é verdadeira. Questione sempre."
  ];

  return (
    <div className="space-y-16 pb-12 w-full max-w-7xl mx-auto relative px-4 md:px-0">
      <div className="absolute top-[5%] right-[10%] w-[400px] h-[400px] bg-red-500 opacity-[0.05] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto pt-8 relative z-10">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/10 text-white flex items-center justify-center relative shadow-[0_0_40px_rgba(255,255,255,0.1)] backdrop-blur-md overflow-hidden bg-chico-escuro"
        >
          <img src="/chico04.png" alt="Chico Apoio" className="w-full h-full object-cover object-top relative z-10 opacity-90" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight font-sans tracking-tight drop-shadow-md">
            Você não está <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-chico-dourado to-chico-creme drop-shadow-[0_0_15px_rgba(212,163,115,0.4)]">sozinho(a)</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto">
            Acolhimento imediato, orientação segura e informações vitais para a sua proteção.
          </p>
        </motion.div>
      </div>

      {/* Emergency Action */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 w-full max-w-4xl mx-auto group">
        <div className="absolute inset-0 rounded-[40px] border-4 border-red-500/40 animate-pulse pointer-events-none z-20" />
        <GlassCard className="bg-gradient-to-br from-red-950/60 to-black/80 border border-transparent text-center py-12 px-6 rounded-[40px] shadow-[0_20px_60px_rgba(239,68,68,0.15)] relative overflow-hidden">
          <div className="absolute top-[-50%] left-[-20%] w-[300px] h-[300px] bg-red-500 opacity-10 blur-[100px] rounded-full group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 font-sans tracking-tight">Situação de Emergência?</h2>
            <p className="text-red-200 mb-8 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              Se você ou alguém que você conhece corre risco imediato de vida, está sendo ameaçado ou sofrendo agressão (física ou virtual), procure a polícia. Buscar ajuda é um ato de coragem.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-red-500 hover:bg-red-400 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_50px_rgba(239,68,68,0.6)] transition-all flex items-center justify-center gap-3 uppercase tracking-widest hover:scale-105 duration-300">
                <Phone size={24} />
                Ligar 190
              </button>
              <button className="w-full sm:w-auto bg-chico-dourado hover:bg-chico-dourado/90 text-chico-preto px-10 py-5 rounded-2xl font-black text-xl shadow-[0_0_30px_rgba(212,163,115,0.3)] hover:shadow-[0_0_50px_rgba(212,163,115,0.5)] transition-all flex items-center justify-center gap-3 uppercase tracking-widest hover:scale-105 duration-300">
                <ShieldAlert size={24} />
                Ligar 100
              </button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Tabs Navigation */}
      <div className="relative z-10 w-full flex flex-wrap items-center justify-center gap-2 mb-10 pt-10 border-t border-white/5">
         {[
           { id: 'organs', label: 'Rede de Proteção', icon: <Building2 size={16} /> },
           { id: 'violations', label: 'Violências', icon: <AlertTriangle size={16} /> },
           { id: 'glossary', label: 'Termos & Siglas', icon: <BookOpen size={16} /> },
           { id: 'tips', label: 'Alertas Educativos', icon: <HelpCircle size={16} /> },
         ].map(tab => (
           <button
             key={tab.id}
             onClick={() => setActiveTab(tab.id as InfoTab)}
             className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm tracking-wide transition-all ${
               activeTab === tab.id 
                ? 'bg-chico-dourado text-chico-preto shadow-[0_0_20px_rgba(212,163,115,0.4)]' 
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
             }`}
           >
             {tab.icon}
             {tab.label}
           </button>
         ))}
      </div>

      {/* Tab Panels */}
      <AnimatePresence mode="wait">
        
        {/* TAB: ÓRGÃOS E REDE DE PROTEÇÃO */}
        {activeTab === 'organs' && (
          <motion.div key="organs" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <h3 className="text-4xl font-semibold text-white mb-4 text-center font-sans tracking-tight">Órgãos <span className="text-transparent bg-clip-text bg-gradient-to-r from-chico-dourado to-chico-creme">Oficiais de Proteção</span></h3>
            <p className="text-slate-400 font-medium text-lg text-center mb-10">Onde buscar amparo legal, orientações psicológicas e registrar denúncias garantindo seu sigilo.</p>
            
            <div className="max-w-md mx-auto mb-10 relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Buscar órgão ou palavra-chave..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-chico-dourado/50 focus:ring-1 focus:ring-chico-dourado/50 transition-all font-sans"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organs.filter(organ => organ.name.toLowerCase().includes(searchTerm.toLowerCase()) || organ.desc.toLowerCase().includes(searchTerm.toLowerCase()) || organ.tag.toLowerCase().includes(searchTerm.toLowerCase())).map((organ, idx) => (
                <GlassCard key={idx} delay={0.1 * idx} className="flex flex-col p-8 bg-black/40 hover:bg-white/[0.03] border-white/5 hover:border-chico-dourado/30 transition-all hover:-translate-y-2 group rounded-3xl relative overflow-hidden">
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-white/5 rounded-md text-[9px] font-black tracking-widest uppercase text-slate-400 border border-white/5 group-hover:bg-chico-dourado/10 group-hover:text-chico-dourado group-hover:border-chico-dourado/30 transition-colors">
                    {organ.tag}
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl w-fit text-white mb-6 border border-white/10 group-hover:bg-chico-dourado group-hover:text-chico-preto group-hover:border-chico-dourado/50 transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(212,163,115,0.4)]">
                    {organ.icon}
                  </div>
                  <h4 className="font-semibold text-2xl text-white mb-3 font-sans tracking-tight">{organ.name}</h4>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-1 font-medium">{organ.desc}</p>
                  <button className="text-chico-dourado bg-white/5 hover:bg-chico-dourado hover:text-chico-preto w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all border border-chico-dourado/20 hover:border-chico-dourado text-center inline-flex justify-center gap-2 items-center">
                    {organ.action}
                  </button>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB: VIOLAÇÕES (COMO IDENTIFICAR E AGIR) */}
        {activeTab === 'violations' && (
          <motion.div key="violations" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <h3 className="text-4xl font-semibold text-white mb-10 text-center font-sans tracking-tight">Como <span className="text-chico-azul text-shadow-sm">Identificar e Agir</span></h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
              {(Object.keys(violationsContent) as Array<ViolationKey>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveViolation(key === activeViolation ? null : key)}
                  className={`p-6 rounded-3xl flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 border shadow-md ${activeViolation === key ? 'bg-chico-azul/10 border-chico-azul/40 shadow-[0_0_20px_rgba(45,108,223,0.2)] scale-[1.02]' : 'bg-black/40 border-white/5 hover:bg-white/5 hover:border-white/10'}`}
                >
                  {violationsContent[key].icon}
                  <span className="font-bold text-sm md:text-base text-white tracking-wide">{violationsContent[key].title}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeViolation && (
                <motion.div
                  key={activeViolation}
                  initial={{ opacity: 0, height: 0, scale: 0.98 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="bg-black/60 border border-white/10 rounded-[32px] p-8 md:p-10 space-y-8 shadow-inner mt-4">
                    <div>
                      <h4 className="text-3xl font-semibold text-white mb-3 font-sans tracking-tight">{violationsContent[activeViolation].title}</h4>
                      <p className="text-slate-300 text-lg font-medium">{violationsContent[activeViolation].desc}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 pt-6 border-t border-white/5">
                      <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                        <h5 className="font-black text-chico-dourado mb-4 uppercase text-xs tracking-widest flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-chico-dourado"></div> Exemplos Práticos</h5>
                        <ul className="space-y-3 text-sm text-slate-300 font-medium">
                          {violationsContent[activeViolation].examples.map((ex, i) => <li key={i} className="flex items-start gap-2"><span className="text-chico-dourado opacity-50 block mt-0.5">•</span> <span>{ex}</span></li>)}
                        </ul>
                      </div>
                      <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                        <h5 className="font-black text-chico-marrom mb-4 uppercase text-xs tracking-widest flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-chico-marrom"></div> Sinais de Alerta</h5>
                        <ul className="space-y-3 text-sm text-slate-300 font-medium">
                          {violationsContent[activeViolation].signs.map((sign, i) => <li key={i} className="flex items-start gap-2"><span className="text-chico-marrom opacity-50 block mt-0.5">•</span> <span>{sign}</span></li>)}
                        </ul>
                      </div>
                      <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                        <h5 className="font-black text-red-400 mb-4 uppercase text-xs tracking-widest flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div> Consequências</h5>
                        <ul className="space-y-3 text-sm text-slate-300 font-medium">
                          {violationsContent[activeViolation].conseq.map((cons, i) => <li key={i} className="flex items-start gap-2"><span className="text-red-400 opacity-50 block mt-0.5">•</span> <span>{cons}</span></li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* TAB: GLOSSARY (NOMENCLATURAS) */}
        {activeTab === 'glossary' && (
          <motion.div key="glossary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <h3 className="text-4xl font-semibold text-white mb-4 text-center font-sans tracking-tight">Termos & <span className="text-transparent bg-clip-text bg-gradient-to-r from-chico-azul to-teal-400">Siglas</span></h3>
            <p className="text-slate-400 font-medium text-lg text-center mb-12">Informação e letramento digital. Conheça as ferramentas e os nomes que protegem a sua cidadania.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {glossary.map((g, idx) => (
                 <div key={idx} className="bg-white/[0.03] border border-white/5 rounded-3xl p-6 flex items-start gap-4 hover:border-white/20 hover:bg-white/[0.05] transition-colors">
                    <div className="p-3 bg-black/40 rounded-2xl border border-white/5 shrink-0">
                       {g.icon}
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-lg mb-2">{g.term}</h4>
                       <p className="text-slate-400 text-sm leading-relaxed">{g.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
        )}

        {/* TAB: TIPS (ALERTAS) */}
        {activeTab === 'tips' && (
          <motion.div key="tips" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
             <h3 className="text-4xl font-semibold text-white mb-10 text-center font-sans tracking-tight">Instruções para o <span className="text-chico-dourado">Dia a Dia</span></h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <GlassCard className="p-10 rounded-[32px] bg-chico-preto border-white/10">
                   <h4 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Como Buscar Ajuda com Segurança</h4>
                   <ul className="space-y-6">
                      <li className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded-full bg-chico-dourado/20 text-chico-dourado flex items-center justify-center font-bold shrink-0">1</div>
                         <div>
                            <span className="block text-white font-bold mb-1">Fale com um Adulto de Confiança</span>
                            <span className="text-slate-400 text-sm leading-relaxed">Escola, responsáveis ou um professor acolhedor. Nunca guarde o medo para si mesmo.</span>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded-full bg-chico-dourado/20 text-chico-dourado flex items-center justify-center font-bold shrink-0">2</div>
                         <div>
                            <span className="block text-white font-bold mb-1">Preserve as Provas (Prints)</span>
                            <span className="text-slate-400 text-sm leading-relaxed">Se o ataque aconteceu em redes sociais ou jogos, NÃO apague mensagens. Retire e salve capturas de tela contendo o perfil do agressor.</span>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded-full bg-chico-dourado/20 text-chico-dourado flex items-center justify-center font-bold shrink-0">3</div>
                         <div>
                            <span className="block text-white font-bold mb-1">Evite Exposição</span>
                            <span className="text-slate-400 text-sm leading-relaxed">Bloqueie o usuário agressor. Recuse solicitações de estranhos para enviar fotos com roupas íntimas ou rosto muito próximo.</span>
                         </div>
                      </li>
                   </ul>
                </GlassCard>

                <div className="space-y-6">
                   {alerts.map((alerta, idx) => (
                      <div key={idx} className="bg-[#111111] border-l-4 border-chico-dourado p-6 rounded-r-2xl flex items-center gap-4 text-slate-300 font-medium">
                         <AlertTriangle className="text-chico-dourado shrink-0 hidden sm:block" size={24} />
                         <p>{alerta}</p>
                      </div>
                   ))}
                   <div className="bg-gradient-chico p-[1px] rounded-2xl mt-4 opacity-80 hover:opacity-100 transition-opacity">
                      <div className="bg-chico-preto p-6 rounded-2xl h-full flex flex-col justify-center text-center">
                         <p className="text-chico-dourado italic text-lg font-bold">"Segurança digital começa com conhecimento. E denunciar pode proteger outras pessoas."</p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

