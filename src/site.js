// Single source of truth for site-wide facts. Never invent values here.
export const SITE = {
  name: '7Devs',
  url: (import.meta.env.VITE_SITE_URL || 'https://www.7devs.in').replace(/\/$/, ''),
  email: 'hello@7devs.in',
  phoneDisplay: '788 993 0884',
  phoneTel: '+917889930884',
  whatsapp: 'https://wa.me/917889930884',
  instagram: 'https://www.instagram.com/sevendevs.in/',
  sisterUrl: 'https://www.beyourown.in',
  sisterName: 'BeYourOwn',
  logo: '/logo.webp',
  location: 'Remote-first',
}

export const waLink = (text) => `${SITE.whatsapp}?text=${encodeURIComponent(text)}`
