import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import ServiceList from '../components/ServiceList'
import CtaBand from '../components/ui/CtaBand'
import Button from '../components/ui/Button'

const crumbs = [{ name: 'Services', path: '/services' }]

const Services = () => (
    <>
        <Seo
            title='Digital Marketing & Web Services | 7Devs'
            description='Social media management, Meta ads, Shopify and custom website development for small businesses in India. Compare services and start where it counts.'
            path='/services'
            ogImage='services'
            crumbs={crumbs}
        />
        <PageHeader
            crumbs={crumbs}
            h1='Digital marketing and web development services for small businesses'
            intro='Five services, each with a clear scope and package. Start with the one that fixes your biggest problem, then add the next when you are ready. We are remote-first and work with businesses across India.'
        >
            <Button href='https://wa.me/917889930884'>Not sure? Ask us on WhatsApp</Button>
        </PageHeader>
        <ServiceList heading='Choose a service' />
        <section className='py-16 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-bold text-black mb-4'>Where we work</h2>
                    <p className='text-gray-700 leading-relaxed'>
                        Everything runs remotely over WhatsApp, calls and shared folders, so location rarely matters. We regularly work with businesses in Chandigarh, Delhi, Mumbai, Noida, Gurgaon, Surat, Bengal and Rajasthan, and we can work with yours wherever you are in India.
                    </p>
                </div>
            </div>
        </section>
        <CtaBand />
    </>
)

export default Services
