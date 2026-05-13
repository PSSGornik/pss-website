'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  Clock,
  BarChart3,
  Camera,
  Shield,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import GlassCard from '@/components/GlassCard';

const features = [
  {
    icon: FileText,
    title: 'Automated Report Generation',
    description:
      'Drying logs, moisture readings, and equipment data compiled into professional, carrier-ready reports — without hours of manual entry.',
  },
  {
    icon: Clock,
    title: 'Real-Time Drying Tracking',
    description:
      'Monitor drying progress across all active jobs from a single view. Know exactly where each job stands without calling the field.',
  },
  {
    icon: Camera,
    title: 'Photo Documentation',
    description:
      'Timestamped, geotagged photo logs tied directly to each job. Build the documentation trail that adjusters require, automatically.',
  },
  {
    icon: BarChart3,
    title: 'Moisture & Equipment Analytics',
    description:
      'Visualize drying curves, equipment utilization, and job timelines. Identify which jobs are on track and which need attention.',
  },
  {
    icon: Shield,
    title: 'IICRC-Aligned Documentation',
    description:
      'Reports structured to meet industry standards. Give adjusters the documentation format they expect, every time.',
  },
  {
    icon: AlertTriangle,
    title: 'Exception Alerts',
    description:
      'Automatic notifications when moisture readings stall, equipment is underutilized, or drying targets slip behind schedule.',
  },
];

const painPoints = [
  'Spending hours after every job manually compiling drying reports',
  'Lost revenue from documentation gaps that adjusters flag',
  'Technicians forgetting to log readings or take photos',
  'No visibility into active job drying progress from the office',
  'Inconsistent report formats that vary by technician',
  'Scrambling to reconstruct data when a claim is disputed',
];

export default function DryTracePage() {
  return (
    <>
      <PageHero
        headline="DryTrace"
        subheadline="Automated drying documentation for restoration contractors. Stop losing hours to paperwork and start delivering reports that adjusters actually approve."
        accentColor="#8B5CF6"
      >
        <a
          href="https://drytrace.prometheusss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-fill text-sm px-8 py-4"
        >
          Go to DryTrace
          <ArrowRight size={18} className="ml-2" />
        </a>
      </PageHero>

      {/* The Problem */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-label uppercase text-pss-gold mb-4 block">The Problem</span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-pss-white">
              Documentation Shouldn&apos;t Be the Hardest Part of the Job
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 glass-card"
              >
                <AlertTriangle size={16} className="text-pss-ember mt-0.5 flex-shrink-0" />
                <p className="text-pss-grey text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-label uppercase text-pss-gold mb-4 block">Features</span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-pss-white">
              What DryTrace Does
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <GlassCard key={i}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-pss-gold/10">
                  <feature.icon size={20} className="text-pss-gold-light" />
                </div>
                <h3 className="font-cinzel text-xl font-semibold text-pss-white mb-2">{feature.title}</h3>
                <p className="text-pss-grey text-sm leading-relaxed">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-label uppercase text-pss-gold mb-4 block">Built For</span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-pss-white mb-8">
              Restoration Contractors Who Are Tired of Paperwork
            </h2>
            <p className="text-pss-grey text-lg leading-relaxed">
              Whether you&apos;re running a single crew or managing dozens of active water damage jobs, DryTrace replaces the manual reporting process that eats your evenings and weekends. Your technicians log data in the field. DryTrace turns it into the documentation your adjusters need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative glass-card p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pss-gold/5 to-pss-ember/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-pss-gold/5 rounded-full blur-[100px]" />
              <div className="relative">
                <h2 className="font-cinzel text-2xl md:text-4xl text-pss-white mb-4">
                  Ready to Automate Your Drying Reports?
                </h2>
                <p className="text-pss-grey mb-8 max-w-xl mx-auto">
                  Join restoration contractors who&apos;ve eliminated hours of manual documentation from every job.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://drytrace.prometheusss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-fill text-sm px-8 py-4"
                  >
                    Go to DryTrace
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                  <a href="/contact?product=drytrace" className="btn-gold-outline text-sm px-8 py-4">
                    Request a Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
