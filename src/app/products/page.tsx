import type { Metadata } from 'next'
import Image from 'next/image'
import ProductCategoryCard from '@/components/ui/ProductCategoryCard'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/ui/CTASection'
import { getWhatsAppUrl } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Buy Gardening Tools, Seeds, Fertilizers, Pesticides & Irrigation in Muscat Oman | Ibn Bashir',
  description: 'Buy agricultural tools, pesticides, seeds, fertilizers, irrigation systems & garden equipment in Muscat Oman. 9 product categories in stock at our Al Ghubrah showroom, Bawshar, Muscat. Call +968 9942 0951.',
  keywords: [
    'buy gardening tools Muscat', 'buy agricultural tools Oman', 'buy pesticides Muscat Oman',
    'buy seeds Muscat', 'buy fertilizers Oman', 'buy irrigation systems Oman',
    'gardening tools shop Muscat', 'seeds shop Muscat Oman', 'fertilizers shop Oman',
    'pesticides shop Muscat', 'garden equipment Bawshar', 'garden tools Al Ghubrah',
    'irrigation supplies Muscat', 'drip irrigation Oman', 'sprinkler system Oman',
    'grass seeds Muscat', 'vegetable seeds Oman', 'organic fertilizers Muscat',
    'herbicides Oman', 'insecticides Muscat', 'garden accessories Oman',
    'بذور مسقط', 'أسمدة عمان', 'مبيدات مسقط', 'أدوات زراعية مسقط',
  ],
  alternates: { canonical: 'https://www.ibnbashir.com/products' },
}

const PRODUCTS = [
  {
    title: 'Gardening Tools',
    desc: 'A full selection of professional-grade hand tools for digging, pruning, planting, and maintaining gardens of every size. Ideal for both home gardeners and professional landscapers.',
    image: '/images/products/gardening-tools.jpg.jpeg',
    color: 'bg-leaf/15',
    items: ['Spades & shovels', 'Pruning shears', 'Rakes & hoes', 'Trowels & forks', 'Garden gloves'],
  },
  {
    title: 'Agricultural Equipment',
    desc: 'Power tools and machinery designed for larger farming and agricultural operations. We supply reliable equipment suitable for Oman\'s diverse agricultural environments.',
    image: '/images/products/agricultural-equipment.jpg.jpeg',
    color: 'bg-olive/10',
    items: ['Tillers & cultivators', 'Sprayers', 'Water pumps', 'Power seeders', 'Soil aerators'],
  },
  {
    title: 'Pesticides',
    desc: 'Licensed and effective pesticides, herbicides, and fungicides for protecting crops, gardens, and outdoor spaces from insects, weeds, and disease. Safe for residential and commercial use.',
    image: '/images/products/pesticides.jpg (2).jpeg',
    color: 'bg-forest/10',
    items: ['Insecticides', 'Herbicides', 'Fungicides', 'Rodenticides', 'Soil fumigants'],
  },
  {
    title: 'Seeds',
    desc: 'Certified seeds for a wide variety of plants including vegetables, flowers, ornamental grasses, herbs, and ground cover. Suitable for Oman\'s climate and growing conditions.',
    image: '/images/products/seeds.jpg.jpeg',
    color: 'bg-gold/10',
    items: ['Grass seeds', 'Vegetable seeds', 'Flower seeds', 'Herb seeds', 'Ground cover seeds'],
  },
  {
    title: 'Fertilizers',
    desc: 'Organic and chemical fertilizers to enrich soil, promote healthy plant growth, and boost agricultural yield. Available in granular, liquid, and slow-release forms.',
    image: '/images/products/fertilizers.jpg.jpeg',
    color: 'bg-leaf/15',
    items: ['Organic compost', 'NPK fertilizers', 'Slow-release pellets', 'Liquid feeds', 'Soil conditioners'],
  },
  {
    title: 'Irrigation Tools',
    desc: 'Comprehensive range of drip irrigation and sprinkler tools and equipment to establish efficient, water-saving irrigation systems for gardens, farms, and commercial landscapes.',
    image: '/images/products/irrigation-tools.jpg.jpeg',
    color: 'bg-olive/10',
    items: ['Drip emitters', 'Sprinkler heads', 'Timers & controllers', 'Pressure regulators', 'Filters & connectors'],
  },
  {
    title: 'Irrigation Materials',
    desc: 'All the pipes, hoses, fittings, and tubing you need to build or expand an irrigation system. We stock materials in various sizes and materials suited to Oman\'s outdoor conditions.',
    image: '/images/products/irrigation-materials.jpg.jpeg',
    color: 'bg-forest/10',
    items: ['PE pipes', 'Hoses & tubing', 'Valves & fittings', 'Drip lines', 'Water connectors'],
  },
  {
    title: 'Planting Accessories',
    desc: 'Everything needed for planting and pot management, including growing media, plant pots, trays, stakes, and supports for indoor and outdoor gardening projects.',
    image: '/images/products/planting-accessories.jpg.jpeg',
    color: 'bg-gold/10',
    items: ['Plant pots & planters', 'Seed trays', 'Growing media', 'Stakes & ties', 'Net pots'],
  },
  {
    title: 'Garden Care Products',
    desc: 'Supplementary products for garden upkeep including mulch, peat, bark chips, weed barriers, and garden decoration materials to keep outdoor spaces neat and healthy.',
    image: '/images/products/garden-care.jpg.jpeg',
    color: 'bg-leaf/15',
    items: ['Mulch & bark chips', 'Weed barriers', 'Peat & coir', 'Stones & gravel', 'Garden décor'],
  },
]

export default function ProductsPage() {
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
          <span className="tag mb-3 block text-gold">What We Carry</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-5 leading-tight">
            Our Product Range
          </h1>
          <p className="text-cream/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Everything your garden, farm, or outdoor space needs — available at our Muscat showroom or through direct supply. Request a quote on any category below.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-pad bg-cream-light">
        <div className="container-max">
          <SectionHeading
            tag="Browse Products"
            title="9 Categories, Hundreds of Products"
            subtitle="From hand tools to irrigation systems, our range covers every aspect of gardening and agriculture. Contact us for specific products, bulk orders, or pricing."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <ProductCategoryCard
                key={p.title}
                title={p.title}
                description={p.desc}
                image={p.image}
                imageColor={p.color}
                items={p.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 px-6 md:px-10 bg-white">
        <div className="container-max">
          <div className="bg-forest/5 border border-forest/20 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-forest-dark text-xl mb-3">
              Don&apos;t See What You Need?
            </h3>
            <p className="text-charcoal/65 font-body text-sm max-w-lg mx-auto mb-6 leading-relaxed">
              Our showroom stocks a wide range of products not all listed here. Contact us on WhatsApp or visit us in Muscat to check availability on specific items or to discuss bulk order requirements.
            </p>
            <a
              href={getWhatsAppUrl('Hello Ibn Bashir Trading, I am looking for a specific product.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Ask About a Specific Product
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Order or Get a Quote?"
        subtitle="Reach out on WhatsApp and our team will respond promptly with pricing, availability, and delivery options."
        whatsappLabel="Request a Quote on WhatsApp"
        primaryLabel="Visit Our Showroom"
        primaryHref="/showroom"
      />
    </>
  )
}
