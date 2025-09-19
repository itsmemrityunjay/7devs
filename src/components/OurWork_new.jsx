import React from 'react'

const OurWork = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            category: "Web Development",
            description: "A modern e-commerce solution with seamless user experience and powerful analytics.",
            image: "🛒",
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "Brand Identity Design",
            category: "Branding",
            description: "Complete brand makeover including logo, color palette, and marketing materials.",
            image: "🎨",
            tags: ["Logo Design", "Brand Guidelines", "Print Design"]
        },
        {
            title: "Mobile App Development",
            category: "Mobile",
            description: "Cross-platform mobile application with intuitive design and robust functionality.",
            image: "📱",
            tags: ["React Native", "UI/UX", "API Integration"]
        },
        {
            title: "Digital Marketing Campaign",
            category: "Marketing",
            description: "Multi-channel marketing strategy that increased brand awareness by 300%.",
            image: "📈",
            tags: ["Social Media", "SEO", "Content Marketing"]
        },
        {
            title: "SaaS Dashboard",
            category: "Web Development",
            description: "Analytics dashboard with real-time data visualization and reporting tools.",
            image: "📊",
            tags: ["Vue.js", "D3.js", "Python"]
        },
        {
            title: "Corporate Website",
            category: "Web Design",
            description: "Professional corporate website with modern design and content management system.",
            image: "🏢",
            tags: ["WordPress", "Custom Theme", "SEO Optimization"]
        }
    ]

    return (
        <section id="work" className='py-32 bg-gray-100 relative overflow-hidden'>
            {/* Yellow accent */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-yellow-400 transform rotate-45 translate-x-32 -translate-y-32'></div>
            
            <div className='container mx-auto px-4 relative z-10'>
                {/* Header */}
                <div className='mb-20'>
                    <h2 className='text-4xl md:text-5xl font-bold text-black mb-4 uppercase tracking-wide'>
                        Our Work
                    </h2>
                </div>

                {/* Main Content Area */}
                <div className='grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto'>
                    {/* Left Side - Device Mockups */}
                    <div className='relative h-[600px]'>
                        {/* Background Devices */}
                        <div className='absolute top-0 left-0 w-80 h-96 bg-black rounded-3xl transform rotate-6 opacity-60'>
                            <div className='p-6 text-white'>
                                <div className='flex space-x-2 mb-4'>
                                    <div className='w-3 h-3 bg-white rounded-full'></div>
                                    <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-white rounded-full'></div>
                                </div>
                                <div className='bg-gray-700 h-48 rounded-lg mb-4'>
                                    <div className='p-4'>
                                        <div className='text-6xl mb-2'>{projects[0].image}</div>
                                        <div className='text-sm opacity-75'>{projects[0].category}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='absolute top-20 right-0 w-72 h-80 bg-gray-600 rounded-3xl transform -rotate-3 opacity-70'>
                            <div className='p-6 text-white'>
                                <div className='flex space-x-2 mb-4'>
                                    <div className='w-3 h-3 bg-white rounded-full'></div>
                                    <div className='w-3 h-3 bg-white rounded-full'></div>
                                    <div className='w-3 h-3 bg-white rounded-full'></div>
                                </div>
                                <div className='bg-gray-500 h-40 rounded-lg mb-4'>
                                    <div className='p-4'>
                                        <div className='text-5xl mb-2'>{projects[1].image}</div>
                                        <div className='text-xs opacity-75'>{projects[1].category}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='absolute bottom-0 left-16 w-64 h-72 bg-gray-800 rounded-3xl transform rotate-12 opacity-80'>
                            <div className='p-6 text-white'>
                                <div className='flex space-x-2 mb-4'>
                                    <div className='w-3 h-3 bg-white rounded-full'></div>
                                    <div className='w-3 h-3 bg-white rounded-full'></div>
                                    <div className='w-3 h-3 bg-white rounded-full'></div>
                                </div>
                                <div className='bg-gray-600 h-32 rounded-lg mb-4'>
                                    <div className='p-4'>
                                        <div className='text-4xl mb-2'>{projects[2].image}</div>
                                        <div className='text-xs opacity-75'>{projects[2].category}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Featured Device - Front */}
                        <div className='absolute top-32 left-24 w-96 h-[480px] bg-white rounded-3xl shadow-2xl z-10 border border-gray-200'>
                            <div className='p-8 h-full'>
                                <div className='flex space-x-2 mb-6'>
                                    <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                </div>
                                
                                <div className='bg-yellow-400 h-64 rounded-2xl p-6 mb-6 relative overflow-hidden'>
                                    <div className='text-8xl text-center pt-16'>{projects[3].image}</div>
                                    <div className='absolute bottom-4 left-4'>
                                        <div className='bg-white px-3 py-1 rounded-full text-xs font-medium'>
                                            {projects[3].category}
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className='text-xl font-bold text-black mb-2'>{projects[3].title}</h3>
                                    <p className='text-gray-600 text-sm'>{projects[3].description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Small accent devices */}
                        <div className='absolute bottom-20 right-8 w-48 h-32 bg-gray-300 rounded-2xl opacity-60'></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className='space-y-8'>
                        <div>
                            <h3 className='text-3xl font-bold text-black mb-6'>
                                Showcasing Digital Excellence
                            </h3>
                            <p className='text-gray-600 text-lg leading-relaxed mb-8'>
                                Our portfolio represents years of innovation, creativity, and technical expertise. 
                                Each project tells a unique story of collaboration and success.
                            </p>
                        </div>

                        {/* Project Stats */}
                        <div className='grid grid-cols-2 gap-8'>
                            <div>
                                <div className='text-4xl font-bold text-black mb-2'>300+</div>
                                <div className='text-gray-600'>Projects Completed</div>
                            </div>
                            <div>
                                <div className='text-4xl font-bold text-black mb-2'>95%</div>
                                <div className='text-gray-600'>Client Satisfaction</div>
                            </div>
                        </div>

                        {/* Featured Projects List */}
                        <div className='space-y-4'>
                            <h4 className='text-xl font-bold text-black mb-4'>Recent Projects</h4>
                            {projects.slice(0, 3).map((project, index) => (
                                <div key={index} className='flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-black transition-colors'>
                                    <div className='text-3xl mr-4'>{project.image}</div>
                                    <div className='flex-1'>
                                        <h5 className='font-bold text-black'>{project.title}</h5>
                                        <p className='text-gray-500 text-sm'>{project.category}</p>
                                    </div>
                                    <div className='text-black text-xl'>→</div>
                                </div>
                            ))}
                        </div>

                        <button className='bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors uppercase tracking-wide'>
                            View All Projects
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWork