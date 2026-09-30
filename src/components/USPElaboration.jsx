
const processSteps = [
    { number: '01', title: 'Talk', subtitle: 'A short call or WhatsApp chat about what you sell and what you need.' },
    { number: '02', title: 'Agree', subtitle: 'A written scope, timeline and price. Nothing hidden.' },
    { number: '03', title: 'Build & run', subtitle: 'We do the work and share progress for your approval as we go.' },
    { number: '04', title: 'Review', subtitle: 'Simple reports and honest advice on what to do next.' },
]

const colors = ['bg-red-500', 'bg-black', 'bg-gray-300', 'bg-gray-200']
const textColors = ['text-white', 'text-white', 'text-black', 'text-black']

const USPElaboration = () => {
    return (
        <section id="process" className='py-32 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {/* First Card - Large */}
                        <div className='lg:col-span-2 lg:row-span-2 bg-white border-2 border-black rounded-3xl p-8 flex flex-col justify-between min-h-[400px]'>
                            <h2 className='text-4xl md:text-6xl font-bold text-black leading-tight mb-6'>
                                HOW WE<br />
                                WORK: FOUR<br />
                                SIMPLE<br />
                                STEPS
                            </h2>
                            <div className='flex justify-end'>
                                <div className='w-12 h-12 bg-black rounded-full flex items-center justify-center' aria-hidden='true'>
                                    <span className='text-white text-xl'>→</span>
                                </div>
                            </div>
                        </div>

                        {processSteps.map((step, index) => (
                            <div key={step.number} className={`${colors[index]} rounded-3xl p-6 flex flex-col justify-between min-h-[180px] hover:shadow-lg transition-shadow duration-300`}>
                                <div>
                                    <h3 className={`text-2xl md:text-3xl font-bold ${textColors[index]} mb-2 uppercase`}>
                                        {step.title}
                                    </h3>
                                    <p className={`text-sm ${textColors[index]} opacity-80`}>
                                        {step.subtitle}
                                    </p>
                                </div>
                                <span className={`text-xs ${textColors[index]} opacity-60 mt-4`}>
                                    STEP {step.number}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default USPElaboration
