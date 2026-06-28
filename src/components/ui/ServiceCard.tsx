import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export default function ServiceCard({ icon: Icon, title, description, href = '/contact' }: ServiceCardProps) {
  return (
    <div className="card p-6 flex flex-col gap-4 group">
      <div className="w-12 h-12 bg-cream-dark rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-forest">
        <Icon className="w-6 h-6 text-forest group-hover:text-cream transition-colors duration-300" />
      </div>
      <div className="flex-1">
        <h3 className="font-display font-bold text-forest-dark text-lg mb-2">{title}</h3>
        <p className="text-sm text-charcoal/65 leading-relaxed font-body">{description}</p>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-forest hover:text-gold transition-colors"
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
