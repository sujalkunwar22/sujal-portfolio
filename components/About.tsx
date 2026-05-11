'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Shield, Terminal, Database, GitBranch, Cpu } from 'lucide-react';

const About = () => {
  const technologies = [
    { name: 'HTML5', description: 'Creating structured, semantic markup for modern web applications', icon: <Globe className="w-6 h-6" />, color: "var(--color-candy-blue)" },
    { name: 'CSS3', description: 'Crafting responsive layouts and engaging animations', icon: <Palette className="w-6 h-6" />, color: "var(--color-candy-pink)" },
    { name: 'JavaScript', description: 'Building interactive and dynamic web experiences', icon: <Code2 className="w-6 h-6" />, color: "var(--color-candy-purple)" },
    { name: 'Python', description: 'Developing robust applications and automation scripts', icon: <Terminal className="w-6 h-6" />, color: "var(--color-candy-blue)" },
    { name: 'Java', description: 'Creating enterprise-level applications and systems', icon: <Cpu className="w-6 h-6" />, color: "var(--color-candy-purple)" },
    { name: 'Git', description: 'Version control and collaborative development', icon: <GitBranch className="w-6 h-6" />, color: "var(--color-candy-pink)" },
  ];

  const whatIDo = [
    'Develop full-stack web applications',
    'Create efficient database solutions',
    'Design responsive and intuitive user interfaces',
    'Implement secure authentication systems',
    'Write clean, maintainable code',
  ];

  return (
    <section id="about" className="relative h-full flex items-center pt-32 pb-20">
      <div className="container mx-auto px-6 glass-card p-12 rounded-[2.5rem] border-white/5 shadow-2xl transform -translate-y-8 md:-translate-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display leading-tight">
              About Me — <span className="text-white/40">Crafting innovative solutions</span>
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 font-sans">
              I&apos;m a software developer with a strong foundation in <span className="text-white">Python, Java, and modern web tech</span>. I believe in writing clean code that solves real-world problems.
            </p>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-candy-blue mb-4">Core Focus</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {whatIDo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-candy-purple group-hover:scale-150 transition-transform shadow-[0_0_10px_var(--color-candy-purple)]" />
                    <span className="text-xs font-medium text-white/70">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-candy-purple">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                >
                  <div 
                    className="mb-3 p-2 w-fit rounded-lg bg-white/5 text-sm"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <h4 className="text-sm font-bold font-display">{tech.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

