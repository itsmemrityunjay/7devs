// Build-time prerender: renders every public route to static HTML with its own
// title, meta, canonical, Open Graph and JSON-LD. Also writes sitemap.xml and robots.txt.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { loadEnv } from 'vite'

const root = resolve(import.meta.dirname, '..')
const dist = join(root, 'dist')
const env = loadEnv('production', root, 'VITE_')

const { render, publicPaths, SITE } = await import(pathToFileURL(join(root, 'dist-ssr/entry-server.js')).href)
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
const analytics = []
if (env.VITE_GSC_VERIFICATION) analytics.push(`<meta name="google-site-verification" content="${esc(env.VITE_GSC_VERIFICATION)}" />`)
if (env.VITE_GA4_ID) {
  const id = esc(env.VITE_GA4_ID)
  analytics.push(`<script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>`)
  analytics.push(`<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${id}');</script>`)
}

async function build(url, file) {
  const { html, head } = await render(url)
  const headHtml = `<title>${esc(head.title)}</title>\n    ${head.tags}\n    ${analytics.join('\n    ')}`
  const out = template.replace('<!--app-head-->', () => headHtml).replace('<!--app-html-->', () => html)
  const target = join(dist, file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, out)
}

for (const p of publicPaths) await build(p, p === '/' ? 'index.html' : `${p.slice(1)}/index.html`)
await build('/404', '404.html')

const urls = publicPaths.map((p) => `  <url><loc>${SITE.url}${p === '/' ? '/' : p}</loc></url>`).join('\n')
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`)
console.log(`Prerendered ${publicPaths.length} routes + 404, sitemap.xml, robots.txt`)
