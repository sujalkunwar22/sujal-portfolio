'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-candy-purple mb-4">Contact</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Get In Touch</h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">Let&apos;s work together on your next project or just say hello.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-card p-10 rounded-[2rem]"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 block ml-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Sujal Kunwar"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-candy-blue/50 transition-all duration-300 placeholder:text-white/10 font-sans"
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 block ml-2">Email</label>
                <input 
                  type="email" 
                  placeholder="sujal@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-candy-blue/50 transition-all duration-300 placeholder:text-white/10 font-sans"
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 block ml-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-candy-blue/50 transition-all duration-300 placeholder:text-white/10 font-sans resize-none"
                />
              </div>

              <button 
                className="w-full px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-candy-blue to-candy-purple opacity-0 group-hover:opacity-10 transition-opacity" />
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between py-6"
          >
            <div className="space-y-12">
              <p className="text-xl text-white/60 leading-relaxed font-sans">
                I&apos;m always open to discussing new projects, <span className="text-white font-medium">creative ideas</span> or opportunities to be part of your visions.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="p-5 bg-white/5 rounded-2xl group-hover:scale-110 transition-all duration-500 border border-white/5 group-hover:border-candy-blue/30">
                    <Mail className="w-6 h-6 text-candy-blue" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-1">Email</p>
                    <p className="text-lg text-white/80 group-hover:text-white transition-colors">sujalkunwar22@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="p-5 bg-white/5 rounded-2xl group-hover:scale-110 transition-all duration-500 border border-white/5 group-hover:border-candy-purple/30">
                    <MessageSquare className="w-6 h-6 text-candy-purple" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-1">Discord</p>
                    <p className="text-lg text-white/80 group-hover:text-white transition-colors">sujal#1234</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-16">
              {[
                { icon: <GithubIcon className="w-6 h-6" />, href: 'https://github.com/sujalkunwar22', color: "hover:text-candy-blue" },
                { icon: <LinkedinIcon className="w-6 h-6" />, href: '#', color: "hover:text-candy-purple" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 glass-card rounded-2xl text-white/40 ${social.color} transition-all duration-500 hover:scale-110 active:scale-90`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

