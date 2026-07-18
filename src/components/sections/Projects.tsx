'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import Image from 'next/image';
import { ExternalLink, LayoutDashboard, Link as LinkIcon } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-[-10%] w-[30rem] h-[30rem] bg-[var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-[-10%] w-[30rem] h-[30rem] bg-[var(--color-glow)] rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 md:px-10 lg:px-24 flex flex-col items-center justify-center">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-5xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] gradient-text tracking-wide leading-tight">
            Projects
          </span>
        </motion.h2>
        
        <div className="h-10 md:h-14" /> {/* Spacer Div */}

       <div className="flex flex-col w-full max-w-7xl mx-auto gap-18 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group w-full"
            >
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 bg-[var(--color-bg-primary)]/40 border border-[var(--color-border)] backdrop-blur-xl rounded-[1rem] p-8 md:p-12 lg:p-16 shadow-2xl transition-all duration-500 hover:border-[var(--color-border-light)] hover:shadow-[0_8px_40px_rgba(6,182,212,0.1)] relative overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-glass-border)] to-transparent pointer-events-none" />
                
                {/* ─── Project Image Wrapper ─── */}
                <div className="w-[calc(100%-1.5rem)] lg:w-[42%] h-64 sm:h-80 lg:h-[340px] relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] border border-[var(--color-border)] flex items-center justify-center shrink-0 z-10 ml-6 lg:ml-12 self-start lg:self-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-glow)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
                      <h3 className="text-7xl md:text-8xl font-bold text-[var(--color-bg-primary)] opacity-50 font-[family-name:var(--font-heading)] select-none">
                        {project.title.substring(0, 2).toUpperCase()}
                      </h3>
                    </div>
                  )}
                </div>
                
                {/* ─── Project Details ─── */}
                {/* Added explicit mt-12 for mobile separation, and lg:ml-8 for desktop separation */}
                <div className="w-full lg:w-[50%] flex flex-col z-10 mt-12 lg:mt-0 lg:ml-10">
                  {/* Reduced weight title */}
                  <h3 className="text-3xl lg:text-4xl font-medium font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight text-center lg:text-left">
                    {project.title}
                  </h3>
                  
                  <div className="h-4 md:h-6" />
                  
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed text-center lg:text-left">
                    {project.description}
                  </p>
                  
                  <div className="h-6 md:h-8" />
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-4 py-2 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-sm text-[var(--color-accent)] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="h-8 md:h-12" />
                  
                  {/* Buttons Container aligned to right */}
                  <div className="flex items-center justify-center lg:justify-end gap-10">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group/btn">
                        <div className="w-16 h-16 bg-[var(--color-text-primary)] rounded-2xl flex items-center justify-center text-[var(--color-bg-primary)] shadow-lg group-hover/btn:-translate-y-2 transition-transform duration-300">
                          <Github size={32} />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)] font-medium flex items-center gap-1.5 group-hover/btn:text-[var(--color-text-primary)] transition-colors">
                          Source Code <LinkIcon size={14} />
                        </span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group/btn">
                        <div className="w-16 h-16 bg-[var(--color-text-primary)] rounded-2xl flex items-center justify-center shadow-lg group-hover/btn:-translate-y-2 transition-transform duration-300">
                          <LayoutDashboard size={32} className="text-[var(--color-bg-primary)]" />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)] font-medium flex items-center gap-1.5 group-hover/btn:text-[var(--color-text-primary)] transition-colors">
                          Live Project <ExternalLink size={14} />
                        </span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}