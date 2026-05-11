'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div className={`flex justify-between items-center px-8 py-3 rounded-2xl transition-all duration-500 ${
          isScrolled ? 'glass bg-black/40 backdrop-blur-xl' : 'bg-transparent'
        }`}>
          <Link href="#home" className="text-2xl font-bold tracking-tighter text-white hover:text-candy-blue transition-colors font-display">
            Sujal<span className="text-candy-purple">.</span>
          </Link>

          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-xs font-semibold tracking-widest uppercase text-white/70 hover:text-white transition-colors group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-candy-blue to-candy-purple transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <Link 
            href="#contact"
            className="hidden md:block text-xs font-bold tracking-widest uppercase px-5 py-2.5 bg-white text-black rounded-xl hover:scale-105 active:scale-95 transition-all"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

