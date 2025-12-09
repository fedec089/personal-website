import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { Project } from '../types';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "PlayPauseBe",
    category: "E-Commerce",
    year: "2023",
    image: "/assets/ppb-website.jpeg",
    description: "Sviluppo completo del sito e-commerce per PlayPauseBe, brand internazionale nel mondo dello yoga. L’interfaccia è stata progettata per guidare l’utente in un’esperienza fluida e ispirante.",
    link: "https://www.playpausebe.com/"
  },
  {
    id: 2,
    title: "Benessence",
    category: "WooCommerce",
    year: "2023",
    image: "/assets/benessence.png",
    description: "Sviluppo personalizzato su base WooCommerce per un’azienda leader nella vendita di prodotti ayurvedici biologici.",
    link: "https://www.benessence.it/"
  },
  {
    id: 3,
    title: "Tax Planning",
    category: "Corporate",
    year: "2023",
    image: "/assets/taxplanning.png",
    description: "Realizzazione del sito vetrina per un consulente specializzato in fiscalità internazionale. UI sobria e responsive.",
    link: "https://www.taxplanning-internazionale.com/"
  },
  {
    id: 4,
    title: "Blue Eye",
    category: "Healthcare",
    year: "2022",
    image: "/assets/blueeye.png",
    description: "Sito web per clinica oculistica. Interfaccia moderna, design responsive e navigazione rapida. Sviluppato per agenzia terza.",
    link: "https://blueeye.it/"
  },
  {
    id: 5,
    title: "Angelo Galasso",
    category: "Fashion Luxury",
    year: "2022",
    image: "/assets/angelogalasso.png",
    description: "Sviluppo front-end per e-commerce di moda di lusso. Layout minimale con focus su prestazioni mobile-first.",
    link: "https://angelogalasso.com/"
  },
  {
    id: 6,
    title: "Floga",
    category: "React Web App",
    year: "2024",
    image: "/assets/floga.png",
    description: "Web app realizzata in React per la creazione di sequenze yoga personalizzate. Landing page e integrazioni back-end.",
    link: "https://floga.io/"
  },
  {
    id: 7,
    title: "Bilanci Reale Mutua",
    category: "Corporate",
    year: "2025",
    image: "/assets/realeMutua.png",
    description: "Pagina web realizzata in React con carosello custom e altri dettagli grafici. Sviluppato per agenzia terza.",
    link: "https://bilanci.realegroup.eu/"
  },
  {
    id: 8,
    title: "RetailHub",
    category: "AI Web App",
    year: "2025",
    image: "/assets/RetailHub.png",
    description: "Web App React: area admin CMS, Chat one-to-one, Chat AI, gestione ruoli e autorizzazioni.",
    link: "https://app.retailhub.ai/"
  }
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getPosition = (index: number) => {
    const len = projects.length;
    let offset = index - currentIndex;

    // Adjust for circular loop
    if (offset > len / 2) offset -= len;
    if (offset < -len / 2) offset += len;

    return offset;
  };

  // Drag Logic
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="projects" className="py-24 px-0 overflow-hidden relative min-h-screen flex flex-col justify-center">
      {/* Background vignette removed or softened to allow global bg visibility */}
      {/* Only a very subtle darkening at the bottom for text readability if needed */}

      {/* Header */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-8 flex justify-between items-end relative z-20">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-normal text-white">
            Selected <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Works</span>
          </h2>
        </Reveal>

        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="p-3 md:p-4 rounded-full border border-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 backdrop-blur-md bg-white/5"
            data-hover="true"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 md:p-4 rounded-full border border-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 backdrop-blur-md bg-white/5"
            data-hover="true"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center perspective-1000 touch-pan-y z-10">
        {projects.map((project, index) => {
          const position = getPosition(index);
          const isActive = position === 0;
          const isVisible = Math.abs(position) <= 2;

          if (!isVisible) return null;

          return (
            <motion.div
              key={project.id}
              // Updated className: removed bg-[#050505], added bg-white/5 and heavy backdrop-blur
              className={`absolute w-[85vw] md:w-[60vw] lg:w-[50vw] h-[55vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-2xl ${isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
              initial={false}
              animate={{
                left: "50%",
                x: `calc(-50% + ${position * 65}%)`,
                scale: isActive ? 1 : 0.85,
                zIndex: 50 - Math.abs(position),
                opacity: Math.abs(position) > 1 ? 0 : 1,
                filter: isActive ? "brightness(1) blur(0px)" : "brightness(0.5) blur(4px)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8
              }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                if (!isActive) return;
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  handleNext();
                } else if (swipe > swipeConfidenceThreshold) {
                  handlePrev();
                }
              }}
              onClick={() => {
                if (!isActive) setCurrentIndex(index);
              }}
              whileHover={{ scale: isActive ? 1 : 0.87 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80'}`} />
              </div>

              {/* Content - Visible only on Active Slide */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="absolute bottom-0 left-0 w-full p-6 md:p-10 pointer-events-none flex justify-center md:justify-start"
                  >
                    <div className="pointer-events-auto bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl max-w-3xl w-full shadow-2xl">
                      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="text-left w-full">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-[10px] md:text-xs font-mono border border-white/30 rounded-full px-2 py-1 text-white bg-white/5 backdrop-blur-sm">
                              {project.year}
                            </span>
                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-orange-400 font-bold">
                              {project.category}
                            </span>
                          </div>

                          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                            {project.title}
                          </h3>

                          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="shrink-0 w-full md:w-auto">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full uppercase text-xs font-bold tracking-widest hover:bg-orange-100 transition-colors shadow-lg w-full md:w-auto"
                            data-hover="true"
                          >
                            Vedi Sito <ArrowUpRight size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Minimal Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-orange-500' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;