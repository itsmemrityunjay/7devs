import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import CtaBand from '../components/ui/CtaBand'
import { ArrowUpRight } from '../components/ui/Icons'
import { posts } from '../content/posts'
import { serviceBySlug } from '../content/services'

const crumbs = [{ name: 'Blog', path: '/blog' }]

const Blog = () => {
    const [featured, ...rest] = posts
    return (
        <>
            <Seo
                title='Blog: Practical Digital Marketing Guides | 7Devs'
                description='Plain-English guides on social media costs, Meta ads, Shopify vs custom websites and getting sales from ads, for small businesses in India.'
                path='/blog'
                ogImage='blog'
                crumbs={crumbs}
            />
            <PageHeader
                crumbs={crumbs}
                eyebrow='Blog'
                h1='Blog: practical guides for small businesses'
                intro='Straight answers to questions we hear from business owners about social media, ads and websites.'
            />
            <section className='pb-24 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        {/* Featured (newest) post */}
                        <Link data-reveal to={`/blog/${featured.slug}`} className='group relative block overflow-hidden rounded-[2.5rem] bg-black text-white p-8 md:p-14 mb-6'>
                            <div aria-hidden='true' className='absolute inset-0 bg-grid-dark'></div>
                            <div aria-hidden='true' className='absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-red-500/30 blur-3xl group-hover:scale-125 transition-transform duration-700'></div>
                            <div className='relative max-w-3xl'>
                                <p className='inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-6'>
                                    <span className='bg-red-500 rounded-full px-3 py-1 font-bold'>Featured</span>
                                    <span className='text-gray-400'>{serviceBySlug[featured.service].name} · {featured.readTime}</span>
                                </p>
                                <h2 className='text-3xl md:text-5xl font-bold leading-tight mb-4'>{featured.title}</h2>
                                <p className='text-lg text-gray-300 mb-8'>{featured.excerpt}</p>
                                <span className='inline-flex items-center gap-3 font-bold'>
                                    Read article
                                    <span className='w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors'>
                                        <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:rotate-45' />
                                    </span>
                                </span>
                            </div>
                        </Link>

                        <ul className='grid md:grid-cols-3 gap-6'>
                            {rest.map((p, i) => (
                                <li key={p.slug} data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
                                    <Link to={`/blog/${p.slug}`} className='group flex flex-col h-full min-h-[280px] rounded-3xl bg-gray-100 p-8 hover:bg-black hover:-translate-y-1 hover:shadow-2xl transition-all duration-300'>
                                        <p className='text-xs uppercase tracking-wide text-gray-500 mb-4'>{serviceBySlug[p.service].name} · {p.readTime}</p>
                                        <h2 className='text-xl md:text-2xl font-bold text-black group-hover:text-white mb-3 transition-colors'>{p.title}</h2>
                                        <p className='text-gray-600 group-hover:text-gray-300 flex-1 transition-colors'>{p.excerpt}</p>
                                        <span className='mt-6 inline-flex items-center gap-2 text-sm font-bold text-black group-hover:text-red-500 transition-colors'>
                                            Read article <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:rotate-45' />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <CtaBand />
        </>
    )
}

export default Blog
