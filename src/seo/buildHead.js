import { SITE } from '../site'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
// Prevent </script> breakout in JSON-LD
const json = (o) => JSON.stringify(o).replace(/</g, '\u003c')

export const abs = (path) => (path === '/' ? `${SITE.url}/` : `${SITE.url}${path}`)

export function organizationSchema() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.webp`,
    email: SITE.email,
    telephone: SITE.phoneTel,
    sameAs: [SITE.instagram],
    description: 'Digital marketing agency in India offering social media management, Meta ads, SEO, Amazon and Flipkart account management, Shopify and custom website development.',
    areaServed: { '@type': 'Country', name: 'India' },
    knowsAbout: ['Digital marketing', 'Social media management', 'Meta ads', 'SEO', 'Amazon account management', 'Flipkart account management', 'Shopify development', 'Website development'],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE.email,
      telephone: SITE.phoneTel,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    }],
  }
}

// props: title (<60), description (<155), path, ogImage (key in /og), type, crumbs [{name,path}], schema []
export function buildHead({ title, description, path, ogImage = 'default', type = 'website', crumbs, schema = [], noindex = false }) {
  const url = abs(path)
  const image = `${SITE.url}/og/${ogImage}.png`
  const graph = [...schema]
  if (path === '/') {
    graph.push(organizationSchema(), {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE.url}/#organization` },
    })
  }
  if (crumbs && crumbs.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: abs(c.path),
      })),
    })
  }
  const tags = [
    `<meta data-seo name="description" content="${esc(description)}" />`,
    `<link data-seo rel="canonical" href="${url}" />`,
    `<link data-seo rel="alternate" hreflang="en-IN" href="${url}" />`,
    `<link data-seo rel="alternate" hreflang="x-default" href="${url}" />`,
    `<meta data-seo name="robots" content="${noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1"}" />`,
    `<meta data-seo property="og:site_name" content="${SITE.name}" />`,
    `<meta data-seo property="og:type" content="${type}" />`,
    `<meta data-seo property="og:title" content="${esc(title)}" />`,
    `<meta data-seo property="og:description" content="${esc(description)}" />`,
    `<meta data-seo property="og:url" content="${url}" />`,
    `<meta data-seo property="og:image" content="${image}" />`,
    `<meta data-seo property="og:image:width" content="1200" />`,
    `<meta data-seo property="og:image:height" content="630" />`,
    `<meta data-seo property="og:image:alt" content="${esc(title)}" />`,
    `<meta data-seo property="og:locale" content="en_IN" />`,
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${esc(title)}" />`,
    `<meta data-seo name="twitter:description" content="${esc(description)}" />`,
    `<meta data-seo name="twitter:image" content="${image}" />`,
    graph.length
      ? `<script data-seo type="application/ld+json">${json({ '@context': 'https://schema.org', '@graph': graph })}</script>`
      : '',
  ].filter(Boolean).join('\n    ')
  return { title, tags }
}
