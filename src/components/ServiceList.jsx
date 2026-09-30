import { Link } from 'react-router-dom'
import { services } from '../content/services'

// Same black, bordered, large-type list the site used, now linking to real pages.
const ServiceList = ({ heading = 'What We Offer', headingLevel: H = 'h2' }) => (
    <section id="services" className='py-32 bg-black'>
        <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
                <div className='mb-16'>
                    <H className='text-white text-lg font-medium mb-4'>{heading}</H>
                    <div className='w-full h-px bg-white mb-8'></div>
                </div>
                <ul>
                    {services.map((s) => (
                        <li key={s.slug} className='border-b border-white'>
                            <Link to={`/services/${s.slug}`} className='block py-8 group'>
                                <div className='flex justify-between items-center gap-4'>
                                    <span className='text-3xl md:text-5xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors duration-300'>
                                        {s.name}
                                    </span>
                                    <span aria-hidden='true' className='text-white text-4xl font-light group-hover:text-red-500 transition-colors duration-300'>→</span>
                                </div>
                                <p className='text-gray-300 text-lg leading-relaxed mt-4 max-w-4xl'>{s.short}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
)

export default ServiceList
