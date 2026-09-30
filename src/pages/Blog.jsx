import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import CtaBand from '../components/ui/CtaBand'
import { posts } from '../content/posts'

const crumbs = [{ name: 'Blog', path: '/blog' }]

const Blog = () => (
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
            h1='Blog: practical guides for small businesses'
            intro='Straight answers to questions we hear from business owners about social media, ads and websites.'
        />
        <section className='pb-20 bg-white'>
            <div className='container mx-auto px-4'>
                <ul className='max-w-6xl mx-auto grid md:grid-cols-2 gap-6'>
                    {posts.map((p, i) => (
                        <li key={p.slug}>
                            <Link to={`/blog/${p.slug}`} className={`block h-full rounded-3xl p-8 transition-colors ${i % 2 ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-black hover:bg-gray-300'}`}>
                                <p className='text-xs uppercase tracking-wide opacity-70 mb-3'>{p.readTime}</p>
                                <h2 className='text-2xl md:text-3xl font-bold mb-3'>{p.title}</h2>
                                <p className='opacity-80'>{p.excerpt}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        <CtaBand />
    </>
)

export default Blog
