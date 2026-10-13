import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import CtaBand from '../components/ui/CtaBand'
import { ArrowUpRight } from '../components/ui/Icons'
import { locations } from '../content/locations'

const crumbs = [{ name: 'Locations', path: '/locations' }]

const Locations = () => (
    <>
        <Seo
            title='Digital Marketing Services Across India | 7Devs'
            description='7Devs works remotely with businesses in Chandigarh, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune and more. Find your city.'
            path='/locations'
            ogImage='locations'
            crumbs={crumbs}
        />
        <PageHeader
            crumbs={crumbs}
            eyebrow='Locations'
            h1='Digital marketing services across India'
            intro='7Devs is remote-first, so we work with businesses in every major city over WhatsApp, calls and shared folders. Find your city to see how we can help.'
        />
        <section className='pb-24 bg-white'>
            <div className='container mx-auto px-4'>
                <ul className='max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {locations.map((l, i) => (
                        <li key={l.slug} data-reveal style={{ '--reveal-delay': `${(i % 3) * 70}ms` }}>
                            <div className='group relative flex items-center justify-between rounded-3xl bg-gray-100 hover:bg-black p-8 transition-colors duration-300'>
                                <span>
                                    <span className='block text-2xl font-bold text-black group-hover:text-white transition-colors'><Link to={`/locations/${l.slug}`} className="after:absolute after:inset-0 after:content-['']">{l.name}</Link></span>
                                    <span className='block text-sm text-gray-600 group-hover:text-gray-300 transition-colors'>{l.area}</span>
                                </span>
                                <ArrowUpRight className='w-6 h-6 text-black group-hover:text-red-500 group-hover:rotate-45 transition-all duration-300' />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        <CtaBand />
    </>
)

export default Locations
