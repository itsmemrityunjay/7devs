import { Link } from 'react-router-dom'
import Button from './ui/Button'
import { ArrowUpRight } from './ui/Icons'
import { clients, featured } from '../content/clients'
import { serviceBySlug } from '../content/services'

// Real client proof from src/content/clients.js. Pass `service` to show the clients that used it.
const ClientProof = ({ dark = false, heading = 'Brands we work with', service }) => {
    const matched = service ? featured.filter((c) => c.services.includes(service)) : []
    const shown = matched.length ? matched : featured
    return (
        <section className={`py-24 ${dark ? 'bg-black' : 'bg-white'}`}>
            <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto'>
                    <div data-reveal className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
                        <div>
                            <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>Proof</p>
                            <h2 className={`text-3xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-black'}`}>{heading}</h2>
                        </div>
                        <Button to='/work' variant='outline'>See all work</Button>
                    </div>
                    <div className='grid gap-6 md:grid-cols-2'>
                        {shown.map((c, i) => (
                            <Link
                                key={c.slug}
                                to={`/work#${c.slug}`}
                                data-reveal
                                style={{ '--reveal-delay': `${i * 90}ms` }}
                                className={`group rounded-3xl p-8 flex flex-col justify-between min-h-[260px] border transition-all duration-300 hover:-translate-y-1 ${dark ? 'border-white/20 text-white hover:bg-white/5' : 'border-gray-200 text-black hover:shadow-2xl'}`}
                            >
                                <div>
                                    <p className='text-xs uppercase tracking-wide opacity-60 mb-6'>{c.type}</p>
                                    <p className='font-extrabold text-4xl mb-2'>{c.name}</p>
                                    {c.study.result && (
                                        <p className='mt-6'><span className='font-extrabold text-4xl text-red-500'>{c.study.result.value}</span> <span className='opacity-70'>{c.study.result.label}</span></p>
                                    )}
                                </div>
                                <p className='mt-6 text-sm opacity-70'>{c.services.map((s) => serviceBySlug[s].name).join(' · ')}</p>
                                <span className='mt-4 inline-flex items-center gap-2 text-sm font-bold group-hover:text-red-500 transition-colors'>
                                    Read case study <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:rotate-45' />
                                </span>
                            </Link>
                        ))}
                    </div>
                    <p className={`mt-10 text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Also working with {clients.filter((c) => !c.study).map((c) => c.name).join(', ')}.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ClientProof
