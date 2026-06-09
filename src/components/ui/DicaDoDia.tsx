import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, X, ChevronRight } from 'lucide-react';

const dicas = [
  "Use senhas fortes: Misture letras maiúsculas, minúsculas, números e símbolos especiais.",
  "Ative a Autenticação de 2 Fatores (2FA) em todas as suas contas importantes.",
  "Desconfie de links recebidos por SMS ou WhatsApp, mesmo que pareçam ser de conhecidos.",
  "Mantenha seus aplicativos e sistema operacional sempre atualizados para corrigir falhas de segurança.",
  "Evite usar redes Wi-Fi públicas para acessar aplicativos de banco ou fazer compras online.",
  "Não compartilhe códigos de verificação recebidos por SMS com ninguém.",
  "Verifique sempre o remetente de e-mails suspeitos antes de clicar em qualquer link.",
  "Use um gerenciador de senhas para não precisar memorizar todas as suas credenciais."
];

export function DicaDoDia() {
  const [dica, setDica] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Escolhe uma dica aleatória ao montar o componente
    const randomIndex = Math.floor(Math.random() * dicas.length);
    setDica(dicas[randomIndex]);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 bg-gradient-to-r from-chico-escuro to-black border border-chico-dourado/30 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group flex items-start sm:items-center gap-5"
      >
        <div className="absolute inset-0 bg-chico-dourado/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="w-12 h-12 rounded-full bg-chico-dourado/10 border border-chico-dourado/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,163,115,0.2)]">
          <Lightbulb className="text-chico-dourado" size={24} />
        </div>
        
        <div className="flex-1 relative z-10">
          <h4 className="text-xs font-black uppercase tracking-widest text-chico-dourado mb-1">Dica de Segurança do Dia</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{dica}</p>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors p-1"
          title="Fechar"
        >
          <X size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
