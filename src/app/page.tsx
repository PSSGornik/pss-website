'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Zap,
  AlertTriangle,
  Eye,
  Bot,
  FileText,
  Workflow,
  Search,
  Blocks,
  Rocket,
  Settings,
  ArrowRight,
} from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import TestimonialCard from '@/components/TestimonialCard';
import StatsBar from '@/components/StatsBar';
import CTABanner from '@/components/CTABanner';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.08] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/20 animate-[pulse-dot_3s_ease-in-out_infinite]"
              style={{
                left: `${10 + (i * 4.5) % 90}%`,
                top: `${15 + (i * 7.3) % 70}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label uppercase text-primary mb-6 block">
              AI Automation Infrastructure
            </span>
            <h1 className="font-heading text-h1-mobile md:text-h1 text-text-primary max-w-5xl mx-auto text-balance">
              The Operating System for Your Business
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              Prometheus Strategic Solutions builds custom AI automation
              infrastructure for restoration contractors and home service
              operators — so your business runs itself.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Request a Strategy Call
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-8 py-4">
              See What We Build
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-heading text-h2-mobile md:text-h2 text-text-primary">
              Your Business Runs on Duct Tape
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <AlertTriangle size={24} className="text-red-400 mb-4" />
              <h3 className="font-heading text-h3 text-text-primary mb-2">Margin Erosion</h3>
              <p className="text-text-muted">
                Manual processes eating your margin — every hour spent on admin is an hour not spent on revenue.
              </p>
            </GlassCard>
            <GlassCard>
              <Zap size={24} className="text-yellow-400 mb-4" />
              <h3 className="font-heading text-h3 text-text-primary mb-2">Lost Leads</h3>
              <p className="text-text-muted">
                Leads falling through the cracks because follow-up depends on someone remembering.
              </p>
            </GlassCard>
            <GlassCard>
              <Eye size={24} className="text-orange-400 mb-4" />
              <h3 className="font-heading text-h3 text-text-primary mb-2">Zero Visibility</h3>
              <p className="text-text-muted">
                No visibility into what&apos;s actually happening — you&apos;re flying blind on cash, jobs, and performance.
              </p>
            </GlassCard>
          </div>

          <motion.p
            {...fadeUp}
            className="text-center text-xl text-text-muted mt-12 max-w-xl mx-auto"
          >
            PSS replaces the chaos with systems that think.
          </motion.p>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-24 relative bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-label uppercase text-primary mb-4 block">Solutions</span>
            <h2 className="font-heading text-h2-mobile md:text-h2 text-text-primary">
              What We Deploy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="group">
              <Bot size={28} className="text-primary mb-4" />
              <h3 className="font-heading text-h3 text-text-primary mb-2">
                NOVA AI Operating System
              </h3>
              <p className="text-text-muted mb-4">
                A hierarchical multi-agent system that manages tasks, routes decisions, and keeps your business moving 24/7.
              </p>
              <Link
                href="/nova"
                className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all"
              >
                Learn More <ArrowRight size={14} className="ml-1" />
              </Link>
            </GlassCard>

            <GlassCard className="group">
              <FileText size={28} className="text-teal mb-4" />
              <h3 className="font-heading text-h3 text-text-primary mb-2">
                DryTrace Reporting
              </h3>
              <p className="text-text-muted mb-4">
                Automated drying reports, moisture logging, and IICRC-compliant documentation for restoration contractors.
              </p>
              <a
                href="https://drytrace.prometheusss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal text-sm font-medium group-hover:gap-2 transition-all"
              >
                View Product <ArrowRight size={14} className="ml-1" />
              </a>
            </GlassCard>

            <GlassCard className="group">
              <Workflow size={28} className="text-accent mb-4" />
              <h3 className="font-heading text-h3 text-text-primary mb-2">
                Custom Workflow Automation
              </h3>
              <p className="text-text-muted mb-4">
                End-to-end automation of your lead pipeline, CRM, scheduling, invoicing, and reporting.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all"
              >
                Explore Services <ArrowRight size={14} className="ml-1" />
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-label uppercase text-primary mb-4 block">Process</span>
            <h2 className="font-heading text-h2-mobile md:text-h2 text-text-primary">
              From Chaos to Automated
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', icon: Search, title: 'Discovery', desc: 'We audit your workflows, tools, and bottlenecks.' },
              { step: '02', icon: Blocks, title: 'Architecture', desc: 'We design the automation stack around your operations.' },
              { step: '03', icon: Rocket, title: 'Deployment', desc: 'We build, test, and deploy your systems end-to-end.' },
              { step: '04', icon: Settings, title: 'Operate', desc: 'We monitor, optimize, and scale as your business grows.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 text-center h-full">
                  <span className="text-5xl font-heading font-bold text-primary/10">{item.step}</span>
                  <item.icon size={28} className="text-primary mx-auto my-3" />
                  <h3 className="font-heading text-h3 text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 relative bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-label uppercase text-primary mb-4 block">Results</span>
            <h2 className="font-heading text-h2-mobile md:text-h2 text-text-primary">
              Built for the Trades
            </h2>
          </motion.div>

          {/* TODO: replace placeholder testimonials with real client testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <TestimonialCard
              quote="PSS automated our entire lead intake process. We went from losing 30% of our calls to capturing every single one."
              name="Placeholder Name"
              role="Owner"
              company="Restoration Co."
            />
            <TestimonialCard
              quote="The NOVA system runs our morning ops briefing automatically. My team gets task assignments before they even clock in."
              name="Placeholder Name"
              role="Operations Manager"
              company="Service Company"
            />
            <TestimonialCard
              quote="DryTrace cut our report generation from 45 minutes per job to zero. Our techs love it."
              name="Placeholder Name"
              role="Field Supervisor"
              company="Drying Contractor"
            />
          </div>

          <StatsBar
            stats={[
              { value: '15+', label: 'Workflows Deployed' },
              { value: '3', label: 'Active AI Systems' },
              { value: '$0', label: 'Manual Reporting Hours' },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to Automate Your Operation?"
        buttonText="Talk to PSS"
        href="/contact"
      />
    </>
  );
}
