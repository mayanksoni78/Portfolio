'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="text-center"
    >
      <div className="w-12 h-1 rounded-full bg-white mb-4 mx-auto" />
      <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#a0a0a0] text-lg mt-3">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

