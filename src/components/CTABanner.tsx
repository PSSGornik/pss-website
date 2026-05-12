'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTABannerProps {
  headline: string;
  buttonText: string;
  href: string;
}

export default function CTABanner({ headline, buttonText, href }: CTABannerProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass-card p-12 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/10 rounded-full blur-[100px]" />
          <div className="relative">
            <h2 className="font-heading text-h2-mobile md:text-h2 text-text-primary mb-8">
              {headline}
            </h2>
            <Link href={href} className="btn-primary text-lg px-8 py-4">
              {buttonText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
