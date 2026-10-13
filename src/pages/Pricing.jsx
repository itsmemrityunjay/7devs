import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import Faq, { faqSchema } from '../components/ui/Faq'
import CtaBand from '../components/ui/CtaBand'
import Button from '../components/ui/Button'
import { ArrowUpRight, Check, ServiceIcon } from '../components/ui/Icons'
import { waLink } from '../site'

const crumbs = [{ name: 'Pricing', path: '/pricing' }]

// Prices for social, Meta ads, website revamp and the growth plans are from the 7Devs Pricing & Packages 2026 PDF.
// Shopify and web app prices are ESTIMATES (not in the PDF): confirm before launch.
const groups = [
    {
        slug: 'social-media-management',
        name: 'Social Media Management',
        note: 'Instagram and Facebook. For brands that want a strong, consistent presence through quality content and planning. Ad spend is not included.',
        packages: [
            { name: 'Social Media Management', price: '₹14,000', unit: 'starting price per month', dark: true, items: ['8–10 social media creatives', '5–6 reels', 'Remaining static or product creatives', 'Content optimised for Instagram and Facebook', 'Monthly content planning and trend-based direction', 'Engagement-focused strategy', 'Monthly report: reach, engagement, growth'] },
        ],
    },
    {
        slug: 'meta-ads',
        name: 'Meta Ads Management',
        note: 'For brands that want to scale through structured campaigns and data-driven decisions. Ad spend is paid directly by you to Meta.',
        packages: [
            { name: 'Meta Ads Management', price: '₹16,000', unit: 'starting price per month, plus your ad spend', dark: true, items: ['Campaign creation and setup', 'Audience targeting and structuring', 'Ad scheduling and execution', 'Funnel-based planning, from awareness to conversion', 'Creative testing and A/B testing of audiences and creatives', 'Budget optimisation and performance scaling', 'Monthly report: ROAS, CPA, CTR, conversions'] },
        ],
    },
    {
        slug: 'digital-marketing',
        name: 'Growth Plans',
        note: 'Content and Meta ads together, so your creatives and your ads work as one system. Ad spend is paid directly by you to Meta.',
        packages: [
            { name: 'Growth Starter', price: '₹24,000', unit: 'starting price per month', items: ['12–14 creatives and 6–7 reels per month', 'Product, lifestyle and promotional creatives', 'Content calendar and posting structure', 'End-to-end Meta ads management', 'Creative testing and scaling of top performers', 'Bi-weekly ad reports and monthly analysis'] },
            { name: 'Growth Accelerator', price: '₹34,000', unit: 'starting price per month', dark: true, items: ['20–22 creatives and 10–12 reels per month', 'Product, lifestyle and performance-focused creatives', 'Advanced growth and scaling strategy', 'Advanced campaign structuring and audience scaling', 'Multi-creative testing and budget optimisation', 'Weekly ad reports and detailed monthly analysis'] },
        ],
    },
    {
        slug: 'website-development',
        name: 'Website Revamp & Web Apps',
        note: 'Hosting, domain and third-party API costs are billed by those providers.',
        packages: [
            { name: 'Website Revamp', price: '₹12,000', unit: 'starting price', items: ['Requirement discussion and website structure', 'Clean, modern, custom layout', 'Brand-aligned colours and typography', 'Home, About, Services and Contact pages', 'Fast loading', 'Instagram and WhatsApp integration', 'Basic SEO: friendly URLs, meta titles and descriptions, image optimisation'] },
            { name: 'Custom Web App', price: '₹50,000', unit: 'starting price, fixed quote after scoping', dark: true, items: ['Scoped feature list and fixed quote', 'MERN stack: MongoDB, Express, React, Node.js', 'User accounts and admin panel where needed', 'Milestone-based delivery', 'Code repository handover'] },
        ],
    },
    {
        slug: 'shopify-website-development',
        name: 'Shopify Website Development',
        note: "Shopify's own subscription and any paid apps or themes are billed separately by them.",
        packages: [
            { name: 'Basic store', price: '₹25,000', unit: 'starting price, one-time', items: ['Theme setup and branding', 'Products added (number agreed in the quote)', 'Payments and shipping setup', 'Essential pages and policies', 'Mobile-responsive layout', 'Handover walkthrough'] },
            { name: 'Growth store', price: '₹45,000', unit: 'starting price, one-time', dark: true, items: ['Everything in Basic store', 'Extra collections and custom sections', 'Product page and navigation optimisation', 'Analytics and Meta Pixel connection', 'Basic on-page SEO'] },
        ],
    },
]

const faqs = [
    { q: 'Are there hidden fees?', a: 'No. Each package lists what is included and not included. Third-party costs such as your Meta ad spend, Shopify subscription, hosting and domain are paid by you directly to those providers.' },
    { q: 'Do I need to sign a long contract?', a: 'Monthly services can be cancelled with notice. Exact terms are shared with the quote.' },
    { q: 'Can a package be customised?', a: 'Yes. If you need more or less than a package, message us and we will quote a version that fits.' },
    { q: 'How do I pay?', a: 'Payment terms are shared with the quote. Project work is normally split into milestones, and monthly services are billed monthly.' },
    { q: 'Do prices include GST?', a: 'Prices on this page are starting prices before GST. GST, where applicable, is shown separately on your quote.' },
]

const Pricing = () => (
    <>
        <Seo
            title='Pricing: Clear Packages, No Surprises | 7Devs'
            description='Starting prices for social media management, Meta ads, growth plans, Shopify and website development. See what each package includes.'
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
                            <div className={`grid gap-4 ${g.packages.length > 1 ? 'md:grid-cols-2' : ''}`}>
                                {g.packages.map((p) => {
                                    const dark = p.dark
                                    return (
                                        <div key={p.name} className={`flex flex-col rounded-3xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                            <h3 className='text-sm uppercase tracking-widest font-bold mb-4 opacity-70'>{p.name}</h3>
                                            <p className='text-3xl md:text-4xl font-extrabold mb-1'>{p.price}</p>
                                            <p className='text-sm opacity-60 mb-6'>{p.unit}</p>
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
