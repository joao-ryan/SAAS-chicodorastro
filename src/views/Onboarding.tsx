import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

// Importing all 6 distinct Chico images for our elaborate onboarding flow
import chicoImg1 from "@/chico-imagens/chico01.jpeg";
import chicoImg2 from "@/chico-imagens/chico2.jpeg";
import chicoImg3 from "@/chico-imagens/chico03.jpeg";
import chicoImg4 from "@/chico-imagens/chico04.jpeg";
import chicoImg5 from "@/chico-imagens/chico05.jpeg";
import chicoImg6 from "@/chico-imagens/chico06.jpeg";

import { ArrowRight, Check, Shield, Search, BookOpen, HandHeart, MessageSquareCode, Award, Compass, Sparkles } from 'lucide-react';

export function Onboarding() {
  const [step, setStep] = useState(0);
  const { user } = useAppStore();
  const navigate = useNavigate();

  const steps = [
    {
      title: "Pronto para a jornada,",
      highlight: user.name || "Tiago Souza",
      description: "Você acaba de se autenticar no Chico do Rastro. Prepare-se para fortalecer sua cidadania na web, promover a segurança digital e conhecer seus direitos fundamentais.",
      buttonText: "Iniciar Aprendizado",
      image: chicoImg1,
      icon: <Sparkles size={24} className="text-brand-gold" />
    },
    {
      title: "Sua Segurança em",
      highlight: "Primeiro Lugar",
      description: "Aprenda a criar defesas robustas na internet: identifique golpes, blinde suas contas com senhas seguras e impeça que seus rastros sejam explorados.",
      buttonText: "Próxima Lição",
      image: chicoImg2,
      icon: <Shield size={24} className="text-[#8257E5]" />
    },
    {
      title: "Cidadania e",
      highlight: "Consciência Digital",
      description: "Navegar é um ato político e social. Descubra como dialogar com empatia, combater a disseminação de fake news e exercer plenamente seus direitos online.",
      buttonText: "Próxima Lição",
      image: chicoImg3,
      icon: <BookOpen size={24} className="text-blue-400" />
    },
    {
      title: "Mentoria de",
      highlight: "Inteligência Artificial",
      description: "Tire dúvidas complexas a qualquer momento. Nossa IA Educativa exclusiva fornece respostas rápidas e contextualizadas sobre termos jurídicos e boas práticas na grande rede.",
      buttonText: "Próxima Lição",
      image: chicoImg5,
      icon: <MessageSquareCode size={24} className="text-pink-400" />
    },
    {
      title: "Apoio, Escuta e",
      highlight: "Acolhimento Ativo",
      description: "Se algo der errado na internet, você não está sozinho. O Portal de Apoio oferece respostas rápidas, canais de denúncia diretos e recursos de amparo imediatos.",
      buttonText: "Próxima Lição",
      image: chicoImg4,
      icon: <HandHeart size={24} className="text-amber-500" />
    },
    {
      title: "Recompensas &",
      highlight: "Conquistas do Guardião",
      description: `Parabéns, @${user.username || 'guardiao'}. Ao concluir as trilhas e interagir na plataforma, você acumula XP, sobe de nível e desbloqueia medalhas raras de cidadania!`,
      buttonText: "Entrar no Painel",
      image: chicoImg6,
      icon: <Award size={24} className="text-[#D4A373]" />
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(prev => prev + 1);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-[#0a0a0b] overflow-hidden text-brand-cream relative">
      {/* Visual / Image Section */}
      <div className="hidden lg:flex lg:flex-1 relative bg-black items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-brand-purple/10 mix-blend-screen pointer-events-none z-10" />
         
         <AnimatePresence mode="wait">
           <motion.img 
              key={step}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              src={steps[step].image}
              alt="Chico do Rastro ilustrativo" 
              className="absolute inset-0 w-full h-full object-cover filter saturate-50 contrast-125 mix-blend-luminosity"
           />
         </AnimatePresence>
         
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0b] z-20" />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative z-30 min-h-screen lg:min-h-0 bg-[#0a0a0b]">
        <div className="w-full max-w-xl mx-auto lg:mx-0">
            {/* Progress indicators */}
            <div className="flex gap-3 mb-16">
              {steps.map((_, i) => (
                <button 
                  key={i} 
                  className="h-1 flex-1 rounded-full bg-white/10 overflow-hidden relative cursor-pointer outline-none focus:ring-1 focus:ring-brand-gold/50" 
                  onClick={() => setStep(i)}
                  aria-label={`Ir para etapa ${i + 1}`}
                >
                   {i <= step && (
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-brand-gold origin-left"
                      />
                   )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-2">
                   {steps[step].icon}
                </div>

                <h1 className="text-4xl sm:text-5xl font-heading font-medium tracking-tight text-white leading-tight">
                  {steps[step].title} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-cream to-brand-gold">{steps[step].highlight}</span>
                </h1>
                
                <p className="text-lg text-brand-cream/60 font-sans tracking-wide leading-relaxed">
                  {steps[step].description}
                </p>

                <div className="mt-12 flex items-center justify-between">
                  {/* Skip button / Back */}
                  <div className="flex items-center gap-4">
                     {step > 0 ? (
                        <button 
                           onClick={() => setStep(prev => prev - 1)}
                           className="text-sm font-semibold tracking-wider uppercase text-brand-cream/50 hover:text-brand-cream transition-colors py-2"
                        >
                           Voltar
                        </button>
                     ) : (
                        <button 
                           onClick={() => navigate('/dashboard')}
                           className="text-sm font-semibold tracking-wider uppercase text-brand-cream/30 hover:text-brand-cream transition-colors py-2"
                        >
                           Pular Intro
                        </button>
                     )}
                  </div>
                  
                  <button 
                    onClick={handleNext}
                    className="flex items-center gap-4 px-8 py-4 bg-brand-cream text-brand-black rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(243,233,210,0.15)] group"
                  >
                    {steps[step].buttonText}
                    {step === steps.length - 1 ? (
                       <Check size={18} className="group-hover:scale-110 transition-transform" />
                    ) : (
                       <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
