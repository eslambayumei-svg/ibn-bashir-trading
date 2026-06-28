import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { SITE_CONFIG, getWhatsAppUrl } from '@/lib/config'

const LINKS = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/projects', label: 'Projects & Clients' },
    { href: '/showroom', label: 'Our Showroom' },
    { href: '/contact', label: 'Contact Us' },
  ],
  services: [
    { href: '/services', label: 'Garden Maintenance' },
    { href: '/services', label: 'Landscape Support' },
    { href: '/services', label: 'Irrigation Systems' },
    { href: '/services', label: 'Pest Control Supply' },
  ],
  products: [
    { href: '/products', label: 'Gardening Tools' },
    { href: '/products', label: 'Seeds & Fertilizers' },
    { href: '/products', label: 'Pesticides' },
    { href: '/products', label: 'Irrigation Materials' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-conditions', label: 'Terms & Conditions' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/80">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-5">
                <Image
                  src="/logo.png"
                  alt="Ibn Bashir Trading"
                  width={160}
                  height={60}
                  className="h-14 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm leading-relaxed text-cream/60 mb-6 max-w-xs">
                Oman&apos;s trusted supplier of agricultural and gardening products, serving government, private, and commercial clients since 2011.
              </p>
              <div className="flex flex-col gap-2.5 text-sm">
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2.5 text-cream/60 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0 text-gold" />
                  {SITE_CONFIG.phone}
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2.5 text-cream/60 hover:text-gold transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0 text-gold" />
                  {SITE_CONFIG.email}
                </a>
                <div className="flex items-start gap-2.5 text-cream/60">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-gold mt-0.5" />
                  {SITE_CONFIG.addressFull}
                </div>
                <div className="flex items-center gap-2.5 text-cream/60">
                  <Clock className="w-4 h-4 flex-shrink-0 text-gold" />
                  {SITE_CONFIG.workingHours}
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-cream text-sm font-body font-semibold tracking-wider uppercase mb-4">Company</h4>
              <ul className="flex flex-col gap-2">
                {LINKS.company.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-cream/60 hover:text-gold transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-cream text-sm font-body font-semibold tracking-wider uppercase mb-4">Services</h4>
              <ul className="flex flex-col gap-2">
                {LINKS.services.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-cream/60 hover:text-gold transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-cream text-sm font-body font-semibold tracking-wider uppercase mb-4">Products</h4>
              <ul className="flex flex-col gap-2">
                {LINKS.products.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-cream/60 hover:text-gold transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-cream/40">
          © {new Date().getFullYear()} Ibn Bashir Trading. All rights reserved. Muscat, Sultanate of Oman.
        </p>
        <div className="flex items-center gap-4">
          {LINKS.legal.map((l) => (
            <Link key={l.label} href={l.href} className="text-xs text-cream/40 hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#25D366] hover:text-[#1ebe5d] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  )
}
