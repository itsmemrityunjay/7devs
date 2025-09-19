import React from 'react'

const Clients = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            company: "TechStart Inc.",
            role: "CEO",
            content: "7 Devs transformed our digital presence completely. Their strategic approach and creative execution exceeded our expectations.",
            avatar: "👩‍💼"
        },
        {
            name: "Michael Chen",
            company: "GrowthCorp",
            role: "Marketing Director",
            content: "Working with 7 Devs was a game-changer. They understood our vision and delivered results that speak for themselves.",
            avatar: "👨‍💼"
        },
        {
            name: "Emily Rodriguez",
            company: "Creative Studios",
            role: "Founder",
            content: "The team's attention to detail and innovative solutions helped us stand out in a competitive market.",
            avatar: "👩‍🎨"
        }
    ]

    const clientLogos = [
        { name: "TechStart", logo: "🚀" },
        { name: "GrowthCorp", logo: "📈" },
        { name: "Creative Studios", logo: "🎨" },
        { name: "InnovateNow", logo: "💡" },
        { name: "DigitalFlow", logo: "🌊" },
        { name: "NextGen", logo: "⚡" }
    ]

    return (
        <section id="clients" className='py-20 bg-gradient-to-b from-gray-50 to-white'>
            <div className='container mx-auto px-4'>
                {/* Client Testimonials */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                        What Our Clients Say
                    </h2>
                    <p className='text-xl text-gray-600'>
                        Success stories from brands we've helped transform
                    </p>
                </div>

                <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20'>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
                            <div className='flex items-center mb-4'>
                                <div className='text-3xl mr-4'>
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className='font-bold text-gray-900'>
                                        {testimonial.name}
                                    </h4>
                                    <p className='text-sm text-gray-600'>
                                        {testimonial.role} at {testimonial.company}
                                    </p>
                                </div>
                            </div>
                            <p className='text-gray-700 italic leading-relaxed'>
                                "{testimonial.content}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Client Logos */}
                <div className='text-center mb-12'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-8'>
                        Trusted by Leading Brands
                    </h3>
                </div>

                <div className='grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto'>
                    {clientLogos.map((client, index) => (
                        <div key={index} className='flex flex-col items-center p-4 hover:transform hover:scale-110 transition-transform duration-300'>
                            <div className='text-4xl mb-2 opacity-70 hover:opacity-100 transition-opacity'>
                                {client.logo}
                            </div>
                            <span className='text-sm text-gray-600 font-medium'>
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients
