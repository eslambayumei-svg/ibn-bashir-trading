import { MapPin, Clock, Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'

export default function MapSection() {
  return (
    <div className="rounded-2xl overflow-hidden border border-cream-dark bg-white">
      {/* Map embed */}
      <div className="relative h-72 bg-cream-dark flex items-center justify-center">
        <iframe
          src={SITE_CONFIG.googleMapsEmbed}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ibn Bashir Trading Location"
        />
      </div>
      {/* Info strip */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-body font-semibold tracking-widest uppercase text-charcoal/40 mb-1">Address</div>
            <p className="text-sm font-body text-charcoal leading-relaxed">{SITE_CONFIG.addressFull}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-body font-semibold tracking-widest uppercase text-charcoal/40 mb-1">Working Hours</div>
            <p className="text-sm font-body text-charcoal">{SITE_CONFIG.workingHours}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-body font-semibold tracking-widest uppercase text-charcoal/40 mb-1">Phone</div>
            <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm font-body text-charcoal hover:text-forest transition-colors">
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
