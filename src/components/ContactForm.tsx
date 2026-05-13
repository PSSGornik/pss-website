'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  revenue: string;
  need: string;
  message: string;
}

const businessTypes = [
  'Water Restoration', 'Fire Restoration', 'Mold Remediation', 'General Contractor',
  'Roofing', 'Plumbing', 'HVAC', 'Electrical', 'Landscaping', 'Cleaning Services',
  'Property Management', 'Government / Federal', 'Technology Company', 'Other',
];

const revenueRanges = [
  'Under $250K', '$250K - $500K', '$500K - $1M', '$1M - $2.5M',
  '$2.5M - $5M', '$5M - $10M', '$10M+',
];

const needOptions = [
  'AI Workflow Automation', 'Agentic Systems / AI Agents', 'Custom Software',
  'Infrastructure & DevOps', 'Federal / Defense', 'DryTrace Demo', 'NOVA System',
  'Not sure yet',
];

const needSlugs: Record<string, string> = {
  'AI Workflow Automation': 'ai-workflow-automation',
  'Agentic Systems / AI Agents': 'agentic-systems',
  'Custom Software': 'custom-software',
  'Infrastructure & DevOps': 'infrastructure-devops',
  'Federal / Defense': 'federal-defense',
  'DryTrace Demo': 'drytrace-demo',
  'NOVA System': 'nova-system',
  'Not sure yet': 'not-sure',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '',
    businessName: '', businessType: '', revenue: '', need: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        businessName: form.businessName,
        source: 'PSS-Website-Contact',
        customField_funnelEntry: needSlugs[form.need] || form.need,
        businessType: form.businessType,
        revenueRange: form.revenue,
        message: form.message,
      };

      const res = await fetch('https://pssautomations.com/webhook/cros-01-lead-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-12 text-center">
        <CheckCircle size={40} className="text-pss-gold mx-auto mb-4" />
        <h3 className="font-cinzel text-xl text-pss-white mb-2">Message Received</h3>
        <p className="text-pss-grey text-sm">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-pss-black/60 border border-pss-gold-dim/30 rounded px-4 py-3 text-pss-white text-sm placeholder-pss-grey/40 focus:outline-none focus:border-pss-gold/60 focus:ring-1 focus:ring-pss-gold/20 transition-colors';
  const selectClass = `${inputClass} appearance-none`;
  const labelClass = 'block text-xs text-pss-grey mb-1.5 font-cinzel tracking-wider uppercase';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>First Name *</label>
          <input id="firstName" name="firstName" required value={form.firstName} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last Name *</label>
          <input id="lastName" name="lastName" required value={form.lastName} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone *</label>
          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="businessName" className={labelClass}>Company *</label>
        <input id="businessName" name="businessName" required value={form.businessName} onChange={handleChange} className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="businessType" className={labelClass}>Industry</label>
          <select id="businessType" name="businessType" value={form.businessType} onChange={handleChange} className={selectClass}>
            <option value="">Select</option>
            {businessTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
          </select>
        </div>
        <div>
          <label htmlFor="revenue" className={labelClass}>Revenue</label>
          <select id="revenue" name="revenue" value={form.revenue} onChange={handleChange} className={selectClass}>
            <option value="">Select</option>
            {revenueRanges.map((r) => (<option key={r} value={r}>{r}</option>))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="need" className={labelClass}>What do you need?</label>
        <select id="need" name="need" value={form.need} onChange={handleChange} className={selectClass}>
          <option value="">Select</option>
          {needOptions.map((n) => (<option key={n} value={n}>{n}</option>))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className={inputClass} />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-pss-ember text-sm">
          <AlertCircle size={16} />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-gold-fill w-full py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <>
            <Send size={16} className="mr-2" />
            Submit
          </>
        )}
      </button>
    </form>
  );
}
