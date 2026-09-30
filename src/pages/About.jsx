import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import CtaBand from '../components/ui/CtaBand'
import { SITE } from '../site'

const crumbs = [{ name: 'About', path: '/about' }]

const About = () => (
    <>
        <Seo
            title='About 7Devs: Affordable Digital Execution'
            description='7Devs is a remote-first digital agency for small businesses in India. Learn how we work, who we serve, and how we relate to BeYourOwn.'
            path='/about'
            ogImage='about'
            crumbs={crumbs}
        />
        <PageHeader
            crumbs={crumbs}
            h1='About 7Devs'
            intro='We do reliable, budget-friendly digital work for small and growing businesses in India: social media, Meta ads, Shopify stores and custom websites.'
        />
        <section className='pb-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-4xl mx-auto space-y-12'>
                    <div>
                        <h2 className='text-3xl font-bold text-black mb-4'>What we believe</h2>
                        <p className='text-gray-700 leading-relaxed text-lg'>
                            Most small businesses do not need a heavy strategy deck. They need posts going out, ads that are set up properly, and a website that works on a phone, at a price that makes sense. That is what we focus on. We keep scope clear, timelines short and promises small enough to keep.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold text-black mb-4'>Who we work with</h2>
                        <p className='text-gray-700 leading-relaxed text-lg'>
                            Small businesses, D2C brands, startups and local businesses. We are remote-first, so we work with clients across India, including Chandigarh, Delhi, Mumbai, Noida, Gurgaon, Surat, Bengal and Rajasthan.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold text-black mb-4'>The team</h2>
                        <p className='text-gray-700 leading-relaxed text-lg'>[ADD REAL TEAM MEMBERS, ROLES AND PHOTOS, OR A SHORT HONEST DESCRIPTION OF THE TEAM]</p>
                    </div>
                    <div className='bg-gray-100 rounded-3xl p-8'>
                        <h2 className='text-2xl font-bold text-black mb-3'>Our sister studio, {SITE.sisterName}</h2>
                        <p className='text-gray-700 leading-relaxed'>
                            Need deep brand strategy and positioning? See our sister studio, <a href={SITE.sisterUrl} target='_blank' rel='noopener' className='underline hover:text-red-500'>{SITE.sisterName}</a>. They focus on strategy-led brand work. We focus on getting the execution done affordably.
                        </p>
                    </div>
                    <p className='text-gray-700'>
                        Ready to start? See our <Link to='/services' className='underline hover:text-red-500'>services</Link> or <Link to='/contact' className='underline hover:text-red-500'>get in touch</Link>.
                    </p>
                </div>
            </div>
        </section>
        <CtaBand />
    </>
)

export default About
