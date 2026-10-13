import { Link } from 'react-router-dom'
import { services } from '../content/services'
import { ArrowUpRight, ServiceIcon } from './ui/Icons'

// Same black, bordered, large-type list the site used, now linking to real pages.
const ServiceList = ({ heading = 'What We Offer', headingLevel: H = 'h2' }) => (
    <section id="services" className='py-32 bg-black relative overflow-hidden'>
        <div aria-hidden='true' className='absolute -top-20 right-0 w-96 h-96 rounded-full bg-red-500/10 blur-3xl'></div>
        <div className='container mx-auto px-4 relative'>
            <div className='max-w-6xl mx-auto'>
                <div className='mb-12' data-reveal>
                    <div className='flex justify-between items-end mb-4'>
                        <H className='text-white text-lg font-medium'>{heading}</H>
                        <span className='text-gray-500 text-sm'>0{services.length} services</span>
                    </div>
                    <div className='w-full h-px bg-white'></div>
                </div>
                <ul>
                    {services.map((s, i) => (
                        <li key={s.slug} data-reveal style={{ '--reveal-delay': `${i * 60}ms` }} className='border-b border-white/30'>
                            <div className='relative block py-8 group'>
                                <div className='flex items-center gap-4 md:gap-8'>
                                    <span className='hidden sm:block text-sm text-gray-500 w-8 group-hover:text-red-500 transition-colors'>0{i + 1}</span>
                                    <span className='hidden md:flex w-14 h-14 shrink-0 rounded-2xl border border-white/20 text-white items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-colors duration-300'>
                                        <ServiceIcon slug={s.slug} />
                                    </span>
                                    <span className='flex-1 text-3xl md:text-5xl font-bold text-white tracking-tight group-hover:text-red-500 group-hover:translate-x-2 transition-all duration-300'>
                                        <Link to={`/services/${s.slug}`} className="after:absolute after:inset-0 after:content-['']">{s.name}</Link>
                                    </span>
                                    <span aria-hidden='true' className='w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300'>
                                        <ArrowUpRight className='w-5 h-5 transition-transform duration-300 group-hover:rotate-45' />
                                    </span>
                                </div>
                                <p className='text-gray-400 text-lg leading-relaxed mt-4 max-w-3xl sm:pl-12 md:pl-[8.5rem] group-hover:text-gray-200 transition-colors'>{s.short}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
)

export default ServiceList
