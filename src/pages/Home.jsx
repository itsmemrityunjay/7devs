import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import Hero from '../components/Hero'
import USPSection from '../components/USPSection'
import USPElaboration from '../components/USPElaboration'
import ServiceList from '../components/ServiceList'
import ProofPlaceholder from '../components/ProofPlaceholder'
import Faq, { faqSchema } from '../components/ui/Faq'
import CtaBand from '../components/ui/CtaBand'
import { generalFaqs } from '../content/faqs'
import { posts } from '../content/posts'

const Home = () => {
    return (
        <>
            <Seo
                title='7Devs: Affordable Digital Marketing & Web Dev'
                description='Affordable, fast social media, Meta ads, Shopify and website development for small businesses and D2C brands in India. Clear scope and pricing.'
                path='/'
                schema={[faqSchema(generalFaqs)]}
            />
            <Hero />
            <USPSection />
            <USPElaboration />
            <ServiceList />
            <ProofPlaceholder />
            <Faq items={generalFaqs} id='faq' />

            <section id='blogs' className='py-20 bg-black'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <h2 className='text-4xl md:text-6xl font-bold text-white tracking-tighter mb-10'>From the blog</h2>
                        <ul className='grid md:grid-cols-2 gap-6'>
                            {posts.map((p) => (
                                <li key={p.slug}>
                                    <Link to={`/blog/${p.slug}`} className='block h-full bg-white rounded-3xl p-6 hover:bg-gray-100 transition-colors'>
                                        <p className='text-xs uppercase tracking-wide text-gray-600 mb-2'>{p.readTime}</p>
                                        <h3 className='text-xl md:text-2xl font-bold text-black mb-2'>{p.title}</h3>
                                        <p className='text-gray-700'>{p.excerpt}</p>
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

export default Home
