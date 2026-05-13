import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Prometheus Strategic Solutions',
  description: 'Terms and conditions for Prometheus Strategic Solutions services and products.',
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-pss-white mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-pss-grey mb-12">Effective Date: May 12, 2026</p>

        <div className="prose-custom space-y-10 text-pss-grey leading-relaxed">
          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services provided by Prometheus Strategic Solutions LLC
              (&quot;PSS,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), including but not limited to our website at
              prometheusss.com, SaaS products, and consulting services, you agree to be bound by
              these Terms &amp; Conditions (&quot;Terms&quot;). If you do not agree to these Terms, you must
              not access or use our services.
            </p>
            <p className="mt-3">
              These Terms constitute a legally binding agreement between you (&quot;Client,&quot; &quot;you,&quot;
              or &quot;your&quot;) and PSS. By engaging our services, you represent that you have the
              authority to enter into this agreement on behalf of your organization.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">2. Services Description</h2>
            <p>PSS provides the following categories of services:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong className="text-pss-white">AI Automation Services:</strong> Custom workflow automation,
                AI agent systems (including NOVA), and process optimization for business operations.
              </li>
              <li>
                <strong className="text-pss-white">SaaS Products:</strong> Software-as-a-Service products
                including DryTrace and other proprietary platforms, provided on a subscription basis.
              </li>
              <li>
                <strong className="text-pss-white">Consulting &amp; Integration:</strong> Strategy consulting,
                systems architecture, third-party platform integration, and ongoing operational support.
              </li>
            </ul>
            <p className="mt-3">
              The specific scope of services for each engagement will be defined in a separate
              Statement of Work (SOW) or service agreement.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">3. Payment Terms</h2>
            <p>
              <strong className="text-pss-white">Subscription Services:</strong> SaaS products are billed
              on a monthly basis at the rates published on the applicable product page or as agreed
              in writing. Payment is due on the first day of each billing cycle. All fees are
              non-refundable except as required by applicable law.
            </p>
            <p className="mt-3">
              <strong className="text-pss-white">Project Work:</strong> Custom automation projects and
              consulting engagements are billed as outlined in the applicable SOW. Unless otherwise
              specified, project invoices are due net-30 from the date of invoice.
            </p>
            <p className="mt-3">
              <strong className="text-pss-white">Late Payments:</strong> Overdue invoices may incur a late
              fee of 1.5% per month or the maximum amount permitted by law, whichever is less. PSS
              reserves the right to suspend services for accounts with outstanding balances exceeding
              30 days past due.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">4. Intellectual Property</h2>
            <p>
              <strong className="text-pss-white">PSS IP:</strong> All systems, code, workflows,
              architectures, frameworks, methodologies, and tools developed by PSS remain the
              exclusive intellectual property of Prometheus Strategic Solutions LLC. This includes,
              but is not limited to, the NOVA system, DryTrace platform, custom automation
              frameworks, and any reusable components built during an engagement.
            </p>
            <p className="mt-3">
              <strong className="text-pss-white">Client Data:</strong> All data provided by the Client or
              generated through Client operations remains the property of the Client. PSS will not
              sell, share, or use Client data for purposes unrelated to service delivery without
              explicit written consent.
            </p>
            <p className="mt-3">
              <strong className="text-pss-white">License Grant:</strong> Upon full payment, PSS grants the
              Client a non-exclusive, non-transferable license to use the delivered systems and
              configurations for their internal business operations.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive
              information disclosed during the engagement. This includes business processes,
              financial data, technical architectures, customer lists, and strategic plans.
            </p>
            <p className="mt-3">
              Confidential information may not be disclosed to third parties without the prior
              written consent of the disclosing party, except as required by law or as necessary
              for the performance of services (e.g., sharing with authorized subcontractors under
              equivalent confidentiality obligations).
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, PSS&apos;s total liability arising out
              of or related to these Terms or any services provided shall not exceed the total
              amount paid by the Client to PSS during the twelve (12) months immediately preceding
              the event giving rise to the claim.
            </p>
            <p className="mt-3">
              In no event shall PSS be liable for any indirect, incidental, special, consequential,
              or punitive damages, including but not limited to loss of revenue, loss of profits,
              loss of data, or business interruption, regardless of the theory of liability.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">7. Disclaimer of Warranties</h2>
            <p>
              PSS provides its services on an &quot;as is&quot; and &quot;as available&quot; basis. While we strive
              for excellence in every engagement, PSS makes no warranties, express or implied,
              regarding the services, including but not limited to warranties of merchantability,
              fitness for a particular purpose, or non-infringement.
            </p>
            <p className="mt-3">
              PSS does not guarantee specific business outcomes, revenue increases, or operational
              improvements. Results depend on numerous factors beyond PSS&apos;s control, including
              Client adoption, market conditions, and data quality.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">8. Termination</h2>
            <p>
              <strong className="text-pss-white">Subscription Services:</strong> Either party may terminate
              a subscription by providing thirty (30) days&apos; written notice prior to the next
              billing cycle. Upon termination, the Client will retain access through the end of the
              current paid period.
            </p>
            <p className="mt-3">
              <strong className="text-pss-white">Project Work:</strong> Either party may terminate a project
              engagement with thirty (30) days&apos; written notice. The Client will be responsible
              for payment of all work completed through the termination date.
            </p>
            <p className="mt-3">
              <strong className="text-pss-white">Immediate Termination:</strong> PSS may terminate services
              immediately if the Client breaches these Terms, engages in fraudulent activity, or
              fails to pay invoices after reasonable notice and opportunity to cure.
            </p>
            <p className="mt-3">
              Upon termination, PSS will provide the Client with their data in a reasonable format
              within thirty (30) days of request.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Arizona, without regard to its conflict of law provisions. Any disputes
              arising under or in connection with these Terms shall be subject to the exclusive
              jurisdiction of the state and federal courts located in Maricopa County, Arizona.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">10. Changes to Terms</h2>
            <p>
              PSS reserves the right to modify these Terms at any time. Material changes will be
              communicated to active Clients via email at least thirty (30) days before they take
              effect. Continued use of our services after the effective date of revised Terms
              constitutes acceptance of the changes.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">11. Contact Information</h2>
            <p>
              For questions or concerns regarding these Terms, please contact us:
            </p>
            <div className="mt-3">
              <p><strong className="text-pss-white">Prometheus Strategic Solutions LLC</strong></p>
              <p>Phoenix, AZ, USA</p>
              <p>
                Email:{' '}
                <a href="mailto:riley@prometheusss.com" className="text-pss-gold hover:underline">
                  riley@prometheusss.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
