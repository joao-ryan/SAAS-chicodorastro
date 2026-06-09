import { motion, useScroll, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Home, Info, LayoutTemplate, Heart, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  const navItems = [
    { name: "Início", href: "#hero", icon: Home },
    { name: "Sobre", href: "#problema", icon: Info },
    { name: "Plataforma", href: "#plataforma", icon: LayoutTemplate },
    { name: "Impacto", href: "#impacto", icon: Heart },
    { name: "Contato", href: "#footer", icon: Mail },
  ];

  return (
    <motion.div
      className={cn(
        "fixed top-0 inset-x-0 sm:top-6 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-50 flex justify-center transition-all duration-500",
        isScrolled ? "sm:top-4" : "sm:top-6"
      )}
    >
      <nav
        className={cn(
          "w-full sm:w-auto flex items-center justify-between sm:justify-center px-4 py-3 sm:px-6 sm:py-3 transition-all duration-500",
          "bg-[#0a0a0f]/80 sm:bg-white/[0.03] sm:hover:bg-white/[0.08] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/[0.03]",
          "border-b border-white/5 sm:border sm:rounded-full sm:border-white/10 sm:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        )}
      >
        {/* Logo / Mobile branding */}
        <div className="flex sm:hidden items-center gap-2 relative group cursor-pointer mr-auto">
           <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/90 relative z-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" fillOpacity="0.2"/>
           </svg>
           <span className="font-heading font-semibold text-[13px] text-white/90 relative z-10 tracking-wide">
              Chico do Rastro
           </span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden sm:flex items-center gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="group flex flex-col items-center justify-center relative px-6 py-3 sm:py-2.5 rounded-full hover:bg-white/10 transition-all text-brand-cream/60 hover:text-brand-cream"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[14px] font-medium tracking-wide">
                    {item.name}
                  </span>
                </div>
              </a>
            );
          })}

          <div className="w-[1px] h-6 bg-white/10 mx-4" />

          <Link to="/auth" className="flex items-center gap-2 px-8 py-2.5 ml-1 bg-white/10 hover:bg-white/20 text-brand-cream hover:text-white rounded-full text-[14px] font-semibold tracking-wide transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
            Começar
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="sm:hidden text-brand-cream/80 p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </nav>

      {/* Dropdown Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
             initial={{ opacity: 0, y: -10, scale: 0.98 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: -10, scale: 0.98 }}
             transition={{ duration: 0.2, ease: "easeOut" }}
             className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-3xl sm:hidden bg-[#111116]/95 backdrop-blur-3xl border border-white/5 shadow-2xl overflow-hidden ring-1 ring-white/10"
          >
            <div className="flex flex-col gap-1">
               {navItems.map((item) => {
                 const Icon = item.icon;
                 return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-brand-cream/70 hover:text-white hover:bg-white/10 transition-all font-medium text-[15px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/5">
                      <Icon className="w-4 h-4 opacity-80" />
                    </div>
                    {item.name}
                  </a>
                 );
               })}
               <div className="h-[1px] bg-white/5 my-3 mx-2" />
               <Link to="/auth" className="flex items-center justify-center w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold transition-all text-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 font-sans tracking-wide">
                 Começar Agora
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
