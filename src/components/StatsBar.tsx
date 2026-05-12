'use client';

import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
    >
      {stats.map((stat, i) => (
        <div key={i} className={i > 0 ? 'md:border-l md:border-border/50' : ''}>
          <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
          <div className="text-sm text-text-muted mt-1">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}
