import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import Faq, { faqSchema } from '../components/ui/Faq'
import CtaBand from '../components/ui/CtaBand'
import Button from '../components/ui/Button'
import { ArrowUpRight, Check, ServiceIcon } from '../components/ui/Icons'
import { PRICE } from '../content/services'
import { waLink } from '../site'

const crumbs = [{ name: 'Pricing', path: '/pricing' }]

// Package scopes are drafts: numbers and prices are placeholders for the owner to fill.
const groups = [
    {
        slug: 'social-media-management',
        name: 'Social Media Management',
        unit: 'per month',
        note: 'Instagram and Facebook. Ad spend is not included.',
        packages: [
            { name: 'Starter', price: PRICE, items: ['[ADD NUMBER] static posts or carousels per month', '[ADD NUMBER] reels per month', 'Content calendar and your approval', 'Captions, hashtags, scheduling', 'Monthly report'] },
            { name: 'Growth', price: PRICE, items: ['[ADD NUMBER] static posts or carousels per month', '[ADD NUMBER] reels per month', 'Comment and DM replies in agreed hours', 'Profile clean-up', 'Monthly report and review call'] },
        ],
    },
    {
        slug: 'meta-ads',
        name: 'Meta Ads Management',
        unit: 'per month, plus your ad spend paid to Meta',
        note: 'Ad spend is paid directly by you to Meta.',
        packages: [
            { name: 'Starter', price: PRICE, items: ['Pixel and tracking setup or audit', 'Up to [ADD NUMBER] active campaigns', '[ADD NUMBER] new ad creatives per month', 'Weekly optimisation', 'Fortnightly report'] },
            { name: 'Growth', price: PRICE, items: ['Everything in Starter', 'Up to [ADD NUMBER] active campaigns', '[ADD NUMBER] new ad creatives per month', 'Retargeting setup', 'Weekly report and call'] },
        ],
    },
    {
        slug: 'shopify-website-development',
        name: 'Shopify Website Development',
        unit: 'one-time',
        note: "Shopify's own subscription and any paid apps or themes are billed separately by them.",
        packages: [
            { name: 'Basic store', price: PRICE, items: ['Theme setup and branding', 'Up to [ADD NUMBER] products added', 'Payments and shipping setup', 'Essential pages and policies', 'Handover walkthrough'] },
            { name: 'Growth store', price: PRICE, items: ['Everything in Basic', 'Up to [ADD NUMBER] products added', 'Extra collections and custom sections', 'Analytics and Meta Pixel connection', 'Basic on-page SEO'] },
        ],
    },
    {
        slug: 'website-development',
        name: 'Custom Website & Web App',
        unit: 'fixed quote after scoping',
        note: 'Hosting, domain and third-party API costs are billed by those providers.',
        packages: [
            { name: 'Business website', price: PRICE, items: ['Custom-coded responsive site', '[ADD NUMBER] pages', 'Contact or enquiry form', 'Basic technical SEO', 'Deployment and handover'] },
            { name: 'Web app', price: PRICE, items: ['Scoped feature list and fixed quote', 'MERN stack: MongoDB, Express, React, Node.js', 'User accounts and admin panel where needed', 'Milestone-based delivery', 'Code repository handover'] },
        ],
    },
]

const faqs = [
    { q: 'Are there hidden fees?', a: 'No. Each package lists what is included and not included. Third-party costs such as your Meta ad spend, Shopify subscription, hosting and domain are paid by you directly to those providers.' },
    { q: 'Do I need to sign a long contract?', a: 'Monthly services can be cancelled with notice. Exact terms are shared with the quote.' },
    { q: 'Can a package be customised?', a: 'Yes. If you need more or less than a package, message us and we will quote a version that fits.' },
    { q: 'How do I pay?', a: 'Payment terms are shared with the quote. Project work is normally split into milestones, and monthly services are billed monthly.' },
    { q: 'Do prices include GST?', a: '[ADD GST DETAILS]' },
]

const Pricing = () => (
    <>
        <Seo
            title='Pricing: Clear Packages, No Surprises | 7Devs'
            description='Transparent pricing for social media management, Meta ads, Shopify and website development. See what each package includes and what it does not.'
            path='/pricing'
            ogImage='pricing'
            crumbs={crumbs}
            schema={[faqSchema(faqs)]}
        />
        <PageHeader
            crumbs={crumbs}
            eyebrow='Pricing'
            h1='Pricing that small businesses can plan around'
            intro='Every package shows exactly what you get. Third-party costs like ad spend, Shopify subscriptions and hosting are separate and paid directly by you.'
        >
            {/* Jump links to each service's packages */}
            <nav aria-label='Jump to a service' className='flex flex-wrap gap-3'>
                {groups.map((g) => (
                    <a key={g.slug} href={`#${g.slug}`} className='inline-flex items-center gap-2 rounded-full bg-gray-100 hover:bg-black hover:text-white pl-2 pr-4 py-2 text-sm font-medium transition-colors group'>
                        <span className='w-7 h-7 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors'>
                            <ServiceIcon slug={g.slug} className='w-4 h-4' />
                        </span>
                        {g.name}
                    </a>
                ))}
            </nav>
        </PageHeader>
        <section className='pb-24 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto space-y-6'>
                    {groups.map((g) => (
                        <div key={g.slug} id={g.slug} data-reveal className='scroll-mt-28 grid lg:grid-cols-[18rem_1fr] gap-6 rounded-[2.5rem] bg-gray-100 p-4 md:p-6'>
                            <div className='p-4 flex flex-col'>
                                <span className='w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6'>
                                    <ServiceIcon slug={g.slug} />
                                </span>
                                <h2 className='text-2xl md:text-3xl font-bold text-black mb-3'>{g.name}</h2>
                                <p className='text-gray-600 text-sm leading-relaxed mb-6'>{g.note}</p>
                                <Link to={`/services/${g.slug}`} className='mt-auto inline-flex items-center gap-2 text-sm font-bold text-black hover:text-red-500 transition-colors group'>
                                    Full service details <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:rotate-45' />
                                </Link>
                            </div>
                            <div className='grid md:grid-cols-2 gap-4'>
                                {g.packages.map((p, i) => {
                                    const dark = i === 1
                                    return (
                                        <div key={p.name} className={`flex flex-col rounded-3xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                            <h3 className='text-sm uppercase tracking-widest font-bold mb-4 opacity-70'>{p.name}</h3>
                                            <p className='text-3xl md:text-4xl font-extrabold mb-1'>{p.price}</p>
                                            <p className='text-sm opacity-60 mb-6'>{g.unit}</p>
                                            <ul className={`space-y-3 border-t pt-6 mb-8 ${dark ? 'border-white/15' : 'border-gray-200'}`}>
                                                {p.items.map((it) => (
                                                    <li key={it} className='flex gap-3 text-sm leading-relaxed'>
                                                        <span aria-hidden='true' className='mt-0.5 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0'>
                                                            <Check className='w-3 h-3' />
                                                        </span>
                                                        <span>{it}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <Button
                                                href={waLink(`Hi! I am interested in the ${g.name} ${p.name} package.`)}
                                                variant={dark ? 'white' : 'solid'}
                                                arrow
                                                className='mt-auto'
                                            >
                                                Ask about {p.name}
                                            </Button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Faq items={faqs} heading='Pricing questions' dark />
        <CtaBand title='Want a quote for your business?' message='Hi! I have seen your pricing page and would like a quote.' />
    </>
)

export default Pricing
