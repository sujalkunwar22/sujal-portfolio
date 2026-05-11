'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full glass text-[10px] font-bold tracking-[0.4em] uppercase text-candy-blue"
          >
            Software Developer based in Nepal
          </motion.div>
          
          <motion.h1 
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 font-display"
            initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <span className="text-white">I&apos;m </span>
            <span className="text-gradient-candy">Sujal</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            I craft <span className="text-white font-medium">beautiful and functional</span> websites that help businesses grow and succeed in the digital world.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              href="#projects" 
              className="group relative px-10 py-4 bg-white text-black font-bold rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-candy-blue to-candy-purple opacity-0 group-hover:opacity-20 transition-opacity" />
            </Link>
            <Link 
              href="#contact" 
              className="px-10 py-4 bg-transparent border border-white/10 text-white font-bold rounded-2xl hover:border-white/40 glass transition-all duration-500 hover:scale-105 active:scale-95"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">Explore</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

