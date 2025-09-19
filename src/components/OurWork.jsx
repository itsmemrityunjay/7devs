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
        <section id="work" className='py-20 bg-black'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                        Our Work & Products
                    </h2>
                    <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                        Showcasing our latest projects and the impact we've made for our clients
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {projects.map((project, index) => (
                        <div key={index} className='bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-white transition-colors duration-300'>
                            <div className='p-6'>
                                <div className='text-6xl mb-4 text-center'>
                                    {project.image}
                                </div>
                                <div className='mb-2'>
                                    <span className='text-sm font-semibold text-gray-400 uppercase tracking-wide'>
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className='text-xl font-bold text-white mb-3'>
                                    {project.title}
                                </h3>
                                <p className='text-gray-300 mb-4 leading-relaxed'>
                                    {project.description}
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className='px-3 py-1 border border-gray-600 text-gray-300 text-sm rounded-full'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <button className='border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide'>
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OurWork
