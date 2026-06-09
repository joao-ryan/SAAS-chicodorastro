import { useEffect, useState } from "react";
import Lenis from "lenis";

import { Particles } from "../components/Particles";
import { Preloader } from "../components/Preloader";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Problems } from "../components/Problems";
import { Timeline } from "../components/Timeline";
import { Previews } from "../components/Previews";
import { Impact } from "../components/Impact";
import { Footer } from "../components/Footer";

export function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-brand-bg text-brand-cream font-sans min-h-screen selection:bg-brand-gold selection:text-brand-black overflow-hidden relative custom-scrollbar">
      
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {/* Hide content until loading finishes to avoid scroll jumps */}
      <div className={`transition-opacity duration-1000 relative z-10 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Particles count={50} className="fixed inset-0 z-0 h-screen w-screen mix-blend-screen opacity-40 pointer-events-none" />
        <Navbar />
        <Hero />
        <Problems />
        <Timeline />
        <Previews />
        <Impact />
        <Footer />
      </div>
    </main>
  );
}
