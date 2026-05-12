'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageHeroProps {
  headline: string;
  subheadline?: string;
  children?: ReactNode;
  accentColor?: string;
}

export default function PageHero({ headline, subheadline, children, accentColor }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20"
        style={{ background: accentColor || '#3B82F6' }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-h1-mobile md:text-h1 text-text-primary max-w-4xl"
        >
          {headline}
        </motion.h1>
        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-text-muted max-w-2xl leading-relaxed"
          >
            {subheadline}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
