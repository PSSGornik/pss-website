'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export default function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6"
    >
      <p className="text-text-muted leading-relaxed italic mb-4">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="text-text-primary font-medium">{name}</p>
        <p className="text-text-muted text-sm">{role}, {company}</p>
      </div>
    </motion.div>
  );
}
