import type { Metadata } from 'next'
import {
  Leaf, Droplets, Bug, Sprout, Wrench, Package, Home, Building2,
  MessageCircle, CheckCircle
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/ui/CTASection'
import { getWhatsAppUrl } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Services – Garden Maintenance, Landscaping & Irrigation in Muscat Oman | Ibn Bashir',
  description: 'Professional garden maintenance, irrigation systems, pest control supply & landscaping services in Muscat, Oman. Ibn Bashir Trading serves villas, farms, government & commercial clients. Call +968 9942 0951.',
  keywords: ['garden maintenance Oman', 'landscaping services Oman', 'irrigation system Oman', 'pest control Oman', 'agriculture consultation Oman'],
}

const SERVICES = [
  {
    icon: Leaf,
    title: 'Garden Maintenance',
    description: 'Professional routine maintenance for private gardens, villa grounds, and green spaces. Our maintenance services keep your outdoor areas healthy, tidy, and looking their best throughout the year.',
    highlights: ['Mowing and trimming', 'Plant health monitoring', 'Seasonal cleanup', 'Soil care and mulching'],
    color: 'bg-leaf/10',
  },
  {
    icon: Building2,
    title: 'Landscaping Support',
    description: 'We support landscaping contractors and project managers with the supply of materials, tools, and products needed for landscape design and installation projects across Oman.',
    highlights: ['Product sourcing & supply', 'Equipment rental support', 'Material consultation', 'Bulk pricing for contractors'],
    color: 'bg-olive/10',
  },
  {
    icon: Droplets,
    title: 'Irrigation System Support',
    description: 'We supply all the materials needed for drip irrigation, sprinkler systems, and water management setups. Our team can guide you in selecting the right components for your land size and water requirements.',
    highlights: ['Drip irrigation supplies', 'Sprinkler system parts', 'Pipes, fittings & hoses', 'Irrigation consultation'],
    color: 'bg-leaf/10',
  },
  {
    icon: Bug,
    title: 'Pest Control Product Supply',
    description: 'We stock a comprehensive range of licensed pesticides, herbicides, and fungicides suitable for gardens, farms, and commercial outdoor areas. Our team can guide you on safe and effective application.',
    highlights: ['Insecticides & herbicides', 'Fungicides & soil treatment', 'Safe usage guidance', 'Bulk supply available'],
    color: 'bg-gold/10',
  },
  {
    icon: Sprout,
    title: 'Agriculture Product Consultation',
    description: 'Our experienced team provides guidance on choosing the right seeds, fertilizers, and soil treatments for your specific crops, climate, and soil conditions in Oman.',
    highlights: ['Seed selection guidance', 'Fertilizer recommendations', 'Soil health advice', 'Crop-specific solutions'],
    color: 'bg-forest/10',
  },
  {
    icon: Package,
    title: 'Showroom Product Supply',
    description: 'Our Muscat showroom is your physical destination for all agricultural and gardening products. Browse, compare, and purchase tools, equipment, seeds, fertilizers, and much more in one location.',
    highlights: ['Full product selection in-store', 'Expert staff on hand', 'Bulk order discounts', 'Delivery arrangements'],
    color: 'bg-olive/10',
  },
  {
    icon: Home,
    title: 'Private Garden Support',
    description: 'Tailored services for homeowners and villa residents looking to maintain or improve their private gardens. We supply products and offer practical guidance to help your garden thrive.',
    highlights: ['Villa garden product supply', 'Personal garden advice', 'Planting accessories', 'Ongoing product support'],
    color: 'bg-leaf/10',
  },
  {
    icon: Wrench,
    title: 'Commercial & Government Outdoor Spaces',
    description: 'We have extensive experience supplying products and materials to government entities, municipalities, commercial properties, and large-scale outdoor spaces across the Sultanate of Oman.',
    highlights: ['Government procurement support', 'Commercial bulk orders', 'Consistent long-term supply', 'On-site consultation available'],
    color: 'bg-forest/10',
  },
]

export default function ServicesPage() {
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
          <span className="tag mb-3 block text-gold">What We Offer</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-5 leading-tight">
            Our Services
          </h1>
          <p className="text-cream/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Professional gardening, landscaping, and agriculture services designed for government, private, and commercial clients across the Sultanate of Oman.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-cream-light">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className={`card p-8 flex flex-col gap-5`}>
                <div className={`w-13 h-13 ${service.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <service.icon className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-forest-dark text-xl mb-3">{service.title}</h2>
                  <p className="text-charcoal/65 font-body text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs font-body text-charcoal/70">
                        <CheckCircle className="w-3.5 h-3.5 text-leaf flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl(`Hello Ibn Bashir Trading, I would like to inquire about your ${service.title} service.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp self-start text-xs px-4 py-2.5 mt-auto"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Inquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Service or Bulk Order?"
        subtitle="Contact our team on WhatsApp to discuss your specific requirements. We serve government, private, and commercial clients."
        whatsappLabel="Discuss Your Needs on WhatsApp"
        primaryLabel="View Our Products"
        primaryHref="/products"
      />
    </>
  )
}
