'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-transparent py-24 overflow-visible">
      {/* Footer Top Border & Cat Animation - Full Width */}
      <div className="absolute top-0 left-0 w-full">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative h-32 pointer-events-none">
            <motion.div
              animate={{
                x: ["-10vw", "110vw"],
                y: [0, -20, 0, -20, 0, -20, 0, -20, 0, -20, 0, -20, 0, -20, 0],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-12 w-20 h-20 pointer-events-none"
            >
              <video
                src="/Untitled%20design%20(1).mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
                style={{ 
                  filter: 'invert(1) contrast(5) brightness(1.2) sepia(1) saturate(8) hue-rotate(240deg) drop-shadow(0 0 10px rgba(188, 19, 254, 0.8))',
                  mixBlendMode: 'screen'
                }}
              />
            </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
                © {new Date().getFullYear()} Sujal Kunwar
              </p>
              <p className="text-white/10 text-[8px] font-bold uppercase tracking-[0.3em]">
                All Rights Reserved
              </p>
            </div>

            <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-r from-transparent via-white/5 to-transparent mx-12" />

            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
                Crafted in Nepal
              </p>
              <p className="text-white/10 text-[8px] font-bold uppercase tracking-[0.3em]">
                Built with Next.js & GSAP
              </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
