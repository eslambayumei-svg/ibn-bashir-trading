export default function LocalBusinessSchema() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Store', 'HomeAndConstructionBusiness'],
    '@id': 'https://www.ibnbashir.com/#business',
    name: 'Ibn Bashir Trading',
    alternateName: ['Ibn Bashir Agricultural Tools & Pesticides', 'ابن بشير للتجارة', 'Ibn Basheer Trading Est'],
    description: 'Muscat\'s trusted supplier of agricultural tools, pesticides, seeds, fertilizers, irrigation systems, and professional garden maintenance services since 2011. Serving villas, parks, farms, and government clients across Oman.',
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
      postalCode: '130',
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
    areaServed: [
      { '@type': 'City', name: 'Muscat' },
      { '@type': 'City', name: 'Bawshar' },
      { '@type': 'City', name: 'Al Ghubrah' },
      { '@type': 'City', name: 'Seeb' },
      { '@type': 'City', name: 'Muttrah' },
      { '@type': 'State', name: 'Muscat Governorate' },
      { '@type': 'Country', name: 'Oman' },
    ],
    hasMap: 'https://maps.google.com/?q=Ibn+Bashir+Trading+Muscat+Oman',
    sameAs: ['https://www.ibnbashir.com'],
    knowsAbout: [
      'Agricultural Tools', 'Pesticides', 'Herbicides', 'Insecticides', 'Fungicides',
      'Fertilizers', 'Organic Fertilizers', 'NPK Fertilizers', 'Seeds', 'Grass Seeds',
      'Vegetable Seeds', 'Flower Seeds', 'Irrigation Systems', 'Drip Irrigation',
      'Sprinkler Systems', 'Garden Maintenance', 'Lawn Mowing', 'Landscaping',
      'Park Maintenance', 'Garden Tools', 'Farm Supplies', 'Agricultural Equipment',
      'Planting Accessories', 'Garden Care', 'Villa Garden Maintenance',
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garden Maintenance Muscat Oman', description: 'Professional garden and lawn maintenance for villas, parks and commercial spaces in Muscat Oman' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Park Maintenance Oman', description: 'Full park and public green space maintenance services across Oman' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lawn Mowing and Grass Trimming Muscat', description: 'Professional lawn mowing and grass trimming service in Muscat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Irrigation System Installation Oman', description: 'Supply and support for drip irrigation and sprinkler systems in Oman' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Agricultural Tools Muscat', description: 'Wide range of agricultural and gardening hand tools in Muscat Oman' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Pesticides Oman', description: 'Licensed pesticides, herbicides, insecticides and fungicides for sale in Oman' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Seeds Muscat Oman', description: 'Certified grass seeds, vegetable seeds, flower seeds and herb seeds in Muscat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Fertilizers Oman', description: 'Organic and chemical fertilizers, NPK, slow-release pellets and liquid feeds in Oman' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Irrigation Supplies Muscat', description: 'Drip irrigation systems, sprinklers, pipes and hoses in Muscat Oman' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Gardening Tools Muscat', description: 'Full range of shovels, rakes, pruning shears, trowels and garden gloves in Muscat' } },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I buy gardening tools in Muscat Oman?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ibn Bashir Trading is one of the best places to buy gardening tools in Muscat, Oman. Our showroom is located opposite Sultan Qaboos Sports Complex, Al Ghubrah South, Bawshar, Muscat. Call +968 9942 0951 or visit us Sat–Thu 8AM–1PM and 4PM–8:30PM.' },
      },
      {
        '@type': 'Question',
        name: 'Where to buy seeds in Muscat Oman?',
        acceptedAnswer: { '@type': 'Answer', text: 'You can buy certified seeds including grass seeds, vegetable seeds, flower seeds, and herb seeds at Ibn Bashir Trading in Muscat, Oman. Visit our showroom in Al Ghubrah, Bawshar or call +968 9942 0951.' },
      },
      {
        '@type': 'Question',
        name: 'Where can I buy fertilizers in Muscat?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ibn Bashir Trading stocks a wide range of fertilizers in Muscat including organic compost, NPK fertilizers, slow-release pellets, liquid feeds, and soil conditioners. Visit our Al Ghubrah showroom or call +968 9942 0951.' },
      },
      {
        '@type': 'Question',
        name: 'Who provides garden maintenance services in Muscat Oman?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ibn Bashir Trading provides professional garden maintenance services in Muscat, Oman including lawn mowing, grass trimming, garden care for villas, parks, and commercial spaces. Contact us on WhatsApp or call +968 9942 0951.' },
      },
      {
        '@type': 'Question',
        name: 'Where to buy pesticides in Oman?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ibn Bashir Trading is a trusted pesticides supplier in Muscat, Oman. We stock licensed insecticides, herbicides, fungicides, and rodenticides for residential and commercial use. Call +968 9942 0951 or visit our Muscat showroom.' },
      },
      {
        '@type': 'Question',
        name: 'Does Ibn Bashir Trading supply irrigation systems in Oman?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, Ibn Bashir Trading supplies full drip irrigation systems, sprinklers, timers, pipes, hoses, and fittings in Oman. We can guide you in choosing the right irrigation setup for your garden, farm, or park.' },
      },
      {
        '@type': 'Question',
        name: 'What gardening services are available for villas in Muscat?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ibn Bashir Trading offers garden maintenance, lawn mowing, grass trimming, pest control supply, and irrigation support for private villas in Muscat, Oman. Contact us on WhatsApp at +968 9942 0951 for a quote.' },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
