'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({ children, className = '', href, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`glass rounded-full px-6 py-3 border border-[#2a2a2a] inline-flex items-center justify-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">{content}</a>;
    }
    return <Link href={href} className="inline-block">{content}</Link>;
  }

  return <div className="inline-block">{content}</div>;
}
