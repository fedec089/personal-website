import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-visible">

      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* Removed Reveal wrapper to avoid overflow:hidden clipping the italic font */}
        <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] font-normal tracking-tight mb-8 text-white mix-blend-overlay opacity-90">
          Digital{' '}
          <motion.span
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-semibold italic opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 inline-block pr-4 py-2"
          >
            Artist
          </motion.span>
          &
          Developer
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 gap-8">
          <Reveal delay={0.4}>
            <div className="p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 max-w-lg shadow-[0_0_30px_rgba(249,115,22,0.1)]">
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                Trasformo idee complesse in esperienze digitali fluide e immersive attraverso l'uso di tecnologie moderne e design emozionale.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex items-center gap-4 text-gray-400">
              <span className="uppercase text-xs tracking-widest">Based in Italy</span>
              <div className="w-12 h-[1px] bg-gray-600"></div>
              <span className="uppercase text-xs tracking-widest text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">Available</span>
            </div>
          </Reveal>
        </div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-2 text-gray-500"
      >
        <ArrowDown size={20} className="animate-bounce" />
        <span className="text-xs uppercase tracking-widest">Scorri</span>
      </motion.div>
    </section>
  );
};

export default Hero;