import { Link } from 'react-router-dom'
import { SITE } from '../site'
import { services } from '../content/services'
import Button from './ui/Button'

const linkCls = 'hover:text-black transition-colors'

const Footer = () => {
    return (
        <footer id="contact" className='bg-white text-black py-16 border-t border-gray-200'>
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-4 gap-8 mb-12'>
                    {/* Brand */}
                    <div className='md:col-span-2'>
                        <p className='text-3xl font-bold mb-4'>
                            7DEVS.
                        </p>
                        <p className='text-gray-600 mb-6 max-w-md'>
                            Affordable, fast digital marketing and web development for small and growing businesses across India. Remote-first.
                        </p>
                        <Button href={SITE.whatsapp}>Get Started on WhatsApp</Button>
                        <p className='text-gray-600 mt-6 max-w-md text-sm'>
                            Need deep brand strategy and positioning? See our sister studio, <a href={SITE.sisterUrl} target='_blank' rel='noopener' className='underline hover:text-black'>{SITE.sisterName}</a>.
                        </p>
                    </div>

                    {/* Services */}
                    <nav aria-label='Services'>
                        <h2 className='text-xl font-bold mb-4'>Services</h2>
                        <ul className='space-y-2 text-gray-600'>
                            {services.map((s) => (
                                <li key={s.slug}><Link to={`/services/${s.slug}`} className={linkCls}>{s.name}</Link></li>
                            ))}
                        </ul>
                    </nav>

                    {/* Company + Contact */}
                    <div>
                        <h2 className='text-xl font-bold mb-4'>Company</h2>
                        <ul className='space-y-2 text-gray-600 mb-6'>
                            <li><Link to='/pricing' className={linkCls}>Pricing</Link></li>
                            <li><Link to='/work' className={linkCls}>Work</Link></li>
                            <li><Link to='/about' className={linkCls}>About</Link></li>
                            <li><Link to='/blog' className={linkCls}>Blog</Link></li>
                            <li><Link to='/faq' className={linkCls}>FAQ</Link></li>
                            <li><Link to='/contact' className={linkCls}>Contact</Link></li>
                        </ul>
                        <h2 className='text-xl font-bold mb-4'>Connect</h2>
                        <ul className='space-y-2 text-gray-600'>
                            <li><a href={SITE.instagram} target='_blank' rel='noopener noreferrer' className={linkCls}>Instagram</a></li>
                            <li><a href={SITE.whatsapp} target='_blank' rel='noopener noreferrer' className={linkCls}>WhatsApp</a></li>
                            <li><a href={`mailto:${SITE.email}`} className={linkCls}>{SITE.email}</a></li>
                            <li><a href={`tel:${SITE.phoneTel}`} className={linkCls}>{SITE.phoneDisplay}</a></li>
                        </ul>
                    </div>
                </div>

                <div className='border-t border-gray-200 pt-8 text-center text-gray-500'>
                    <p className='mb-2'>
                        <Link to='/privacy-policy' className={linkCls}>Privacy Policy</Link>
                        <span aria-hidden='true'> · </span>
                        <Link to='/terms' className={linkCls}>Terms</Link>
                    </p>
                    <p>&copy; {new Date().getFullYear()} 7DEVS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
