export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.ibnbashir.com',
    name: 'Ibn Bashir Trading',
    alternateName: 'Ibn Bashir Agricultural Tools & Pesticides',
    description: 'Trusted supplier of agricultural tools, pesticides, seeds, fertilizers, irrigation systems and garden maintenance services in Muscat, Oman since 2011.',
    url: 'https://www.ibnbashir.com',
    telephone: '+96899420951',
    email: 'ibn.bashir.tr@gmail.com',
    foundingDate: '2011',
    priceRange: '$$',
    currenciesAccepted: 'OMR',
    paymentAccepted: 'Cash, Bank Transfer',
    image: 'https://www.ibnbashir.com/logo.png',
    logo: 'https://www.ibnbashir.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Opposite Sultan Qaboos Sports Complex, Al Ghubrah South',
      addressLocality: 'Bawshar',
      addressRegion: 'Muscat',
      addressCountry: 'OM',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.5758997,
      longitude: 58.3954878,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '16:00',
        closes: '20:30',
      },
    ],
    sameAs: ['https://www.ibnbashir.com'],
    hasMap: 'https://maps.google.com/?q=Ibn+Basheir+Trading+Muscat+Oman',
    areaServed: [
      { '@type': 'City', name: 'Muscat' },
      { '@type': 'City', name: 'Bawshar' },
      { '@type': 'City', name: 'Al Ghubrah' },
      { '@type': 'Country', name: 'Oman' },
    ],
    knowsAbout: [
      'Agricultural Tools', 'Pesticides', 'Fertilizers', 'Seeds',
      'Irrigation Systems', 'Garden Maintenance', 'Landscaping',
      'Garden Tools', 'Farm Supplies',
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garden Maintenance Muscat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Irrigation System Supply Oman' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Agricultural Tools Muscat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Pesticides Oman' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Seeds and Fertilizers Oman' } },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
