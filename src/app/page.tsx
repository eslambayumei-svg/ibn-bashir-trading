import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MessageCircle, ArrowRight, Leaf, Droplets, Bug, Sprout,
  Wrench, ShieldCheck, Building2, Star, Package, Store
} from 'lucide-react'
import { getWhatsAppUrl, SITE_CONFIG } from '@/lib/config'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import ProductCategoryCard from '@/components/ui/ProductCategoryCard'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Ibn Bashir Trading – Trusted Agriculture & Gardening Solutions in Oman Since 2011',
  description: 'Ibn Bashir Trading supplies quality gardening tools, pesticides, seeds, fertilizers, irrigation materials, and professional garden maintenance services across Oman. Serving government, private, and commercial clients since 2011.',
  keywords: ['Oman agriculture supplier', 'gardening tools Oman', 'pesticides Oman', 'garden maintenance Oman', 'landscaping Oman', 'irrigation tools Oman'],
}

const STATS = [
  { value: '13+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '9+', label: 'Product Categories' },
  { value: '100%', label: 'Client Satisfaction' },
]

const FEATURES = [
  { icon: ShieldCheck, title: 'Trusted Since 2011', desc: 'Over a decade of reliable service to Oman\'s government, private, and commercial sectors.' },
  { icon: Package, title: 'Comprehensive Range', desc: 'From seeds and fertilizers to heavy agricultural equipment, all in one place.' },
  { icon: Store, title: 'Physical Showroom', desc: 'Visit our showroom in Muscat to see products firsthand before purchasing.' },
  { icon: Building2, title: 'Government Approved', desc: 'Experienced working with government entities, municipalities, and large-scale projects.' },
]

const HOME_SERVICES = [
  { icon: Leaf, title: 'Garden Maintenance', desc: 'Professional upkeep for private gardens, villas, and green spaces to keep them thriving year-round.' },
  { icon: Droplets, title: 'Irrigation Support', desc: 'Supply and installation support for drip systems, sprinklers, and complete irrigation setups.' },
  { icon: Bug, title: 'Pest Control Supply', desc: 'Licensed pesticides and consultation for effective, safe pest management across all environments.' },
  { icon: Sprout, title: 'Agriculture Consultation', desc: 'Expert guidance on seeds, fertilizers, and soil health for farms and commercial growing projects.' },
]

const HOME_PRODUCTS = [
  { title: 'Gardening Tools', desc: 'Professional-grade hand tools and equipment for every gardening task.', emoji: '🪴', color: 'bg-leaf/10' },
  { title: 'Seeds', desc: 'Certified seeds for flowers, vegetables, grass, and ornamental plants.', emoji: '🌱', color: 'bg-olive/10' },
  { title: 'Fertilizers', desc: 'Organic and chemical fertilizers to enrich soil and boost plant growth.', emoji: '🌿', color: 'bg-gold/10' },
  { title: 'Pesticides', desc: 'Effective pest and weed control products for all types of landscapes.', emoji: '🔬', color: 'bg-forest/10' },
  { title: 'Irrigation Tools', desc: 'Hoses, pipes, pumps, drip systems, and all irrigation essentials.', emoji: '💧', color: 'bg-leaf/10' },
  { title: 'Agricultural Equipment', desc: 'Machinery and power tools for large-scale agricultural operations.', emoji: '🚜', color: 'bg-olive/10' },
]

const CLIENT_TYPES = [
  { label: 'Government Entities', color: 'bg-forest/10 text-forest' },
  { label: 'Private Villas', color: 'bg-gold/10 text-gold-dark' },
  { label: 'Farms & Agriculture', color: 'bg-leaf/10 text-leaf-dark' },
  { label: 'Commercial Spaces', color: 'bg-olive/10 text-olive' },
  { label: 'Landscaping Projects', color: 'bg-forest/10 text-forest' },
  { label: 'Municipalities', color: 'bg-gold/10 text-gold-dark' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-forest-dark overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="leaves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 10 Q70 30 50 50 Q30 30 50 10Z" fill="#52B788" opacity="0.3"/>
                <path d="M20 60 Q40 80 20 100 Q0 80 20 60Z" fill="#C9A84C" opacity="0.2"/>
                <path d="M80 60 Q100 80 80 100 Q60 80 80 60Z" fill="#52B788" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leaves)"/>
          </svg>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest/80 to-olive/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-body font-semibold tracking-widest uppercase text-gold">
                Est. {SITE_CONFIG.foundedYear} · Sultanate of Oman
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
              Trusted Agriculture &{' '}
              <span className="text-gold">Gardening Solutions</span>{' '}
              in Oman Since 2011
            </h1>
            <p className="text-cream/75 font-body text-lg leading-relaxed mb-10 max-w-xl">
              Supplying quality gardening tools, pesticides, seeds, fertilizers, irrigation materials, and professional maintenance services for government, private, and commercial clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-7 py-4"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us on WhatsApp
              </a>
              <Link href="/products" className="btn-gold text-base px-7 py-4">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats ribbon */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-bold text-gold">{s.value}</div>
                <div className="text-xs font-body text-cream/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-cream-light">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="tag mb-3 block">Who We Are</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-dark leading-tight mb-5">
                Oman&apos;s Reliable Agriculture & Gardening Partner
              </h2>
              <p className="text-charcoal/65 font-body text-base leading-relaxed mb-4">
                Since 2011, Ibn Bashir Trading has been supplying quality agricultural and gardening products to clients across the Sultanate of Oman. We operate from our Muscat showroom and serve a wide range of clients including government entities, private gardens, farms, villas, and commercial outdoor spaces.
              </p>
              <p className="text-charcoal/65 font-body text-base leading-relaxed mb-8">
                Our product range covers everything from seeds, fertilizers, and pesticides to irrigation systems, gardening tools, and agricultural equipment — all available through our showroom and direct supply services.
              </p>
              <div className="flex gap-4">
                <Link href="/about" className="btn-primary">
                  Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>
            {/* Visual */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-forest rounded-2xl h-48 flex flex-col items-center justify-center gap-2 text-cream">
                <span className="text-5xl">🌿</span>
                <span className="text-xs font-body tracking-widest uppercase text-cream/70">Garden Care</span>
              </div>
              <div className="bg-gold/20 rounded-2xl h-48 flex flex-col items-center justify-center gap-2 mt-8">
                <span className="text-5xl">🌾</span>
                <span className="text-xs font-body tracking-widest uppercase text-olive">Agriculture</span>
              </div>
              <div className="bg-leaf/20 rounded-2xl h-48 flex flex-col items-center justify-center gap-2">
                <span className="text-5xl">💧</span>
                <span className="text-xs font-body tracking-widest uppercase text-forest">Irrigation</span>
              </div>
              <div className="bg-cream-dark rounded-2xl h-48 flex flex-col items-center justify-center gap-2 mt-8">
                <span className="text-5xl">🔧</span>
                <span className="text-xs font-body tracking-widest uppercase text-charcoal/60">Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            tag="Our Products"
            title="Everything Your Garden & Farm Needs"
            subtitle="Browse our full range of agricultural and gardening products, available at our Muscat showroom and through direct supply."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_PRODUCTS.map((p) => (
              <ProductCategoryCard
                key={p.title}
                title={p.title}
                description={p.desc}
                imagePlaceholder={p.emoji}
                imageColor={p.color}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn-primary">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-cream-light">
        <div className="container-max">
          <SectionHeading
            tag="Our Services"
            title="Professional Services for Every Green Space"
            subtitle="From routine maintenance to full landscaping support, we provide expert services to keep your outdoor spaces at their best."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_SERVICES.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.desc} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <circle cx="350" cy="50" r="200" fill="#C9A84C"/>
            <circle cx="50" cy="350" r="150" fill="#52B788"/>
          </svg>
        </div>
        <div className="container-max relative z-10">
          <SectionHeading
            tag="Why Choose Us"
            title="The Ibn Bashir Trading Difference"
            subtitle="We combine deep local knowledge with a comprehensive product range to deliver exceptional value to every client."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-11 h-11 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display font-bold text-cream text-lg mb-2">{f.title}</h3>
                <p className="text-cream/65 text-sm font-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-cream-dark rounded-2xl h-72 flex flex-col items-center justify-center gap-3">
              <span className="text-7xl">🏪</span>
              <span className="text-sm font-body text-charcoal/60 tracking-widest uppercase">Our Showroom</span>
            </div>
            <div>
              <span className="tag mb-3 block">Visit Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-dark leading-tight mb-5">
                Explore Our Showroom in Muscat
              </h2>
              <p className="text-charcoal/65 font-body leading-relaxed mb-4">
                Our Muscat showroom is stocked with a wide selection of gardening tools, agricultural equipment, seeds, fertilizers, pesticides, irrigation supplies, and much more. Come in, see the products, and speak with our team.
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                {['Gardening tools & hand equipment', 'Seeds & planting accessories', 'Fertilizers & soil amendments', 'Pesticides & crop protection', 'Irrigation pipes, hoses & fittings'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-body text-charcoal/70">
                    <Star className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/showroom" className="btn-primary">
                Showroom Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-pad bg-cream-light">
        <div className="container-max">
          <SectionHeading
            tag="Our Clients"
            title="Trusted by a Wide Range of Clients"
            subtitle="From government entities to private gardens, we have the experience and products to serve every type of client in Oman."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {CLIENT_TYPES.map((c) => (
              <span
                key={c.label}
                className={`px-5 py-2.5 rounded-full text-sm font-body font-semibold ${c.color} border border-current/20`}
              >
                {c.label}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects" className="btn-outline">
              View Projects & Clients
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Work With Us?"
        subtitle="Contact our team on WhatsApp for a quick quote, product inquiry, or to arrange a showroom visit."
        whatsappLabel="Chat With Us on WhatsApp"
        primaryLabel="Explore Products"
        primaryHref="/products"
      />
    </>
  )
}
