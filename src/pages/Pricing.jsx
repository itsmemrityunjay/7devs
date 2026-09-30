import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import Faq, { faqSchema } from '../components/ui/Faq'
import CtaBand from '../components/ui/CtaBand'
import { PRICE } from '../content/services'

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
            h1='Pricing that small businesses can plan around'
            intro='Every package shows exactly what you get. Third-party costs like ad spend, Shopify subscriptions and hosting are separate and paid directly by you.'
        />
        <section className='pb-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto space-y-16'>
                    {groups.map((g) => (
                        <div key={g.slug}>
                            <h2 className='text-3xl md:text-4xl font-bold text-black mb-2'>
                                <Link to={`/services/${g.slug}`} className='hover:text-red-500 transition-colors'>{g.name}</Link>
                            </h2>
                            <p className='text-gray-600 mb-6'>{g.note}</p>
                            <div className='grid md:grid-cols-2 gap-6'>
                                {g.packages.map((p, i) => (
                                    <div key={p.name} className={`${i === 0 ? 'bg-gray-200 text-black' : 'bg-black text-white'} rounded-3xl p-8`}>
                                        <h3 className='text-2xl font-bold mb-1'>{p.name}</h3>
                                        <p className='text-3xl font-extrabold mb-1'>{p.price}</p>
                                        <p className='text-sm opacity-70 mb-6'>{g.unit}</p>
                                        <ul className='space-y-2'>
                                            {p.items.map((it) => (
                                                <li key={it} className='flex gap-3'>
                                                    <span aria-hidden='true' className='mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0'></span>
                                                    <span>{it}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
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
