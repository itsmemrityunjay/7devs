import { matchPath } from 'react-router-dom'
import { services } from './content/services'
import { posts } from './content/posts'

// Each route lazy-loads its page (code splitting). `loaded` lets the server and the
// client hydrate synchronously once the chunk for the current URL is in memory.
export const routes = [
  { path: '/', load: () => import('./pages/Home') },
  { path: '/services', load: () => import('./pages/Services') },
  { path: '/services/:slug', load: () => import('./pages/ServicePage') },
  { path: '/pricing', load: () => import('./pages/Pricing') },
  { path: '/work', load: () => import('./pages/Work') },
  { path: '/about', load: () => import('./pages/About') },
  { path: '/blog', load: () => import('./pages/Blog') },
  { path: '/blog/:slug', load: () => import('./pages/BlogPost') },
  { path: '/contact', load: () => import('./pages/Contact') },
  { path: '/faq', load: () => import('./pages/Faq') },
  { path: '/privacy-policy', load: () => import('./pages/Legal'), props: { path: '/privacy-policy' } },
  { path: '/terms', load: () => import('./pages/Legal'), props: { path: '/terms' } },
  { path: '*', load: () => import('./pages/NotFound') },
]

export const loaded = {}

export async function preload(route) {
  if (!loaded[route.path]) loaded[route.path] = (await route.load()).default
}

export const findRoute = (pathname) => routes.find((r) => matchPath({ path: r.path, end: true }, pathname))

// Every public URL that gets prerendered and listed in the sitemap.
export const publicPaths = [
  '/', '/services', ...services.map((s) => `/services/${s.slug}`),
  '/pricing', '/work', '/about', '/blog', ...posts.map((p) => `/blog/${p.slug}`),
  '/contact', '/faq', '/privacy-policy', '/terms',
]
