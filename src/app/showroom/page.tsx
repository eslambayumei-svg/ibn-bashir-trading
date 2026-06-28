import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, MessageCircle, CheckCircle, ArrowRight, Star } from 'lucide-react'
import { SITE_CONFIG, getWhatsAppUrl } from '@/lib/config'
import SectionHeading from '@/components/ui/SectionHeading'
import MapSection from '@/components/ui/MapSection'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Showroom – Agriculture & Gardening Products in Muscat, Oman | Ibn Bashir Trading',
  description: 'Visit Ibn Bashir Trading\'s showroom in Muscat, Oman. Browse gardening tools, agricultural equipment, seeds, fertilizers, pesticides, and irrigation supplies in person.',
  keywords: ['gardening showroom Muscat', 'agriculture store Oman', 'gardening tools shop Oman', 'garden products Muscat'],
}

const SHOWROOM_CATEGORIES = [
  { emoji: '🪴', title: 'Gardening Tools', desc: 'Full range of hand tools, pruning equipment, and garden accessories.' },
  { emoji: '🌱', title: 'Seeds & Planting', desc: 'Certified seeds for grass, vegetables, flowers, herbs, and ornamentals.' },
  { emoji: '🌿', title: 'Fertilizers', desc: 'Granular, liquid, and organic fertilizers for all soil types.' },
  { emoji: '🔬', title: 'Pesticides', desc: 'Licensed pest control products for residential and commercial use.' },
  { emoji: '💧', title: 'Irrigation Supplies', desc: 'Drip systems, sprinklers, pipes, hoses, and all fittings.' },
  { emoji: '🚜', title: 'Agricultural Equipment', desc: 'Power tools and machinery for farms and large outdoor spaces.' },
  { emoji: '🪹', title: 'Planting Accessories', desc: 'Pots, trays, growing media, stakes, and garden care items.' },
  { emoji: '🏡', title: 'Garden Care', desc: 'Mulch, bark chips, weed barriers, and outdoor décor.' },
]

const REASONS = [
  'See and compare products before buying',
  'Get expert advice from our trained staff',
  'Immediate purchase and same-day availability',
  'Bulk order pricing available in-store',
  'Discover new products and seasonal promotions',
  'Discuss installation and usage with our team',
]

export default function ShowroomPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 600 300">
            <circle cx="500" cy="0" r="250" fill="#52B788"/>
            <circle cx="0" cy="300" r="200" fill="#C9A84C"/>
          </svg>
        </div>
        <div className="container-max relative z-10 text-center">
          <span className="tag mb-3 block text-gold">Come Visit Us</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-5 leading-tight">
            Our Showroom in Muscat
          </h1>
          <p className="text-cream/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Experience our full product range in person. Our Muscat showroom is your destination for quality agricultural and gardening products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={getWhatsAppUrl('Hello Ibn Bashir Trading, I would like to know your showroom location and working hours.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-4 h-4" />
              Ask for Directions
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-gold">
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-cream-light">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="bg-forest rounded-2xl h-80 flex flex-col items-center justify-center gap-4 text-center px-8">
              <span className="text-7xl">🏪</span>
              <h3 className="font-display font-bold text-cream text-2xl">Ibn Bashir Trading Showroom</h3>
              <p className="text-cream/70 font-body text-sm">{SITE_CONFIG.addressFull}</p>
              <div className="flex items-center gap-2 text-gold text-sm font-body">
                <Clock className="w-4 h-4" />
                {SITE_CONFIG.workingHours}
              </div>
            </div>
            <div>
              <span className="tag mb-3 block">Our Showroom</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-dark leading-tight mb-5">
                Everything Under One Roof
              </h2>
              <p className="text-charcoal/65 font-body leading-relaxed mb-4">
                Our Muscat showroom is stocked with an extensive range of gardening and agriculture products. Whether you need a single pruning tool or a complete irrigation system, you&apos;ll find it here. Our experienced staff are ready to assist you in selecting the right products for your project.
              </p>
              <p className="text-charcoal/65 font-body leading-relaxed mb-6">
                The showroom serves individual homeowners, landscaping contractors, farm operators, and government procurement teams. We offer flexible purchasing options and bulk discounts for large orders.
              </p>
              <ul className="flex flex-col gap-2.5">
                {REASONS.map((r) => (
                  <li key={r} className="flex items-center gap-2.5 text-sm font-body text-charcoal/70">
                    <CheckCircle className="w-4 h-4 text-leaf-dark flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Available */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            tag="In Stock"
            title="Products Available in Our Showroom"
            subtitle="Browse our showroom categories. Not all items may be listed online — visit us or contact us to check specific products."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {SHOWROOM_CATEGORIES.map((cat) => (
              <div key={cat.title} className="card p-5 flex flex-col items-center text-center gap-3">
                <span className="text-4xl">{cat.emoji}</span>
                <h3 className="font-display font-bold text-forest-dark text-base">{cat.title}</h3>
                <p className="text-xs font-body text-charcoal/60 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn-primary">
              View Full Product List
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-pad bg-cream-light">
        <div className="container-max">
          <SectionHeading
            tag="Find Us"
            title="Showroom Location & Contact"
            subtitle="Visit us during working hours or get in touch before you come."
          />
          <MapSection />
        </div>
      </section>

      {/* Visit CTA */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream-dark rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <MapPin className="w-8 h-8 text-forest" />
              <h3 className="font-display font-bold text-forest-dark">Our Address</h3>
              <p className="text-sm font-body text-charcoal/65 leading-relaxed">{SITE_CONFIG.addressFull}</p>
            </div>
            <div className="bg-forest rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <Clock className="w-8 h-8 text-gold" />
              <h3 className="font-display font-bold text-cream">Working Hours</h3>
              <p className="text-sm font-body text-cream/70 leading-relaxed">{SITE_CONFIG.workingHours}<br />Friday: Closed</p>
            </div>
            <div className="bg-cream-dark rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <Phone className="w-8 h-8 text-forest" />
              <h3 className="font-display font-bold text-forest-dark">Call or WhatsApp</h3>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm font-body text-forest hover:text-gold transition-colors">{SITE_CONFIG.phone}</a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs px-4 py-2 mt-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Plan Your Showroom Visit Today"
        subtitle="Contact us before visiting to confirm product availability or ask about bulk pricing."
        whatsappLabel="Message Us on WhatsApp"
        primaryLabel="Explore Products Online"
        primaryHref="/products"
      />
    </>
  )
}
