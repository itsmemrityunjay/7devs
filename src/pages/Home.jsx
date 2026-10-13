import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import USPSection from '../components/USPSection'
import USPElaboration from '../components/USPElaboration'
import ServiceList from '../components/ServiceList'
import ClientProof from '../components/ClientProof'
import Faq, { faqSchema } from '../components/ui/Faq'
import CtaBand from '../components/ui/CtaBand'
import Button from '../components/ui/Button'
import { ArrowUpRight } from '../components/ui/Icons'
import { generalFaqs } from '../content/faqs'
import { posts } from '../content/posts'
import { locations } from '../content/locations'

const Home = () => {
    return (
        <>
            <Seo
                title='Digital Marketing Agency in India | 7Devs'
                description='7Devs is a digital marketing agency in India: social media, Meta ads, SEO, Amazon, Flipkart, Shopify and web development for D2C brands. Clear pricing.'
                path='/'
                schema={[faqSchema(generalFaqs)]}
            />
            <Hero />
            <Marquee items={['Social Media', 'Meta Ads', 'Shopify Stores', 'Custom Websites', 'Digital Marketing', "Let's Connect"]} />
            <USPSection />
            <USPElaboration />
            <ServiceList />
            <ClientProof />

            <section id='blogs' className='py-24 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <div data-reveal className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
                            <div>
                                <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>Insights</p>
                                <h2 className='text-4xl md:text-6xl font-bold text-black tracking-tighter'>From the blog</h2>
                            </div>
                            <Button to='/blog' variant='outline'>All articles</Button>
                        </div>
                        <ul className='grid md:grid-cols-2 gap-6'>
                            {posts.map((p, i) => (
                                <li key={p.slug} data-reveal style={{ '--reveal-delay': `${(i % 2) * 90}ms` }}>
                                    <div className='group relative flex flex-col justify-between h-full min-h-[240px] bg-white rounded-3xl p-8 hover:bg-black hover:-translate-y-1 hover:shadow-2xl transition-all duration-300'>
                                        <div>
                                            <p className='text-xs uppercase tracking-wide text-gray-500 mb-4'>{p.readTime}</p>
                                            <h3 className='text-xl md:text-2xl font-bold text-black group-hover:text-white mb-3 transition-colors'><Link to={`/blog/${p.slug}`} className="after:absolute after:inset-0 after:content-['']">{p.title}</Link></h3>
                                            <p className='text-gray-600 group-hover:text-gray-300 transition-colors'>{p.excerpt}</p>
                                        </div>
                                        <span className='mt-6 inline-flex items-center gap-2 text-sm font-bold text-black group-hover:text-red-500 transition-colors'>
                                            Read more <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:rotate-45' />
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className='py-16 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <h2 className='text-2xl md:text-3xl font-bold text-black mb-6'>Digital marketing across India</h2>
                        <ul className='flex flex-wrap gap-3'>
                            {locations.map((l) => (
                                <li key={l.slug}><Link to={`/locations/${l.slug}`} className='inline-block rounded-full bg-gray-100 hover:bg-black hover:text-white px-5 py-2 text-sm font-medium transition-colors'>{l.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <Faq items={generalFaqs} id='faq' />
            <CtaBand />
        </>
    )
}

export default Home
