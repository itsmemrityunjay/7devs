import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import Faq, { faqSchema } from '../components/ui/Faq'
import CtaBand from '../components/ui/CtaBand'
import { ArrowUpRight, ServiceIcon } from '../components/ui/Icons'
import { generalFaqs } from '../content/faqs'
import { services } from '../content/services'

const crumbs = [{ name: 'FAQ', path: '/faq' }]

const FaqPage = () => (
    <>
        <Seo
            title='FAQ: Working With 7Devs | 7Devs'
            description='Answers to common questions about 7Devs: who we work with, pricing, results, ownership of your work and how we differ from BeYourOwn.'
            path='/faq'
            ogImage='faq'
            crumbs={crumbs}
            schema={[faqSchema(generalFaqs)]}
        />
        <PageHeader crumbs={crumbs} eyebrow='FAQ' h1='Frequently asked questions' intro='Quick answers about how we work. Each service page has its own FAQ with more detail.' />
        <Faq items={generalFaqs} heading='General questions' />

        {/* Pointers to the service-specific FAQs */}
        <section className='pb-24 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto'>
                    <h2 data-reveal className='text-2xl md:text-3xl font-bold text-black mb-8'>Questions about a specific service</h2>
                    <ul className='grid sm:grid-cols-2 lg:grid-cols-5 gap-4'>
                        {services.map((s, i) => (
                            <li key={s.slug} data-reveal style={{ '--reveal-delay': `${i * 60}ms` }}>
                                <Link to={`/services/${s.slug}`} className='group flex flex-col justify-between h-full min-h-[160px] rounded-3xl bg-gray-100 p-5 hover:bg-black hover:text-white transition-colors duration-300'>
                                    <span className='flex justify-between items-start'>
                                        <span className='w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center group-hover:bg-red-500 transition-colors'>
                                            <ServiceIcon slug={s.slug} className='w-5 h-5' />
                                        </span>
                                        <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:rotate-45' />
                                    </span>
                                    <span className='font-bold mt-6'>{s.name} FAQ</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        <CtaBand title='Still have a question?' text='Ask us on WhatsApp. You will get a direct answer, not a sales pitch.' />
    </>
)

export default FaqPage
