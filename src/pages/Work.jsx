import Seo from '../seo/Seo'
import PageHeader from '../components/ui/PageHeader'
import CtaBand from '../components/ui/CtaBand'
import { ServiceIcon } from '../components/ui/Icons'
import { serviceBySlug } from '../content/services'
import { clients, featured } from '../content/clients'

const crumbs = [{ name: 'Work', path: '/work' }]

const Work = () => (
    <>
        <Seo
            title='Our Work and Client Results | 7Devs'
            description='Case studies from 7Devs projects across social media, Meta ads, Shopify and web development for streetwear and fashion brands in India.'
            path='/work'
            ogImage='work'
            crumbs={crumbs}
        />
        <PageHeader
            crumbs={crumbs}
            eyebrow='Work'
            h1='Our work'
            intro='Real brands, real projects. Here is what we did for them and the results we can back up.'
        />
        <section className='pb-24 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto grid gap-6'>
                    {featured.map((c, i) => (
                        <article key={c.slug} id={c.slug} data-reveal style={{ '--reveal-delay': `${(i % 2) * 90}ms` }} className='scroll-mt-28 rounded-3xl bg-gray-100 overflow-hidden'>
                            <div className='bg-black text-white p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6'>
                                <div>
                                    <p className='text-xs uppercase tracking-wide text-gray-400 mb-3'>Case study {i + 1} · {c.type}</p>
                                    <h2 className='text-4xl md:text-6xl font-bold tracking-tighter'>{c.name}</h2>
                                    <ul className='mt-5 flex flex-wrap gap-2'>
                                        {c.services.map((s) => (
                                            <li key={s} className='inline-flex items-center gap-2 text-xs uppercase tracking-wide border border-white/20 rounded-full pl-1 pr-3 py-1'>
                                                <span className='w-6 h-6 rounded-full bg-white text-black flex items-center justify-center'><ServiceIcon slug={s} className='w-3.5 h-3.5' /></span>
                                                {serviceBySlug[s].name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {c.study.result && (
                                    <p className='md:text-right'>
                                        <span className='block font-extrabold text-5xl md:text-6xl text-red-500'>{c.study.result.value}</span>
                                        <span className='text-gray-300'>{c.study.result.label}</span>
                                    </p>
                                )}
                            </div>
                            <div className='p-8 md:p-12 grid md:grid-cols-3 gap-8 text-sm'>
                                <div className='md:col-span-3 grid md:grid-cols-3 gap-8'>
                                    <div className='md:col-span-2'>
                                        <h3 className='font-bold text-black mb-2'>Overview</h3>
                                        <p className='text-gray-600 leading-relaxed'>{c.study.overview}</p>
                                    </div>
                                    <div>
                                        <h3 className='font-bold text-black mb-2'>Scope</h3>
                                        <ul className='text-gray-600 space-y-1 list-disc pl-4'>{c.study.scope.map((x) => <li key={x}>{x}</li>)}</ul>
                                    </div>
                                </div>
                                {c.study.did.map((g) => (
                                    <div key={g.title}>
                                        <h3 className='font-bold text-black mb-2'>{g.title}</h3>
                                        <ul className='text-gray-600 space-y-1 list-disc pl-4'>{g.points.map((x) => <li key={x}>{x}</li>)}</ul>
                                    </div>
                                ))}
                            </div>
                            {c.review && (
                                <blockquote className='border-t border-gray-200 p-8 md:p-12 pt-8'>
                                    <p className='text-xl text-black'>&ldquo;{c.review.quote}&rdquo;</p>
                                    <footer className='mt-3 text-sm text-gray-600'>{c.review.author}{c.review.role ? `, ${c.review.role}` : ''}</footer>
                                </blockquote>
                            )}
                        </article>
                    ))}
                </div>

                <div className='max-w-6xl mx-auto mt-16'>
                    <h2 className='text-2xl font-bold text-black mb-6'>More brands we work with</h2>
                    <ul className='flex flex-wrap gap-3'>
                        {clients.filter((c) => !c.study).map((c) => (
                            <li key={c.slug} className='rounded-full bg-gray-100 px-6 py-3 font-bold text-black'>{c.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        <CtaBand title='Want to be our next case study?' message='Hi! I saw your work page and would like to start a project.' />
    </>
)

export default Work
