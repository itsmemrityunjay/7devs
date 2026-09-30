import { useState } from 'react'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import { services } from '../content/services'
import { SITE, waLink } from '../site'

const crumbs = [{ name: 'Contact', path: '/contact' }]

const field = 'w-full border-2 border-black rounded-2xl px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500'

const Contact = () => {
    const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

    const text = `Hi! I am ${form.name || '[name]'}.${form.service ? ` I am interested in: ${form.service}.` : ''}${form.phone ? ` My number: ${form.phone}.` : ''}${form.message ? `\n\n${form.message}` : ''}`

    // No backend: the form opens WhatsApp with the message prefilled.
    const onSubmit = (e) => {
        e.preventDefault()
        window.open(waLink(text), '_blank', 'noopener')
    }

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent('Enquiry from 7devs.in')}&body=${encodeURIComponent(text)}`

    return (
        <>
            <Seo
                title='Contact 7Devs: WhatsApp, Email or Phone'
                description='Talk to 7Devs about social media, Meta ads, Shopify or website development. Message on WhatsApp, email hello@7devs.in or call 788 993 0884.'
                path='/contact'
                ogImage='contact'
                crumbs={crumbs}
                schema={[{
                    '@type': 'ContactPage',
                    name: 'Contact 7Devs',
                    url: `${SITE.url}/contact`,
                }]}
            />
            <PageHeader crumbs={crumbs} h1='Contact 7Devs' intro='Tell us what you sell and what you need. We will reply with a recommended starting point and a clear quote.' />
            <section className='pb-24 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12'>
                        <form onSubmit={onSubmit} className='space-y-5'>
                            <div>
                                <label htmlFor='name' className='block font-bold mb-2'>Your name</label>
                                <input id='name' name='name' type='text' autoComplete='name' required value={form.name} onChange={set('name')} className={field} />
                            </div>
                            <div>
                                <label htmlFor='phone' className='block font-bold mb-2'>Phone or WhatsApp number</label>
                                <input id='phone' name='phone' type='tel' autoComplete='tel' value={form.phone} onChange={set('phone')} className={field} />
                            </div>
                            <div>
                                <label htmlFor='service' className='block font-bold mb-2'>Service you are interested in</label>
                                <select id='service' name='service' value={form.service} onChange={set('service')} className={field}>
                                    <option value=''>Not sure yet</option>
                                    {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor='message' className='block font-bold mb-2'>What do you need?</label>
                                <textarea id='message' name='message' rows='5' value={form.message} onChange={set('message')} className={field}></textarea>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <button type='submit' className='bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors'>Send on WhatsApp</button>
                                <Button href={mailto} variant='outline'>Send by email</Button>
                            </div>
                            <p className='text-sm text-gray-600'>This form does not store anything. It opens WhatsApp or your email app with your message ready to send.</p>
                        </form>

                        <div className='bg-black text-white rounded-3xl p-8 h-fit'>
                            <h2 className='text-2xl font-bold mb-6'>Reach us directly</h2>
                            <ul className='space-y-4 text-lg'>
                                <li><span className='block text-sm text-gray-400'>WhatsApp</span><a className='underline hover:text-red-500' href={SITE.whatsapp} target='_blank' rel='noopener noreferrer'>{SITE.phoneDisplay}</a></li>
                                <li><span className='block text-sm text-gray-400'>Phone</span><a className='underline hover:text-red-500' href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></li>
                                <li><span className='block text-sm text-gray-400'>Email</span><a className='underline hover:text-red-500' href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                                <li><span className='block text-sm text-gray-400'>Instagram</span><a className='underline hover:text-red-500' href={SITE.instagram} target='_blank' rel='noopener noreferrer'>@sevendevs.in</a></li>
                                <li><span className='block text-sm text-gray-400'>Where we work</span>{SITE.location}, serving businesses across India</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
