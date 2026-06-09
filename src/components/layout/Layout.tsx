import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { CinematicBackground } from './CinematicBackground';
import { AnimatePresence, motion } from 'motion/react';
import { Outlet, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { GlobalAssistant } from '../GlobalAssistant';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen w-full relative overflow-hidden bg-chico-escuro text-slate-200">
      <CinematicBackground />
      <GlobalAssistant />
      
      <Sidebar 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative scroll-smooth flex flex-col custom-scrollbar">
        {/* Top Fade overlay and Search */}
        <div className="fixed top-0 left-0 lg:left-72 right-0 h-32 bg-gradient-to-b from-chico-escuro via-chico-escuro/90 to-transparent z-40 pointer-events-none flex items-start justify-center pt-6 pl-4 pr-16 lg:px-16 lg:justify-start">
           <div className="w-full max-w-xl bg-black/40 border border-white/10 rounded-2xl backdrop-blur-xl flex items-center px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] pointer-events-auto group focus-within:border-chico-dourado/50 focus-within:shadow-[0_0_20px_rgba(212,163,115,0.2)] transition-all">
             <Search size={18} className="text-slate-400 group-focus-within:text-chico-dourado transition-colors" />
             <input 
               type="text" 
               placeholder="Pesquisar conteúdos, direitos e trilhas..." 
               className="bg-transparent border-none outline-none text-sm text-white px-3 w-full placeholder:text-slate-500 font-sans"
             />
             <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-slate-400 font-mono hidden md:block">
               CTRL K
             </div>
           </div>
        </div>
        
        <div className="px-4 py-32 lg:px-16 lg:py-24 w-full max-w-7xl mx-auto flex-1 min-h-max isolate">
          <AnimatePresence mode="wait">
             <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
