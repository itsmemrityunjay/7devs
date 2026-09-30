import { Link, useParams } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import CtaBand from '../components/ui/CtaBand'
import NotFound from './NotFound'
import { postBySlug, posts } from '../content/posts'
import { serviceBySlug } from '../content/services'
import { SITE } from '../site'

const BlogPost = () => {
    const { slug } = useParams()
    const post = postBySlug[slug]
    if (!post) return <NotFound />

    const path = `/blog/${post.slug}`
    const crumbs = [{ name: 'Blog', path: '/blog' }, { name: post.title, path }]
    const service = serviceBySlug[post.service]
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
            <PageHeader crumbs={crumbs} h1={post.title}>
                <p className='text-gray-600 text-sm'>
                    By 7Devs · <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time> · {post.readTime}
                </p>
            </PageHeader>
            <article className='pb-20 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed'>
                        {post.sections.map((sec, i) => (
                            <section key={i} className='mb-10'>
                                {sec.h && <h2 className='text-2xl md:text-3xl font-bold text-black mb-4'>{sec.h}</h2>}
                                {sec.p && sec.p.map((t, j) => <p key={j} className='mb-4'>{t}</p>)}
                                {sec.ul && (
                                    <ul className='space-y-2 mb-4'>
                                        {sec.ul.map((t) => (
                                            <li key={t} className='flex gap-3'>
                                                <span aria-hidden='true' className='mt-3 w-2 h-2 rounded-full bg-red-500 shrink-0'></span>
                                                <span>{t}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {sec.ol && (
                                    <ol className='list-decimal pl-6 space-y-2 mb-4'>
                                        {sec.ol.map((t) => <li key={t}>{t}</li>)}
                                    </ol>
                                )}
                            </section>
                        ))}

                        <aside className='bg-gray-100 rounded-3xl p-8 mt-12'>
                            <h2 className='text-xl font-bold text-black mb-2'>Need help with this?</h2>
                            <p className='mb-4'>
                                See our <Link to={`/services/${service.slug}`} className='underline hover:text-red-500'>{service.name}</Link> service, or read more:
                            </p>
                            <ul className='space-y-1'>
                                {more.map((p) => (
                                    <li key={p.slug}><Link to={`/blog/${p.slug}`} className='underline hover:text-red-500'>{p.title}</Link></li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>
            </article>
            <CtaBand />
        </>
    )
}

export default BlogPost
