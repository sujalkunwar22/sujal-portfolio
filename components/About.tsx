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
    <section id="about" className="relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-10 font-display leading-tight">
              About Me — <span className="text-white/40">Passionate about creating innovative solutions</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-12 font-sans">
              I&apos;m a passionate software developer with a strong foundation in both front-end and back-end development. 
              My journey in programming started with <span className="text-white">Python and Java</span>, and I&apos;ve since expanded my expertise to web 
              technologies and database management. I believe in writing clean, efficient code and creating user-friendly 
              applications that solve real-world problems.
            </p>

            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-candy-blue mb-8">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {whatIDo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-candy-purple group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-medium text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-candy-purple text-right lg:text-left">Tech Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group p-8 rounded-2xl glass-card relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div 
                      className="mb-6 p-3 w-fit rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-500"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 font-display group-hover:text-candy-blue transition-colors">{tech.name}</h4>
                    <p className="text-white/40 text-sm leading-relaxed font-sans">{tech.description}</p>
                  </div>
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

