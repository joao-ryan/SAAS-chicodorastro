import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Particles({ count = 40, className = "", color = "bg-brand-gold" }) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
      }));
    };
    setParticles(generateParticles());
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${color} blur-[1px]`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: ["0%", "-100%", "-200%"],
            x: ["0%", `${Math.random() * 50 - 25}%`, `${Math.random() * 100 - 50}%`],
            opacity: [0, 0.4 + Math.random() * 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
