import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 relative border-t border-white/5 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-10 text-2xl font-bold tracking-tighter font-display">
          Sujal<span className="text-candy-purple">.</span>
        </div>
        <p className="text-white/30 text-[10px] font-bold tracking-[0.5em] uppercase mb-4">
          Designed & Built with <span className="text-candy-pink">passion</span> by Sujal
        </p>
        <p className="text-[10px] text-white/10 uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Sujal Kunwar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

