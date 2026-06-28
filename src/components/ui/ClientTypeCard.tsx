import { LucideIcon } from 'lucide-react'

interface ClientTypeCardProps {
  icon: LucideIcon
  title: string
  description: string
  accent?: string
}

export default function ClientTypeCard({ icon: Icon, title, description, accent = 'bg-forest/10' }: ClientTypeCardProps) {
  return (
    <div className="card p-6 flex flex-col gap-4">
      <div className={`w-12 h-12 ${accent} rounded-xl flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-forest" />
      </div>
      <div>
        <h3 className="font-display font-bold text-forest-dark text-lg mb-2">{title}</h3>
        <p className="text-sm text-charcoal/65 leading-relaxed font-body">{description}</p>
      </div>
    </div>
  )
}
