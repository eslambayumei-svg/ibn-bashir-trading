import { MessageCircle, FileText } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/config'

interface ProductCategoryCardProps {
  title: string
  description: string
  imagePlaceholder: string
  imageColor?: string
  items?: string[]
}

export default function ProductCategoryCard({
  title,
  description,
  imagePlaceholder,
  imageColor = 'bg-forest/10',
  items = [],
}: ProductCategoryCardProps) {
  const whatsappMsg = `Hello Ibn Bashir Trading, I would like to request a quote for: ${title}`

  return (
    <div className="card flex flex-col">
      {/* Image placeholder */}
      <div className={`${imageColor} h-44 flex flex-col items-center justify-center gap-2 relative overflow-hidden`}>
        <span className="text-4xl">{imagePlaceholder}</span>
        <span className="text-xs font-body font-semibold tracking-widest uppercase text-forest/50">{title}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-display font-bold text-forest-dark text-lg">{title}</h3>
        <p className="text-sm text-charcoal/65 leading-relaxed font-body flex-1">{description}</p>
        {items.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {items.map((item) => (
              <li key={item} className="text-xs bg-cream-dark text-forest px-2.5 py-1 rounded-full font-body font-medium">
                {item}
              </li>
            ))}
          </ul>
        )}
        <div className="flex gap-2 pt-1">
          <a
            href={getWhatsAppUrl(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-whatsapp justify-center text-xs px-3 py-2.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </a>
          <a
            href={getWhatsAppUrl(`Hello Ibn Bashir Trading, I would like to request a quote for ${title}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-outline justify-center text-xs px-3 py-2.5"
          >
            <FileText className="w-3.5 h-3.5" />
            Request Quote
          </a>
        </div>
      </div>
    </div>
  )
}
