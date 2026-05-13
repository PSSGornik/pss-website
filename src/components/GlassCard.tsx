'use client';

import { ReactNode } from 'react';
import SectionReveal from './SectionReveal';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <SectionReveal delay={delay}>
      <div className={`glass-card p-6 transition-all duration-300 ${className}`}>
        {children}
      </div>
    </SectionReveal>
  );
}
