// Small inline icons (no icon library). All decorative: aria-hidden.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, viewBox: '0 0 24 24' }

export const ArrowRight = ({ className = 'w-4 h-4' }) => (
  <svg {...base} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const ArrowUpRight = ({ className = 'w-4 h-4' }) => (
  <svg {...base} className={className}><path d="M7 17 17 7M8 7h9v9" /></svg>
)
export const Check = ({ className = 'w-4 h-4' }) => (
  <svg {...base} className={className}><path d="m5 12 5 5L20 7" /></svg>
)
export const Cross = ({ className = 'w-4 h-4' }) => (
  <svg {...base} className={className}><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const Plus = ({ className = 'w-5 h-5' }) => (
  <svg {...base} className={className}><path d="M12 5v14M5 12h14" /></svg>
)
export const ChevronDown = ({ className = 'w-4 h-4' }) => (
  <svg {...base} className={className}><path d="m6 9 6 6 6-6" /></svg>
)

// One glyph per service, keyed by slug.
export const ServiceIcon = ({ slug, className = 'w-6 h-6' }) => {
  const paths = {
    'social-media-management': <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></>,
    'meta-ads': <><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" /></>,
    'shopify-website-development': <><path d="M6 7h12l-1 13H7L6 7Z" /><path d="M9 7a3 3 0 0 1 6 0" /></>,
    'website-development': <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M10 13l-2 2 2 2M14 13l2 2-2 2" /></>,
    'digital-marketing': <><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  }
  return <svg {...base} className={className}>{paths[slug]}</svg>
}
