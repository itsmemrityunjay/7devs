import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import CtaBand from '../components/ui/CtaBand'
import Button from '../components/ui/Button'
import { ArrowUpRight } from '../components/ui/Icons'
import { SITE } from '../site'

const crumbs = [{ name: 'About', path: '/about' }]

const values = [
    ['Execution over decks', 'Posts going out, ads set up properly, sites that work on a phone.'],
    ['Clear scope', 'You know what is included and what is not before you pay.'],
    ['Short timelines', 'Work starts quickly and moves in small, visible steps.'],
    ['Small promises, kept', 'We would rather under-promise than invent results.'],
]
const valueColors = ['bg-red-500 text-white', 'bg-black text-white', 'bg-gray-300 text-black', 'bg-gray-200 text-black']

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
            eyebrow='About'
            h1='About 7Devs'
            intro='We do reliable, budget-friendly digital work for small and growing businesses in India: social media, Meta ads, Shopify stores and custom websites.'
        />

        {/* Belief statement */}
        <section className='py-24 bg-black relative overflow-hidden'>
            <div aria-hidden='true' className='absolute inset-0 bg-grid-dark'></div>
            <div className='container mx-auto px-4 relative'>
                <div className='max-w-5xl mx-auto'>
                    <p data-reveal className='text-red-500 font-bold uppercase tracking-widest text-sm mb-6'>What we believe</p>
                    <h2 data-reveal className='text-3xl md:text-5xl font-bold text-white leading-tight mb-8'>
                        Most small businesses do not need a heavy strategy deck. <span className='text-gray-500'>They need the work done.</span>
                    </h2>
                    <p data-reveal className='text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl'>
                        That means posts going out, ads that are set up properly, and a website that works on a phone, at a price that makes sense. That is what we focus on. We keep scope clear, timelines short and promises small enough to keep.
                    </p>
                </div>
            </div>
        </section>

        {/* Values */}
        <section className='py-24 bg-white'>
            <div className='container mx-auto px-4'>
                <h2 className='sr-only'>How we work</h2>
                <ul className='max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {values.map(([t, d], i) => (
                        <li key={t} data-reveal style={{ '--reveal-delay': `${i * 80}ms` }} className={`rounded-3xl p-6 min-h-[220px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 ${valueColors[i]}`}>
                            <span className='text-sm opacity-60'>0{i + 1}</span>
                            <div>
                                <h3 className='text-xl font-bold mb-2'>{t}</h3>
                                <p className='text-sm opacity-80 leading-relaxed'>{d}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

        <section className='pb-24 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-6'>
                    <div data-reveal className='rounded-3xl border-2 border-black p-8'>
                        <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>Who we work with</p>
                        <h2 className='text-2xl md:text-3xl font-bold text-black mb-4'>Small businesses, D2C brands, startups and local shops</h2>
                        <p className='text-gray-700 leading-relaxed'>
                            We are remote-first, so we work with clients across India, including Chandigarh, Delhi, Mumbai, Noida, Gurgaon, Surat, Bengal and Rajasthan.
                        </p>
                    </div>
                    <div data-reveal style={{ '--reveal-delay': '90ms' }} className='rounded-3xl border-2 border-dashed border-black/40 p-8'>
                        <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>The team</p>
                        <h2 className='text-2xl md:text-3xl font-bold text-black mb-4'>The people behind 7Devs</h2>
                        <p className='text-gray-700 leading-relaxed'>[ADD REAL TEAM MEMBERS, ROLES AND PHOTOS, OR A SHORT HONEST DESCRIPTION OF THE TEAM]</p>
                    </div>

                    {/* Sister studio */}
                    <div data-reveal className='md:col-span-2 rounded-3xl bg-gray-100 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8'>
                        <div className='max-w-2xl'>
                            <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>Sister studio</p>
                            <h2 className='text-2xl md:text-3xl font-bold text-black mb-3'>Our sister studio, {SITE.sisterName}</h2>
                            <p className='text-gray-700 leading-relaxed'>
                                Need deep brand strategy and positioning? See our sister studio, <a href={SITE.sisterUrl} target='_blank' rel='noopener' className='underline hover:text-red-500'>{SITE.sisterName}</a>. They focus on strategy-led brand work. We focus on getting the execution done affordably.
                            </p>
                        </div>
                        <a href={SITE.sisterUrl} target='_blank' rel='noopener' className='group shrink-0 inline-flex items-center gap-3 bg-black text-white rounded-full pl-6 pr-2 py-2 font-medium hover:bg-red-500 transition-colors'>
                            Visit {SITE.sisterName}
                            <span className='w-10 h-10 rounded-full bg-white text-black flex items-center justify-center'>
                                <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:rotate-45' />
                            </span>
                        </a>
                    </div>
                </div>
                <div data-reveal className='max-w-6xl mx-auto mt-12 flex flex-col sm:flex-row gap-4'>
                    <Button to='/services' arrow>See our services</Button>
                    <Button to='/contact' variant='outline'>Get in touch</Button>
                </div>
            </div>
        </section>
        <CtaBand />
    </>
)

export default About
