import { useState } from 'react'
import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import { ArrowRight, ArrowUpRight, ServiceIcon } from '../components/ui/Icons'
import { services } from '../content/services'
import { SITE, waLink } from '../site'

const crumbs = [{ name: 'Contact', path: '/contact' }]

const field = 'w-full border-2 border-black rounded-2xl px-4 py-3 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow'

const channels = [
    { label: 'WhatsApp', value: SITE.phoneDisplay, href: SITE.whatsapp, external: true },
    { label: 'Phone', value: SITE.phoneDisplay, href: `tel:${SITE.phoneTel}` },
    { label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { label: 'Instagram', value: '@sevendevs.in', href: SITE.instagram, external: true },
]

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
            <PageHeader crumbs={crumbs} eyebrow='Contact' h1='Contact 7Devs' intro='Tell us what you sell and what you need. We will reply with a recommended starting point and a clear quote.' />
            <section className='pb-24 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto grid lg:grid-cols-[1fr_24rem] gap-6'>
                        <form data-reveal onSubmit={onSubmit} className='rounded-[2.5rem] bg-gray-100 p-6 md:p-10 space-y-6'>
                            <h2 className='text-2xl md:text-3xl font-bold text-black'>Send us a message</h2>

                            {/* Service picker: real radio inputs styled as pills */}
                            <fieldset>
                                <legend className='block font-bold mb-3'>What do you need help with?</legend>
                                <div className='flex flex-wrap gap-2'>
                                    {[{ slug: '', name: 'Not sure yet' }, ...services].map((s) => (
                                        <label key={s.slug || 'none'} className='cursor-pointer'>
                                            <input type='radio' name='service' value={s.slug ? s.name : ''} checked={form.service === (s.slug ? s.name : '')} onChange={set('service')} className='peer sr-only' />
                                            <span className='inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 peer-checked:bg-black peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-red-500 peer-focus-visible:ring-offset-2'>
                                                {s.slug && <ServiceIcon slug={s.slug} className='w-4 h-4' />}
                                                {s.name}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            <div className='grid sm:grid-cols-2 gap-6'>
                                <div>
                                    <label htmlFor='name' className='block font-bold mb-2'>Your name</label>
                                    <input id='name' name='name' type='text' autoComplete='name' required value={form.name} onChange={set('name')} className={field} />
                                </div>
                                <div>
                                    <label htmlFor='phone' className='block font-bold mb-2'>Phone or WhatsApp number</label>
                                    <input id='phone' name='phone' type='tel' autoComplete='tel' value={form.phone} onChange={set('phone')} className={field} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor='message' className='block font-bold mb-2'>What do you need?</label>
                                <textarea id='message' name='message' rows='5' value={form.message} onChange={set('message')} placeholder='What you sell, what is not working, and any deadline.' className={field}></textarea>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <button type='submit' className='group/btn inline-flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-full font-medium hover:bg-red-600 transition-colors'>
                                    Send on WhatsApp
                                    <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
                                </button>
                                <Button href={mailto} variant='outline'>Send by email</Button>
                            </div>
                            <p className='text-sm text-gray-600'>This form does not store anything. It opens WhatsApp or your email app with your message ready to send.</p>
                        </form>

                        <div className='space-y-4'>
                            <h2 className='sr-only'>Reach us directly</h2>
                            {channels.map((c, i) => (
                                <a
                                    key={c.label}
                                    data-reveal
                                    style={{ '--reveal-delay': `${i * 70}ms` }}
                                    href={c.href}
                                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className={`group flex items-center justify-between gap-4 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${i === 0 ? 'bg-black text-white' : 'bg-white border-2 border-black text-black'}`}
                                >
                                    <span>
                                        <span className={`block text-xs uppercase tracking-widest mb-1 ${i === 0 ? 'text-gray-400' : 'text-gray-500'}`}>{c.label}</span>
                                        <span className='block text-lg font-bold break-all'>{c.value}</span>
                                    </span>
                                    <span className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-colors ${i === 0 ? 'bg-red-500' : 'bg-black text-white group-hover:bg-red-500'}`}>
                                        <ArrowUpRight className='w-5 h-5 transition-transform duration-300 group-hover:rotate-45' />
                                    </span>
                                </a>
                            ))}
                            <div data-reveal className='rounded-3xl bg-gray-100 p-6'>
                                <span className='block text-xs uppercase tracking-widest text-gray-500 mb-1'>Where we work</span>
                                <span className='block font-bold'>{SITE.location}, serving businesses across India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
