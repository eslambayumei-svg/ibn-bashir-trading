import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: [] },
    sitemap: 'https://www.ibnbashir.com/sitemap.xml',
    host: 'https://www.ibnbashir.com',
  }
}
