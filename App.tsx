import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

// Wrapper for individual sections to handle smooth entrance/exit
const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // BACKGROUND STRATEGY:
  // Instead of small orbs, we use massive gradient layers that cover 100-150% of the screen.
  // We translate them based on scroll to create a "shifting light source" effect.
  
  // 1. Primary Light (The Bright Orange Glow)
  // Starts Top-Left (Hero) -> Moves Down-Right (Projects) -> Center Bottom (Contact)
  const primaryX = useTransform(scrollYProgress, [0, 0.5, 1], ["-20%", "40%", "0%"]);
  const primaryY = useTransform(scrollYProgress, [0, 0.5, 1], ["-20%", "20%", "60%"]);
  const primaryOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.4, 0.7]);
  
  // 2. Secondary Light (The Deep Red/Darkness)
  // Starts Bottom-Right -> Moves Up-Left -> Spreads Out
  const secondaryX = useTransform(scrollYProgress, [0, 0.5, 1], ["80%", "10%", "80%"]);
  const secondaryY = useTransform(scrollYProgress, [0, 0.5, 1], ["80%", "40%", "10%"]);

  // 3. Background Base Color Shift (Subtle)
  // Shifts from Deep Black to a very dark Brown/Orange tint and back
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#050505", "#0a0402", "#000000"]
  );

  return (
    <motion.div 
      ref={containerRef} 
      style={{ backgroundColor }}
      className="relative min-h-screen text-[#e5e5e5] selection:bg-orange-500 selection:text-white overflow-hidden transition-colors duration-1000"
    >
      
      {/* GLOBAL ANIMATED GRADIENT CANVAS */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        
        {/* Layer 1: Primary Orange Glow (Massive, Soft) */}
        <motion.div 
          style={{ x: primaryX, y: primaryY, opacity: primaryOpacity }}
          className="absolute top-0 left-0 w-[120vw] h-[120vw] -translate-x-1/2 -translate-y-1/2"
        >
             <div className="w-full h-full bg-gradient-to-br from-orange-600/30 via-orange-900/10 to-transparent rounded-full blur-[180px] mix-blend-screen" />
        </motion.div>

        {/* Layer 2: Secondary Red/Dark Accent (Counter-movement) */}
        <motion.div 
          style={{ x: secondaryX, y: secondaryY }}
          className="absolute top-0 left-0 w-[100vw] h-[100vw] -translate-x-1/2 -translate-y-1/2 opacity-40"
        >
            <div className="w-full h-full bg-gradient-to-tl from-red-900/20 via-orange-950/20 to-transparent rounded-full blur-[150px] mix-blend-plus-lighter" />
        </motion.div>

        {/* Layer 3: Ambient Pulse (Center Screen) */}
        <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-orange-500/5 rounded-full blur-[120px]"
        />

      </div>

      {/* Immersive Elements */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      
      <Navbar />

      <main className="flex flex-col w-full relative z-10">
        <SectionWrapper>
          <Hero />
        </SectionWrapper>

        <SectionWrapper>
          <About />
        </SectionWrapper>

        <SectionWrapper>
          <Projects />
        </SectionWrapper>

        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </main>
    </motion.div>
  );
}

export default App;