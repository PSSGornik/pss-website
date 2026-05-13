'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-pss-gold/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-pss-white">
              Let&apos;s Build Your System
            </h1>
            <p className="mt-4 text-lg text-pss-grey max-w-xl mx-auto">
              Tell us about your operation and we&apos;ll design the right automation stack for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-cinzel text-xl font-semibold text-pss-white mb-4">
                  Every engagement starts with a conversation
                </h2>
                <p className="text-pss-grey leading-relaxed">
                  We don&apos;t sell off-the-shelf software. We listen to how your operation works, identify the highest-impact automation opportunities, and build a system that fits.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-pss-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-pss-grey">Email</p>
                    <a
                      href="mailto:riley@prometheusss.com"
                      className="text-pss-white hover:text-pss-gold transition-colors"
                    >
                      riley@prometheusss.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-pss-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-pss-grey">Location</p>
                    <p className="text-pss-white">Phoenix, AZ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-pss-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-pss-grey">Response Time</p>
                    <p className="text-pss-white">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
