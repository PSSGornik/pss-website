'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Brain,
  GitBranch,
  AlertCircle,
  DollarSign,
  Users,
  ArrowRight,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import GlassCard from '@/components/GlassCard';
import AgentDiagram from '@/components/AgentDiagram';
import CTABanner from '@/components/CTABanner';

const capabilities = [
  {
    icon: MessageSquare,
    title: 'Telegram Command Interface',
    description:
      'Interact with NOVA directly via Telegram. Issue commands, get status updates, and manage your operation from your phone.',
  },
  {
    icon: Brain,
    title: 'Memory & Context Persistence',
    description:
      'NOVA remembers context across conversations, tasks, and time — building institutional knowledge that never leaves.',
  },
  {
    icon: GitBranch,
    title: 'Agent-to-Agent Task Routing',
    description:
      'Tasks flow automatically between specialized agents based on type, priority, and context — no manual handoffs.',
  },
  {
    icon: AlertCircle,
    title: 'Escalation & Alert Management',
    description:
      'When something requires human attention, NOVA escalates with full context. Nothing gets buried.',
  },
  {
    icon: DollarSign,
    title: 'Financial Tracking & Reporting',
    description:
      'Revenue, expenses, and cash flow tracked and reported automatically. No more spreadsheet reconciliation.',
  },
  {
    icon: Users,
    title: 'Lead Intake & CRM Sync',
    description:
      'New leads are captured, qualified, and routed to your pipeline automatically — integrated with your existing CRM.',
  },
];

export default function NovaPage() {
  return (
    <>
      <PageHero
        headline="NOVA: Your AI Operating System"
        subheadline="A hierarchical multi-agent system that manages tasks, routes decisions, tracks operations, and keeps your business moving — 24/7, without a manager."
        accentColor="#8B5CF6"
      >
        <Link href="/contact?product=nova" className="btn-primary text-lg px-8 py-4">
          Deploy NOVA for Your Business
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </PageHero>

      {/* Architecture Diagram */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-label uppercase text-accent mb-4 block">Architecture</span>
            <h2 className="font-heading text-h2-mobile md:text-h2 text-text-primary">
              Hierarchical Agent Structure
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              NOVA operates as a coordinated team of AI agents, each specialized for a domain of your business. The CEO Agent provides strategic oversight while COO Sydney manages day-to-day operations.
            </p>
          </motion.div>

          <div className="glass-card p-8 md:p-12">
            <AgentDiagram />
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
            <span className="text-label uppercase text-accent mb-4 block">Capabilities</span>
            <h2 className="font-heading text-h2-mobile md:text-h2 text-text-primary">
              What NOVA Does
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <GlassCard key={i}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-accent/10">
                  <cap.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-heading text-h3 text-text-primary mb-2">{cap.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{cap.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Deploy NOVA for Your Business"
        buttonText="Request a Strategy Call"
        href="/contact?product=nova"
      />
    </>
  );
}
