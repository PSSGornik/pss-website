'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Workflow,
  Zap,
  GitMerge,
  BarChart3,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import GlassCard from '@/components/GlassCard';
import CTABanner from '@/components/CTABanner';

const capabilities = [
  {
    icon: Workflow,
    title: 'End-to-End Workflow Engine',
    description:
      'Design, deploy, and manage multi-step automation workflows that connect every system in your operation — CRM, scheduling, invoicing, and beyond.',
  },
  {
    icon: Zap,
    title: 'Event-Driven Execution',
    description:
      'Workflows trigger in real time based on events across your stack. A new lead, a completed job, a payment received — each one kicks off the right process automatically.',
  },
  {
    icon: GitMerge,
    title: 'Conditional Logic & Branching',
    description:
      'Complex business rules built into every workflow. Route leads by revenue tier, escalate overdue invoices, or branch based on any data point in your operation.',
  },
  {
    icon: BarChart3,
    title: 'Monitoring & Observability',
    description:
      'Every workflow execution is logged, timed, and traceable. Know exactly what ran, when, and whether it succeeded — with alerts when something needs attention.',
  },
  {
    icon: Shield,
    title: 'Error Handling & Recovery',
    description:
      'Built-in retry logic, fallback paths, and dead-letter queues. When an external API goes down, your workflows degrade gracefully instead of silently failing.',
  },
  {
    icon: Clock,
    title: 'Scheduled & Recurring Jobs',
    description:
      'Daily reports, weekly reconciliations, monthly billing runs — automated on schedule with full audit trails and failure notifications.',
  },
];

const useCases = [
  'Lead intake from web forms, ads, and referrals routed to CRM with automatic qualification scoring',
  'Job completion triggers invoice generation, customer follow-up, and review request sequences',
  'Daily cash flow snapshots aggregated from payment processors and accounting platforms',
  'Technician dispatch notifications with job details, directions, and customer history',
  'Vendor payment reminders with escalation paths and approval workflows',
  'Cross-platform data sync between field service, accounting, and reporting tools',
];

export default function AutomationsPage() {
  return (
    <>
      <PageHero
        headline="PSS Automations"
        subheadline="The workflow infrastructure that powers everything we build. Event-driven automation designed for operators who need reliability, not another dashboard."
      >
        <Link href="/contact?product=automations" className="btn-gold-fill text-sm px-8 py-4">
          Automate Your Operation
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </PageHero>

      {/* How It Works */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-label uppercase text-pss-gold mb-4 block">How It Works</span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-pss-white">
              From Trigger to Outcome
            </h2>
            <p className="mt-4 text-pss-grey max-w-2xl mx-auto">
              Every automation starts with a trigger and ends with a measurable result. No black boxes. No workflows you can&apos;t trace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Trigger', desc: 'An event fires — form submission, webhook, schedule, or system change.' },
              { step: '02', title: 'Process', desc: 'Business logic executes — data transforms, conditions evaluate, APIs connect.' },
              { step: '03', title: 'Route', desc: 'Results flow to the right destination — CRM, notification, database, or next workflow.' },
              { step: '04', title: 'Log', desc: 'Every step is recorded with timestamps, payloads, and status for full auditability.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="font-mono text-2xl font-bold gold-text mb-3">{item.step}</div>
                <h3 className="font-cinzel text-base font-semibold text-pss-white mb-2">{item.title}</h3>
                <p className="text-pss-grey text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-label uppercase text-pss-gold mb-4 block">Capabilities</span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-pss-white">
              Built for Production
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <GlassCard key={i}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-pss-gold/10">
                  <cap.icon size={20} className="text-pss-gold-light" />
                </div>
                <h3 className="font-cinzel text-xl font-semibold text-pss-white mb-2">{cap.title}</h3>
                <p className="text-pss-grey text-sm leading-relaxed">{cap.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-label uppercase text-pss-gold mb-4 block">Use Cases</span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-pss-white">
              What Operators Automate
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 glass-card"
              >
                <CheckCircle2 size={18} className="text-pss-gold mt-0.5 flex-shrink-0" />
                <p className="text-pss-grey text-sm leading-relaxed">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Note */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-pss-gold/10 flex items-center justify-center flex-shrink-0">
              <GitMerge size={28} className="text-pss-gold" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-semibold text-pss-white mb-2">
                Connects to Your Existing Stack
              </h3>
              <p className="text-pss-grey leading-relaxed">
                PSS Automations integrates with CRMs, accounting platforms, field service tools, payment processors, communication platforms, and custom APIs. If it has an endpoint, we can connect it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        headline="Stop Running Your Business from a Spreadsheet"
        buttonText="Schedule a Workflow Audit"
        href="/contact?product=automations"
      />
    </>
  );
}
