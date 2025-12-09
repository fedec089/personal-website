import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "Chi sono", href: "#about" },
    { name: "Progetti", href: "#projects" },
    { name: "Contatti", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-4 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-8 md:py-4 mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
        isScrolled 
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
            className="text-xs uppercase tracking-widest text-gray-300 hover:text-white transition-colors relative group"
            data-hover="true"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="md:hidden">
         <button className="text-sm uppercase text-white" data-hover="true">Menu</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;