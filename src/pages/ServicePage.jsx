import { Link, useParams } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import Faq, { faqSchema } from '../components/ui/Faq'
import CtaBand from '../components/ui/CtaBand'
import ProofPlaceholder from '../components/ProofPlaceholder'
import NotFound from './NotFound'
import { serviceBySlug } from '../content/services'
import { postBySlug } from '../content/posts'
import { SITE, waLink } from '../site'

const List = ({ items, dark }) => (
    <ul className='space-y-3'>
        {items.map((i) => (
            <li key={i} className={`flex gap-3 leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                <span aria-hidden='true' className='mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0'></span>
                <span>{i}</span>
            </li>
        ))}
    </ul>
)

const H2 = ({ children, dark }) => (
    <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${dark ? 'text-white' : 'text-black'}`}>{children}</h2>
)

const ServicePage = () => {
    const { slug } = useParams()
    const s = serviceBySlug[slug]
    if (!s) return <NotFound />

    const path = `/services/${s.slug}`
    const crumbs = [{ name: 'Services', path: '/services' }, { name: s.name, path }]
    const post = postBySlug[s.blog]
    const msg = `Hi! I am interested in your ${s.name} service.`

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
                    },
                    faqSchema(s.faqs),
                ]}
            />
            <PageHeader crumbs={crumbs} h1={s.h1} intro={s.intro}>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Button href={waLink(msg)}>Chat on WhatsApp</Button>
                    <Button to='/contact' variant='outline'>Contact form</Button>
                </div>
            </PageHeader>

            {/* Scope */}
            <section className='py-20 bg-black'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <H2 dark>What is and is not included</H2>
                        <div className='grid md:grid-cols-2 gap-12'>
                            <div>
                                <h3 className='text-xl font-bold text-white mb-4'>Included</h3>
                                <List items={s.included} dark />
                            </div>
                            <div>
                                <h3 className='text-xl font-bold text-white mb-4'>Not included</h3>
                                <List items={s.notIncluded} dark />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className='py-20 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <H2>How it works</H2>
                        <ol className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {s.process.map((step, i) => (
                                <li key={step.title} className='border-2 border-black rounded-3xl p-6'>
                                    <p className='text-xs uppercase tracking-wide text-gray-600 mb-2'>Step {i + 1} · {step.time}</p>
                                    <h3 className='text-2xl font-bold text-black mb-2'>{step.title}</h3>
                                    <p className='text-gray-700 leading-relaxed'>{step.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* Who it is for */}
            <section className='py-20 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <H2>Who it is for, and who it is not</H2>
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div className='bg-white rounded-3xl p-8'>
                                <h3 className='text-xl font-bold text-black mb-4'>A good fit</h3>
                                <List items={s.forWho} />
                            </div>
                            <div className='bg-white rounded-3xl p-8'>
                                <h3 className='text-xl font-bold text-black mb-4'>Probably not a fit</h3>
                                <List items={s.notForWho} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className='py-20 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto'>
                        <H2>Pricing</H2>
                        <p className='text-lg text-gray-700 leading-relaxed mb-4'>{s.pricingText}</p>
                        <p className='text-2xl font-bold text-black mb-8'>Starting from [ADD PRICE]</p>
                        <Button to='/pricing' variant='outline'>See all packages</Button>
                    </div>
                </div>
            </section>

            <ProofPlaceholder dark slots={2} heading={`${s.name} results`} />

            <Faq items={s.faqs} />

            {/* Related */}
            <section className='py-20 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <H2>Related services and reading</H2>
                        <ul className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {s.related.map((r) => (
                                <li key={r}>
                                    <Link to={`/services/${r}`} className='block h-full bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow'>
                                        <p className='text-xs uppercase tracking-wide text-gray-600 mb-2'>Service</p>
                                        <h3 className='text-xl font-bold text-black mb-2'>{serviceBySlug[r].name}</h3>
                                        <p className='text-gray-700 text-sm'>{serviceBySlug[r].short}</p>
                                    </Link>
                                </li>
                            ))}
                            {post && (
                                <li>
                                    <Link to={`/blog/${post.slug}`} className='block h-full bg-black rounded-3xl p-6 hover:bg-gray-800 transition-colors'>
                                        <p className='text-xs uppercase tracking-wide text-gray-300 mb-2'>Blog · {post.readTime}</p>
                                        <h3 className='text-xl font-bold text-white mb-2'>{post.title}</h3>
                                        <p className='text-gray-300 text-sm'>{post.excerpt}</p>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>

            <CtaBand title={`Ready to talk about ${s.name.toLowerCase()}?`} message={msg} />
        </>
    )
}

export default ServicePage
