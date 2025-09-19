import React, { useState } from 'react'
import Person from '../assets/person.jpg'

const OurWork = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const projects = [
        {
            title: "E-Commerce Platform",
            category: "Web Development",
            description: "A modern e-commerce solution with seamless user experience and powerful analytics.",
            image: Person,
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "Brand Identity Design",
            category: "Branding",
            description: "Complete brand makeover including logo, color palette, and marketing materials.",
            image: Person,
            tags: ["Logo Design", "Brand Guidelines", "Print Design"]
        },
        {
            title: "Mobile App Development",
            category: "Mobile",
            description: "Cross-platform mobile application with intuitive design and robust functionality.",
            image: Person,
            tags: ["React Native", "UI/UX", "API Integration"]
        },
        {
            title: "Digital Marketing Campaign",
            category: "Marketing",
            description: "Multi-channel marketing strategy that increased brand awareness by 300%.",
            image: Person,
            tags: ["Social Media", "SEO", "Content Marketing"]
        },
        {
            title: "SaaS Dashboard",
            category: "Web Development",
            description: "Analytics dashboard with real-time data visualization and reporting tools.",
            image: Person,
            tags: ["Vue.js", "D3.js", "Python"]
        },
        {
            title: "Corporate Website",
            category: "Web Design",
            description: "Professional corporate website with modern design and content management system.",
            image: Person,
            tags: ["WordPress", "Custom Theme", "SEO Optimization"]
        }
    ]

    return (
        <section id="work" className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-black mb-4'>
                        Our Work & Products
                    </h2>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                        Showcasing our latest projects and the impact we've made for our clients
                    </p>
                </div>

                {/* Interactive Profile Cards Layout - All in One Row */}
                <div className='flex items-center justify-center gap-4 max-w-7xl mx-auto h-96'>
                    {/* Card 1 */}
                    <div
                        className={`bg-white justify-between rounded-3xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer h-full border-2 border-gray-200 hover:border-red-500 transform hover:scale-[1.02] ${hoveredCard === 1 ? 'w-8/12' : hoveredCard && hoveredCard !== 1 ? 'w-32' : 'w-32'
                            }`}
                        onMouseEnter={() => setHoveredCard(1)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Shrinked State - Full Image Cover */}
                        {hoveredCard !== 1 && (
                            <div className='w-full h-full bg-black rounded-3xl flex items-center justify-center transition-all duration-500'>
                                <div className='text-4xl transition-transform duration-300 hover:scale-110 grayscale'>�</div>
                            </div>
                        )}

                        {/* Expanded State - 70/30 Split */}
                        {hoveredCard === 1 && (
                            <div className='w-full h-full flex'>
                                {/* Content Area - 70% */}
                                <div className='w-7/12 p-6 flex flex-col justify-center'>
                                    {/* Company Logo */}
                                    <div className='flex items-center gap-2 mb-6'>
                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                        <span className='text-black font-semibold text-xs uppercase tracking-wide'>{projects[0].category}</span>
                                    </div>

                                    {/* Project Title */}
                                    <div className='mb-6'>
                                        <h3 className='text-3xl font-bold mb-2 text-red-500'>{projects[0].title}</h3>
                                        <p className='text-base font-medium text-black'>Featured Project</p>
                                    </div>

                                    {/* Project Description */}
                                    <blockquote className='mb-6'>
                                        <p className='text-sm leading-relaxed mb-4 text-gray-700'>
                                            {projects[0].description}
                                        </p>
                                        <footer>
                                            <div className='flex flex-wrap gap-1'>
                                                {projects[0].tags.slice(0, 2).map((tag, index) => (
                                                    <span key={index} className='text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded'>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </footer>
                                    </blockquote>

                                    <div className='flex items-center gap-2'>
                                        <span className='text-black font-medium text-sm'>View Project</span>
                                        <svg className='w-4 h-4 text-red-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </div>
                                </div>

                                {/* Image Area - 30% Portrait */}
                                <div className='w-5/12 h-full bg-black rounded-r-3xl overflow-hidden'>
                                    <img
                                        src={projects[0].image}
                                        alt={projects[0].title}
                                        className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Card 2 */}
                    <div
                        className={`bg-white justify-between rounded-3xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer h-full border-2 border-gray-200 hover:border-red-500 transform hover:scale-[1.02] ${hoveredCard === 2 ? 'w-8/12' : hoveredCard && hoveredCard !== 2 ? 'w-32' : 'w-32'
                            }`}
                        onMouseEnter={() => setHoveredCard(2)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Shrinked State - Full Image Cover */}
                        {hoveredCard !== 2 && (
                            <div className='w-full h-full bg-black rounded-3xl flex items-center justify-center transition-all duration-500'>
                                <div className='text-4xl text-white transition-transform duration-300 hover:scale-110 grayscale'>🎨</div>
                            </div>
                        )}

                        {/* Expanded State - 70/30 Split */}
                        {hoveredCard === 2 && (
                            <div className='w-full h-full flex'>
                                {/* Content Area - 70% */}
                                <div className='w-7/12 p-6 flex flex-col justify-center'>
                                    {/* Company Logo */}
                                    <div className='flex items-center gap-2 mb-6'>
                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                        <span className='text-black font-semibold text-xs uppercase tracking-wide'>{projects[1].category}</span>
                                    </div>

                                    {/* Project Title */}
                                    <div className='mb-6'>
                                        <h3 className='text-3xl font-bold mb-2 text-red-500'>{projects[1].title}</h3>
                                        <p className='text-base font-medium text-black'>Creative Solution</p>
                                    </div>

                                    {/* Project Description */}
                                    <blockquote className='mb-6'>
                                        <p className='text-sm leading-relaxed mb-4 text-gray-700'>
                                            {projects[1].description}
                                        </p>
                                        <footer>
                                            <div className='flex flex-wrap gap-1'>
                                                {projects[1].tags.slice(0, 2).map((tag, index) => (
                                                    <span key={index} className='text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded'>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </footer>
                                    </blockquote>

                                    <div className='flex items-center gap-2'>
                                        <span className='text-black font-medium text-sm'>View Project</span>
                                        <svg className='w-4 h-4 text-red-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </div>
                                </div>

                                {/* Image Area - 30% Portrait */}
                                <div className='w-5/12 h-full bg-black rounded-r-3xl overflow-hidden'>
                                    <img
                                        src={projects[1].image}
                                        alt={projects[1].title}
                                        className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Central Card (Card 3) */}
                    <div
                        className={`bg-white justify-between rounded-3xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer h-full border-2 border-gray-200 hover:border-red-500 transform hover:scale-[1.02] ${hoveredCard === 3 ? 'w-8/12' : hoveredCard && hoveredCard !== 3 ? 'w-32' : 'w-8/12'
                            }`}
                        onMouseEnter={() => setHoveredCard(3)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Shrinked State - Full Image Cover */}
                        {hoveredCard && hoveredCard !== 3 && (
                            <div className='w-full h-full bg-black rounded-3xl flex items-center justify-center transition-all duration-500'>
                                <div className='text-4xl text-white transition-transform duration-300 hover:scale-110 grayscale'>�</div>
                            </div>
                        )}

                        {/* Expanded State - 70/30 Split */}
                        {(!hoveredCard || hoveredCard === 3) && (
                            <div className='w-full h-full flex'>
                                {/* Content Area - 70% */}
                                <div className='w-7/12 p-6 flex flex-col justify-center'>
                                    {/* Company Logo */}
                                    <div className='flex items-center gap-2 mb-6'>
                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                        <span className='text-black font-semibold text-xs uppercase tracking-wide'>{projects[2].category}</span>
                                    </div>

                                    {/* Project Title */}
                                    <div className='mb-6'>
                                        <h3 className='text-3xl font-bold mb-2 text-red-500'>{projects[2].title}</h3>
                                        <p className='text-base font-medium text-black'>Innovation Project</p>
                                    </div>

                                    {/* Project Description */}
                                    <blockquote className='mb-6'>
                                        <p className='text-sm leading-relaxed mb-4 text-gray-700'>
                                            {projects[2].description}
                                        </p>
                                        <footer>
                                            <div className='flex flex-wrap gap-1'>
                                                {projects[2].tags.slice(0, 2).map((tag, index) => (
                                                    <span key={index} className='text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded'>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </footer>
                                    </blockquote>

                                    <div className='flex items-center gap-2'>
                                        <span className='text-black font-medium text-sm'>View Project</span>
                                        <svg className='w-4 h-4 text-red-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </div>
                                </div>

                                {/* Image Area - 30% Portrait */}
                                <div className='w-5/12 h-full bg-black rounded-r-3xl flex items-center justify-center'>
                                    <div className='text-6xl text-white grayscale'>�</div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Card 4 */}
                    <div
                        className={`bg-white justify-between rounded-3xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer h-full border-2 border-gray-200 hover:border-red-500 transform hover:scale-[1.02] ${hoveredCard === 4 ? 'w-8/12' : hoveredCard && hoveredCard !== 4 ? 'w-32' : 'w-32'
                            }`}
                        onMouseEnter={() => setHoveredCard(4)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Shrinked State - Full Image Cover */}
                        {hoveredCard !== 4 && (
                            <div className='w-full h-full bg-black rounded-3xl flex items-center justify-center transition-all duration-500'>
                                <div className='text-4xl text-white transition-transform duration-300 hover:scale-110 grayscale'>�</div>
                            </div>
                        )}

                        {/* Expanded State - 70/30 Split */}
                        {hoveredCard === 4 && (
                            <div className='w-full h-full flex'>
                                {/* Content Area - 70% */}
                                <div className='w-7/12 p-6 flex flex-col justify-center'>
                                    {/* Company Logo */}
                                    <div className='flex items-center gap-2 mb-6'>
                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                        <span className='text-black font-semibold text-xs uppercase tracking-wide'>{projects[3].category}</span>
                                    </div>

                                    {/* Project Title */}
                                    <div className='mb-6'>
                                        <h3 className='text-3xl font-bold mb-2 text-red-500'>{projects[3].title}</h3>
                                        <p className='text-base font-medium text-black'>Growth Strategy</p>
                                    </div>

                                    {/* Project Description */}
                                    <blockquote className='mb-6'>
                                        <p className='text-sm leading-relaxed mb-4 text-gray-700'>
                                            {projects[3].description}
                                        </p>
                                        <footer>
                                            <div className='flex flex-wrap gap-1'>
                                                {projects[3].tags.slice(0, 2).map((tag, index) => (
                                                    <span key={index} className='text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded'>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </footer>
                                    </blockquote>

                                    <div className='flex items-center gap-2'>
                                        <span className='text-black font-medium text-sm'>View Project</span>
                                        <svg className='w-4 h-4 text-red-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </div>
                                </div>

                                {/* Image Area - 30% Portrait */}
                                <div className='w-5/12 h-full bg-black rounded-r-3xl flex items-center justify-center'>
                                    <div className='text-6xl text-white grayscale'>�</div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Card 5 */}
                    <div
                        className={`bg-white justify-between rounded-3xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer h-full border-2 border-gray-200 hover:border-red-500 transform hover:scale-[1.02] ${hoveredCard === 5 ? 'w-8/12' : hoveredCard && hoveredCard !== 5 ? 'w-32' : 'w-32'
                            }`}
                        onMouseEnter={() => setHoveredCard(5)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Shrinked State - Full Image Cover */}
                        {hoveredCard !== 5 && (
                            <div className='w-full h-full bg-black rounded-3xl flex items-center justify-center transition-all duration-500'>
                                <div className='text-4xl text-white transition-transform duration-300 hover:scale-110 grayscale'>�</div>
                            </div>
                        )}

                        {/* Expanded State - 70/30 Split */}
                        {hoveredCard === 5 && (
                            <div className='w-full h-full flex'>
                                {/* Content Area - 70% */}
                                <div className='w-7/12 p-6 flex flex-col justify-center'>
                                    {/* Company Logo */}
                                    <div className='flex items-center gap-2 mb-6'>
                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                        <span className='text-black font-semibold text-xs uppercase tracking-wide'>{projects[4].category}</span>
                                    </div>

                                    {/* Project Title */}
                                    <div className='mb-6'>
                                        <h3 className='text-3xl font-bold mb-2 text-red-500'>{projects[4].title}</h3>
                                        <p className='text-base font-medium text-black'>Data Visualization</p>
                                    </div>

                                    {/* Project Description */}
                                    <blockquote className='mb-6'>
                                        <p className='text-sm leading-relaxed mb-4 text-gray-700'>
                                            {projects[4].description}
                                        </p>
                                        <footer>
                                            <div className='flex flex-wrap gap-1'>
                                                {projects[4].tags.slice(0, 2).map((tag, index) => (
                                                    <span key={index} className='text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded'>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </footer>
                                    </blockquote>

                                    <div className='flex items-center gap-2'>
                                        <span className='text-black font-medium text-sm'>View Project</span>
                                        <svg className='w-4 h-4 text-red-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </div>
                                </div>

                                {/* Image Area - 30% Portrait */}
                                <div className='w-5/12 h-full bg-black rounded-r-3xl flex items-center justify-center'>
                                    <div className='text-6xl text-white grayscale'>�</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Projects Grid Below */}
                {/* <div className='mt-20'>
                    <h3 className='text-2xl md:text-3xl font-bold text-black mb-8 text-center'>Featured Projects</h3>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                        {projects.slice(0, 6).map((project, index) => (
                            <div key={index} className='bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-black transition-colors duration-300 shadow-sm hover:shadow-md'>
                                <div className='p-4'>
                                    <div className='text-3xl mb-3 text-center'>
                                        {project.image}
                                    </div>
                                    <div className='mb-2'>
                                        <span className='text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                                            {project.category}
                                        </span>
                                    </div>
                                    <h4 className='text-lg font-bold text-black mb-2'>
                                        {project.title}
                                    </h4>
                                    <p className='text-gray-700 text-sm mb-3 leading-relaxed'>
                                        {project.description}
                                    </p>
                                    <div className='flex flex-wrap gap-1'>
                                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                                            <span key={tagIndex} className='px-2 py-1 border border-gray-300 text-gray-700 text-xs rounded-full hover:border-black transition-colors duration-200'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                <div className='text-center mt-12'>
                    <button className='border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide'>
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OurWork
