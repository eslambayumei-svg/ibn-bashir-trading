export const SITE_CONFIG = {
  name: 'Ibn Bashir Trading',
  tagline: 'Trusted Agriculture & Gardening Solutions in Oman Since 2011',
  phone: '+968 9942 0951',
  email: 'ibn.bashir.tr@gmail.com',
  address: 'Muscat, Sultanate of Oman',
  addressFull: 'Ibn Bashir Trading, Opposite Sultan Qaboos Sports Complex, Al Ghubrah South, Bawshar, Muscat, Oman',
  whatsapp: '96899420951',
  whatsappMessage: 'Hello Ibn Bashir Trading, I would like to inquire about your products.',
  workingHours: 'Sat – Thu: 8:00 AM – 1:00 PM & 4:00 PM – 8:30 PM',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d58.3954878!3d23.5758997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffbdf7376f7f%3A0xc649d403a6ca760f!2sIbn%20Basheir%20Trading!5e0!3m2!1sen!2som!4v1700000000000',
  foundedYear: 2011,
  socialLinks: {
    whatsapp: '',
    instagram: '',
    facebook: '',
  },
}

export const getWhatsAppUrl = (message?: string) => {
  const msg = encodeURIComponent(message || SITE_CONFIG.whatsappMessage)
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${msg}`
}
