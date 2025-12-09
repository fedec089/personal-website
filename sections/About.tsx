import React from 'react';
import { Reveal } from '../components/Reveal';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Cpu } from 'lucide-react';

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={`bg-white/5 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-lg shadow-black/20 ${className}`}
  >
    {children}
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-12 flex items-center gap-3">
            <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></span>
            About Me
          </h2>
        </Reveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

          {/* Main Intro - Span 2 cols */}
          <BentoCard className="md:col-span-2 flex flex-col justify-center" delay={0.1}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 text-white">
              Costruisco Esperienze Digitali di <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Valore</span>.
            </h3>
            <p className="text-gray-300 leading-relaxed font-light mb-6 text-lg">
              Ciao, sono Federico Curtoni, uno sviluppatore web freelance con 5+ anni di esperienza nella creazione di esperienze digitali che combinano estetica e funzionalità.
            </p>
            <p className="text-gray-400 leading-relaxed font-light text-base">
              Il mio approccio allo sviluppo web si basa sulla combinazione di design moderno, tecnologie all'avanguardia e una forte attenzione alla user experience. Ogni progetto è un'opportunità per creare soluzioni che non solo rispondano alle esigenze dei clienti, ma superino le loro aspettative.
            </p>
          </BentoCard>

          {/* Stats / Visual - Span 1 col */}
          <BentoCard className="flex flex-col items-center justify-center text-center group" delay={0.2}>
            {/* Inner glow effect instead of background blob to avoid conflict with global bg */}
            <div className="w-24 h-24 rounded-full border border-orange-500/30 flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Globe className="text-white relative z-10" size={32} />
            </div>
            <h4 className="text-4xl font-bold text-white mb-2">5+</h4>
            <p className="text-xs uppercase tracking-widest text-gray-500">Anni di Esperienza</p>
          </BentoCard>

          {/* Tech Stack - Span 1 col */}
          <BentoCard className="flex flex-col justify-between" delay={0.3}>
            <div className="mb-4">
              <Code2 className="text-gray-300 mb-4" size={32} />
              <h4 className="text-xl font-medium text-white mb-4">Tech Stack</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'WooCommerce'].map(tech => (
                <span key={tech} className="text-xs border border-white/10 rounded-full px-3 py-1 text-gray-300 bg-black/20 group-hover:border-orange-500/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Creative Stack - Span 1 col */}
          <BentoCard className="flex flex-col justify-between" delay={0.4}>
            <div className="mb-4">
              <Palette className="text-gray-300 mb-4" size={32} />
              <h4 className="text-xl font-medium text-white mb-4">Creative</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Figma', 'UI/UX', 'Motion Design', 'Responsive', 'Branding'].map(tech => (
                <span key={tech} className="text-xs border border-white/10 rounded-full px-3 py-1 text-gray-300 bg-black/20 group-hover:border-orange-500/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Philosophy - Span 1 col */}
          <BentoCard className="md:col-span-1 flex flex-col justify-center bg-gradient-to-br from-white/5 to-transparent" delay={0.5}>
            <Cpu className="text-gray-300 mb-4" size={32} />
            <h4 className="text-xl font-medium text-white mb-2">Performance First</h4>
            <p className="text-sm text-gray-400">
              L'estetica senza velocità è vanità. Ottimizzo ogni frame per garantire un'esperienza fluida su ogni dispositivo.
            </p>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default About;