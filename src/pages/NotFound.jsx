import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import Button from '../components/ui/Button'
import { services } from '../content/services'

const NotFound = () => (
    <>
        <Seo
            title='Page not found | 7Devs'
            description='This page does not exist. Use the links to get back to the 7Devs services, pricing, blog or contact page.'
            path='/404'
            noindex
        />
        <section className='min-h-screen bg-white flex items-center px-4 pt-20'>
            <div className='container mx-auto'>
                <div className='max-w-3xl mx-auto'>
                    <p className='text-red-500 font-bold uppercase tracking-wide mb-4'>Error 404</p>
                    <h1 className='text-4xl md:text-6xl font-extrabold text-black leading-tight mb-6'>We could not find that page</h1>
                    <p className='text-lg text-gray-700 mb-8'>The link may be old or mistyped. Try one of these instead:</p>
                    <ul className='grid sm:grid-cols-2 gap-x-8 gap-y-2 text-lg mb-10 text-black underline'>
                        <li><Link to='/'>Home</Link></li>
                        {services.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>)}
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <Button to='/'>Back to home</Button>
                </div>
            </div>
        </section>
    </>
)

export default NotFound
