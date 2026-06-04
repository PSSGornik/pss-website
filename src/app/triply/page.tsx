'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Sparkles,
  Globe,
  CreditCard,
  Users,
  ArrowRight,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import GlassCard from '@/components/GlassCard';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Itineraries',
    description:
      'Tell Triply where you want to go, how long you have, and what you care about. It builds a day-by-day plan tailored to your travel style.',
  },
  {
    icon: MapPin,
    title: 'Smart Destination Planning',
    description:
      'Restaurants, activities, landmarks, and hidden spots — curated and sequenced so you spend less time planning and more time exploring.',
  },
  {
    icon: Calendar,
    title: 'Dynamic Scheduling',
    description:
      'Itineraries that account for travel time, opening hours, and logical routing. No more backtracking across the city because your plan wasn\'t optimized.',
  },
  {
    icon: Globe,
    title: 'Multi-Destination Trips',
    description:
      'Planning a trip across multiple cities or countries? Triply handles the complexity of multi-leg journeys with seamless transitions.',
  },
  {
    icon: CreditCard,
    title: 'Budget-Aware Recommendations',
    description:
      'Set your budget and Triply adjusts recommendations accordingly — from backpacker-friendly to premium experiences.',
  },
  {
    icon: Users,
    title: 'Group Trip Coordination',
    description:
      'Traveling with others? Share itineraries, vote on activities, and keep everyone aligned without the endless group chat.',
  },
];

export default function TriplyPage() {
  return (
    <>
      <PageHero
        headline="Triply"
        subheadline="AI-powered travel planning that turns 'where should we go?' into a complete itinerary in minutes."
        accentColor="#3B82F6"
      >
        <a
          href="https://triply.us"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-fill text-sm px-8 py-4"
        >
          Visit Triply
          <ArrowRight size={18} className="ml-2" />
        </a>
      </PageHero>

      {/* The Vision */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-label uppercase text-pss-gold mb-4 block">The Vision</span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-pss-white mb-8">
              Travel Planning Is Broken
            </h2>
            <p className="text-pss-grey text-lg leading-relaxed">
              You spend hours bouncing between review sites, blog posts, and maps — trying to stitch together an itinerary that makes sense. Triply replaces that entire process with an AI that understands what makes a trip great and builds your plan from scratch.
            </p>
            <p className="text-pss-grey text-lg leading-relaxed mt-6">
              No templates. No generic &quot;top 10&quot; lists. Just a personalized itinerary built around how you actually travel.
            </p>
          </motion.div>
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
              What Triply Does
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

      {/* Status */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-pss-gold/10 flex items-center justify-center flex-shrink-0">
              <Sparkles size={28} className="text-pss-gold" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-cinzel text-xl font-semibold text-pss-white">
                  Live &amp; Operational
                </h3>
                <span className="font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border text-pss-gold border-pss-gold/30 bg-pss-gold/5">
                  Active
                </span>
              </div>
              <p className="text-pss-grey leading-relaxed">
                Triply is live at triply.us — built by the PSS engineering team using the same AI infrastructure that powers our enterprise products. Plan your next trip in minutes.
              </p>
            </div>
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
                  Plan Your Next Trip with AI
                </h2>
                <p className="text-pss-grey mb-8 max-w-xl mx-auto">
                  Triply is live. Build a personalized, AI-powered itinerary for your next trip in minutes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://triply.us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-fill text-sm px-8 py-4"
                  >
                    Visit Triply
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                  <a href="/contact?product=triply" className="btn-gold-outline text-sm px-8 py-4">
                    Give Feedback
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
