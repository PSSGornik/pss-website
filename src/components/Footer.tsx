import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-pss-gold-dim/20 bg-pss-black/90">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/Prometheus_Logo_Mk__II_LDSP.png"
              alt="PSS"
              width={120}
              height={35}
              className="h-8 w-auto opacity-70"
            />
          </div>

          <div className="flex items-center gap-8 text-xs">
            <Link
              href="/terms"
              className="font-cinzel tracking-[0.1em] text-pss-grey hover:text-pss-gold transition-colors uppercase"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="font-cinzel tracking-[0.1em] text-pss-grey hover:text-pss-gold transition-colors uppercase"
            >
              Privacy
            </Link>
            <a
              href="mailto:riley@prometheusss.com"
              className="font-cinzel tracking-[0.1em] text-pss-grey hover:text-pss-gold transition-colors uppercase"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pss-gold-dim/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-pss-grey/60">
            &copy; 2026 Prometheus Strategic Solutions LLC. All rights reserved.
          </p>
          <p className="text-xs text-pss-gold-dim/40 font-mono">
            Powered by Prometheus
          </p>
        </div>
      </div>
    </footer>
  );
}
