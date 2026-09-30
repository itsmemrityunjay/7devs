import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import Faq, { faqSchema } from '../components/ui/Faq'
import CtaBand from '../components/ui/CtaBand'
import { generalFaqs } from '../content/faqs'

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
        <PageHeader crumbs={crumbs} h1='Frequently asked questions' intro='Quick answers about how we work. Each service page has its own FAQ with more detail.' />
        <Faq items={generalFaqs} heading='General questions' />
        <CtaBand title='Still have a question?' text='Ask us on WhatsApp. We usually reply with a direct answer.' />
    </>
)

export default FaqPage
