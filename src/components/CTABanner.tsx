'use client';

import Link from 'next/link';
import SectionReveal from './SectionReveal';

interface CTABannerProps {
  headline: string;
  buttonText: string;
  href: string;
}

export default function CTABanner({ headline, buttonText, href }: CTABannerProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <div className="relative glass-card p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pss-gold/5 to-pss-ember/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-pss-gold/5 rounded-full blur-[100px]" />
            <div className="relative">
              <h2 className="font-cinzel text-2xl md:text-4xl text-pss-white mb-8">
                {headline}
              </h2>
              <Link href={href} className="btn-gold-fill text-sm px-8 py-4">
                {buttonText}
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
