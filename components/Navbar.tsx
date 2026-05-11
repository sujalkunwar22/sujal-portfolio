'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className={`container mx-auto px-6 transition-all duration-500 ${
        isScrolled ? 'max-w-4xl' : 'max-w-7xl'
      }`}>
        <div className={`flex justify-between items-center px-6 md:px-8 py-3 rounded-2xl transition-all duration-500 ${
          isScrolled ? 'glass bg-black/40 backdrop-blur-xl border-white/10' : 'bg-transparent border-transparent'
        }`}>
          <Link href="#home" className="text-2xl font-bold tracking-tighter text-white hover:text-candy-blue transition-colors font-display relative z-50">
            Sujal<span className="text-candy-purple">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-candy-blue to-candy-purple transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <Link 
            href="#contact"
            className="hidden md:block text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 bg-white text-black rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Hire Me
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center space-y-12"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold font-display text-white hover:text-candy-blue transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-10 py-5 bg-gradient-to-r from-candy-blue to-candy-purple text-white font-bold rounded-2xl text-lg shadow-[0_0_30px_rgba(188,19,254,0.3)]"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

