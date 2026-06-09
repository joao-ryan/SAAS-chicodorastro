import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useEffect, useRef, useMemo } from "react";

// For generating random coordinates safely on the client
const random = (min: number, max: number) => Math.random() * (max - min) + min;

export function CinematicHeroBackground() {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax calculations based on scroll
  const scrollY1 = useTransform(scrollY, [0, 1000], [0, 50]);
  const scrollY2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const scrollY3 = useTransform(scrollY, [0, 1000], [0, 150]);

  // Combined mouse transforms for layers
  const moveX1 = useTransform(smoothMouseX, [-1, 1], [-15, 15]);
  const moveY1 = useTransform(smoothMouseY, [-1, 1], [-15, 15]);

  const moveX2 = useTransform(smoothMouseX, [-1, 1], [-35, 35]);
  const moveY2 = useTransform(smoothMouseY, [-1, 1], [-35, 35]);

  const moveX3 = useTransform(smoothMouseX, [-1, 1], [-70, 70]);
  const moveY3 = useTransform(smoothMouseY, [-1, 1], [-70, 70]);

  // Pre-generate stars for SSR consistency (though this is client-side)
  const stars = useMemo(() => Array.from({ length: 120 }).map((_, i) => ({
    id: i,
    x: random(0, 100),
    y: random(0, 100),
    size: random(1, 3),
    opacity: random(0.2, 0.9),
    duration: random(4, 10),
    delay: random(0, 5)
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#060608]">
      {/* Layer 1: Sky/Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,108,223,0.15)_0%,rgba(130,87,229,0.05)_40%,transparent_100%)]" />

      {/* Layer 2: Stars */}
      <motion.div 
         style={{ x: moveX1, y: moveY1 }}
         className="absolute inset-[-10%] w-[120%] h-[120%]"
      >
        {stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.1, star.opacity],
              scale: [1, 0.6, 1],
              boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px rgba(255,255,255,0.8)` : 'none'
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Layer 4: Minimalist Silhouettes (Sertão) */}
      <motion.div
         style={{ x: moveX2, y: scrollY2 }}
         className="absolute bottom-0 left-[-5%] w-[110%] h-[35vh] opacity-60 z-10 origin-bottom"
      >
         {/* Distant Mountains */}
         <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-[120%] object-cover object-bottom" preserveAspectRatio="none">
            <path fill="#020203" fillOpacity="1" d="M0,256L60,245.3C120,235,240,213,360,208C480,203,600,213,720,197.3C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
         </svg>
         {/* Foreground Hills / Terrain */}
          <svg viewBox="0 0 1440 320" className="absolute bottom-[-10%] w-[120%] left-[-10%] h-[90%] object-cover object-bottom opacity-90" preserveAspectRatio="none">
            <path fill="#010101" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
         </svg>
      </motion.div>

      {/* Layer 5: Tech Glows */}
      <motion.div
        style={{ x: moveX2, y: moveY2 }} 
        className="absolute inset-0 z-10 mix-blend-screen overflow-hidden"
      >
        <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] bg-brand-blue/15 blur-[120px] rounded-full animate-pulse opacity-60" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[0%] right-[-10%] w-[60vw] h-[60vw] bg-brand-purple/15 blur-[150px] rounded-full animate-pulse opacity-50" style={{ animationDuration: '12s' }} />
        <div className="absolute top-[30%] right-[20%] w-[40vw] h-[40vw] bg-brand-gold/10 blur-[130px] rounded-full animate-pulse opacity-40" style={{ animationDuration: '14s' }} />
      </motion.div>

      {/* Layer 6: Glowing Rings behind Mascot */}
      <motion.div
        style={{ x: moveX3, y: scrollY3 }}
        className="absolute top-[40%] md:top-[50%] right-[10%] md:right-[25%] -translate-x-1/2 -translate-y-1/2 z-10 opacity-40 pointer-events-none"
      >
         <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-white/5 opacity-60"
            style={{ 
               width: '800px', height: '800px', left: '-400px', top: '-400px',
               boxShadow: '0 0 40px rgba(130,87,229,0.15), inset 0 0 40px rgba(130,87,229,0.1)' 
            }}
         />
         <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute border border-brand-gold/10 opacity-70 mix-blend-screen"
            style={{ 
               width: '600px', height: '600px', left: '-300px', top: '-300px', borderRadius: '45% 55% 45% 55%'
            }}
         />
         <motion.div
            animate={{ rotate: 360, scale: [1, 1.02, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-brand-blue/10 border-dashed"
            style={{ 
               width: '1000px', height: '1000px', left: '-500px', top: '-500px'
            }}
         />
      </motion.div>

      {/* Layer 8: Light Rays */}
      <motion.div 
         style={{ x: moveX1, y: moveY1 }}
         className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] z-10 opacity-30 pointer-events-none mix-blend-screen origin-top"
      >
        <motion.div 
          animate={{ opacity: [0.15, 0.4, 0.15], x: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-[20%] w-[40%] h-full bg-gradient-to-b from-brand-gold/20 via-brand-gold/5 to-transparent rotate-[35deg] blur-[50px] origin-top"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2], x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-0 right-[20%] w-[30%] h-full bg-gradient-to-b from-brand-blue/20 via-brand-purple/10 to-transparent -rotate-[25deg] blur-[60px] origin-top"
        />
      </motion.div>

       {/* Layer 7: Volumetric Fog / Overlays */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.7)_100%)] z-20 pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-brand-bg via-[#0a0a0b]/80 to-transparent z-20 pointer-events-none" />

      {/* Layer 3: Particles (Dust) - Highest background layer to float in front of mist */}
       <motion.div 
         style={{ x: moveX3, y: moveY3 }}
         className="absolute inset-[-10%] w-[120%] h-[120%] z-30 pointer-events-none mix-blend-screen"
      >
         <CanvasParticles />
      </motion.div>

    </div>
  );
}

// Canvas-based particle system for ultra-smooth 60fps performance
function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = Math.random; // Ensure no SSR issues
    if (typeof window === 'undefined') return;

    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    if (!ctx) return;

    let width = cvs.width = window.innerWidth * 1.2;
    let height = cvs.height = window.innerHeight * 1.2;

    const resize = () => {
      width = cvs.width = window.innerWidth * 1.2;
      height = cvs.height = window.innerHeight * 1.2;
    };
    window.addEventListener('resize', resize);

    const particles: any[] = [];
    const count = window.innerWidth < 768 ? 80 : 180; // Optimize for mobile

    for (let i = 0; i < count; i++) {
       particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4 - 0.1, // Float upwards naturally
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.1,
          glow: Math.random() > 0.85,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          pulseOffset: Math.random() * Math.PI * 2
       });
    }

    let animationId: number;
    let time = 0;

    const render = () => {
       time++;
       ctx.clearRect(0, 0, width, height);

       particles.forEach(p => {
          // Add subtle wave motion
          p.x += p.vx + Math.sin(time * 0.01 + p.pulseOffset) * 0.2;
          p.y += p.vy;

          // Wrap edges
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Pulsate opacity slightly
          const currentOpacity = p.opacity + Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.2;
          const safeOpacity = Math.max(0.05, Math.min(1, currentOpacity));

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          
          if (p.glow) {
             ctx.shadowBlur = 15;
             ctx.shadowColor = '#D4A373';
             ctx.fillStyle = `rgba(212, 163, 115, ${safeOpacity})`;
          } else {
             ctx.shadowBlur = 2;
             ctx.shadowColor = '#ffffff';
             ctx.fillStyle = `rgba(255, 255, 255, ${safeOpacity * 0.8})`;
          }
          
          ctx.fill();
       });

       animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70 filter brightness-125" />
  );
}
