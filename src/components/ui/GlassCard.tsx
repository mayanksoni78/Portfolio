'use client';
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div className={`glass ${hover ? 'glass-hover hover:-translate-y-1.5 duration-500 transition-all' : ''} shadow-2xl rounded-2xl ${className}`}>
      {children}
    </div>
  );
}
