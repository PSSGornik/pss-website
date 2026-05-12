'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const businessTypes = [
  'Water Restoration',
  'Fire Restoration',
  'Mold Remediation',
  'General Contractor',
  'Roofing',
  'Plumbing',
  'HVAC',
  'Electrical',
  'Landscaping',
  'Cleaning Services',
  'Property Management',
  'Other Home Services',
  'Other',
];

const revenueRanges = [
  'Under $250K',
  '$250K - $500K',
  '$500K - $1M',
  '$1M - $2.5M',
  '$2.5M - $5M',
  '$5M - $10M',
  '$10M+',
];

const needOptions = [
  'AI Workflow Automation',
  'DryTrace Demo',
  'NOVA System',
  'Custom Integration',
  'Not sure yet',
];

const needSlugs: Record<string, string> = {
  'AI Workflow Automation': 'ai-workflow-automation',
  'DryTrace Demo': 'drytrace-demo',
  'NOVA System': 'nova-system',
  'Custom Integration': 'custom-integration',
  'Not sure yet': 'not-sure',
};

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

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    revenue: '',
    need: '',
    message: '',
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
      <div className="glass-card p-12 text-center">
        <CheckCircle size={48} className="text-success mx-auto mb-4" />
        <h3 className="font-heading text-h3 text-text-primary mb-2">We&apos;ll be in touch</h3>
        <p className="text-text-muted">
          Your submission has been received. A member of the PSS team will reach out within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors';
  const selectClass = `${inputClass} appearance-none`;
  const labelClass = 'block text-sm text-text-muted mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className={labelClass}>First Name *</label>
          <input
            id="firstName"
            name="firstName"
            required
            value={form.firstName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last Name *</label>
          <input
            id="lastName"
            name="lastName"
            required
            value={form.lastName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="businessName" className={labelClass}>Business Name *</label>
        <input
          id="businessName"
          name="businessName"
          required
          value={form.businessName}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="businessType" className={labelClass}>Business Type</label>
          <select
            id="businessType"
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Select type</option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="revenue" className={labelClass}>Monthly Revenue</label>
          <select
            id="revenue"
            name="revenue"
            value={form.revenue}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Select range</option>
            {revenueRanges.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="need" className={labelClass}>What do you need?</label>
        <select
          id="need"
          name="need"
          value={form.need}
          onChange={handleChange}
          className={selectClass}
        >
          <option value="">Select an option</option>
          {needOptions.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell us about your operation</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle size={16} />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Submit
          </>
        )}
      </button>
    </form>
  );
}
