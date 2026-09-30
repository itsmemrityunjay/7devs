import { Link } from 'react-router-dom'
import { SITE } from '../site'
import { services } from '../content/services'
import Button from './ui/Button'
import { ArrowUpRight } from './ui/Icons'

const linkCls = 'hover:text-black hover:translate-x-1 inline-block transition-all duration-300'

const Footer = () => {
    return (
        <footer id="contact" className='bg-white text-black pt-20 pb-10 border-t border-gray-200 overflow-hidden'>
            <div className='container mx-auto px-4'>
                {/* Big contact line */}
                <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 mb-16 border-b border-gray-200'>
                    <div>
                        <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>Start a project</p>
                        <a href={`mailto:${SITE.email}`} className='group inline-flex flex-wrap items-center gap-4 text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight break-all sm:break-normal hover:text-red-500 transition-colors'>
                            {SITE.email}
                            <span aria-hidden='true' className='w-12 h-12 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-red-500 transition-colors'>
                                <ArrowUpRight className='w-6 h-6 transition-transform duration-300 group-hover:rotate-45' />
                            </span>
                        </a>
                    </div>
                    <Button href={SITE.whatsapp} arrow>Get Started on WhatsApp</Button>
                </div>

                <div className='grid md:grid-cols-4 gap-10 mb-16'>
                    {/* Brand */}
                    <div className='md:col-span-2'>
                        <p className='text-3xl font-bold mb-4'>
                            7DEVS<span className='text-red-500'>.</span>
                        </p>
                        <p className='text-gray-600 mb-6 max-w-md'>
                            Affordable, fast digital marketing and web development for small and growing businesses across India. Remote-first.
                        </p>
                        <p className='text-gray-600 max-w-md text-sm rounded-2xl bg-gray-100 p-4'>
                            Need deep brand strategy and positioning? See our sister studio, <a href={SITE.sisterUrl} target='_blank' rel='noopener' className='underline font-medium text-black hover:text-red-500'>{SITE.sisterName}</a>.
                        </p>
                    </div>

                    {/* Services */}
                    <nav aria-label='Services'>
                        <h2 className='text-sm uppercase tracking-widest text-gray-500 font-bold mb-5'>Services</h2>
                        <ul className='space-y-3 text-gray-600'>
                            {services.map((s) => (
                                <li key={s.slug}><Link to={`/services/${s.slug}`} className={linkCls}>{s.name}</Link></li>
                            ))}
                        </ul>
                    </nav>

                    {/* Company + Contact */}
                    <div className='grid grid-cols-2 md:grid-cols-1 gap-10'>
                        <nav aria-label='Company'>
                            <h2 className='text-sm uppercase tracking-widest text-gray-500 font-bold mb-5'>Company</h2>
                            <ul className='space-y-3 text-gray-600'>
                                <li><Link to='/pricing' className={linkCls}>Pricing</Link></li>
                                <li><Link to='/work' className={linkCls}>Work</Link></li>
                                <li><Link to='/about' className={linkCls}>About</Link></li>
                                <li><Link to='/blog' className={linkCls}>Blog</Link></li>
                                <li><Link to='/faq' className={linkCls}>FAQ</Link></li>
                                <li><Link to='/contact' className={linkCls}>Contact</Link></li>
                            </ul>
                        </nav>
                        <div>
                            <h2 className='text-sm uppercase tracking-widest text-gray-500 font-bold mb-5'>Connect</h2>
                            <ul className='space-y-3 text-gray-600'>
                                <li><a href={SITE.instagram} target='_blank' rel='noopener noreferrer' className={linkCls}>Instagram</a></li>
                                <li><a href={SITE.whatsapp} target='_blank' rel='noopener noreferrer' className={linkCls}>WhatsApp</a></li>
                                <li><a href={`tel:${SITE.phoneTel}`} className={linkCls}>{SITE.phoneDisplay}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500'>
                    <p>&copy; {new Date().getFullYear()} 7DEVS. All rights reserved.</p>
                    <p>
                        <Link to='/privacy-policy' className='hover:text-black transition-colors'>Privacy Policy</Link>
                        <span aria-hidden='true'> · </span>
                        <Link to='/terms' className='hover:text-black transition-colors'>Terms</Link>
                    </p>
                </div>

                {/* Oversized wordmark */}
                <p aria-hidden='true' className='mt-10 text-center font-extrabold leading-none tracking-tighter text-[22vw] text-gray-100 select-none'>
                    7DEVS
                </p>
            </div>
        </footer>
    )
}

export default Footer
