'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { education, leadership } from '@/lib/data';
import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

// Forced inline style objects — these WILL apply regardless of Tailwind config/cache
const cardBoxStyle: React.CSSProperties = {
  borderRadius: '14px',
};

const cardInnerStyle: React.CSSProperties = {
  padding: '48px 40px',
};

const gapBelowNumberStyle: React.CSSProperties = {
  marginTop: '20px',
};

const gapBelowBadgeStyle: React.CSSProperties = {
  marginTop: '12px',
  marginBottom: '12px',
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      
      <div className="absolute top-1/4 left-[-10%] w-[30rem] h-[30rem] bg-[var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-[-10%] w-[30rem] h-[30rem] bg-[var(--color-glow)] rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 md:px-10 lg:px-24 flex flex-col items-center justify-center">
         <div style={{ height: '80px' }} />
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-5xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] gradient-text tracking-wide leading-tight">
            Education & Experience
          </span>
        </motion.h2>
        
        <div style={{ height: '80px' }} />

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-start" style={{ gap: '80px' }}>
          
          {/* ─── Column 1: Education ─── */}
          <div className="flex flex-col w-full" style={{ gap: '56px' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-bg-primary)]/40 border border-[var(--color-border)] backdrop-blur-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="text-[var(--color-accent)]" size={30} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-light font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight">
                Education
              </h3>
            </motion.div>

            <div className="w-full flex flex-col" style={{ gap: '48px' }}>
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group w-full relative"
                >
                  <div
                    className="relative bg-[var(--color-bg-primary)]/40 border border-[var(--color-border)] backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-[var(--color-border-light)] hover:shadow-[0_8px_40px_var(--color-glow)] overflow-hidden"
                    style={cardBoxStyle}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-glass-border)] to-transparent pointer-events-none" />

                    <div
                      className="relative z-10 flex flex-col items-start text-left"
                      style={{ ...cardInnerStyle, gap: '28px' }}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-button-secondary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] text-sm font-bold group-hover:bg-[var(--color-button-secondary-hover)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-xs sm:text-sm text-[var(--color-accent)] font-medium">
                          <Calendar size={16} />
                          {item.duration}
                        </span>
                      </div>
                      
                      <div style={gapBelowNumberStyle}>
                        <h4 className="text-2xl sm:text-3xl font-light font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight transition-colors duration-300">
                          {item.institution}
                        </h4>
                        <p className="text-lg text-[var(--color-text-secondary)] font-medium transition-colors duration-300" style={{ marginTop: '8px' }}>
                          {item.degree}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 w-full" style={gapBelowBadgeStyle}>
                        <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-button-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm font-medium group-hover:border-[var(--color-border-light)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                          <Award size={16} className="text-[var(--color-accent)]" />
                          {item.grade}
                        </span>
                      </div>
                      
                      {item.description && (
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed font-light group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Column 2: Leadership ─── */}
          <div className="flex flex-col w-full mt-16 lg:mt-0" style={{ gap: '56px' }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-bg-primary)]/40 border border-[var(--color-border)] backdrop-blur-xl flex items-center justify-center shadow-lg">
                <Briefcase className="text-[var(--color-accent)]" size={30} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-light font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight">
                Leadership
              </h3>
            </motion.div>

            <div className="w-full flex flex-col h-full" style={{ gap: '48px' }}>
              {leadership.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group w-full relative h-full"
                >
                  <div
                    className="relative h-full bg-[var(--color-bg-primary)]/40 border border-[var(--color-border)] backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-[var(--color-border-light)] hover:shadow-[0_8px_40px_var(--color-glow)] overflow-hidden"
                    style={cardBoxStyle}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-glass-border)] to-transparent pointer-events-none" />

                    <div
                      className="relative z-10 flex flex-col items-start text-left h-full"
                      style={{ ...cardInnerStyle, gap: '28px' }}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-button-secondary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] text-sm font-bold group-hover:bg-[var(--color-button-secondary-hover)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-xs sm:text-sm text-[var(--color-accent)] font-medium">
                          <Calendar size={16} />
                          {item.duration}
                        </span>
                      </div>
                      
                      <div style={gapBelowNumberStyle}>
                        <h4 className="text-2xl sm:text-3xl font-light font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight transition-colors duration-300">
                          {item.role}
                        </h4>
                        <p className="text-lg text-[var(--color-text-secondary)] font-medium transition-colors duration-300" style={{ marginTop: '8px' }}>
                          {item.organization}
                        </p>
                      </div>
                      
                      <ul className="w-full text-left flex-grow" style={{ marginTop: '8px', marginBottom: '8px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {item.points.map((point, idx) => (
                          <li key={idx} className="text-base text-[var(--color-text-secondary)] flex items-start gap-4 leading-relaxed font-light group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                            <span className="text-[var(--color-accent)] mt-1 flex-shrink-0">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}