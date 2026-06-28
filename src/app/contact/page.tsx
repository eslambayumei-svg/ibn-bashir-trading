import type { Metadata } from 'next'
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG, getWhatsAppUrl } from '@/lib/config'
import ContactForm from '@/components/ui/ContactForm'
import MapSection from '@/components/ui/MapSection'

export const metadata: Metadata = {
  title: 'Contact Ibn Bashir Trading – Agriculture & Garden Supplies Muscat Oman | +968 9942 0951',
  description: 'Contact Ibn Bashir Trading in Muscat, Oman. Visit our showroom opposite Sultan Qaboos Sports Complex, Al Ghubrah Bawshar. Call +968 9942 0951 or WhatsApp for quotes on agricultural tools, pesticides & more.',
  keywords: ['contact agriculture supplier Muscat', 'Ibn Bashir Trading phone number', 'garden shop Bawshar Muscat', 'agriculture showroom Ghubrah Oman', 'pesticides supplier contact Muscat'],
  alternates: { canonical: 'https://www.ibnbashir.com/contact' },
}

const CONTACT_DETAILS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: SITE_CONFIG.phone,
    href: getWhatsAppUrl(),
    cta: 'Chat Now',
    color: 'bg-[#25D366]/10 border-[#25D366]/30',
    iconColor: 'text-[#25D366]',
    external: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
    cta: 'Call Us',
    color: 'bg-forest/10 border-forest/20',
    iconColor: 'text-forest',
    external: false,
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    cta: 'Send Email',
    color: 'bg-gold/10 border-gold/30',
    iconColor: 'text-gold-dark',
    external: false,
  },
  {
    icon: MapPin,
    label: 'Showroom',
    value: SITE_CONFIG.addressFull,
    href: '#map',
    cta: 'View Map',
    color: 'bg-olive/10 border-olive/20',
    iconColor: 'text-olive',
    external: false,
  },
]

export default function ContactPage() {
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
          <span className="tag mb-3 block text-gold">Get In Touch</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-5 leading-tight">
            Contact Us
          </h1>
          <p className="text-cream/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re here to help with product inquiries, quotes, showroom visits, and service requests. The fastest way to reach us is via WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-14 px-6 md:px-10 bg-cream-light">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_DETAILS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className={`${c.color} border rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300`}
              >
                <c.icon className={`w-6 h-6 ${c.iconColor}`} />
                <div>
                  <div className="text-xs font-body font-semibold tracking-widest uppercase text-charcoal/40 mb-1">{c.label}</div>
                  <div className="text-sm font-body text-charcoal font-medium leading-relaxed">{c.value}</div>
                </div>
                <span className={`text-xs font-body font-semibold ${c.iconColor} mt-auto`}>{c.cta} →</span>
              </a>
            ))}
          </div>
          {/* Working hours */}
          <div className="flex items-center gap-3 bg-white border border-cream-dark rounded-2xl px-6 py-4 mt-5">
            <Clock className="w-5 h-5 text-gold flex-shrink-0" />
            <div>
              <span className="text-xs font-body font-semibold tracking-widest uppercase text-charcoal/40">Working Hours</span>
              <p className="text-sm font-body text-charcoal font-medium">{SITE_CONFIG.workingHours} &nbsp;·&nbsp; Friday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="tag mb-3 block">Send a Message</span>
              <h2 className="font-display text-3xl font-bold text-forest-dark mb-4 leading-tight">
                Tell Us What You Need
              </h2>
              <p className="text-charcoal/65 font-body text-sm leading-relaxed mb-7">
                Fill in the form below and your message will be sent directly to our team via WhatsApp. We aim to respond within a few hours during working hours.
              </p>
              <ContactForm />
            </div>
            <div>
              <span className="tag mb-3 block">Our Location</span>
              <h2 className="font-display text-3xl font-bold text-forest-dark mb-4 leading-tight">
                Find Our Showroom
              </h2>
              <p className="text-charcoal/65 font-body text-sm leading-relaxed mb-7">
                Our showroom is open to visitors during working hours. Come in to explore our full product range or discuss your project with our team.
              </p>
              <div id="map">
                <MapSection />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="py-12 px-6 md:px-10 bg-[#25D366]">
        <div className="container-max text-center">
          <div className="flex flex-col items-center gap-4">
            <MessageCircle className="w-10 h-10 text-white" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              The Fastest Way to Reach Us is WhatsApp
            </h2>
            <p className="text-white/80 font-body max-w-md text-sm leading-relaxed">
              Send us a message any time. We&apos;ll reply quickly with pricing, availability, or to arrange a showroom visit.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#25D366] font-body font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-colors"
            >
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
