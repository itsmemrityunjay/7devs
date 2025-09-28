import React, { useState } from 'react'
import Person from '../assets/person.jpg'
import Ecomm from '../assets/ecommerece.jpg'
import BrandId from "../assets/Brand-Identity.jpg"
import Mobile from "../assets/Mobile.jpg"
import Marketing from '../assets/Marketing.jpg'
import SaaS from '../assets/SaaS.jpg'

const OurWork = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const projects = [
        {
            title: "E-Commerce Platform",
            category: "Web Development",
            description: "A modern e-commerce solution with seamless user experience and powerful analytics.",
            image: Ecomm,
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "Brand Identity Design",
            category: "Branding",
            description: "Complete brand makeover including logo, color palette, and marketing materials.",
            image: BrandId,
            tags: ["Logo Design", "Brand Guidelines", "Print Design"]
        },
        {
            title: "Mobile App Development",
            category: "Mobile",
            description: "Cross-platform mobile application with intuitive design and robust functionality.",
            image: Mobile,
            tags: ["React Native", "UI/UX", "API Integration"]
        },
        {
            title: "Digital Marketing Campaign",
            category: "Marketing",
            description: "Multi-channel marketing strategy that increased brand awareness by 300%.",
            image: Marketing,
            tags: ["Social Media", "SEO", "Content Marketing"]
        },
        {
            title: "SaaS Dashboard",
            category: "Web Development",
            description: "Analytics dashboard with real-time data visualization and reporting tools.",
            image: SaaS,
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

                {/* Interactive Profile Cards Layout - Row on desktop, Column on mobile */}
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 max-w-7xl mx-auto md:h-96'>
                    {/* Card 1 - Black (outer left) */}
                    <div
                        className={`bg-white hover:bg-gray-100 justify-between rounded-3xl overflow-hidden transition-all duration-1000 ease-in-out cursor-pointer ${hoveredCard === 1 ? 'w-full md:w-8/12 h-96 md:h-full mb-4 md:mb-0' : hoveredCard && hoveredCard !== 1 ? 'w-full md:w-32 h-24 md:h-full mb-4 md:mb-0' : 'w-full md:w-32 h-24 md:h-full mb-4 md:mb-0'
                            } border-2 border-black`}
                        onMouseEnter={() => setHoveredCard(1)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Shrinked State - Full Image Cover */}
                        {hoveredCard !== 1 && (
                            <div className='w-full h-full bg-white rounded-3xl overflow-hidden transition-all duration-800 delay-75'>
                                <img
                                    src={projects[0].image}
                                    alt="Project Image"
                                    className='w-full h-full object-cover grayscale transition-all duration-600'
                                />
                            </div>
                        )}

                        {/* Expanded State - 70/30 Split */}
                        {hoveredCard === 1 && (
                            <div className='w-full h-full flex flex-col md:flex-row'>
                                {/* Content Area - 70% on desktop, 100% on mobile */}
                                <div className='w-full md:w-7/12 p-4 md:p-6 flex flex-col justify-center'>
                                    {/* Company Logo */}
                                    <div className='flex items-center gap-2 mb-6'>
                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                        <span className='text-black font-semibold text-xs uppercase tracking-wide'>{projects[0].category}</span>
                                    </div>

                                    {/* Project Title */}
                                    <div className='mb-4 md:mb-6'>
                                        <h3 className='text-2xl md:text-3xl font-bold mb-2 text-red-500'>{projects[0].title}</h3>
                                        <p className='text-sm md:text-base font-medium text-black'>Featured Project</p>
                                    </div>

                                    {/* Project Description */}
                                    <blockquote className='mb-4 md:mb-6'>
                                        <p className='text-xs md:text-sm leading-relaxed mb-2 md:mb-4 text-gray-700'>
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
                                <div className='md:w-5/12 w-full h-full bg-white rounded-r-3xl overflow-hidden'>
                                    <img
                                        src={Ecomm}
                                        alt="Project Image"
                                        className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Card 2 - White (left of center) */}
                    <div
                        className={`bg-white hover:bg-gray-100 justify-between rounded-3xl overflow-hidden transition-all duration-1000 ease-in-out cursor-pointer ${hoveredCard === 2 ? 'w-full md:w-8/12 h-96 md:h-full mb-4 md:mb-0' : hoveredCard && hoveredCard !== 2 ? 'w-full md:w-32 h-24 md:h-full mb-4 md:mb-0' : 'w-full md:w-32 h-24 md:h-full mb-4 md:mb-0'
                            } border-2 border-black`}
                        onMouseEnter={() => setHoveredCard(2)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Shrinked State - Full Image Cover */}
                        {hoveredCard !== 2 && (
                            <div className='w-full h-full bg-white rounded-3xl overflow-hidden transition-all duration-500'>
                                <img
                                    src={projects[1].image}
                                    alt="Project Image"
                                    className='w-full h-full object-cover grayscale transition-all duration-600'
                                />
                            </div>
                        )}

                        {/* Expanded State - 70/30 Split */}
                        {hoveredCard === 2 && (
                            <div className='w-full h-full flex flex-col md:flex-row'>
                                {/* Content Area - Full width on mobile, 70% on desktop */}
                                <div className='w-full md:w-7/12 p-4 md:p-6 flex flex-col justify-center'>
                                    {/* Company Logo */}
                                    <div className='flex items-center gap-2 mb-6'>
                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                        <span className='text-black font-semibold text-xs uppercase tracking-wide'>{projects[1].category}</span>
                                    </div>

                                    {/* Project Title */}
                                    <div className='mb-4 md:mb-6'>
                                        <h3 className='text-2xl md:text-3xl font-bold mb-2 text-red-500'>{projects[1].title}</h3>
                                        <p className='text-sm md:text-base font-medium text-black'>Creative Solution</p>
                                    </div>

                                    {/* Project Description */}
                                    <blockquote className='mb-4 md:mb-6'>
                                        <p className='text-xs md:text-sm leading-relaxed mb-2 md:mb-4 text-gray-700'>
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

                                {/* Image Area - Full width on mobile, 30% on desktop */}
                                <div className='w-full md:w-5/12 h-48 md:h-full bg-white md:rounded-r-3xl overflow-hidden'>
                                    <img
                                        src={BrandId}
                                        alt="Project Image"
                                        className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Central Card (Card 3) - Red */}
                    <div
                        className={`bg-white hover:bg-gray-100 justify-between rounded-3xl overflow-hidden transition-all duration-1000 ease-in-out cursor-pointer ${hoveredCard === 3 ? 'w-full md:w-8/12 h-96 md:h-full mb-4 md:mb-0' : hoveredCard && hoveredCard !== 3 ? 'w-full md:w-32 h-24 md:h-full mb-4 md:mb-0' : 'w-full md:w-8/12 h-96 md:h-full mb-4 md:mb-0'
                            } border-2 border-black`}
                        onMouseEnter={() => setHoveredCard(3)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Shrinked State - Full Image Cover */}
                        {hoveredCard && hoveredCard !== 3 && (
                            <div className='w-full h-full bg-white rounded-3xl overflow-hidden transition-all duration-500'>
                                <img
                                    src={projects[2].image}
                                    alt="Project Image"
                                    className='w-full h-full object-cover grayscale transition-all duration-600'
                                />
                            </div>
                        )}

                        {/* Expanded State - 70/30 Split */}
                        {(!hoveredCard || hoveredCard === 3) && (
                            <div className='w-full h-full flex flex-col md:flex-row'>
                                {/* Content Area - Full width on mobile, 70% on desktop */}
                                <div className='w-full md:w-7/12 p-4 md:p-6 flex flex-col justify-center'>
                                    {/* Company Logo */}
                                    <div className='flex items-center gap-2 mb-6'>
                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                        <span className='text-black font-semibold text-xs uppercase tracking-wide'>{projects[2].category}</span>
                                    </div>

                                    {/* Project Title */}
                                    <div className='mb-4 md:mb-6'>
                                        <h3 className='text-2xl md:text-3xl font-bold mb-2 text-red-500'>{projects[2].title}</h3>
                                        <p className='text-sm md:text-base font-medium text-black'>Innovation Project</p>
                                    </div>

                                    {/* Project Description */}
                                    <blockquote className='mb-4 md:mb-6'>
                                        <p className='text-xs md:text-sm leading-relaxed mb-2 md:mb-4 text-gray-700'>
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

                                {/* Image Area - Full width on mobile, 30% on desktop */}
                                <div className='w-full md:w-5/12 h-48 md:h-full bg-white md:rounded-r-3xl overflow-hidden'>
                                    <img
                                        src={projects[2].image}
                                        alt="Project Image"
                                        className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Card 4 - White (right of center) */}
                    <div
                        className={`bg-white hover:bg-gray-100 justify-between rounded-3xl overflow-hidden transition-all duration-1000 ease-in-out cursor-pointer ${hoveredCard === 4 ? 'w-full md:w-8/12 h-96 md:h-full mb-4 md:mb-0' : hoveredCard && hoveredCard !== 4 ? 'w-full md:w-32 h-24 md:h-full mb-4 md:mb-0' : 'w-full md:w-32 h-24 md:h-full mb-4 md:mb-0'
                            } border-2 border-black`}
                        onMouseEnter={() => setHoveredCard(4)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Shrinked State - Full Image Cover */}
                        {hoveredCard !== 4 && (
                            <div className='w-full h-full bg-white rounded-3xl overflow-hidden transition-all duration-500'>
                                <img
                                    src={projects[3].image}
                                    alt="Project Image"
                                    className='w-full h-full object-cover grayscale transition-all duration-600'
                                />
                            </div>
                        )}

                        {/* Expanded State - 70/30 Split */}
                        {hoveredCard === 4 && (
                            <div className='w-full h-full flex flex-col md:flex-row'>
                                {/* Content Area - Full width on mobile, 70% on desktop */}
                                <div className='w-full md:w-7/12 p-4 md:p-6 flex flex-col justify-center'>
                                    {/* Company Logo */}
                                    <div className='flex items-center gap-2 mb-6'>
                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                        <span className='text-black font-semibold text-xs uppercase tracking-wide'>{projects[3].category}</span>
                                    </div>

                                    {/* Project Title */}
                                    <div className='mb-4 md:mb-6'>
                                        <h3 className='text-2xl md:text-3xl font-bold mb-2 text-red-500'>{projects[3].title}</h3>
                                        <p className='text-sm md:text-base font-medium text-black'>Growth Strategy</p>
                                    </div>

                                    {/* Project Description */}
                                    <blockquote className='mb-4 md:mb-6'>
                                        <p className='text-xs md:text-sm leading-relaxed mb-2 md:mb-4 text-gray-700'>
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

                                {/* Image Area - Full width on mobile, 30% on desktop */}
                                <div className='w-full md:w-5/12 h-48 md:h-full bg-white md:rounded-r-3xl overflow-hidden'>
                                    <img
                                        src={projects[3].image}
                                        alt="Project Image"
                                        className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Card 5 - Black (outer right) */}
                    <div
                        className={`bg-white hover:bg-gray-100 justify-between rounded-3xl overflow-hidden transition-all duration-1000 ease-in-out cursor-pointer ${hoveredCard === 5 ? 'w-full md:w-8/12 h-96 md:h-full mb-4 md:mb-0' : hoveredCard && hoveredCard !== 5 ? 'w-full md:w-32 h-24 md:h-full mb-4 md:mb-0' : 'w-full md:w-32 h-24 md:h-full mb-4 md:mb-0'
                            } border-2 border-black`}
                        onMouseEnter={() => setHoveredCard(5)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Shrinked State - Full Image Cover */}
                        {hoveredCard !== 5 && (
                            <div className='w-full h-full bg-white rounded-3xl overflow-hidden transition-all duration-500'>
                                <img
                                    src={projects[4].image}
                                    alt="Project Image"
                                    className='w-full h-full object-cover grayscale transition-all duration-600'
                                />
                            </div>
                        )}

                        {/* Expanded State - 70/30 Split */}
                        {hoveredCard === 5 && (
                            <div className='w-full h-full flex flex-col md:flex-row'>
                                {/* Content Area - Full width on mobile, 70% on desktop */}
                                <div className='w-full md:w-7/12 p-4 md:p-6 flex flex-col justify-center'>
                                    {/* Company Logo */}
                                    <div className='flex items-center gap-2 mb-6'>
                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                        <span className='text-black font-semibold text-xs uppercase tracking-wide'>{projects[4].category}</span>
                                    </div>

                                    {/* Project Title */}
                                    <div className='mb-4 md:mb-6'>
                                        <h3 className='text-2xl md:text-3xl font-bold mb-2 text-red-500'>{projects[4].title}</h3>
                                        <p className='text-sm md:text-base font-medium text-black'>Data Visualization</p>
                                    </div>

                                    {/* Project Description */}
                                    <blockquote className='mb-4 md:mb-6'>
                                        <p className='text-xs md:text-sm leading-relaxed mb-2 md:mb-4 text-gray-700'>
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

                                {/* Image Area - Full width on mobile, 30% on desktop */}
                                <div className='w-full md:w-5/12 h-48 md:h-full bg-white md:rounded-r-3xl overflow-hidden'>
                                    <img
                                        src={projects[4].image}
                                        alt="Project Image"
                                        className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <div className='text-center mt-12'>
                    {/* <button className='border-2 border-black text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide text-sm md:text-base'>
                        View All Projects
                    </button> */}
                </div>
            </div>
        </section>
    )
}

export default OurWork
