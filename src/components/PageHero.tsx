'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageHeroProps {
  headline: string;
  subheadline?: string;
  children?: ReactNode;
  accentColor?: string;
}

export default function PageHero({ headline, subheadline, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-15"
        style={{ background: '#C9A84C' }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-cinzel text-3xl md:text-5xl font-bold text-pss-white max-w-4xl"
        >
          {headline}
        </motion.h1>
        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-pss-grey max-w-2xl leading-relaxed"
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
