import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import CtaBand from '../components/ui/CtaBand'

const crumbs = [{ name: 'Work', path: '/work' }]

// Only real projects belong here. Replace each placeholder with a genuine case study.
const slots = [1, 2, 3, 4]

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
            h1='Our work'
            intro='We only show real projects with results we can back up. Case studies will appear here as they are added.'
        />
        <section className='pb-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-6'>
                    {slots.map((n) => (
                        <article key={n} className='rounded-3xl border-2 border-dashed border-black p-8'>
                            <p className='text-xs uppercase tracking-wide text-gray-600 mb-2'>Case study {n}</p>
                            <h2 className='text-2xl font-bold text-black mb-4'>[ADD PROJECT NAME]</h2>
                            <dl className='space-y-3 text-gray-700'>
                                <div><dt className='font-bold text-black'>Client</dt><dd>[ADD CLIENT NAME OR BUSINESS TYPE]</dd></div>
                                <div><dt className='font-bold text-black'>What we did</dt><dd>[ADD SERVICES DELIVERED]</dd></div>
                                <div><dt className='font-bold text-black'>Result</dt><dd>[ADD REAL CLIENT RESULT WITH TIME PERIOD]</dd></div>
                                <div><dt className='font-bold text-black'>Screenshot</dt><dd>[ADD REAL IMAGE WITH ALT TEXT]</dd></div>
                            </dl>
                        </article>
                    ))}
                </div>
            </div>
        </section>
        <CtaBand title='Want to be our next case study?' message='Hi! I saw your work page and would like to start a project.' />
    </>
)

export default Work
