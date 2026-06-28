import type { Metadata } from 'next'
import { Building2, Home, Tractor, Trees, Landmark, Leaf, CheckCircle, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ClientTypeCard from '@/components/ui/ClientTypeCard'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Projects & Clients – Government, Private & Commercial Clients in Oman | Ibn Bashir Trading',
  description: 'Ibn Bashir Trading has served government entities, private gardens, villas, farms, and commercial outdoor spaces across Oman since 2011. Trusted by diverse clients for agriculture and gardening supply.',
  keywords: ['agriculture supplier government Oman', 'landscaping projects Oman', 'garden maintenance clients Oman', 'commercial outdoor Oman'],
}

const CLIENT_TYPES = [
  {
    icon: Landmark,
    title: 'Government Entities',
    description: 'We supply agricultural and gardening products to government ministries, municipalities, and public sector entities across Oman. Our team understands procurement requirements and ensures timely, reliable delivery.',
    accent: 'bg-forest/10',
  },
  {
    icon: Home,
    title: 'Private Villas',
    description: 'Private villa owners trust Ibn Bashir Trading for the highest quality gardening tools, plants, and maintenance supplies to keep their personal outdoor spaces beautiful and well-maintained.',
    accent: 'bg-gold/10',
  },
  {
    icon: Tractor,
    title: 'Farms & Agriculture',
    description: 'We support Oman\'s farming community with seeds, fertilizers, pesticides, irrigation equipment, and agricultural machinery suited to local soil and climate conditions.',
    accent: 'bg-leaf/10',
  },
  {
    icon: Trees,
    title: 'Landscaping Projects',
    description: 'Landscaping contractors and design firms rely on us for bulk product supply, equipment sourcing, and consistent delivery throughout the project lifecycle.',
    accent: 'bg-olive/10',
  },
  {
    icon: Building2,
    title: 'Commercial Outdoor Spaces',
    description: 'Hotels, malls, offices, and commercial properties across Oman use our products and services to maintain premium outdoor environments that make lasting impressions.',
    accent: 'bg-forest/10',
  },
  {
    icon: Leaf,
    title: 'Outdoor Maintenance Projects',
    description: 'Long-term maintenance projects benefit from our reliable supply chain, competitive pricing, and expert consultation services available throughout the project duration.',
    accent: 'bg-gold/10',
  },
]

const PROJECT_HIGHLIGHTS = [
  { label: 'Government projects served', value: '50+' },
  { label: 'Private villas supplied', value: '300+' },
  { label: 'Farms and agricultural clients', value: '100+' },
  { label: 'Landscaping contractors supported', value: '80+' },
]

const WHY_TRUST = [
  'Over 13 years of proven experience in Oman',
  'Serving government, private, and commercial sectors',
  'Reliable delivery and consistent product availability',
  'Competitive pricing with bulk order discounts',
  'Expert staff available for consultation and guidance',
  'Licensed and certified product range',
  'Full range of products under one roof at our Muscat showroom',
  'Long-term client relationships and repeat business',
]

export default function ProjectsPage() {
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
          <span className="tag mb-3 block text-gold">Our Track Record</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-5 leading-tight">
            Projects & Clients
          </h1>
          <p className="text-cream/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Since 2011, Ibn Bashir Trading has proudly served a wide range of clients across Oman — from government entities to private garden owners — delivering quality products and reliable service every time.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-6 md:px-10 bg-cream-light">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROJECT_HIGHLIGHTS.map((h) => (
              <div key={h.label} className="text-center bg-white rounded-2xl p-6 border border-cream-dark">
                <div className="font-display text-3xl font-bold text-forest mb-2">{h.value}</div>
                <div className="text-xs font-body text-charcoal/60 leading-relaxed">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            tag="Who We Serve"
            title="Trusted by Diverse Clients Across Oman"
            subtitle="Our experience spans a wide range of client types, each with unique needs we are equipped to meet."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_TYPES.map((c) => (
              <ClientTypeCard
                key={c.title}
                icon={c.icon}
                title={c.title}
                description={c.description}
                accent={c.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Samples */}
      <section className="section-pad bg-cream-light">
        <div className="container-max">
          <SectionHeading
            tag="Project Examples"
            title="The Kind of Work We Support"
            subtitle="While we keep client details confidential, these examples represent the scope and quality of projects we have contributed to."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '🏛️', title: 'Government Campus Landscaping', desc: 'Supply of irrigation systems, fertilizers, and seasonal plants for a large government facility in Muscat. Ongoing annual supply contract.', tag: 'Government' },
              { emoji: '🏡', title: 'Private Villa Garden Overhaul', desc: 'Complete product supply for a villa garden renovation including tools, soil amendments, plants, and a new drip irrigation setup.', tag: 'Private' },
              { emoji: '🌾', title: 'Agricultural Farm Supply', desc: 'Regular bulk supply of seeds, pesticides, and fertilizers to a commercial farm operation in the interior of Oman.', tag: 'Agriculture' },
              { emoji: '🌳', title: 'Commercial Park Maintenance', desc: 'Ongoing supply of maintenance equipment and materials for a commercial outdoor park in a business district.', tag: 'Commercial' },
              { emoji: '🏗️', title: 'New Development Landscaping', desc: 'Product supply partner for a residential development project requiring full irrigation and landscape material packages.', tag: 'Landscaping' },
              { emoji: '🏨', title: 'Hotel Garden Supply', desc: 'Regular product supply and consultation for the outdoor grounds of a hospitality property requiring year-round green maintenance.', tag: 'Commercial' },
            ].map((p) => (
              <div key={p.title} className="card p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{p.emoji}</span>
                  <span className="text-xs font-body font-semibold px-3 py-1 bg-forest/10 text-forest rounded-full">{p.tag}</span>
                </div>
                <h3 className="font-display font-bold text-forest-dark text-base">{p.title}</h3>
                <p className="text-sm font-body text-charcoal/65 leading-relaxed flex-1">{p.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-charcoal/40 font-body">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  Completed successfully
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="section-pad bg-forest relative overflow-hidden">
        <div className="container-max">
          <SectionHeading
            tag="Why Clients Choose Us"
            title="What Makes Us the Right Partner"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {WHY_TRUST.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3.5">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm font-body text-cream/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Work Together on Your Next Project"
        subtitle="Whether you need a single product or a full project supply partner, Ibn Bashir Trading is ready to help."
        whatsappLabel="Discuss Your Project on WhatsApp"
        primaryLabel="View Our Products"
        primaryHref="/products"
      />
    </>
  )
}
