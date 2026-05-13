'use client';

import { motion } from 'framer-motion';
import { Cog, Shield, Wrench, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import GlassCard from '@/components/GlassCard';
import CTABanner from '@/components/CTABanner';

const values = [
  {
    icon: Cog,
    title: 'Systems Over Heroics',
    description:
      'We don\'t believe in working harder — we believe in building systems that work. The goal is an operation that runs without heroics.',
  },
  {
    icon: Shield,
    title: 'Automation with Accountability',
    description:
      'Every automated process is logged, monitored, and transparent. Automation doesn\'t mean invisible — it means reliable.',
  },
  {
    icon: Wrench,
    title: 'Built for Operators',
    description:
      'We build for the people running the trucks, managing the jobs, and signing the checks — not for analysts reviewing dashboards.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="We Build the Infrastructure. You Run the Business."
        subheadline="Prometheus Strategic Solutions exists to give operators their time back by replacing manual chaos with intelligent systems."
      />

      {/* Mission */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-label uppercase text-pss-gold mb-4 block">Our Mission</span>
            <p className="text-xl text-pss-grey leading-relaxed">
              Most home service businesses are run by operators — not technologists. They don&apos;t need a prettier dashboard or another SaaS login. They need systems that handle the back-office work so they can focus on serving customers and growing revenue. That&apos;s what we build.
            </p>
            <p className="text-xl text-pss-grey leading-relaxed mt-6">
              PSS combines AI automation, custom integrations, and purpose-built products to create operational infrastructure that scales with your business — not against it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-label uppercase text-pss-gold mb-4 block">Values</span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-pss-white">
              How We Think
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <GlassCard key={i}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-pss-gold/10">
                  <value.icon size={20} className="text-pss-gold" />
                </div>
                <h3 className="font-cinzel text-xl font-semibold text-pss-white mb-2">{value.title}</h3>
                <p className="text-pss-grey leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-label uppercase text-pss-gold mb-4 block">Team</span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-pss-white">
              The People Behind PSS
            </h2>
          </motion.div>

          {/* TODO: add team members — photo, name, role, short bio */}
          <div className="glass-card p-12 text-center">
            <p className="text-pss-grey">Team section coming soon.</p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-pss-gold/10 flex items-center justify-center flex-shrink-0">
              <MapPin size={28} className="text-pss-gold" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-semibold text-pss-white mb-1">Based in Phoenix, AZ</h3>
              <p className="text-pss-grey">
                Serving home service operators and restoration contractors nationwide. Built in the desert, deployed everywhere.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        headline="Let's Build Your Operating System"
        buttonText="Get in Touch"
        href="/contact"
      />
    </>
  );
}
