import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/config'

interface CTASectionProps {
  title: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  whatsappLabel?: string
}

export default function CTASection({
  title,
  subtitle,
  primaryLabel = 'Explore Products',
  primaryHref = '/products',
  whatsappLabel = 'Contact on WhatsApp',
}: CTASectionProps) {
  return (
    <section className="section-pad bg-forest">
      <div className="container-max text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gold/40" />
          <div className="w-2 h-2 rounded-full bg-gold" />
          <div className="h-px w-16 bg-gold/40" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight mb-4 max-w-2xl mx-auto">
          {title}
        </h2>
        {subtitle && (
          <p className="text-cream/70 font-body text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="w-4 h-4" />
            {whatsappLabel}
          </a>
          <Link href={primaryHref} className="btn-gold">
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
