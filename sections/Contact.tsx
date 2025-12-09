import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="text-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

          <div>
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-medium leading-tight mb-8">
                Hai un'idea? <br />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Parliamone.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="inline-block relative group mb-8">
                <a
                  href="mailto:fede.curtoni@gmail.com"
                  className="text-2xl md:text-3xl font-light text-white relative z-10"
                  data-hover="true"
                >
                  fede.curtoni@gmail.com
                </a>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-orange-500/30 group-hover:w-full transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </Reveal>

            {/* Social Link - Text Only */}
            <Reveal delay={0.3}>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/fcurtoni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest text-gray-400 hover:text-orange-400 transition-colors"
                  data-hover="true"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end">
            <Reveal delay={0.4}>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
                  "Il design non è come appare o come ci si sente. Il design è come funziona."
                </p>
                <p className="text-gray-500 text-sm font-mono">- Steve Jobs</p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500 uppercase tracking-widest gap-4">
                <span>© {new Date().getFullYear()} Federico Curtoni</span>
                <span>P.IVA 01043170149</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;