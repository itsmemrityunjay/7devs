import { Link } from 'react-router-dom'
import Button from './ui/Button'
import { ServiceIcon } from './ui/Icons'
import { services } from '../content/services'
import { waLink } from '../site'

const Hero = () => {
    return (
        <section id="hero" className='min-h-screen bg-white flex items-center justify-center px-4 relative pt-28 pb-16 overflow-hidden'>
            {/* Background: faint grid + slow red glow */}
            <div aria-hidden='true' className='absolute inset-0 bg-grid'></div>
            <div aria-hidden='true' className='absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-red-500/20 blur-3xl animate-float'></div>
            <div aria-hidden='true' className='absolute -bottom-40 -left-40 w-[24rem] h-[24rem] rounded-full bg-gray-300/40 blur-3xl animate-float [animation-delay:-6s]'></div>

            <div className='container mx-auto text-center relative'>
                <p className='animate-fade-up inline-flex items-center gap-2 border border-gray-200 bg-white/80 backdrop-blur rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-8'>
                    <span className='relative flex w-2 h-2'>
                        <span className='absolute inline-flex w-full h-full rounded-full bg-red-500 opacity-75 animate-ping'></span>
                        <span className='relative inline-flex w-2 h-2 rounded-full bg-red-500'></span>
                    </span>
                    <span className='hidden sm:inline'>Discover. Design. Deliver. ·</span> Remote-first, across India
                </p>

                <h1 className='animate-fade-up [animation-delay:80ms] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-black leading-[1.05] tracking-tight mb-8 max-w-6xl mx-auto'>
                    Affordable, fast digital marketing and web development for{' '}
                    <span className='relative inline-block'>
                        <span className='relative z-10'>growing businesses</span>
                        <span aria-hidden='true' className='absolute left-0 right-0 bottom-1 md:bottom-2 h-3 md:h-5 bg-red-500/80 -z-0 -rotate-1 rounded-sm'></span>
                    </span>
                </h1>

                <p className='animate-fade-up [animation-delay:160ms] text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10'>
                    Social media, Meta ads, Shopify stores and custom websites for small businesses, D2C brands and startups in India. Clear scope, clear pricing, no agency-premium bills.
                </p>

                <div className='animate-fade-up [animation-delay:240ms] flex flex-col sm:flex-row gap-4 justify-center mb-14'>
                    <Button to='/services' variant='outline'>View All Services</Button>
                    <Button href={waLink('Hi! I found 7Devs online and would like to talk about my business.')} arrow>Chat on WhatsApp</Button>
                </div>

                {/* Quick links to each service */}
                <ul className='animate-fade-up [animation-delay:320ms] flex flex-wrap justify-center gap-3 max-w-4xl mx-auto'>
                    {services.map((s) => (
                        <li key={s.slug}>
                            <Link to={`/services/${s.slug}`} className='inline-flex items-center gap-2 bg-gray-100 hover:bg-black hover:text-white text-black text-sm font-medium rounded-full pl-2 pr-4 py-2 transition-colors duration-300 group'>
                                <span className='w-7 h-7 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors'>
                                    <ServiceIcon slug={s.slug} className='w-4 h-4' />
                                </span>
                                {s.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Hero
