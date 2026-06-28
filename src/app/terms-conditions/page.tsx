import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Ibn Bashir Trading',
  description: 'Read the terms and conditions governing your use of the Ibn Bashir Trading website and purchases from our showroom in Oman.',
}

export default function TermsConditionsPage() {
  return (
    <>
      <section className="bg-forest-dark py-16 px-6 md:px-10">
        <div className="container-max text-center">
          <h1 className="font-display text-4xl font-bold text-cream mb-3">Terms & Conditions</h1>
          <p className="text-cream/60 font-body text-sm">Last updated: January 2024</p>
        </div>
      </section>

      <section className="section-pad bg-cream-light">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-cream-dark flex flex-col gap-8">

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">1. Agreement to Terms</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                By accessing or using the Ibn Bashir Trading website and contacting us for products or services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">2. Products & Services</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                Ibn Bashir Trading supplies agricultural and gardening products including tools, seeds, fertilizers, pesticides, irrigation materials, and equipment. All products are subject to availability. Prices are subject to change without notice. Final pricing is confirmed at the time of order or at our showroom.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">3. Quotations & Orders</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                Quotations provided via WhatsApp, email, or in-person are valid for a limited period as stated in the quote. Orders are confirmed only upon written or verbal confirmation from our team. Ibn Bashir Trading reserves the right to decline any order at its discretion.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">4. Payments</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                Payment terms are as agreed at the time of purchase. We accept cash, bank transfer, and other methods as discussed with our team. Ownership of goods transfers to the buyer upon full payment.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">5. Returns & Exchanges</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                Returns and exchanges are accepted within 7 days of purchase for unused items in original packaging, subject to management approval. Pesticides, seeds, and opened products are generally non-returnable for safety and quality reasons. Please contact us before returning any item.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">6. Liability Limitation</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                Ibn Bashir Trading is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Products must be used according to manufacturer guidelines and applicable Omani regulations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">7. Website Use</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                The content on this website is for informational purposes only. We reserve the right to modify or remove website content at any time without notice. Unauthorized use of website content is prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">8. Governing Law</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                These Terms & Conditions are governed by the laws of the Sultanate of Oman. Any disputes shall be subject to the jurisdiction of Omani courts.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">9. Contact</h2>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                For any questions regarding these Terms & Conditions:<br />
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
