import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://ibnbashirtrading.com'),
  title: {
    default: 'Ibn Bashir Trading – Agriculture & Gardening Supplies in Oman',
    template: '%s | Ibn Bashir Trading',
  },
  description: 'Trusted supplier of gardening tools, pesticides, seeds, fertilizers, irrigation materials, and professional garden maintenance services in Oman since 2011.',
  keywords: ['Oman agriculture supplier', 'gardening tools Oman', 'pesticides Oman', 'seeds Oman', 'fertilizers Oman', 'irrigation tools Oman', 'garden maintenance Oman', 'landscaping Oman'],
  openGraph: {
    siteName: 'Ibn Bashir Trading',
    locale: 'en_OM',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
