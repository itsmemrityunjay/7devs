import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import CtaBand from '../components/ui/CtaBand'
import Button from '../components/ui/Button'
import Marquee from '../components/Marquee'
import { ArrowUpRight, ServiceIcon } from '../components/ui/Icons'
import { services } from '../content/services'
import { SITE } from '../site'

const crumbs = [{ name: 'Services', path: '/services' }]
const places = ['Chandigarh', 'Delhi', 'Mumbai', 'Noida', 'Gurgaon', 'Surat', 'Bengal', 'Rajasthan']

const Services = () => (
    <>
        <Seo
            title='Digital Marketing, SEO & Web Services | 7Devs'
            description='Social media, Meta ads, SEO, Amazon, Flipkart, Shopify and website development for brands in India. Compare services and start where it counts.'
            path='/services'
            ogImage='services'
            crumbs={crumbs}
        />
        <PageHeader
            crumbs={crumbs}
            eyebrow='Services'
            h1='Digital marketing and web development services for small businesses'
            intro={`${services.length} services, each with a clear scope and package. Start with the one that fixes your biggest problem, then add the next when you are ready. We are remote-first and work with businesses across India.`}
        >
            <Button href={SITE.whatsapp} arrow>Not sure? Ask us on WhatsApp</Button>
        </PageHeader>

        {/* Bento grid of services: first card spans two columns */}
        <section className='pb-24 bg-white'>
            <div className='container mx-auto px-4'>
                <h2 className='sr-only'>Choose a service</h2>
                <ul className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {services.map((s, i) => {
                        const dark = i === 0 || i === services.length - 1
                        return (
                            <li key={s.slug} data-reveal style={{ '--reveal-delay': `${(i % 3) * 80}ms` }} className={i === 0 ? 'lg:col-span-2' : ''}>
                                <Link
                                    to={`/services/${s.slug}`}
                                    className={`group relative flex flex-col h-full min-h-[300px] rounded-3xl p-8 overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ${dark ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}
                                >
                                    <span aria-hidden='true' className='absolute -right-4 -top-6 text-[9rem] font-extrabold leading-none opacity-[0.06]'>0{i + 1}</span>
                                    <span className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-auto transition-colors ${dark ? 'bg-white text-black group-hover:bg-red-500 group-hover:text-white' : 'bg-black text-white group-hover:bg-red-500'}`}>
                                        <ServiceIcon slug={s.slug} className='w-7 h-7' />
                                    </span>
                                    <h3 className='text-2xl md:text-3xl font-bold mt-10 mb-3'>{s.name}</h3>
                                    <p className={`leading-relaxed mb-6 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{s.short}</p>
                                    <span className='inline-flex items-center gap-2 font-bold text-sm group-hover:text-red-500 transition-colors'>
                                        See scope, process and FAQ <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:rotate-45' />
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                    <li data-reveal style={{ '--reveal-delay': '160ms' }}>
                        <Link to='/pricing' className='group flex flex-col justify-between h-full min-h-[300px] rounded-3xl p-8 border-2 border-dashed border-black hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors duration-300'>
                            <p className='text-sm uppercase tracking-widest font-bold'>Compare</p>
                            <div>
                                <h3 className='text-2xl md:text-3xl font-bold mb-3'>See every package side by side</h3>
                                <span className='inline-flex items-center gap-2 font-bold text-sm'>Pricing <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:rotate-45' /></span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>

        <Marquee items={places} />

        <section className='py-24 bg-white'>
            <div className='container mx-auto px-4'>
                <div data-reveal className='max-w-4xl mx-auto text-center'>
                    <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>Where we work</p>
                    <h2 className='text-3xl md:text-5xl font-bold text-black mb-6'>Remote-first, across India</h2>
                    <p className='text-lg text-gray-700 leading-relaxed mb-10'>
                        Everything runs remotely over WhatsApp, calls and shared folders, so location rarely matters. We regularly work with businesses in Chandigarh, Delhi, Mumbai, Noida, Gurgaon, Surat, Bengal and Rajasthan, and we can work with yours wherever you are in India.
                    </p>
                    <ul className='flex flex-wrap justify-center gap-3'>
                        {places.map((p) => (
                            <li key={p} className='rounded-full border-2 border-black px-5 py-2 font-medium hover:bg-black hover:text-white transition-colors'>{p}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        <CtaBand />
    </>
)

export default Services
