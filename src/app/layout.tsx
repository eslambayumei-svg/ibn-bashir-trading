import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton'
import LocalBusinessSchema from '@/components/ui/LocalBusinessSchema'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ibnbashir.com'),
  title: {
    default: 'Ibn Bashir Trading – Agricultural Tools, Pesticides & Garden Supplies in Muscat, Oman',
    template: '%s | Ibn Bashir Trading Muscat Oman',
  },
  description: 'Ibn Bashir Trading – Muscat\'s trusted supplier of agricultural tools, pesticides, seeds, fertilizers, irrigation systems & garden maintenance since 2011. Serving government, villas & farms across Oman. Call +968 9942 0951.',
  keywords: [
    'agricultural tools Muscat', 'agricultural tools Oman', 'pesticides Muscat Oman',
    'garden maintenance Muscat', 'garden maintenance Oman', 'fertilizers Muscat',
    'seeds Muscat Oman', 'irrigation systems Oman', 'gardening tools Muscat',
    'landscaping Muscat', 'landscaping Oman', 'agriculture supplier Muscat',
    'ibn bashir trading', 'garden supplies Oman', 'plant nursery Muscat',
    'farm supplies Oman', 'pesticides supplier Oman', 'drip irrigation Oman',
    'garden tools Bawshar', 'agriculture Ghubrah Muscat', 'مبيدات مسقط',
    'أدوات زراعية عمان', 'صيانة حدائق مسقط', 'مستلزمات زراعية مسقط',
  ],
  authors: [{ name: 'Ibn Bashir Trading', url: 'https://www.ibnbashir.com' }],
  creator: 'Ibn Bashir Trading',
  publisher: 'Ibn Bashir Trading',
  openGraph: {
    siteName: 'Ibn Bashir Trading',
    locale: 'en_OM',
    type: 'website',
    url: 'https://www.ibnbashir.com',
    title: 'Ibn Bashir Trading – Agricultural Tools & Garden Supplies in Muscat, Oman',
    description: 'Muscat\'s trusted supplier of agricultural tools, pesticides, seeds, fertilizers & garden maintenance since 2011. Serving government, villas & farms across Oman.',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Ibn Bashir Trading Muscat Oman' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibn Bashir Trading – Garden & Agriculture Supplies Muscat Oman',
    description: 'Trusted supplier of agricultural tools, pesticides, seeds & fertilizers in Muscat, Oman since 2011.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
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
