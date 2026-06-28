import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-cream-light px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">🌿</div>
        <div className="text-7xl font-display font-bold text-forest/20 mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-forest-dark mb-4">
          Page Not Found
        </h1>
        <p className="text-charcoal/60 font-body text-base leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/products" className="btn-outline">
            Browse Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
