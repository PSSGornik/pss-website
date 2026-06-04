'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Cpu,
  Bot,
  Server,
  Shield,
  Code2,
  Database,
  ChevronDown,
  Send,
  ArrowRight,
} from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';
import ContactForm from '@/components/ContactForm';
import PhoenixLogo from '@/components/PhoenixLogo';

const stagger = (i: number) => ({ delay: 0.15 * i, duration: 0.7, ease: 'easeOut' as const });

const services = [
  {
    icon: Cpu,
    title: 'AI Automation & Workflows',
    description: 'End-to-end workflow automation that eliminates manual process debt and scales with your operation.',
  },
  {
    icon: Bot,
    title: 'Agentic Systems & AI Agents',
    description: 'Hierarchical multi-agent architectures that coordinate, decide, and execute autonomously.',
  },
  {
    icon: Server,
    title: 'Infrastructure & DevOps',
    description: 'Production-grade deployment pipelines, monitoring, and infrastructure that doesn\'t break at 3am.',
  },
  {
    icon: Shield,
    title: 'Federal & Defense Solutions',
    description: 'Compliance-first AI systems designed for the regulatory and security requirements of government work.',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Purpose-built applications and platforms — not off-the-shelf configurations with your logo on them.',
  },
  {
    icon: Database,
    title: 'Data Pipelines & Integration',
    description: 'Connect, transform, and route data across your entire stack with zero manual intervention.',
  },
];

const products = [
  {
    name: 'NOVA AI',
    description: 'Multi-agent operating system for business operations',
    status: 'Active',
    href: '/nova',
  },
  {
    name: 'DryTrace',
    description: 'Automated drying report generation for restoration contractors',
    status: 'Active',
    href: '/drytrace',
  },
  {
    name: 'Triply',
    description: 'AI-powered travel and itinerary platform',
    status: 'Active',
    href: '/triply',
  },
  {
    name: 'PSS Automations',
    description: 'Workflow automation infrastructure and deployment engine',
    status: 'Active',
    href: '/automations',
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={stagger(0)}
          >
            <PhoenixLogo className="mx-auto mb-8 w-40 h-auto md:w-48 lg:w-56" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(1)}
            className="font-cinzel text-5xl md:text-7xl lg:text-[80px] font-bold gold-text leading-tight"
          >
            PROMETHEUS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(2)}
            className="font-cinzel text-base md:text-xl tracking-[0.25em] text-pss-grey mt-4 uppercase"
          >
            Strategic Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(3)}
            className="font-cormorant text-lg md:text-xl italic text-pss-white/80 mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            AI Automation &amp; Agentic Systems for Organizations
            That Can&apos;t Afford to Get It Wrong.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(4)}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#work" className="btn-gold-outline">
              Explore Our Work
            </a>
            <a href="#contact" className="btn-gold-fill">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-20"
          >
            <a href="#services" className="inline-block" aria-label="Scroll down">
              <ChevronDown
                size={28}
                className="text-pss-gold/40 animate-[scroll-hint_2s_ease-in-out_infinite]"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="relative py-32 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="mb-20">
            <p className="font-cinzel text-xs tracking-[0.2em] text-pss-gold uppercase mb-4">
              Capabilities
            </p>
            <h2 className="font-cinzel text-3xl md:text-5xl font-semibold text-pss-white gold-underline">
              What We Build
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass-card p-8 h-full transition-all duration-300 group">
                  <service.icon
                    size={28}
                    className="text-pss-gold mb-5 group-hover:text-pss-gold-light transition-colors"
                  />
                  <h3 className="font-cinzel text-base font-semibold text-pss-white mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-pss-grey text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <p className="font-cinzel text-xs tracking-[0.2em] text-pss-gold uppercase mb-4">
                Philosophy
              </p>
              <h2 className="font-cinzel text-3xl md:text-5xl font-semibold text-pss-white gold-underline mb-8">
                Built on First Principles
              </h2>
              <div className="space-y-5 text-pss-grey leading-relaxed">
                <p>
                  Prometheus Strategic Solutions exists because most organizations are sold AI
                  that doesn&apos;t work in production. We build systems that do — from the
                  infrastructure up, not the pitch deck down.
                </p>
                <p>
                  Every engagement starts with architecture, not aesthetics. We map your operational
                  reality, identify the highest-leverage automation points, and deploy systems
                  designed to run without supervision. No dashboards you&apos;ll never check. No
                  integrations that break on the first edge case.
                </p>
                <p>
                  We build for organizations where failure has real consequences — where &quot;it
                  usually works&quot; isn&apos;t good enough.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 ember-glow scale-150" />
                <Image
                  src="/assets/images/Prometheus_Strategic_Solutions.png"
                  alt="Prometheus phoenix"
                  width={400}
                  height={400}
                  className="relative w-72 md:w-96 h-auto"
                  loading="lazy"
                />
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.3} className="mt-20">
            <div className="glass-card p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { value: '50+', label: 'Workflows Deployed' },
                { value: '5', label: 'Active Platforms' },
                { value: '3', label: 'Federal Verticals Targeted' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={i > 0 ? 'md:border-l md:border-pss-gold-dim/20' : ''}
                >
                  <div className="font-cinzel text-3xl font-bold gold-text">{stat.value}</div>
                  <div className="text-pss-grey text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─── WORK / PRODUCTS ─── */}
      <section id="work" className="relative py-32 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="mb-20">
            <p className="font-cinzel text-xs tracking-[0.2em] text-pss-gold uppercase mb-4">
              Portfolio
            </p>
            <h2 className="font-cinzel text-3xl md:text-5xl font-semibold text-pss-white gold-underline">
              What We&apos;ve Built
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <Link href={product.href} className="glass-card p-8 h-full transition-all duration-300 group block">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-cinzel text-lg font-semibold text-pss-white tracking-wide">
                      {product.name}
                    </h3>
                    <span
                      className={`font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border ${
                        product.status === 'Active'
                          ? 'text-pss-gold border-pss-gold/30 bg-pss-gold/5'
                          : 'text-pss-grey border-pss-grey/20 bg-pss-grey/5'
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                  <p className="text-pss-grey text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-pss-gold-dim group-hover:text-pss-gold text-xs font-cinzel tracking-wider transition-colors">
                    <span>View Details</span>
                    <ArrowRight size={12} />
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <SectionReveal>
              <p className="font-cinzel text-xs tracking-[0.2em] text-pss-gold uppercase mb-4">
                Connect
              </p>
              <h2 className="font-cinzel text-3xl md:text-5xl font-semibold text-pss-white gold-underline mb-8">
                Start a Conversation
              </h2>
              <div className="space-y-5 text-pss-grey leading-relaxed">
                <p>
                  Whether you&apos;re exploring AI automation for the first time or need to
                  replace systems that aren&apos;t cutting it — we&apos;d like to hear what
                  you&apos;re building.
                </p>
                <p>
                  Every engagement begins with a candid conversation about what&apos;s actually
                  possible and what it takes to get there.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 text-pss-gold">
                <Send size={16} />
                <a
                  href="mailto:riley@prometheusss.com"
                  className="font-mono text-sm hover:text-pss-gold-light transition-colors"
                >
                  riley@prometheusss.com
                </a>
              </div>
              <p className="text-pss-grey/60 text-xs mt-2 ml-7">Phoenix, AZ</p>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="glass-card p-8">
                <ContactForm />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
