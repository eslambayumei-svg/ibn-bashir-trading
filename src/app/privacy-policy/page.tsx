import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ibn Bashir Trading',
  description: 'Read the privacy policy of Ibn Bashir Trading. We are committed to protecting the personal information of our clients and website visitors.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-forest-dark py-16 px-6 md:px-10">
        <div className="container-max text-center">
          <h1 className="font-display text-4xl font-bold text-cream mb-3">Privacy Policy</h1>
          <p className="text-cream/60 font-body text-sm">Last updated: January 2024</p>
        </div>
      </section>

      <section className="section-pad bg-cream-light">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose-custom bg-white rounded-2xl p-8 md:p-12 border border-cream-dark flex flex-col gap-8">

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">1. Introduction</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                Ibn Bashir Trading (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard any information you provide when you visit our website or contact us.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">2. Information We Collect</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed mb-3">
                We may collect the following types of information when you interact with our website or contact us:
              </p>
              <ul className="flex flex-col gap-2 text-sm font-body text-charcoal/70 list-disc pl-5">
                <li>Your name and contact details (phone number, email address)</li>
                <li>The nature of your inquiry or product request</li>
                <li>Messages you send us via WhatsApp, email, or our contact form</li>
                <li>General website usage data (via analytics tools, if applicable)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">3. How We Use Your Information</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed mb-3">We use your information only to:</p>
              <ul className="flex flex-col gap-2 text-sm font-body text-charcoal/70 list-disc pl-5">
                <li>Respond to your inquiries and provide product or service information</li>
                <li>Process orders or quote requests</li>
                <li>Improve our website and customer experience</li>
                <li>Comply with legal obligations in the Sultanate of Oman</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">4. WhatsApp Communications</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                When you contact us via WhatsApp, your messages and contact details are received directly through the WhatsApp platform. We do not store WhatsApp messages on external servers. WhatsApp&apos;s own privacy policy governs messages sent through their platform.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">5. Data Sharing</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                We do not sell, trade, or share your personal information with third parties except where required by Omani law or necessary to fulfil a service you have requested (e.g., delivery partners).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">6. Data Security</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                We take reasonable precautions to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute data security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">7. Your Rights</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                You have the right to request access to, correction of, or deletion of your personal data held by us. To make such a request, please contact us at {SITE_CONFIG.email}.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">8. Changes to This Policy</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">9. Contact</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                For any privacy-related questions, please contact us at:<br />
                <strong>Email:</strong> {SITE_CONFIG.email}<br />
                <strong>Phone:</strong> {SITE_CONFIG.phone}<br />
                <strong>Address:</strong> {SITE_CONFIG.addressFull}
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
