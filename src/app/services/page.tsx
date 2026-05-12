'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Workflow,
  Bot,
  FileText,
  Plug,
  ArrowRight,
  Target,
  RefreshCw,
  BarChart3,
  Users,
  MessageSquare,
  Brain,
  AlertCircle,
  Droplets,
  FileCheck,
  Clock,
  Layout,
  Link2,
  CreditCard,
  Calendar,
  Cog,
  Send,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  {
    title: 'AI Workflow Automation',
    description:
      'We build end-to-end automated workflows that replace manual processes across your entire operation — from lead capture to invoice.',
    icon: Workflow,
    color: '#3B82F6',
    features: [
      { icon: Target, text: 'Lead capture and routing' },
      { icon: RefreshCw, text: 'CRM sync and pipeline management' },
      { icon: Send, text: 'Automated follow-up sequences' },
      { icon: BarChart3, text: 'Reporting and analytics' },
    ],
  },
  {
    title: 'NOVA Multi-Agent System',
    description:
      'A hierarchical AI agent architecture that operates like a digital management team — coordinating tasks, making decisions, and escalating when needed.',
    icon: Bot,
    color: '#8B5CF6',
    features: [
      { icon: Users, text: 'Hierarchical AI agent architecture' },
      { icon: MessageSquare, text: 'Telegram-based command interface' },
      { icon: Brain, text: 'Memory and context persistence' },
      { icon: AlertCircle, text: 'Escalation and alert routing' },
    ],
    link: { href: '/nova', label: 'Explore NOVA' },
  },
  {
    title: 'DryTrace Reporting API',
    description:
      'Purpose-built for restoration contractors. DryTrace automates moisture documentation, compliance logging, and client-ready PDF report generation.',
    icon: FileText,
    color: '#06B6D4',
    features: [
      { icon: Droplets, text: 'Moisture log automation' },
      { icon: FileCheck, text: 'PDF report generation' },
      { icon: Clock, text: 'Job timeline tracking' },
      { icon: Layout, text: 'Contractor portal' },
    ],
    link: { href: 'https://drytrace.prometheusss.com', label: 'View DryTrace', external: true },
  },
  {
    title: 'Systems Integration',
    description:
      'We connect your tools into a single, automated stack. No more copy-pasting between platforms or manual data entry.',
    icon: Plug,
    color: '#10B981',
    features: [
      { icon: Link2, text: 'GHL, Stripe, Google Workspace' },
      { icon: CreditCard, text: 'QuickBooks, Calendly, Twilio' },
      { icon: Cog, text: 'Custom webhook architecture' },
      { icon: Calendar, text: 'n8n workflow deployment' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline="AI Automation Built for the Trades"
        subheadline="We don't sell software. We deploy infrastructure that runs your business — custom-built for how operators actually work."
      />

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 ${
                i > 0 ? 'border-t border-border/30' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${service.color}15` }}
                >
                  <service.icon size={24} style={{ color: service.color }} />
                </div>
                <h2 className="font-heading text-h2-mobile md:text-h2 text-text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                {service.link && (
                  service.link.external ? (
                    <a
                      href={service.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-medium transition-colors"
                      style={{ color: service.color }}
                    >
                      {service.link.label} <ArrowRight size={16} className="ml-2" />
                    </a>
                  ) : (
                    <Link
                      href={service.link.href}
                      className="inline-flex items-center font-medium transition-colors"
                      style={{ color: service.color }}
                    >
                      {service.link.label} <ArrowRight size={16} className="ml-2" />
                    </Link>
                  )
                )}
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, j) => (
                    <div
                      key={j}
                      className="glass-card p-5 flex items-start gap-3"
                    >
                      <feature.icon
                        size={18}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: service.color }}
                      />
                      <span className="text-text-primary text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Every engagement starts with a strategy call."
        buttonText="Book Your Call"
        href="/contact"
      />
    </>
  );
}
