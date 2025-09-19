import React from 'react'

const USPElaboration = () => {
    const processSteps = [
        {
            number: "01",
            title: "We understand",
            subtitle: "We start by listening.",
            description: "Everything starts with an understanding of your company's principles and target audience."
        },
        {
            number: "02",
            title: "We Strategize",
            subtitle: "No guesswork, just clarity.",
            description: "We create a roadmap for your brand's digital growth."
        },
        {
            number: "03",
            title: "We Design",
            subtitle: "From images to speech, we create every touchpoint with intention.",
            description: ""
        },
        {
            number: "04",
            title: "We Execute and Optimize",
            subtitle: "Ideas are nothing without action.",
            description: "We bring your brand to life across several platforms, consistently and creatively."
        },
        // {
        //     number: "05",
        //     title: "We Optimize",
        //     subtitle: "We don't stop at launch.",
        //     description: "We monitor, learn, and update your digital presence to ensure its growth."
        // },
        {
            number: "05",
            title: "We Support",
            subtitle: "We're always here for you.",
            description: "While your Digital Brand Architects, we will be at your side while your brand grows."
        }
    ]

    return (
        <section id="process" className='py-32 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-7xl mx-auto'>
                    {/* Grid Layout */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {/* First Card - Large */}
                        <div className='lg:col-span-2 lg:row-span-2 bg-white border-2 border-black rounded-3xl p-8 flex flex-col justify-between min-h-[400px]'>
                            <div>
                                <h2 className='text-4xl md:text-6xl font-bold text-black leading-tight mb-6'>
                                    EXPLORE 6+<br />
                                    PROCESS STEPS<br />
                                    AND GAIN NEW<br />
                                    SKILLS
                                </h2>
                            </div>
                            <div className='flex justify-end'>
                                <div className='w-12 h-12 bg-black rounded-full flex items-center justify-center'>
                                    <span className='text-white text-xl'>→</span>
                                </div>
                            </div>
                        </div>

                        {/* Process Step Cards */}
                        {processSteps.map((step, index) => {
                            const colors = [
                                'bg-red-500', 'bg-black', 'bg-gray-300',
                                'bg-red-500', 'bg-gray-200', 'bg-gray-200'
                            ];
                            const textColors = [
                                'text-white', 'text-white', 'text-black',
                                'text-white', 'text-black', 'text-black'
                            ];

                            return (
                                <div key={index} className={`${colors[index]} rounded-3xl p-6 flex flex-col justify-between min-h-[180px] hover:shadow-lg transition-shadow duration-300`}>
                                    <div>
                                        <h3 className={`text-2xl md:text-3xl font-bold ${textColors[index]} mb-2 uppercase`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-sm ${textColors[index]} opacity-80`}>
                                            {step.subtitle}
                                        </p>
                                    </div>
                                    <div className='flex justify-between items-end'>
                                        <span className={`text-xs ${textColors[index]} opacity-60`}>
                                            STEP {step.number}
                                        </span>
                                        <div className={`w-10 h-10 ${textColors[index] === 'text-black' ? 'bg-black' : 'bg-white'} rounded-full flex items-center justify-center`}>
                                            <span className={`${textColors[index] === 'text-black' ? 'text-white' : 'text-black'} text-lg`}>→</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                </div>
            </div>
        </section>
    )
}

export default USPElaboration
