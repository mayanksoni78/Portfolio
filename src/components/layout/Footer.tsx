'use client';
import React from 'react';
import { socialLinks } from '@/lib/data';
import { FaGithub as Github, FaTwitter as Twitter } from 'react-icons/fa';

export default function Footer() {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Github': return <Github size={22} />;
      case 'Twitter': return <Twitter size={22} />;
      default: return null;
    }
  };

  // Filter out the platforms you want to remove
  const filteredLinks = socialLinks.filter(
    (link) => link.name === 'Github' || link.name === 'Twitter'
  );

  return (
    <footer className="relative border-t border-[var(--color-border)] mt-16 bg-[var(--color-bg-primary)]">
      {/* ─── Inner Container with Reduced Height & Center Alignment ─── */}
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 flex flex-col items-center justify-center gap-6">
        
        {/* Social Links (Centered & Glassmorphic) */}
        <div className="flex items-center justify-center gap-6">
          {filteredLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[var(--color-bg-primary)]/40 border border-[var(--color-border)] backdrop-blur-xl flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-light)] hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(6,182,212,0.15)]"
              aria-label={link.name}
            >
              {renderIcon(link.name)}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-[var(--color-text-secondary)] text-xs md:text-sm tracking-wide text-center uppercase font-mono mt-1">
          Designed & Built &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}