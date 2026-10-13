import { Link, useParams } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import Faq, { faqSchema } from '../components/ui/Faq'
import CtaBand from '../components/ui/CtaBand'
import ClientProof from '../components/ClientProof'
import { ArrowUpRight, Check, ServiceIcon } from '../components/ui/Icons'
import NotFound from './NotFound'
import { services, startingPrice } from '../content/services'
import { locations, locationBySlug } from '../content/locations'
import { SITE, waLink } from '../site'

const LocationPage = () => {
    const { slug } = useParams()
    const l = locationBySlug[slug]
    if (!l) return <NotFound />

    const path = `/locations/${l.slug}`
    const crumbs = [{ name: 'Locations', path: '/locations' }, { name: l.name, path }]
    const title = `Digital Marketing Agency in ${l.name} | 7Devs`
    const description = `Digital marketing in ${l.name}: social media, Meta ads, SEO, Shopify and website development for ${l.name} brands. Remote-first, clear pricing.`
    const faqs = [
        { q: `Do you have an office in ${l.name}?`, a: `No. 7Devs is remote-first. We work with ${l.name} businesses over WhatsApp, calls and shared folders, which keeps costs low and communication quick.` },
        { q: `How much do digital marketing services cost for a business in ${l.name}?`, a: `Our prices are the same for every city. Social media management starts at ${startingPrice['social-media-management']}, Meta ads at ${startingPrice['meta-ads']}, and website work from ${startingPrice['website-development']}. See the pricing page for what each package includes.` },
        { q: `Which service should a ${l.name} business start with?`, a: 'It depends on your goal and budget. Often it is a good website or store first, then either steady social content or Meta ads. A short call is enough for us to recommend one place to start.' },
        ...l.faqs,
    ]

    return (
        <>
            <Seo
                title={title}
                description={description}
                path={path}
                ogImage='locations'
                crumbs={crumbs}
                schema={[
                    {
                        '@type': 'Service',
                        name: `Digital marketing and web development in ${l.name}`,
                        serviceType: 'Digital marketing',
                        url: `${SITE.url}${path}`,
                        areaServed: { '@type': 'City', name: l.name },
                        provider: { '@id': `${SITE.url}/#organization` },
                    },
                    faqSchema(faqs),
                ]}
            />
            <PageHeader crumbs={crumbs} eyebrow={l.name} h1={`Digital marketing agency in ${l.name}`} intro={l.intro}>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Button href={waLink(`Hi! I run a business in ${l.name} and would like to talk about digital marketing.`)} arrow>Chat on WhatsApp</Button>
                    <Button to='/pricing' variant='outline'>See pricing</Button>
                </div>
            </PageHeader>

            <section className='py-24 bg-black relative overflow-hidden'>
                <div aria-hidden='true' className='absolute inset-0 bg-grid-dark'></div>
                <div className='container mx-auto px-4 relative'>
                    <div className='max-w-6xl mx-auto grid lg:grid-cols-[18rem_1fr] gap-10 lg:gap-16'>
                        <div data-reveal>
                            <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>Who we help</p>
                            <h2 className='text-3xl md:text-5xl font-bold text-white leading-tight'>{l.name} businesses we can help</h2>
                        </div>
                        <div data-reveal>
                            <p className='text-gray-300 text-lg leading-relaxed mb-8'>Covering {l.area}. Typical businesses that ask us for help include:</p>
                            <ul className='grid sm:grid-cols-2 gap-4'>
                                {l.sectors.map((x) => (
                                    <li key={x} className='flex gap-3 text-gray-300'>
                                        <span aria-hidden='true' className='mt-0.5 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0'><Check className='w-3.5 h-3.5' /></span>
                                        {x}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-24 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <div data-reveal className='mb-12'>
                            <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>Services</p>
                            <h2 className='text-3xl md:text-5xl font-bold text-black'>Services for {l.name} businesses</h2>
                        </div>
                        <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {services.map((s, i) => (
                                <li key={s.slug} data-reveal style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}>
                                    <div className='group relative flex flex-col h-full rounded-3xl bg-gray-100 p-8 hover:bg-black hover:-translate-y-1 transition-all duration-300'>
                                        <span className='w-12 h-12 rounded-2xl bg-black text-white group-hover:bg-red-500 flex items-center justify-center mb-6 transition-colors'><ServiceIcon slug={s.slug} /></span>
                                        <h3 className='text-xl font-bold text-black group-hover:text-white mb-2 transition-colors'><Link to={`/services/${s.slug}`} className="after:absolute after:inset-0 after:content-['']">{s.name} in {l.name}</Link></h3>
                                        <p className='text-gray-600 group-hover:text-gray-300 text-sm mb-6 transition-colors'>{s.short}</p>
                                        <span className='mt-auto inline-flex items-center gap-2 text-sm font-bold text-black group-hover:text-red-500 transition-colors'>
                                            {startingPrice[s.slug] ? `From ${startingPrice[s.slug]}` : 'Custom quote'} <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:rotate-45' />
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <ClientProof dark heading='Brands we have worked with' />
            <Faq items={faqs} heading={`${l.name} questions`} />

            <section className='py-16 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <h2 className='text-xl font-bold text-black mb-4'>We also work with businesses in</h2>
                        <ul className='flex flex-wrap gap-3'>
                            {locations.filter((x) => x.slug !== l.slug).map((x) => (
                                <li key={x.slug}><Link to={`/locations/${x.slug}`} className='inline-block rounded-full bg-white hover:bg-black hover:text-white px-5 py-2 text-sm font-medium transition-colors'>{x.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <CtaBand title={`Growing a business in ${l.name}?`} message={`Hi! I run a business in ${l.name} and saw your website.`} />
        </>
    )
}

export default LocationPage
