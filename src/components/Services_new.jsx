import React, { useState } from 'react'

const Services = () => {
    const [expandedService, setExpandedService] = useState(0) // First item expanded by default

    const serviceCategories = [
        {
            title: "STRATEGY",
            description: "The 7Devs™ is a unique strategy methodology, created by our team to help the best brands in each sector grow with the most powerful and valuable marketing strategy insight on the market.",
            subService: "Marketing Strategy"
        },
        {
            title: "SOCIAL MEDIA",
            description: "Comprehensive social media management and strategy to build your brand presence across all platforms with engaging content and community building.",
            subService: "Social Media Management"
        },
        {
            title: "SEO",
            description: "Search engine optimization strategies that improve your visibility, drive organic traffic, and help you rank higher in search results.",
            subService: "SEO Optimization"
        },
        {
            title: "WEB DEVELOPMENT",
            description: "Custom web development solutions that combine stunning design with powerful functionality to create exceptional user experiences.",
            subService: "Website Development"
        },
        {
            title: "BRAND DESIGN",
            description: "Complete brand identity design including logos, visual systems, and brand guidelines that make your business stand out.",
            subService: "Brand Identity"
        }
    ]

    const toggleService = (index) => {
        setExpandedService(expandedService === index ? -1 : index)
    }

    return (
        <section id="services" className='py-32 bg-black'>
            <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto'>
                    {/* Header */}
                    <div className='mb-16'>
                        <h2 className='text-white text-lg font-medium mb-4'>
                            Our Expertise
                        </h2>
                        <div className='w-full h-px bg-white mb-8'></div>
                    </div>

                    {/* Services List */}
                    <div className='space-y-0'>
                        {serviceCategories.map((service, index) => (
                            <div key={index} className='border-b border-white'>
                                {/* Service Header */}
                                <button
                                    onClick={() => toggleService(index)}
                                    className='w-full flex justify-between items-center py-8 text-left hover:opacity-70 transition-opacity'
                                >
                                    <h3 className='text-4xl md:text-6xl font-bold text-white tracking-tight'>
                                        {service.title}
                                    </h3>
                                    <div className='text-white text-4xl font-light'>
                                        {expandedService === index ? '−' : '+'}
                                    </div>
                                </button>

                                {/* Expanded Content */}
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedService === index ? 'max-h-96 pb-8' : 'max-h-0'
                                    }`}>
                                    <div className='max-w-4xl'>
                                        <p className='text-gray-300 text-lg leading-relaxed mb-6'>
                                            {service.description}
                                        </p>
                                        <button className='bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors'>
                                            {service.subService}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
