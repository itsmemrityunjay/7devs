const points = [
    ['Fast', 'Clear timelines up front. Most projects start within days of the first call, not weeks.'],
    ['Affordable', 'Priced for small and growing businesses. Fixed packages wherever possible.'],
    ['Transparent', 'You see what is included and what is not before you pay anything.'],
    ['Honest', 'No made-up numbers or guaranteed results. If a service is not right for you, we say so.'],
]

const USPSection = () => {
    return (
        <section id="usp" className='py-32 bg-black relative overflow-hidden'>
            <div aria-hidden='true' className='absolute inset-0 bg-grid-dark'></div>
            <div aria-hidden='true' className='absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-red-500/20 blur-3xl'></div>
            <div className='container mx-auto px-4 relative'>
                <div className='max-w-6xl mx-auto'>
                    <p data-reveal className='text-red-500 font-bold uppercase tracking-widest text-sm mb-6'>Why 7Devs</p>
                    <h2 data-reveal className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-12'>
                        Reliable digital work<br />
                        <span className='text-gray-400'>at a price small businesses can afford</span>
                    </h2>
                    <p data-reveal className='text-xl md:text-2xl text-white leading-relaxed max-w-4xl mb-16'>
                        We are a remote-first team that does the practical work: posting, running ads and building sites and stores. No jargon, no padding, and we only make promises we can keep.
                    </p>
                    <ul className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {points.map(([t, d], i) => (
                            <li
                                key={t}
                                data-reveal
                                style={{ '--reveal-delay': `${i * 90}ms` }}
                                className='group rounded-3xl border border-white/15 bg-white/[0.03] p-6 hover:border-red-500 hover:bg-white/[0.06] transition-colors duration-300'
                            >
                                <span className='block text-sm text-gray-500 mb-10 group-hover:text-red-500 transition-colors'>0{i + 1}</span>
                                <h3 className='text-2xl font-bold text-white mb-3'>{t}</h3>
                                <p className='text-gray-400 leading-relaxed text-sm'>{d}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default USPSection
