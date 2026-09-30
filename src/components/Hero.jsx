import Button from './ui/Button'
import { waLink } from '../site'

const Hero = () => {
    return (
        <section id="hero" className='min-h-screen bg-white flex items-center justify-center px-4 relative pt-20'>
            {/* Hero Content */}
            <div className='container mx-auto text-center'>
                <p className='text-lg md:text-xl font-bold text-red-500 uppercase tracking-wide mb-6'>
                    Discover. Design. Deliver.
                </p>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight mb-8 max-w-5xl mx-auto'>
                    Affordable, fast digital marketing and web development for growing businesses
                </h1>

                <p className='text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12'>
                    Social media, Meta ads, Shopify stores and custom websites for small businesses, D2C brands and startups in India. Clear scope, clear pricing, no agency-premium bills.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button to='/services' variant='outline'>View All Services</Button>
                    <Button href={waLink('Hi! I found 7Devs online and would like to talk about my business.')}>Chat on WhatsApp</Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
