// Post-build SEO checks against the raw prerendered HTML (what a crawler sees before JS runs).
import { readFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

const dist = resolve(import.meta.dirname, '..', 'dist')
const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8')
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
const origin = new URL(locs[0]).origin
const paths = locs.map((l) => new URL(l).pathname)
const fileFor = (p) => (p === '/' ? 'index.html' : `${p.slice(1)}/index.html`)

const errors = []
const titles = new Map()
const descs = new Map()
const known = new Set(paths)
const linksSeen = []

for (const p of paths) {
  const f = join(dist, fileFor(p))
  if (!existsSync(f)) { errors.push(`${p}: missing file`); continue }
  const html = readFileSync(f, 'utf8')
  const get = (re) => (html.match(re) || [])[1]
  const title = get(/<title>(.*?)<\/title>/)
  const desc = get(/<meta data-seo name="description" content="(.*?)"/)
  const canon = get(/<link data-seo rel="canonical" href="(.*?)"/)
  const h1s = (html.match(/<h1[\s>]/g) || []).length
  const ld = [...html.matchAll(/<script data-seo type="application\/ld\+json">(.*?)<\/script>/g)]
  const tag = (m) => `${p}: ${m}`

  if (!title) errors.push(tag('no title'))
  else { if (title.length > 60) errors.push(tag(`title ${title.length} chars`)); titles.set(title, [...(titles.get(title) || []), p]) }
  if (!desc) errors.push(tag('no meta description'))
  else { if (desc.length > 155) errors.push(tag(`description ${desc.length} chars`)); descs.set(desc, [...(descs.get(desc) || []), p]) }
  const expectCanon = p === '/' ? `${origin}/` : `${origin}${p}`
  if (canon !== expectCanon) errors.push(tag(`canonical ${canon} != ${expectCanon}`))
  if (h1s !== 1) errors.push(tag(`${h1s} h1 tags`))
  if (!html.includes('og:image') || !html.includes('twitter:card')) errors.push(tag('missing OG/Twitter'))
  if (!ld.length) errors.push(tag('no JSON-LD'))
  for (const m of ld) { try { JSON.parse(m[1].replace(/\\u003c/g, '<')) } catch { errors.push(tag('invalid JSON-LD')) } }
  for (const img of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\balt="/.test(img)) errors.push(tag(`img without alt: ${img.slice(0, 60)}`))
    if (!/\bwidth="/.test(img) || !/\bheight="/.test(img)) errors.push(tag('img without width/height'))
  }
  if (!/<main id="main">[\s\S]*<\/main>/.test(html)) errors.push(tag('no <main> content'))
  for (const m of html.matchAll(/<a [^>]*href="(\/[^"#?]*)/g)) linksSeen.push([p, m[1]])
}

for (const [t, ps] of titles) if (ps.length > 1) errors.push(`duplicate title "${t}": ${ps.join(', ')}`)
for (const [d, ps] of descs) if (ps.length > 1) errors.push(`duplicate description: ${ps.join(', ')}`)
for (const [from, to] of linksSeen) {
  const clean = to.length > 1 ? to.replace(/\/$/, '') : to
  if (!known.has(clean) && !existsSync(join(dist, clean.slice(1)))) errors.push(`${from}: broken link ${to}`)
}
if (!existsSync(join(dist, '404.html'))) errors.push('missing 404.html')
if (!readFileSync(join(dist, 'robots.txt'), 'utf8').includes(`Sitemap: ${origin}/sitemap.xml`)) errors.push('robots.txt missing sitemap')

console.log(`Checked ${paths.length} routes, ${linksSeen.length} internal links.`)
if (errors.length) { console.error('\nProblems:\n' + [...new Set(errors)].join('\n')); process.exit(1) }
console.log('All checks passed.')
