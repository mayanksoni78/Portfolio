'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { personalInfo, socialLinks } from '@/lib/data';
import { Briefcase, ChevronDown, Mail, FileText } from 'lucide-react';

import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaInstagram as Instagram,
} from 'react-icons/fa';

export default function Hero() {
  const renderIcon = (name: string) => {
    const key = name.toLowerCase();

    if (key.includes('github')) {
      return <Github size={34} className="text-[var(--color-text-primary)]" />;
    }
    if (key.includes('linkedin')) {
      return <Linkedin size={34} className="text-[#0077b5]" />;
    }
    if (key.includes('twitter') || key.includes('x')) {
      return <span className="text-[var(--color-text-primary)] text-2xl font-bold">𝕏</span>;
    }
    if (key.includes('email') || key.includes('mail')) {
      return <Mail size={34} className="text-[#EA4335]" />;
    }
    if (key.includes('instagram')) {
      return <Instagram size={34} className="text-[#E1306C]" />;
    }
    return null;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-8 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-[var(--color-accent)]/[0.08] rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute top-[60%] right-[10%] w-96 h-96 bg-[var(--color-glow)] rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[30%] right-[30%] w-64 h-64 bg-[var(--color-accent)]/[0.05] rounded-full blur-[80px] animate-[float_12s_ease-in-out_2s_infinite]" />
        <div className="absolute bottom-[15%] left-[25%] w-80 h-80 bg-[var(--color-glow)] rounded-full blur-[100px] animate-[float_9s_ease-in-out_1s_infinite_reverse]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
         <div className="h-12" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center w-full"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-3xl text-[var(--color-text-secondary)] font-mono tracking-wide"
          >
            Hi, I&apos;m
          </motion.p>
          
          <div className="h-2" />

          <motion.h1
            variants={fadeInUp}
            className="text-6xl sm:text-7xl md:text-8xl leading-[1.25] font-bold font-[family-name:var(--font-heading)] gradient-text tracking-wide"
          >
            {personalInfo?.name || 'Mayank Soni'}
          </motion.h1>

          <div className="h-4" />

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl text-[var(--color-text-tertiary)] leading-[1.5] font-semibold"
          >
            {personalInfo?.tagline || 'Full Stack Developer'}
          </motion.h2>

          <div className="h-6 md:h-8" />

          <motion.p
            variants={fadeInUp}
            className="text-[var(--color-text-secondary)] text-lg md:text-xl w-full max-w-5xl leading-relaxed"
          >
            I am a full stack developer and CS student at IIIT Vadodara dedicated to building high performance web applications. By blending a strong background in competitive programming with modern MERN stack expertise, I turn complex technical challenges into clean, user centric software. I am constantly learning, coding, and looking for opportunities to build tools that make a tangible impact.
          </motion.p>

          <div className="h-12 md:h-16" />

          <motion.div
            variants={fadeInUp}
            className="flex flex-row items-center justify-center gap-6 sm:gap-8 relative z-20 w-full"
          >
            {socialLinks?.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name.toLowerCase() !== 'email' ? '_blank' : undefined}
                rel={link.name.toLowerCase() !== 'email' ? 'noopener noreferrer' : undefined}
                aria-label={link.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center shadow-[0_0_15px_var(--color-glow)] hover:shadow-[0_0_20px_var(--color-accent)] hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                {renderIcon(link.name)}
              </a>
            ))}
          </motion.div>

          <div className="h-10 md:h-12" />

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-20 w-full"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-3 bg-[var(--color-button-secondary)] backdrop-blur-md border border-[var(--color-border)] text-[var(--color-text-primary)] text-lg md:text-xl rounded-lg w-[220px] h-[60px] font-bold hover:bg-[var(--color-button-secondary-hover)] transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <Briefcase size={22} />
              <span>View Projects</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-3 bg-[var(--color-button-secondary)] backdrop-blur-md border border-[var(--color-border)] text-[var(--color-text-primary)] text-lg md:text-xl rounded-lg w-[220px] h-[60px] font-bold hover:bg-[var(--color-button-secondary-hover)] transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <FileText size={22} />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[var(--color-text-tertiary)]"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}