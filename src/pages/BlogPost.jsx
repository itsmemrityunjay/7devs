import { Link, useParams } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import CtaBand from '../components/ui/CtaBand'
import ReadingProgress from '../components/ui/ReadingProgress'
import { ArrowUpRight } from '../components/ui/Icons'
import NotFound from './NotFound'
import { postBySlug, posts } from '../content/posts'
import { serviceBySlug } from '../content/services'
import { SITE } from '../site'

const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const BlogPost = () => {
    const { slug } = useParams()
    const post = postBySlug[slug]
    if (!post) return <NotFound />

    const path = `/blog/${post.slug}`
    const crumbs = [{ name: 'Blog', path: '/blog' }, { name: post.title, path }]
    const service = serviceBySlug[post.service]
    const toc = post.sections.filter((x) => x.h).map((x) => ({ h: x.h, id: slugify(x.h) }))
    const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

    return (
        <>
            <Seo
                title={post.metaTitle}
                description={post.metaDescription}
                path={path}
                ogImage={`blog-${post.slug}`}
                type='article'
                crumbs={crumbs}
                schema={[{
                    '@type': 'Article',
                    headline: post.title,
                    description: post.metaDescription,
                    datePublished: post.date,
                    dateModified: post.updated || post.date,
                    image: `${SITE.url}/og/blog-${post.slug}.png`,
                    mainEntityOfPage: `${SITE.url}${path}`,
                    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
                    publisher: { '@id': `${SITE.url}/#organization` },
                }]}
            />
            <ReadingProgress targetId='article-body' />
            <PageHeader crumbs={crumbs} eyebrow={service.name} h1={post.title} intro={post.excerpt}>
                <p className='flex flex-wrap items-center gap-3 text-sm text-gray-600'>
                    <span className='inline-flex items-center gap-2 rounded-full bg-black text-white pl-1 pr-3 py-1'>
                        <span className='w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold'>7D</span>
                        By 7Devs
                    </span>
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time>
                    <span aria-hidden='true'>·</span>
                    <span>{post.readTime}</span>
                </p>
            </PageHeader>
            <article className='pb-24 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto grid lg:grid-cols-[16rem_1fr] gap-12'>
                        {/* Sticky table of contents (desktop) */}
                        <nav aria-label='On this page' className='hidden lg:block'>
                            <div className='sticky top-28 rounded-3xl bg-gray-100 p-6'>
                                <p className='text-xs uppercase tracking-widest font-bold text-gray-500 mb-4'>On this page</p>
                                <ol className='space-y-3 text-sm'>
                                    {toc.map((t) => (
                                        <li key={t.id}><a href={`#${t.id}`} className='block text-gray-700 hover:text-red-500 hover:translate-x-1 transition-all'>{t.h}</a></li>
                                    ))}
                                </ol>
                            </div>
                        </nav>

                        <div id='article-body' className='max-w-3xl text-lg text-gray-800 leading-relaxed'>
                            {post.sections.map((sec, i) => (
                                <section key={i} className='mb-12'>
                                    {sec.h && <h2 id={slugify(sec.h)} className='scroll-mt-28 text-2xl md:text-3xl font-bold text-black mb-5'>{sec.h}</h2>}
                                    {sec.p && sec.p.map((t, j) => <p key={j} className={`mb-5 ${i === 0 && j === 0 ? 'text-xl md:text-2xl text-black leading-relaxed' : ''}`}>{t}</p>)}
                                    {sec.ul && (
                                        <ul className='space-y-3 mb-5'>
                                            {sec.ul.map((t) => (
                                                <li key={t} className='flex gap-4'>
                                                    <span aria-hidden='true' className='mt-3 w-2 h-2 rounded-full bg-red-500 shrink-0'></span>
                                                    <span>{t}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {sec.ol && (
                                        <ol className='space-y-3 mb-5'>
                                            {sec.ol.map((t, j) => (
                                                <li key={t} className='flex gap-4 items-start rounded-2xl bg-gray-100 p-4'>
                                                    <span aria-hidden='true' className='w-8 h-8 rounded-full bg-black text-white text-sm font-bold flex items-center justify-center shrink-0'>{j + 1}</span>
                                                    <span className='pt-0.5'>{t}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                </section>
                            ))}

                            <aside className='relative overflow-hidden bg-black text-white rounded-3xl p-8 md:p-10 mt-16'>
                                <div aria-hidden='true' className='absolute -right-16 -top-16 w-64 h-64 rounded-full bg-red-500/30 blur-3xl'></div>
                                <div className='relative'>
                                    <h2 className='text-2xl font-bold mb-3'>Need help with this?</h2>
                                    <p className='text-gray-300 mb-6'>
                                        See our <Link to={`/services/${service.slug}`} className='underline underline-offset-4 text-white hover:text-red-500'>{service.name}</Link> service, or read more:
                                    </p>
                                    <ul className='space-y-3'>
                                        {more.map((p) => (
                                            <li key={p.slug}>
                                                <Link to={`/blog/${p.slug}`} className='group flex items-center justify-between gap-4 rounded-2xl border border-white/15 p-4 hover:bg-white hover:text-black transition-colors'>
                                                    {p.title}
                                                    <ArrowUpRight className='w-4 h-4 shrink-0 transition-transform duration-300 group-hover:rotate-45' />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </article>
            <CtaBand />
        </>
    )
}

export default BlogPost
