// Client list. Only facts taken from the 7Devs work portfolio PDF go in `study`.
// Clients without a `study` are shown by name only until real details are supplied.
// Reviews: add { quote, author, role } to `review` ONLY with a quote the client actually gave.
export const clients = [
  {
    slug: 'orveet',
    name: 'Orveet',
    type: 'Premium streetwear brand',
    services: ['social-media-management', 'meta-ads', 'website-development'],
    study: {
      overview: 'Orveet is a premium streetwear brand focused on timeless essentials and modern minimalism. The objective was to strengthen its digital presence through consistent branding, engaging content and performance-driven Meta advertising.',
      scope: ['Social media management and brand communication', 'Meta ads strategy and campaign management', 'Creative planning and performance optimisation'],
      did: [
        { title: 'Social media management', points: ['Planned and managed monthly content', 'Created product-focused creatives and reels', 'Maintained a consistent brand identity'] },
        { title: 'Meta ads optimisation', points: ['Campaign setup and optimisation', 'Creative and audience testing, including A/B testing', 'Scaled winning campaigns for higher returns'] },
        { title: 'Website revamp', points: ['Refreshed the website with a clean, modern layout', 'Improved user experience and product presentation', 'Optimised navigation for a smoother shopping journey'] },
      ],
      result: { value: '~3.56×', label: 'average ROAS on Meta ads' },
    },
  },
  {
    slug: 'modestee-label',
    name: 'Modestee Label',
    type: 'Premium modest fashion brand (hijabs and everyday essentials)',
    services: ['shopify-website-development', 'website-development'],
    study: {
      overview: 'Modestee Label is a premium modest fashion brand offering hijabs and everyday essentials. We developed its Shopify website and strengthened its digital presence through consistent branding and content.',
      scope: ['Shopify website design and development', 'UI/UX strategy and user journey', 'E-commerce setup and store optimisation', 'Mobile-responsive implementation'],
      did: [
        { title: 'Website design', points: ['Designed a modern, minimal interface', 'Established a consistent visual hierarchy across all pages', 'Optimised layouts for desktop and mobile'] },
        { title: 'Shopify development', points: ['Developed a fully responsive Shopify storefront', 'Configured collections, product pages and navigation', 'Integrated essential e-commerce functionality and store settings'] },
        { title: 'User experience', points: ['Simplified the shopping journey from discovery to checkout', 'Improved product presentation and browsing', 'Built a scalable website ready for future growth'] },
      ],
      result: null,
    },
  },
  {
    slug: 'jcm-tshirts',
    name: 'JCM T-Shirts',
    type: 'T-shirt brand',
    services: ['social-media-management', 'website-development', 'meta-ads'],
    study: {
      overview: 'JCM T-Shirts is a T-shirt brand. We handled its social media, website and Meta ads together so the brand, the store and the advertising worked as one.',
      scope: ['Social media management', 'Website development', 'Meta ads'],
      did: [
        { title: 'Social media', points: ['Planned and posted content around the products', 'Kept the look and tone consistent across the profile'] },
        { title: 'Website', points: ['Built the brand’s website', 'Set up product browsing and a clear path to purchase'] },
        { title: 'Meta ads', points: ['Set up and managed Meta ad campaigns', 'Tested creatives and audiences to improve performance'] },
      ],
      result: null,
    },
  },
  {
    slug: 'evren',
    name: 'Evren',
    type: 'Brand',
    services: ['seo-services', 'meta-ads'],
    study: {
      overview: 'For Evren we combined SEO, which brings in people already searching, with Meta ads, which reach new audiences.',
      scope: ['Search engine optimisation (SEO)', 'Meta ads'],
      did: [
        { title: 'SEO', points: ['Improved the site’s search visibility', 'Worked on keywords, page content and on-page fixes'] },
        { title: 'Meta ads', points: ['Set up and managed Meta ad campaigns', 'Tested creatives and audiences to improve performance'] },
      ],
      result: null,
    },
  },
  {
    slug: 'vault-streets',
    name: 'Vault Streets',
    type: 'Brand',
    services: ['social-media-management', 'website-development'],
    study: {
      overview: 'For Vault Streets we built the website and ran social media so the brand looks and feels the same everywhere customers find it.',
      scope: ['Social media management', 'Website development'],
      did: [
        { title: 'Social media', points: ['Planned and posted content', 'Kept the look and tone consistent across the profile'] },
        { title: 'Website', points: ['Built the brand’s website', 'Structured pages and navigation for easy browsing'] },
      ],
      result: null,
    },
  },
  {
    slug: 'elevn',
    name: 'Elevn',
    type: 'Brand',
    services: ['amazon-account-management', 'meta-ads', 'social-media-management'],
    study: {
      overview: 'For Elevn we worked across three channels: Amazon, Meta ads and social media.',
      scope: ['Amazon marketplace support', 'Meta ads', 'Social media management'],
      did: [
        { title: 'Amazon', points: ['Worked on the brand’s presence on Amazon'] },
        { title: 'Meta ads', points: ['Set up and managed Meta ad campaigns', 'Tested creatives and audiences to improve performance'] },
        { title: 'Social media', points: ['Planned and posted content', 'Kept the look and tone consistent across the profile'] },
      ],
      result: null,
    },
  },
]

export const featured = clients.filter((c) => c.study)
export const reviews = clients.filter((c) => c.review)

