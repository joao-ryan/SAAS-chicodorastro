import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Save, User, AtSign, AlignLeft, Image as ImageIcon } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_AVATARS = [
  '/chico01.png',
  '/chico2.png',
  '/chico03.png',
  '/chico04.png',
  '/chico05.png',
  '/chico06.png',
];

export function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  const { user, updateProfile } = useAppStore();
  
  const [formData, setFormData] = useState({
    name: user.name || '',
    username: user.username || '',
    bio: user.bio || '',
    avatarUrl: user.avatarUrl || ''
  });
  const [activeTab, setActiveTab] = useState<'info' | 'avatar'>('info');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    onClose();
  };

  const handleAvatarSelect = (url: string) => {
    setFormData(prev => ({ ...prev, avatarUrl: url }));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-gradient-to-b from-chico-escuro to-chico-preto border border-white/10 rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="px-8 py-6 flex items-center justify-between border-b border-white/5 bg-black/20">
            <h2 className="text-2xl font-normal text-white flex items-center gap-3 font-display tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-chico-dourado/10 flex items-center justify-center border border-chico-dourado/20">
                <User size={20} className="text-chico-dourado" />
              </div>
              Editar Perfil
            </h2>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-white/5"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex border-b border-white/5 px-8 bg-black/20">
             <button 
                onClick={() => setActiveTab('info')}
                className={`py-4 px-2 font-bold text-sm flex items-center gap-2 border-b-2 transition-all uppercase tracking-widest ${
                   activeTab === 'info' ? 'border-chico-dourado text-chico-dourado' : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
             >
                <AlignLeft size={16} /> Sobre Mim
             </button>
             <button 
                onClick={() => setActiveTab('avatar')}
                className={`py-4 px-2 ml-8 font-bold text-sm flex items-center gap-2 border-b-2 transition-all uppercase tracking-widest ${
                   activeTab === 'avatar' ? 'border-chico-dourado text-chico-dourado' : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
             >
                <ImageIcon size={16} /> Aparência
             </button>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 max-h-[60vh] custom-scrollbar relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-[0.02] pointer-events-none" />
            
            {activeTab === 'info' && (
              <div className="space-y-6 relative z-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">Nome de Exibição</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-chico-dourado/50 focus:ring-1 focus:ring-chico-dourado/50 transition-all shadow-inner font-medium"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">Nome de Usuário (Username)</label>
                  <div className="relative">
                    <AtSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input 
                      type="text" 
                      value={formData.username}
                      onChange={e => setFormData(prev => ({ ...prev, username: e.target.value }))}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-chico-dourado/50 focus:ring-1 focus:ring-chico-dourado/50 transition-all shadow-inner font-medium"
                      placeholder="seu_username"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">Sua Biografia</label>
                  <textarea 
                    value={formData.bio}
                    onChange={e => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-chico-dourado/50 focus:ring-1 focus:ring-chico-dourado/50 transition-all min-h-[120px] resize-none leading-relaxed shadow-inner font-medium"
                    placeholder="Conte um pouco sobre você, seus interesses e objetivos educacionais..."
                  />
                </div>
              </div>
            )}

            {activeTab === 'avatar' && (
               <div className="space-y-8 relative z-10">
                  <div className="flex flex-col items-center justify-center pt-2 pb-6">
                     <div className="relative group p-2">
                        <div className="absolute inset-0 bg-chico-dourado/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img 
                           src={formData.avatarUrl || `https://api.dicebear.com/7.x/notionists/svg?seed=${formData.name}&backgroundColor=transparent`}
                           alt="Preview"
                           className="w-40 h-40 rounded-full object-cover border-2 border-chico-dourado/40 shadow-[0_0_40px_rgba(212,163,115,0.3)] transition-all bg-black/50 relative z-10"
                        />
                     </div>
                     <p className="mt-6 text-sm font-medium text-slate-400">Preview do seu avatar</p>
                  </div>

                  <div className="space-y-3">
                     <label className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">URL de Imagem Customizada</label>
                     <div className="relative">
                       <ImageIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                       <input 
                         type="url" 
                         value={formData.avatarUrl}
                         onChange={e => setFormData(prev => ({ ...prev, avatarUrl: e.target.value }))}
                         className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-chico-dourado/50 transition-all font-medium"
                         placeholder="https://sua-imagem.com/foto.jpg"
                       />
                     </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-white/5">
                     <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">Avatares Oficiais Chico do Rastro</label>
                     <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                        {PRESET_AVATARS.map((url, idx) => (
                           <button
                              key={idx}
                              type="button"
                              onClick={() => handleAvatarSelect(url)}
                              className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-chico-escuro ${
                                 formData.avatarUrl === url ? 'border-chico-dourado scale-110 shadow-[0_0_20px_rgba(212,163,115,0.4)] relative z-10' : 'border-white/5 opacity-60 hover:opacity-100 hover:scale-105 hover:border-white/20'
                              }`}
                           >
                              <img src={url} alt={`Avatar Chico ${idx + 1}`} className="w-full h-full object-cover object-top" />
                           </button>
                        ))}
                     </div>
                  </div>
               </div>
            )}
          </form>

          {/* Footer */}
          <div className="px-8 py-6 bg-black/40 border-t border-white/5 flex justify-end gap-4 shrink-0 relative z-20 backdrop-blur-xl">
            <button 
              type="button"
              onClick={onClose}
              className="px-6 py-3.5 rounded-xl font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-colors uppercase tracking-widest text-xs"
            >
              Cancelar
            </button>
            <button 
              onClick={handleSubmit}
              className="px-8 py-3.5 rounded-xl font-black text-chico-preto bg-gradient-chico hover:shadow-[0_0_30px_rgba(212,163,115,0.4)] transition-all flex items-center gap-2 uppercase tracking-widest text-xs"
            >
              <Save size={16} /> Salvar 
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
