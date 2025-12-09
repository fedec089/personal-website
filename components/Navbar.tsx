import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "Chi sono", href: "#about" },
    { name: "Progetti", href: "#projects" },
    { name: "Contatti", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-4 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-8 md:py-4 mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${isScrolled
        ? "bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/5"
        : "bg-transparent border border-transparent"
        }`}
    >
      <a href="#" className="text-xl font-semibold tracking-tight uppercase text-white" data-hover="true">
        Federico Curtoni
      </a>

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-xs uppercase tracking-widest text-gray-300 hover:text-white transition-colors relative group"
            data-hover="true"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="md:hidden z-50 relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-sm uppercase text-white font-medium tracking-widest"
          data-hover="true"
        >
          {isMenuOpen ? "Chiudi" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-3xl font-light text-white hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;