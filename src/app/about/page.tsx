import type { Metadata } from 'next'
import { Eye, Target, Heart, Award, Users, CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'About Us – Ibn Bashir Trading | Agriculture & Garden Supplier Muscat Oman Since 2011',
  description: 'Ibn Bashir Trading has been Muscat\'s trusted agriculture and gardening supplier since 2011. Located in Al Ghubrah, Bawshar, Muscat. Serving government, private villas, farms & commercial clients across Oman.',
  keywords: ['Ibn Bashir Trading Muscat', 'agriculture company Muscat Oman', 'garden supplier Bawshar Muscat', 'agricultural tools supplier Oman since 2011', 'Ghubrah agriculture shop'],
  alternates: { canonical: 'https://www.ibnbashir.com/about' },
}

const VALUES = [
  { icon: Award, title: 'Quality', desc: 'We source only certified, high-quality products from trusted suppliers and brands.' },
  { icon: CheckCircle, title: 'Reliability', desc: 'Clients count on us for consistent supply, honest pricing, and dependable service.' },
  { icon: Users, title: 'Partnership', desc: 'We build long-term relationships with every client, understanding their unique needs.' },
  { icon: Heart, title: 'Care', desc: 'We care deeply about the environment, our community, and the health of every green space we touch.' },
]

const TIMELINE = [
  { year: '2011', title: 'Founded in Oman', desc: 'Ibn Bashir Trading was established in the Sultanate of Oman, beginning with a focus on gardening tools and agriculture supplies.' },
  { year: '2013', title: 'Showroom Opened', desc: 'We opened our Muscat showroom, giving customers a physical space to explore our full product range.' },
  { year: '2016', title: 'Government Projects', desc: 'We began supplying products and services to government entities, municipalities, and large-scale outdoor projects.' },
  { year: '2020', title: 'Expanded Product Range', desc: 'Expanded to include irrigation materials, agricultural equipment, and a wider selection of fertilizers and pesticides.' },
  { year: '2024', title: 'Serving All Oman', desc: 'Today we serve hundreds of satisfied clients across Oman, from private villas to commercial landscaping projects.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-forest-dark py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 600 300">
            <circle cx="500" cy="50" r="250" fill="#52B788"/>
            <circle cx="100" cy="250" r="180" fill="#C9A84C"/>
          </svg>
        </div>
        <div className="container-max relative z-10 text-center">
          <span className="tag mb-3 block text-gold">Our Story</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-5 leading-tight">
            About Ibn Bashir Trading
          </h1>
          <p className="text-cream/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            A trusted Omani company serving the agriculture and gardening sector with quality products and professional services since 2011.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-cream-light">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="tag mb-3 block">Our Journey</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-dark leading-tight mb-5">
                Over 13 Years of Trusted Service in Oman
              </h2>
              <div className="flex flex-col gap-4 text-charcoal/65 font-body text-base leading-relaxed">
                <p>
                  Founded in 2011, Ibn Bashir Trading was established with a clear mission: to provide the Sultanate of Oman with a reliable, one-stop source for quality agricultural and gardening products. From our early days as a small local supplier, we have grown into one of Oman&apos;s trusted names in the sector.
                </p>
                <p>
                  Operating from our Muscat showroom, we serve a diverse client base that includes government entities, municipalities, private garden owners, farm operators, villa residents, landscaping contractors, and commercial outdoor space managers.
                </p>
                <p>
                  Every product we stock and every service we provide is backed by our commitment to quality, fair pricing, and professional support. Our team understands the specific needs of gardening and agriculture in Oman&apos;s unique climate, and we use that knowledge to guide every customer to the right solution.
                </p>
              </div>
            </div>
            <div className="bg-forest rounded-2xl p-8 text-cream flex flex-col gap-6">
              <div className="text-5xl">🌿</div>
              <blockquote className="font-display text-xl leading-relaxed font-bold italic">
                &ldquo;We believe every garden, farm, and outdoor space in Oman deserves the best care, the right tools, and a partner they can rely on.&rdquo;
              </blockquote>
              <div className="text-cream/60 text-sm font-body">— Ibn Bashir Trading Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-forest rounded-2xl p-8">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-cream mb-4">Our Mission</h3>
              <p className="text-cream/70 font-body leading-relaxed">
                To be Oman&apos;s most trusted supplier of agricultural and gardening products, providing our clients with the best quality tools, materials, and professional expertise — helping them grow, maintain, and beautify every outdoor space.
              </p>
            </div>
            <div className="bg-cream-dark rounded-2xl p-8">
              <div className="w-12 h-12 bg-forest/20 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-display text-2xl font-bold text-forest-dark mb-4">Our Vision</h3>
              <p className="text-charcoal/65 font-body leading-relaxed">
                To be recognized across the Sultanate of Oman as the leading agriculture and gardening solutions provider, expanding our product range and services to meet the growing needs of a greener, more sustainable Oman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-cream-light">
        <div className="container-max">
          <SectionHeading
            tag="Timeline"
            title="Our Growth Through the Years"
          />
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-cream-dark md:-translate-x-px" />
            <div className="flex flex-col gap-10">
              {TIMELINE.map((item, i) => (
                <div key={item.year} className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0`}>
                  {/* Content */}
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-10">
                    <div className="card p-6">
                      <div className="text-2xl font-display font-bold text-gold mb-1">{item.year}</div>
                      <h4 className="font-display font-bold text-forest-dark text-lg mb-2">{item.title}</h4>
                      <p className="text-sm font-body text-charcoal/65 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-5 w-5 h-5 rounded-full bg-forest border-4 border-cream-light md:-translate-x-2.5 z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            tag="Our Values"
            title="What We Stand For"
            subtitle="Our values guide every product we stock, every service we offer, and every relationship we build."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-6">
                <div className="w-11 h-11 bg-forest/10 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-forest" />
                </div>
                <h3 className="font-display font-bold text-forest-dark text-lg mb-2">{v.title}</h3>
                <p className="text-sm font-body text-charcoal/65 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With a Team You Can Trust"
        subtitle="Contact Ibn Bashir Trading today to discuss your agricultural and gardening needs."
        whatsappLabel="Chat on WhatsApp"
        primaryLabel="View Our Services"
        primaryHref="/services"
      />
    </>
  )
}
