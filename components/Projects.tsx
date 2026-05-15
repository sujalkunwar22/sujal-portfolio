'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Code, Layers } from 'lucide-react';
import Image from 'next/image';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      name: 'Service Management System',
      description: 'A comprehensive Java-based system for managing service requests and customer interactions. Features include service tracking, automated notifications, and detailed reporting capabilities.',
      tech: ['Java', 'MySQL'],
      github: 'https://github.com/sujalkunwar22/Service-Management-System.git',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Weather Forecaster',
      description: 'A dynamic weather application that provides real-time weather updates and forecasts. Built with modern web technologies, it offers an intuitive interface for checking weather conditions worldwide.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      live: 'https://weather-steel-kappa-11.vercel.app/',
      github: 'https://github.com/sujalkunwar22/weather-app.git',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Canteen Expenses Tracker',
      description: 'A Python-based application for tracking and managing canteen expenses. Features include expense logging, budget management, and detailed financial reports with data stored in JSON format.',
      tech: ['Python', 'HTML', 'JSON', 'CSS'],
      github: 'https://github.com/sujalkunwar22/canteen.git',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="projects" className="relative h-full flex flex-col justify-center pt-32 pb-20">
      <div className="container mx-auto px-6 transform -translate-y-8 md:-translate-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-candy-blue mb-4">Portfolio</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Featured Projects</h2>
          <p className="text-lg text-white/40 max-w-2xl">A selection of my recent software development work and innovative solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1
              }}
              whileHover={{ y: -16, scale: 1.02 }}
              className="group flex flex-col h-full glass-card rounded-3xl transition-all duration-500 relative z-10"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden rounded-t-3xl">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md text-white rounded-lg border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold mb-4 font-display group-hover:text-candy-blue transition-colors">
                  {project.name}
                </h4>

                <p className="text-white/60 text-sm leading-relaxed mb-8 font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 py-6 border-t border-white/10 relative z-20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-candy-blue text-white hover:text-black rounded-xl transition-all duration-300 font-bold text-xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-candy-purple/20 border border-candy-purple/30 text-white hover:bg-candy-purple rounded-xl transition-all duration-300 font-bold text-xs"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

