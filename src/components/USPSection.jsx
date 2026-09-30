
const points = [
    ['Fast', 'Clear timelines up front. Most projects start within days of the first call, not weeks.'],
    ['Affordable', 'Priced for small and growing businesses. Fixed packages wherever possible.'],
    ['Transparent', 'You see what is included and what is not before you pay anything.'],
    ['Honest', 'No made-up numbers or guaranteed results. If a service is not right for you, we say so.'],
]

const USPSection = () => {
    return (
        <section id="usp" className='py-32 bg-black'>
            <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-12'>
                        Reliable digital work<br />
                        at a price small businesses can afford
                    </h2>
                    <p className='text-xl md:text-2xl text-white leading-relaxed max-w-5xl mb-12'>
                        We are a remote-first team that does the practical work: posting, running ads and building sites and stores. No jargon, no padding, and we only make promises we can keep.
                    </p>
                    <ul className='grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl'>
                        {points.map(([t, d]) => (
                            <li key={t} className='border-t border-white pt-4'>
                                <h3 className='text-2xl font-bold text-white mb-2'>{t}</h3>
                                <p className='text-gray-300 leading-relaxed'>{d}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default USPSection
