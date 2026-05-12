'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  href: string;
  featured?: boolean;
  accentColor?: string;
}

export default function PricingCard({
  name,
  price,
  period = '/mo',
  features,
  href,
  featured = false,
  accentColor = '#3B82F6',
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`glass-card p-8 flex flex-col ${
        featured ? 'border-primary/30 glow-border' : ''
      }`}
    >
      {featured && (
        <span
          className="text-label uppercase mb-4 inline-block"
          style={{ color: accentColor }}
        >
          Most Popular
        </span>
      )}
      <h3 className="font-heading text-h3 text-text-primary">{name}</h3>
      <div className="mt-4 mb-6">
        <span className="text-4xl font-heading font-bold text-text-primary">{price}</span>
        <span className="text-text-muted">{period}</span>
      </div>
      <ul className="space-y-3 flex-1 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
            <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="btn-primary w-full text-center"
        style={{
          backgroundColor: accentColor,
          boxShadow: `0 0 20px ${accentColor}40`,
        }}
      >
        Get Started
      </Link>
    </motion.div>
  );
}
