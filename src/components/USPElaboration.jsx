import { Link } from 'react-router-dom'
import { ArrowRight } from './ui/Icons'

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
                        <div data-reveal className='lg:col-span-2 lg:row-span-2 bg-white border-2 border-black rounded-3xl p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden'>
                            <div aria-hidden='true' className='absolute inset-0 bg-grid opacity-60'></div>
                            <div className='relative'>
                                <p className='text-red-500 font-bold uppercase tracking-widest text-sm mb-6'>Process</p>
                                <h2 className='text-4xl md:text-6xl font-bold text-black leading-tight mb-6'>
                                    HOW WE<br />
                                    WORK: FOUR<br />
                                    SIMPLE<br />
                                    STEPS
                                </h2>
                            </div>
                            <div className='relative flex justify-between items-end gap-4'>
                                <p className='text-gray-600 max-w-sm'>The same simple loop for every service, from a single store setup to a monthly retainer.</p>
                                <Link to='/contact' className='group w-14 h-14 shrink-0 bg-black rounded-full flex items-center justify-center hover:bg-red-500 transition-colors'>
                                    <span className='sr-only'>Start a project</span>
                                    <ArrowRight className='w-6 h-6 text-white transition-transform duration-300 group-hover:-rotate-45' />
                                </Link>
                            </div>
                        </div>

                        {processSteps.map((step, index) => (
                            <div
                                key={step.number}
                                data-reveal
                                style={{ '--reveal-delay': `${index * 90}ms` }}
                                className={`${colors[index]} ${index === 3 ? 'lg:col-span-2' : ''} rounded-3xl p-6 flex flex-col justify-between min-h-[180px] hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
                            >
                                <div>
                                    <h3 className={`text-2xl md:text-3xl font-bold ${textColors[index]} mb-2 uppercase`}>
                                        {step.title}
                                    </h3>
                                    <p className={`text-sm ${textColors[index]} opacity-80`}>
                                        {step.subtitle}
                                    </p>
                                </div>
                                <div className='flex justify-between items-end mt-4'>
                                    <span className={`text-xs ${textColors[index]} opacity-60`}>
                                        STEP {step.number}
                                    </span>
                                    <span aria-hidden='true' className={`text-5xl font-extrabold leading-none ${textColors[index]} opacity-20`}>{step.number}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default USPElaboration
