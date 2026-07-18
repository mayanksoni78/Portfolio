'use client';
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { personalInfo, achievements } from '@/lib/data';
import { 
  SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiCss, 
  SiNodedotjs, SiMongodb, SiExpress, SiMysql,
  SiLeetcode, SiCodeforces, SiCodechef 
} from 'react-icons/si';
import { FaTrophy } from 'react-icons/fa';

const coreSkills = [
  { name: 'Javascript', icon: SiJavascript, color: 'text-yellow-400 group-hover:brightness-125' },
  { name: 'React JS', icon: SiReact, color: 'text-cyan-400 group-hover:brightness-125' },
  { name: 'React Native', icon: SiReact, color: 'text-cyan-500 group-hover:brightness-125' },
  { name: 'Next JS', icon: SiNextdotjs, color: 'text-white group-hover:brightness-125' },
  { name: 'HTML', icon: SiHtml5, color: 'text-orange-500 group-hover:brightness-125' },
  { name: 'CSS', icon: SiCss, color: 'text-blue-500 group-hover:brightness-125' },
  { name: 'Node Js', icon: SiNodedotjs, color: 'text-green-500 group-hover:brightness-125' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400 group-hover:brightness-125' },
  { name: 'Express JS', icon: SiExpress, color: 'text-slate-300 group-hover:text-white' },
  { name: 'MySql', icon: SiMysql, color: 'text-blue-400 group-hover:brightness-125' },
];

const getPlatformIcon = (title: string) => {
  if (title.toLowerCase().includes('leetcode')) return <SiLeetcode className="text-[#FFA116]" />;
  if (title.toLowerCase().includes('codeforces')) return <SiCodeforces className="text-[#1F8ACB]" />;
  if (title.toLowerCase().includes('codechef')) return <SiCodechef className="text-[var(--color-text-primary)]" />;
  return <FaTrophy className="text-[#FBBF24]" />;
};

// Helper function to get the profile URL based on the platform name
const getPlatformUrl = (title: string) => {
  const username = 'mayanksoni78';
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('leetcode')) return `https://leetcode.com/${username}`;
  if (lowerTitle.includes('codeforces')) return `https://codeforces.com/profile/${username}`;
  if (lowerTitle.includes('codechef')) return `https://www.codechef.com/users/${username}`;
  
  return null; // Return null if it's not one of the specific coding platforms
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 120, damping: 15 } 
  }
};

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      
      {/* Ambient Background Glows — kept far from skills card */}
      <div className="absolute top-0 right-[-15%] w-[28rem] h-[28rem] bg-[var(--color-accent)]/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-15%] w-[24rem] h-[24rem] bg-[var(--color-glow)] rounded-full blur-[140px] pointer-events-none" />

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
            About Me
          </span>
        </motion.h2>

        <div className="h-10 md:h-14" />

        {/* Bio Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[var(--color-text-secondary)] text-center text-lg md:text-xl w-full max-w-5xl mx-auto leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <div className="h-16 md:h-20" />

        {/* Coding Platforms / Stats */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto"
        >
          {achievements.map((item) => {
            const url = getPlatformUrl(item.title);
            
            const cardContent = (
              <GlassCard className={`p-8 text-center h-full flex flex-col items-center justify-center bg-[var(--color-bg-tertiary)]/50 border border-[var(--color-border-light)] hover:border-[var(--color-accent)] hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:-translate-y-2 transition-all duration-300 group rounded-2xl ${url ? 'cursor-pointer' : ''}`}>
                <div className="text-3xl md:text-4xl mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300">
                  {getPlatformIcon(item.title)}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-2">{item.stat}</h3>
                <p className="text-sm md:text-base text-[var(--color-text-secondary)] font-medium tracking-wide">{item.title}</p>
              </GlassCard>
            );

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="h-full"
              >
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </motion.div>
        
        <div className="h-20 md:h-28" />
        
        {/* ─── My Skills Card ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto relative"
        >
          {/* Card */}
          <div className="relative rounded-[2rem] overflow-hidden border border-[var(--color-border)] shadow-[0_8px_60px_rgba(0,0,0,0.4)]">
            
            {/* Dot Grid Pattern Background */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            {/* Gradient base fill */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-secondary)]/90 via-[var(--color-bg-primary)]/80 to-[var(--color-bg-secondary)]/90" />

            {/* Top-left corner glow — scoped inside card */}
            <div className="absolute top-[-40px] left-[-40px] w-48 h-48 bg-[var(--color-accent)]/10 rounded-full blur-[80px] pointer-events-none" />
            {/* Bottom-right corner glow */}
            <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 bg-[var(--color-glow)] rounded-full blur-[80px] pointer-events-none" />

            {/* Top gradient accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/60 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-8 py-12 md:px-16 md:py-16">
              <div className="h-7 md:h-10" />
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-wide text-center"
              >
                <span className="gradient-text">My Skills</span>
              </motion.h2>

              {/* Divider */}
              <div className="mt-4 mb-12 w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
               <div className="h-7 md:h-12" />
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-8 md:gap-10 w-full"
              >
                {coreSkills.map((skill) => (
                  <motion.div 
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.08 }}
                    className="flex flex-col items-center justify-center gap-3 group w-[90px] md:w-[100px] cursor-default"
                  >
                    <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-white/[0.04] border border-white/[0.10] flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_18px_rgba(6,182,212,0.15)] group-hover:bg-white/[0.08]">
                      <skill.icon className={`text-3xl md:text-4xl transition-colors duration-300 ${skill.color}`} />
                    </div>
                    <span className="text-[var(--color-text-secondary)] text-xs md:text-sm font-medium whitespace-nowrap text-center group-hover:text-white transition-colors duration-300 tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </motion.div>

        <div className="h-10 md:h-14" />
      </div>
    </section>
  );
}