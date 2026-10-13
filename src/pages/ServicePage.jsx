import { Link, useParams } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import Faq, { faqSchema } from '../components/ui/Faq'
import CtaBand from '../components/ui/CtaBand'
import ClientProof from '../components/ClientProof'
import { ArrowUpRight, Check, Cross, ServiceIcon } from '../components/ui/Icons'
import NotFound from './NotFound'
import { serviceBySlug, startingPrice, offerPrice } from '../content/services'
import { postBySlug } from '../content/posts'
import { SITE, waLink } from '../site'

const List = ({ items, dark, negative }) => (
    <ul className='space-y-4'>
        {items.map((i) => (
            <li key={i} className={`flex gap-3 leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                <span aria-hidden='true' className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${negative ? (dark ? 'bg-white/10 text-gray-400' : 'bg-gray-200 text-gray-500') : 'bg-red-500 text-white'}`}>
                    {negative ? <Cross className='w-3.5 h-3.5' /> : <Check className='w-3.5 h-3.5' />}
                </span>
                <span>{i}</span>
            </li>
        ))}
    </ul>
)

const Eyebrow = ({ children }) => (
    <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>{children}</p>
)

const H2 = ({ children, dark }) => (
    <h2 className={`text-3xl md:text-5xl font-bold leading-tight mb-12 ${dark ? 'text-white' : 'text-black'}`}>{children}</h2>
)

