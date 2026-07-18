'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { navItems } from '@/lib/data';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-text-primary)] origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Desktop & Mobile Header */}
      <header className="fixed top-0 left-0 right-0 h-20 w-full z-50 backdrop-blur-xl bg-[var(--color-bg-primary)]/80 border-b border-[var(--color-border)] shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto pl-10 pr-6 lg:pl-16 lg:pr-8 h-full flex items-center justify-between">
          <Link
            href="#home"
            className="block translate-x-6 lg:translate-x-10 text-2xl font-[family-name:var(--font-heading)] tracking-wider text-[var(--color-text-primary)]"
          >
            Mayank Soni
          </Link>

          {/* Desktop Nav & Theme Toggle */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="animated-underline text-sm uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors pb-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all text-[var(--color-text-secondary)]"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="flex md:hidden items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            )}
            <button
              className="text-[var(--color-text-primary)] p-2 -mr-2 hover:text-[var(--color-accent)] transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[70] bg-[var(--color-bg-primary)]/95 backdrop-blur-2xl flex flex-col p-6"
          >
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--color-text-primary)] p-2 hover:text-[var(--color-accent)] transition-colors"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}