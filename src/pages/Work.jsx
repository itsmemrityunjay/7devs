import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import CtaBand from '../components/ui/CtaBand'
import { ServiceIcon } from '../components/ui/Icons'
import { services } from '../content/services'

const crumbs = [{ name: 'Work', path: '/work' }]

// Only real projects belong here. Replace each placeholder with a genuine case study.
// `service` only picks the card's icon and tag; change it to match the real project.
const slots = [
    { n: 1, service: 'shopify-website-development' },
    { n: 2, service: 'meta-ads' },
    { n: 3, service: 'social-media-management' },
    { n: 4, service: 'website-development' },
]

const Work = () => (
    <>
        <Seo
            title='Our Work and Client Results | 7Devs'
            description='Case studies from 7Devs projects across social media, Meta ads, Shopify and web development for small businesses in India.'
            path='/work'
            ogImage='work'
            crumbs={crumbs}
        />
        <PageHeader
            crumbs={crumbs}
            eyebrow='Work'
            h1='Our work'
            intro='We only show real projects with results we can back up. Case studies will appear here as they are added.'
        />
        <section className='pb-24 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-6'>
                    {slots.map(({ n, service }, i) => {
                        const s = services.find((x) => x.slug === service)
                        return (
                            <article key={n} data-reveal style={{ '--reveal-delay': `${(i % 2) * 90}ms` }} className='group rounded-3xl bg-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
                                {/* Image slot: swap for a real screenshot with width, height and alt */}
                                <div className='relative aspect-[16/10] bg-black flex items-center justify-center overflow-hidden'>
                                    <div aria-hidden='true' className='absolute inset-0 bg-grid-dark'></div>
                                    <div aria-hidden='true' className='absolute w-48 h-48 rounded-full bg-red-500/30 blur-3xl group-hover:scale-150 transition-transform duration-700'></div>
                                    <span className='relative text-white/80 text-sm font-medium border border-white/20 rounded-full px-4 py-2'>[ADD REAL IMAGE WITH ALT TEXT]</span>
                                </div>
                                <div className='p-8'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <span className='inline-flex items-center gap-2 text-xs uppercase tracking-wide bg-white rounded-full pl-1 pr-3 py-1 text-gray-700'>
                                            <span className='w-6 h-6 rounded-full bg-black text-white flex items-center justify-center'><ServiceIcon slug={service} className='w-3.5 h-3.5' /></span>
                                            {s.name}
                                        </span>
                                        <span className='text-sm text-gray-500'>Case study {n}</span>
                                    </div>
                                    <h2 className='text-2xl font-bold text-black mb-6'>[ADD PROJECT NAME]</h2>
                                    <dl className='grid sm:grid-cols-3 gap-4 text-sm'>
                                        <div><dt className='font-bold text-black mb-1'>Client</dt><dd className='text-gray-600'>[ADD CLIENT NAME OR BUSINESS TYPE]</dd></div>
                                        <div><dt className='font-bold text-black mb-1'>What we did</dt><dd className='text-gray-600'>[ADD SERVICES DELIVERED]</dd></div>
                                        <div><dt className='font-bold text-black mb-1'>Result</dt><dd className='text-gray-600'>[ADD REAL CLIENT RESULT WITH TIME PERIOD]</dd></div>
                                    </dl>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
        <CtaBand title='Want to be our next case study?' message='Hi! I saw your work page and would like to start a project.' />
    </>
)

export default Work
