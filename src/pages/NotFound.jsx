import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import Button from '../components/ui/Button'
import { ArrowRight } from '../components/ui/Icons'
import { services } from '../content/services'

const links = [
    { name: 'Home', to: '/' },
    ...services.map((s) => ({ name: s.name, to: `/services/${s.slug}` })),
    { name: 'Pricing', to: '/pricing' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
]

const NotFound = () => (
    <>
        <Seo
            title='Page not found | 7Devs'
            description='This page does not exist. Use the links to get back to the 7Devs services, pricing, blog or contact page.'
            path='/404'
            noindex
        />
        <section className='relative min-h-screen bg-white flex items-center px-4 pt-28 pb-16 overflow-hidden'>
            <div aria-hidden='true' className='absolute inset-0 bg-grid'></div>
            <p aria-hidden='true' className='absolute -right-8 top-24 text-[40vw] md:text-[28vw] font-extrabold leading-none text-outline text-gray-200 select-none'>404</p>
            <div className='container mx-auto relative'>
                <div className='max-w-3xl mx-auto'>
                    <p className='animate-fade-up text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>Error 404</p>
                    <h1 className='animate-fade-up [animation-delay:60ms] text-4xl md:text-6xl font-extrabold text-black leading-tight mb-6'>We could not find that page</h1>
                    <p className='animate-fade-up [animation-delay:120ms] text-lg text-gray-700 mb-8'>The link may be old or mistyped. Try one of these instead:</p>
                    <ul className='animate-fade-up [animation-delay:180ms] grid sm:grid-cols-2 gap-3 mb-10'>
                        {links.map((l) => (
                            <li key={l.to}>
                                <Link to={l.to} className='group flex items-center justify-between rounded-2xl border-2 border-black bg-white px-5 py-3 font-medium hover:bg-black hover:text-white transition-colors'>
                                    {l.name}
                                    <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button to='/' arrow>Back to home</Button>
                </div>
            </div>
        </section>
    </>
)

export default NotFound
