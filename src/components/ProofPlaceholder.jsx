// Real proof only. These placeholders must be replaced with genuine client results.
const ProofPlaceholder = ({ dark = false, heading = 'Results from real clients', slots = 3 }) => (
    <section className={`py-24 ${dark ? 'bg-black' : 'bg-white'}`}>
        <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
                <div data-reveal className='mb-12'>
                    <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-4'>Proof</p>
                    <h2 className={`text-3xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-black'}`}>{heading}</h2>
                </div>
                <div className={`grid gap-6 ${slots === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                    {Array.from({ length: slots }).map((_, i) => (
                        <div
                            key={i}
                            data-reveal
                            style={{ '--reveal-delay': `${i * 90}ms` }}
                            className={`rounded-3xl p-8 border-2 border-dashed flex flex-col justify-between min-h-[240px] ${dark ? 'border-white/40 text-white' : 'border-black/40 text-black'}`}
                        >
                            <div>
                                <p className='text-xs uppercase tracking-wide opacity-60 mb-6'>Placeholder {i + 1}</p>
                                <p className='font-extrabold text-4xl mb-2 text-red-500'>[ADD RESULT]</p>
                                <p className='font-bold text-lg mb-2'>[ADD REAL CLIENT RESULT]</p>
                            </div>
                            <p className='text-sm opacity-70'>[ADD CLIENT NAME OR TYPE OF BUSINESS], [ADD WHAT WE DID], [ADD MEASURED RESULT AND TIME PERIOD]</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
)

export default ProofPlaceholder
