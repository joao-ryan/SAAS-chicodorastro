import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices with a mouse
    if (!window.matchMedia("(pointer: fine)").matches) return;
    
    setIsVisible(true);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-brand-gold rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_10px_rgba(212,163,115,0.8)]"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.5 : 1
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 border-2 border-brand-gold/10 bg-brand-gold/5 rounded-full pointer-events-none z-[9998] blur-[2px] shadow-[0_0_30px_rgba(212,163,115,0.2)]"
        animate={{
          x: position.x - 48,
          y: position.y - 48,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.8 }}
      />
    </>
  );
}