const ServicePage = () => {
    const { slug } = useParams()
    const s = serviceBySlug[slug]
    if (!s) return <NotFound />

    const path = `/services/${s.slug}`
    const crumbs = [{ name: 'Services', path: '/services' }, { name: s.name, path }]
    const post = postBySlug[s.blog]
    const msg = `Hi! I am interested in your ${s.name} service.`

    // Quick-facts card beside the header, built only from content already on the page.
    const aside = (
        <div className='bg-black text-white rounded-3xl p-6 shadow-2xl'>
            <span className='w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center mb-6'>
                <ServiceIcon slug={s.slug} className='w-7 h-7' />
            </span>
            <dl className='space-y-4 text-sm'>
                <div className='flex justify-between gap-4 border-b border-white/15 pb-3'>
                    <dt className='text-gray-400'>Steps</dt><dd className='font-bold'>{s.process.length}</dd>
                </div>
                <div className='flex justify-between gap-4 border-b border-white/15 pb-3'>
                    <dt className='text-gray-400'>Included</dt><dd className='font-bold'>{s.included.length} items</dd>
                </div>
                <div className='flex justify-between gap-4'>
                    <dt className='text-gray-400'>{startingPrice[s.slug] ? 'Starting from' : 'Pricing'}</dt><dd className='font-bold'>{startingPrice[s.slug] || 'Custom quote'}</dd>
                </div>
            </dl>
        </div>
    )

    return (
        <>
            <Seo
                title={s.metaTitle}
                description={s.metaDescription}
                path={path}
                ogImage={s.slug}
                crumbs={crumbs}
                schema={[
                    {
                        '@type': 'Service',
                        name: s.name,
                        description: s.metaDescription,
                        url: `${SITE.url}${path}`,
                        serviceType: s.name,
                        areaServed: { '@type': 'Country', name: 'India' },
                        provider: { '@id': `${SITE.url}/#organization` },
                        ...(offerPrice[s.slug] && { offers: { '@type': 'Offer', priceCurrency: 'INR', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: offerPrice[s.slug] }, url: `${SITE.url}/pricing` } }),
                    },
                    faqSchema(s.faqs),
                ]}
            />
            <PageHeader crumbs={crumbs} eyebrow={s.name} h1={s.h1} intro={s.intro} aside={aside}>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Button href={waLink(msg)} arrow>Chat on WhatsApp</Button>
                    <Button to='/contact' variant='outline'>Contact form</Button>
                </div>
            </PageHeader>

            {/* Scope */}
            <section className='py-24 bg-black relative overflow-hidden'>
                <div aria-hidden='true' className='absolute inset-0 bg-grid-dark'></div>
                <div className='container mx-auto px-4 relative'>
                    <div className='max-w-6xl mx-auto'>
                        <div data-reveal>
                            <Eyebrow>Scope</Eyebrow>
                            <H2 dark>What is and is not included</H2>
                        </div>
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div data-reveal className='rounded-3xl border border-white/15 bg-white/[0.04] p-8'>
                                <h3 className='text-xl font-bold text-white mb-6'>Included</h3>
                                <List items={s.included} dark />
                            </div>
                            <div data-reveal style={{ '--reveal-delay': '90ms' }} className='rounded-3xl border border-white/15 p-8'>
                                <h3 className='text-xl font-bold text-white mb-6'>Not included</h3>
                                <List items={s.notIncluded} dark negative />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process: vertical timeline */}
            <section className='py-24 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto grid lg:grid-cols-[18rem_1fr] gap-10 lg:gap-16'>
                        <div data-reveal className='lg:sticky lg:top-28 self-start'>
                            <Eyebrow>Process</Eyebrow>
                            <h2 className='text-3xl md:text-5xl font-bold leading-tight text-black'>How it works</h2>
                        </div>
                        <ol className='relative border-l-2 border-gray-200 ml-5'>
                            {s.process.map((step, i) => (
                                <li key={step.title} data-reveal style={{ '--reveal-delay': `${i * 60}ms` }} className='relative pl-10 pb-10 last:pb-0 group'>
                                    <span className='absolute -left-[1.3rem] top-0 w-10 h-10 rounded-full bg-black text-white text-sm font-bold flex items-center justify-center ring-8 ring-white group-hover:bg-red-500 transition-colors'>
                                        {i + 1}
                                    </span>
                                    <div className='rounded-3xl border-2 border-black p-6 group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300'>
                                        <p className='inline-block text-xs uppercase tracking-wide bg-gray-100 text-gray-700 rounded-full px-3 py-1 mb-3'>{step.time}</p>
                                        <h3 className='text-2xl font-bold text-black mb-2'>{step.title}</h3>
                                        <p className='text-gray-700 leading-relaxed'>{step.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* Who it is for */}
            <section className='py-24 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <div data-reveal>
                            <Eyebrow>Fit</Eyebrow>
                            <H2>Who it is for, and who it is not</H2>
                        </div>
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div data-reveal className='bg-white rounded-3xl p-8'>
                                <h3 className='text-xl font-bold text-black mb-6'>A good fit</h3>
                                <List items={s.forWho} />
                            </div>
                            <div data-reveal style={{ '--reveal-delay': '90ms' }} className='bg-white/60 rounded-3xl p-8 border border-gray-200'>
                                <h3 className='text-xl font-bold text-black mb-6'>Probably not a fit</h3>
                                <List items={s.notForWho} negative />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className='py-24 bg-white'>
                <div className='container mx-auto px-4'>
                    <div data-reveal className='max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-10 items-center rounded-[2.5rem] border-2 border-black p-8 md:p-12'>
                        <div>
                            <Eyebrow>Pricing</Eyebrow>
                            <h2 className='text-3xl md:text-5xl font-bold text-black mb-4'>{startingPrice[s.slug] ? `Starting from ${startingPrice[s.slug]}` : 'Custom quote after a short call'}</h2>
                            <p className='text-lg text-gray-700 leading-relaxed max-w-2xl'>{s.pricingText}</p>
                        </div>
                        <Button to='/pricing' variant='outline'>See all packages</Button>
                    </div>
                </div>
            </section>

            <ClientProof dark service={s.slug} heading={`${s.name} for real brands`} />

            <Faq items={s.faqs} />

            {/* Related */}
            <section className='py-24 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <div data-reveal>
                            <Eyebrow>Keep exploring</Eyebrow>
                            <H2>Related services and reading</H2>
                        </div>
                        <ul className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {s.related.map((r, i) => (
                                <li key={r} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
                                    <Link to={`/services/${r}`} className='group flex flex-col h-full bg-white rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300'>
                                        <span className='w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors'>
                                            <ServiceIcon slug={r} />
                                        </span>
                                        <p className='text-xs uppercase tracking-wide text-gray-500 mb-2'>Service</p>
                                        <h3 className='text-xl font-bold text-black mb-2'>{serviceBySlug[r].name}</h3>
                                        <p className='text-gray-600 text-sm flex-1'>{serviceBySlug[r].short}</p>
                                        <ArrowUpRight className='w-5 h-5 mt-6 text-black transition-transform duration-300 group-hover:rotate-45' />
                                    </Link>
                                </li>
                            ))}
                            {post && (
                                <li data-reveal style={{ '--reveal-delay': '210ms' }}>
                                    <Link to={`/blog/${post.slug}`} className='group flex flex-col h-full bg-black rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300'>
                                        <p className='text-xs uppercase tracking-wide text-red-500 mb-2 mt-[4.5rem]'>Blog · {post.readTime}</p>
                                        <h3 className='text-xl font-bold text-white mb-2'>{post.title}</h3>
                                        <p className='text-gray-400 text-sm flex-1'>{post.excerpt}</p>
                                        <ArrowUpRight className='w-5 h-5 mt-6 text-white transition-transform duration-300 group-hover:rotate-45' />
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>

            <CtaBand title={`Talk to us about ${s.name}`} message={msg} />
        </>
    )
}

export default ServicePage
