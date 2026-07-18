'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  index: number;
}

export default function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="glass px-4 py-2 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-border-light)] hover:text-[var(--color-text-primary)] transition-colors cursor-default"
    >
      {name}
    </motion.div>
  );
}
