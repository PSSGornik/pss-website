import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Prometheus Strategic Solutions',
  description: 'Privacy policy for Prometheus Strategic Solutions services and products.',
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-pss-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-pss-grey mb-12">Effective Date: May 12, 2026</p>

        <div className="prose-custom space-y-10 text-pss-grey leading-relaxed">
          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">1. Information We Collect</h2>
            <p>
              Prometheus Strategic Solutions LLC (&quot;PSS,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects
              information that you provide directly to us through our website, contact forms,
              and service engagements. This includes:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong className="text-pss-white">Contact Information:</strong> Name, email address,
                phone number, and business name provided through our contact forms and intake processes.
              </li>
              <li>
                <strong className="text-pss-white">Business Information:</strong> Business type, revenue
                range, operational details, and service needs shared during consultations and onboarding.
              </li>
              <li>
                <strong className="text-pss-white">Usage Data:</strong> Information about how you interact
                with our website, including pages visited, time spent, and referring sources. This data
                is collected through standard web analytics and does not include personally identifiable
                information.
              </li>
              <li>
                <strong className="text-pss-white">Service Data:</strong> Data generated through the use
                of our products (e.g., DryTrace reports, NOVA system logs) as necessary for service delivery.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong className="text-pss-white">Service Delivery:</strong> To provide, maintain, and
                improve our automation services, SaaS products, and consulting engagements.
              </li>
              <li>
                <strong className="text-pss-white">Communication:</strong> To respond to your inquiries,
                send service updates, and provide technical support.
              </li>
              <li>
                <strong className="text-pss-white">Billing:</strong> To process payments and manage your
                account.
              </li>
              <li>
                <strong className="text-pss-white">Improvement:</strong> To analyze usage patterns and
                improve our products and services.
              </li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information to third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">3. Third-Party Services</h2>
            <p>
              In the course of providing our services, we may share your information with the
              following categories of third-party service providers:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong className="text-pss-white">CRM &amp; Marketing:</strong> GoHighLevel (GHL) for
                customer relationship management and communication workflows.
              </li>
              <li>
                <strong className="text-pss-white">Payment Processing:</strong> Stripe for secure payment
                processing. We do not store credit card information on our servers.
              </li>
              <li>
                <strong className="text-pss-white">Productivity:</strong> Google Workspace for email
                and document management.
              </li>
              <li>
                <strong className="text-pss-white">AI Services:</strong> OpenAI API for powering
                AI-driven features within our products. Data sent to AI providers is used solely
                for processing and is not used to train third-party models.
              </li>
            </ul>
            <p className="mt-3">
              Each third-party provider operates under their own privacy policy. We recommend
              reviewing their policies for additional detail on data handling.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">4. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services
              and fulfill the purposes described in this policy. Specifically:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong className="text-pss-white">Contact form submissions</strong> are retained for the
                duration of any active engagement and for up to two (2) years after the last interaction.
              </li>
              <li>
                <strong className="text-pss-white">Service data</strong> is retained for the duration
                of your subscription and for thirty (30) days after termination, unless you request
                earlier deletion.
              </li>
              <li>
                <strong className="text-pss-white">Billing records</strong> are retained as required by
                applicable tax and accounting regulations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">5. CCPA Compliance (California Residents)</h2>
            <p>
              If you are a California resident, you have specific rights under the California
              Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong className="text-pss-white">Right to Know:</strong> You may request disclosure of
                the categories and specific pieces of personal information we have collected about you.
              </li>
              <li>
                <strong className="text-pss-white">Right to Delete:</strong> You may request deletion of
                your personal information, subject to certain exceptions.
              </li>
              <li>
                <strong className="text-pss-white">Right to Non-Discrimination:</strong> We will not
                discriminate against you for exercising your CCPA rights.
              </li>
              <li>
                <strong className="text-pss-white">No Sale of Data:</strong> We do not sell personal
                information as defined by the CCPA.
              </li>
            </ul>
            <p className="mt-3">
              To exercise your CCPA rights, contact us at{' '}
              <a href="mailto:riley@prometheusss.com" className="text-pss-gold hover:underline">
                riley@prometheusss.com
              </a>
              . We will respond within 45 days.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">6. GDPR Compliance (EU Visitors)</h2>
            <p>
              If you are located in the European Economic Area (EEA), you have additional rights
              under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong className="text-pss-white">Lawful Basis:</strong> We process your data based on
                legitimate business interest (service delivery) and consent (form submissions).
              </li>
              <li>
                <strong className="text-pss-white">Data Subject Rights:</strong> You have the right to
                access, rectify, erase, restrict processing, and port your personal data.
              </li>
              <li>
                <strong className="text-pss-white">Data Transfers:</strong> Your data may be transferred
                to and processed in the United States. By using our services, you consent to this transfer.
              </li>
            </ul>
            <p className="mt-3">
              To exercise your GDPR rights, contact us at{' '}
              <a href="mailto:riley@prometheusss.com" className="text-pss-gold hover:underline">
                riley@prometheusss.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">7. Cookies</h2>
            <p>
              Our website uses minimal cookies necessary for basic functionality. We do not use
              advertising or tracking cookies. If we implement analytics in the future, we will
              update this policy and provide appropriate notice and opt-out mechanisms.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">8. Your Rights</h2>
            <p>
              Regardless of your location, you have the right to:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Withdraw consent for data processing at any time.</li>
              <li>Lodge a complaint with a supervisory authority if applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-cinzel text-xl font-semibold text-pss-gold mb-4">9. Contact for Data Requests</h2>
            <p>
              For any privacy-related questions, data access requests, or concerns, please contact:
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
            <p className="mt-3">
              We will acknowledge your request within five (5) business days and provide a
              substantive response within thirty (30) days.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
