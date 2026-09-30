import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import { SITE } from '../site'

// Plain-language starting drafts. Have a lawyer review before relying on them.
const docs = {
    '/privacy-policy': {
        title: 'Privacy Policy | 7Devs',
        description: 'How 7Devs handles your information: what we collect through this website, how we use it, and how to contact us about your data.',
        h1: 'Privacy Policy',
        sections: [
            ['Who we are', `This website is run by ${SITE.name} ([ADD LEGAL ENTITY NAME]). You can contact us at ${SITE.email}.`],
            ['What we collect', 'This website does not have accounts and does not store what you type into the contact form. When you use the form, it opens WhatsApp or your email app so you can send us a message yourself. What you send is then handled by WhatsApp or your email provider, and by us once we receive it.'],
            ['Analytics', 'If analytics (such as Google Analytics) is enabled on this site, it may collect information such as pages visited, device type and approximate location, using cookies or similar technology. [ADD ANALYTICS AND COOKIE DETAILS ONCE ANALYTICS IS SWITCHED ON]'],
            ['How we use information', 'We use the details you send us to reply to your enquiry, prepare quotes and deliver work you have asked for. We do not sell your personal information.'],
            ['Third parties', 'Links to WhatsApp, Instagram and other sites are governed by those services\' own privacy policies.'],
            ['Your choices', `You can ask us to see, correct or delete the personal information we hold about you by emailing ${SITE.email}.`],
            ['Changes', 'We may update this policy. The date below shows the latest revision.'],
        ],
    },
    '/terms': {
        title: 'Terms of Service | 7Devs',
        description: 'The terms for using the 7Devs website and for engaging 7Devs for digital marketing and web development work.',
        h1: 'Terms of Service',
        sections: [
            ['About these terms', `These terms apply to this website and to enquiries you make to ${SITE.name} ([ADD LEGAL ENTITY NAME]). Specific projects are covered by the written quote or agreement we share with you, which takes priority if it differs from this page.`],
            ['Our services', 'We provide social media management, Meta ads management, Shopify development and custom web development. The exact scope, timelines and price of each project are set out in the quote before work starts.'],
            ['No guarantees of results', 'We work carefully and honestly, but we cannot guarantee specific outcomes such as sales, followers, rankings or return on ad spend, since these depend on factors outside our control.'],
            ['Third-party costs', 'Costs such as advertising spend, Shopify subscriptions, hosting, domains and paid tools are charged by those providers and paid by you unless the quote says otherwise.'],
            ['Payments', '[ADD PAYMENT TERMS, INVOICING AND REFUND POLICY]'],
            ['Ownership', 'You keep ownership of your accounts, brand assets and content. On full payment, you own the deliverables created for you, except for third-party materials, themes or tools that carry their own licences. [ADD ANY PORTFOLIO-USE CLAUSE]'],
            ['Your responsibilities', 'You agree to give us accurate information, timely feedback and the access needed to do the work, and to have the rights to any materials you provide.'],
            ['Limitation of liability', '[ADD LIABILITY CLAUSE REVIEWED BY A LAWYER]'],
            ['Governing law', '[ADD GOVERNING LAW AND JURISDICTION]'],
            ['Contact', `Questions about these terms: ${SITE.email}.`],
        ],
    },
}

const Legal = ({ path }) => {
    const d = docs[path]
    const crumbs = [{ name: d.h1, path }]
    return (
        <>
            <Seo title={d.title} description={d.description} path={path} crumbs={crumbs} />
            <PageHeader crumbs={crumbs} h1={d.h1} intro='Last updated: [ADD DATE]. This is a plain-language draft and should be reviewed by a lawyer.' />
            <section className='pb-20 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-3xl mx-auto'>
                        {d.sections.map(([h, t]) => (
                            <div key={h} className='mb-8'>
                                <h2 className='text-2xl font-bold text-black mb-2'>{h}</h2>
                                <p className='text-gray-700 leading-relaxed'>{t}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Legal
