import Link from 'next/link';

const footerLinks = {
  Solutions: [
    { label: 'AI Workflow Automation', href: '/services' },
    { label: 'NOVA System', href: '/nova' },
    { label: 'DryTrace', href: 'https://drytrace.prometheusss.com', external: true },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-heading font-bold text-2xl text-primary">
              PSS
            </Link>
            <p className="mt-3 text-text-muted text-sm max-w-xs">
              The Operating System for Your Business
            </p>
            <p className="mt-4 text-text-muted text-xs">
              Phoenix, AZ
            </p>
            <a
              href="mailto:riley@prometheusss.com"
              className="text-text-muted text-xs hover:text-primary transition-colors"
            >
              riley@prometheusss.com
            </a>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-label uppercase text-text-muted mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-muted hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-text-muted hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; 2026 Prometheus Strategic Solutions LLC. All rights reserved.
          </p>
          <p className="text-xs text-text-muted/50">
            Built with NOVA
          </p>
        </div>
      </div>
    </footer>
  );
}
