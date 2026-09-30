
// Real proof only. These placeholders must be replaced with genuine client results.
const ProofPlaceholder = ({ dark = false, heading = 'Results from real clients', slots = 3 }) => (
    <section className={`py-20 ${dark ? 'bg-black' : 'bg-white'}`}>
        <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
                <h2 className={`text-3xl md:text-5xl font-bold mb-10 ${dark ? 'text-white' : 'text-black'}`}>{heading}</h2>
                <div className='grid md:grid-cols-3 gap-6'>
                    {Array.from({ length: slots }).map((_, i) => (
                        <div key={i} className={`rounded-3xl p-6 border-2 border-dashed ${dark ? 'border-white text-white' : 'border-black text-black'}`}>
                            <p className='text-xs uppercase tracking-wide opacity-60 mb-2'>Placeholder {i + 1}</p>
                            <p className='font-bold text-xl mb-2'>[ADD REAL CLIENT RESULT]</p>
                            <p className='text-sm opacity-80'>[ADD CLIENT NAME OR TYPE OF BUSINESS], [ADD WHAT WE DID], [ADD MEASURED RESULT AND TIME PERIOD]</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
)

export default ProofPlaceholder
