import React from 'react'

const Hero = () => {
    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offset = 80 // Account for fixed navbar height
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id="hero" className='min-h-screen bg-white flex items-center justify-center px-4 relative pt-20'>
            {/* Hero Content */}
            <div className='container mx-auto text-center'>
                <h1 className='text-6xl md:text-8xl lg:text-9xl font-extrabold text-black leading-none mb-4'>
                    DISCOVER.
                </h1>
                <h1 className='text-6xl md:text-8xl lg:text-9xl font-extrabold text-black leading-none mb-4'>
                    DESIGN.
                </h1>
                <h1 className='text-6xl md:text-8xl lg:text-9xl font-extrabold text-black leading-none mb-8'>
                    DELIVER.
                </h1>

                <p className='text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12'>
                    Uncovering insights that drive strategy. Creating digital experiences that captivate. Executing with precision for real impact.
                </p>

                <button onClick={() => scrollToSection('services')} className='border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide'>
                    View All Services
                </button>
            </div>
        </section>
    )
}

export default Hero