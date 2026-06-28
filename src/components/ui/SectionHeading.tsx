interface SectionHeadingProps {
  tag?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const textColor = light ? 'text-cream' : 'text-forest-dark'
  const subColor = light ? 'text-cream/70' : 'text-charcoal/60'

  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      {tag && (
        <span className="tag mb-3 block">{tag}</span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-bold leading-tight mb-4 ${textColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed font-body ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
