import { motion } from 'motion/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Scale, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Map, 
  Gamepad2, 
  BookOpenText, 
  Trophy, 
  Menu,
  X
} from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const user = useAppStore(state => state.user);

  const menuItems = [
    { id: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: '/direitos', label: 'Central de Direitos', icon: <Scale size={18} /> },
    { id: '/apoio', label: 'Portal de Apoio', icon: <HeartHandshake size={18} /> },
    { id: '/seguranca-digital', label: 'Segurança Digital', icon: <ShieldCheck size={18} /> },
    { id: '/ia-educativa', label: 'IA Educativa', icon: <Sparkles size={18} /> },
    { type: 'divider', label: 'Pessoal' },
    { id: '/perfil', label: 'Perfil & Conquistas', icon: <Trophy size={18} /> },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-xl hover:bg-white/20 transition-all"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-72 bg-[#09090b]/80 backdrop-blur-3xl border-r border-white/5 flex flex-col
          transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[20px_0_40px_rgba(0,0,0,0.5)] lg:shadow-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo / Brand - Apple Style (Minimal, refined) */}
        <div className="pt-10 pb-6 px-8 flex items-center gap-4 relative z-10 shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-lg border border-white/10 relative">
             <img src="/logonavbaria.png" alt="Chico Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white font-sans">Chico do Rastro</span>
            <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Cidadania Web</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto custom-scrollbar relative z-10">
          {menuItems.map((item, idx) => {
            if (item.type === 'divider') {
               return <div key={`div-${idx}`} className="pt-6 pb-2 px-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold font-sans">{item.label}</div>
            }
            return (
              <NavLink
                key={item.id}
                to={item.id!}
                onClick={() => {
                  if (window.innerWidth < 1024) setIsOpen(false);
                }}
                className="relative flex w-full"
              >
                {({ isActive }) => (
                  <div className={`
                    relative flex items-center gap-3 px-4 py-3 w-full rounded-2xl transition-colors duration-300 font-sans z-10
                    ${isActive ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                  `}>
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-white/10 border border-white/10 rounded-2xl -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <div className={`relative flex items-center justify-center transition-transform duration-300 ${isActive ? 'scale-110 text-chico-dourado' : 'text-slate-400'}`}>
                      {isActive && (
                        <div className="absolute inset-0 bg-chico-dourado blur-md opacity-40 rounded-full" />
                      )}
                      <div className="relative z-10">{item.icon}</div>
                    </div>
                    <span className="font-medium text-sm tracking-wide">{item.label}</span>
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom User Area */}
        <div className="p-6 mt-auto relative z-10 shrink-0">
          <div className="p-4 bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-3xl w-full group hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 relative bg-black/50 border border-white/10">
                 <img 
                   src={user.avatarUrl || `https://api.dicebear.com/7.x/notionists/svg?seed=${user.name}&backgroundColor=transparent`} 
                   alt={user.name} 
                   className="w-full h-full object-cover" 
                 />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-bold text-white tracking-tight truncate max-w-[140px] font-sans">{user.name}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-medium truncate max-w-[140px] font-sans">{user.title}</div>
              </div>
            </div>
            
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[10px] font-bold font-sans">
                 <span className="text-white">Nível {user.level}</span>
                 <span className="text-slate-500">{user.xp} / {user.nextLevelXp} XP</span>
              </div>
              <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden shadow-inner relative">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-chico-dourado to-chico-creme rounded-full" 
                  style={{ width: `${(user.xp / user.nextLevelXp) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
        />
      )}
    </>
  );
}
