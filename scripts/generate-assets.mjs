// One-off asset generation (run manually: node scripts/generate-assets.mjs).
// Outputs are committed so the build does not depend on system fonts.
import sharp from 'sharp'
import { writeFileSync } from 'node:fs'

await sharp('src/assets/Logo.png').resize({ width: 408 }).webp({ quality: 85 }).toFile('public/logo.webp')
const m = await sharp('public/logo.webp').metadata()
console.log('logo.webp', m.width, m.height)

writeFileSync('public/favicon.svg',
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#000"/><text x="32" y="44" font-family="Arial, sans-serif" font-size="38" font-weight="800" text-anchor="middle" fill="#fff">7</text><circle cx="49" cy="46" r="4" fill="#ef4444"/></svg>`)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
function wrap(text, max) {
  const lines = []; let cur = ''
  for (const w of text.split(' ')) {
    if ((cur + ' ' + w).trim().length > max) { lines.push(cur); cur = w } else cur = (cur + ' ' + w).trim()
  }
  if (cur) lines.push(cur)
  return lines.slice(0, 4)
}
// Same tokens as the site: black, white, red-500 (#ef4444), heavy sans headings.
const pages = {
  default: '7Devs. Affordable, fast digital marketing and web development',
  services: 'Services: social media, Meta ads, Shopify and websites',
  'social-media-management': 'Social media management for small businesses',
  'meta-ads': 'Meta ads management for Facebook and Instagram',
  'shopify-website-development': 'Shopify website development in India',
  'website-development': 'Custom website and web app development',
  'digital-marketing': 'Digital marketing for small businesses',
  'seo-services': 'SEO services in India',
  'amazon-account-management': 'Amazon account management for brands',
  'flipkart-account-management': 'Flipkart account management for brands',
  locations: 'Digital marketing across India',
  pricing: 'Clear pricing, no surprises',
  work: 'Our work',
  about: 'About 7Devs',
  blog: 'The 7Devs blog',
  contact: 'Talk to 7Devs',
  faq: 'Frequently asked questions',
  'blog-social-media-management-cost-india': 'How much does social media management cost in India?',
  'blog-meta-ads-vs-google-ads-d2c': 'Meta Ads vs Google Ads for a new D2C brand',
  'blog-shopify-vs-custom-website': 'Shopify vs a custom website for a small business',
  'blog-meta-ads-clicks-no-sales': 'Why your Meta Ads get clicks but no sales',
}
for (const [key, title] of Object.entries(pages)) {
  const lines = wrap(title, 26)
  const tspans = lines.map((l, i) => `<tspan x="80" dy="${i ? 84 : 0}">${esc(l)}</tspan>`).join('')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#000"/><text x="80" y="110" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="800" fill="#fff">7DEVS<tspan fill="#ef4444">.</tspan></text><text x="80" y="290" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="800" fill="#fff">${tspans}</text><text x="80" y="570" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#d1d5db">www.7devs.in</text><rect x="80" y="520" width="120" height="6" fill="#ef4444"/></svg>`
  await sharp(Buffer.from(svg)).png().toFile(`public/og/${key}.png`)
}
console.log('og images:', Object.keys(pages).length)
