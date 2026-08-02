import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton'
import LocalBusinessSchema from '@/components/ui/LocalBusinessSchema'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ibnbashir.com'),
  title: {
    default: 'Ibn Bashir Trading – Agricultural Tools, Pesticides, Seeds & Garden Supplies in Muscat Oman',
    template: '%s | Ibn Bashir Trading – Muscat Oman',
  },
  description: 'Ibn Bashir Trading is Muscat\'s #1 supplier of agricultural tools, pesticides, seeds, fertilizers, irrigation systems & garden maintenance since 2011. Buy gardening tools, seeds & fertilizers in Oman. Visit our showroom in Al Ghubrah, Bawshar. Call +968 9942 0951.',
  keywords: [
    // Core product keywords
    'agricultural tools Muscat', 'agricultural tools Oman', 'gardening tools Muscat', 'gardening tools Oman',
    'pesticides Muscat', 'pesticides Oman', 'buy pesticides Oman', 'pesticides supplier Muscat',
    'seeds Muscat', 'buy seeds Oman', 'seeds shop Muscat', 'vegetable seeds Oman', 'grass seeds Muscat',
    'fertilizers Muscat', 'fertilizers Oman', 'buy fertilizers Oman', 'organic fertilizers Muscat',
    'irrigation systems Oman', 'drip irrigation Muscat', 'irrigation supplies Oman',
    'garden tools Muscat', 'garden tools Oman', 'garden supplies Muscat', 'garden supplies Oman',
    // Service keywords
    'garden maintenance Muscat', 'garden maintenance Oman', 'park maintenance Oman',
    'landscaping Muscat', 'landscaping Oman', 'lawn mowing Muscat',
    'garden care Oman', 'grass trimming Muscat', 'garden trimming Oman',
    // Business keywords
    'agriculture supplier Muscat', 'farm supplies Oman', 'agriculture shop Oman',
    'ibn bashir trading', 'ibn bashir trading muscat', 'ابن بشير للتجارة',
    // Location keywords
    'garden shop Bawshar', 'agriculture Ghubrah Muscat', 'garden shop Al Ghubrah',
    'agriculture store Muscat', 'garden center Oman',
    // Arabic keywords
    'مبيدات مسقط', 'أدوات زراعية عمان', 'صيانة حدائق مسقط', 'مستلزمات زراعية مسقط',
    'بذور مسقط', 'أسمدة عمان', 'ري بالتنقيط عمان', 'أدوات حدائق مسقط',
    'مبيدات حشرات عمان', 'متجر زراعي مسقط', 'خدمات حدائق عمان',
    'صيانة حدائق الفلل مسقط', 'شركة زراعية مسقط', 'معدات زراعية عمان',
  ],
  authors: [{ name: 'Ibn Bashir Trading', url: 'https://www.ibnbashir.com' }],
  creator: 'Ibn Bashir Trading',
  publisher: 'Ibn Bashir Trading',
  openGraph: {
    siteName: 'Ibn Bashir Trading',
    locale: 'en_OM',
    type: 'website',
    url: 'https://www.ibnbashir.com',
    title: 'Ibn Bashir Trading – #1 Agricultural Tools, Seeds & Garden Supplies in Muscat Oman',
    description: 'Buy agricultural tools, pesticides, seeds, fertilizers & irrigation systems in Muscat Oman. Professional garden maintenance for villas, parks & farms. Serving Oman since 2011. Call +968 9942 0951.',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Ibn Bashir Trading – Agricultural & Garden Supplies Muscat Oman' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibn Bashir Trading – Garden & Agriculture Supplies Muscat Oman',
    description: 'Buy pesticides, seeds, fertilizers, irrigation tools & garden equipment in Muscat Oman. Garden maintenance for villas & parks. Since 2011. +968 9942 0951.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  alternates: { canonical: 'https://www.ibnbashir.com' },
  verification: { google: '' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
