import React, { useState, useEffect } from 'react'
import LogoGlowing from '../assets/Logo.png'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
        setIsMobileMenuOpen(false)
    }

    const navItems = [
        { name: 'Home', id: 'hero' },
        { name: 'About', id: 'usp' },
        { name: 'Process', id: 'process' },
        { name: 'Services', id: 'services' },
        { name: 'Work', id: 'work' },
        { name: 'Clients', id: 'clients' },
        { name: 'Insights', id: 'blogs' }
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
            }`}>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center h-20'>
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className='hover:opacity-70 transition-opacity'
                    >
                        <img
                            src={LogoGlowing}
                            alt="7DEVS"
                            className='h-10 w-auto'
                        />
                    </button>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex space-x-8'>
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className='text-black font-medium hover:opacity-70 transition-opacity relative group'
                            >
                                {item.name}
                                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
                            </button>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <button

                        className='hidden md:block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors'
                    ><a href="tel:+917889930884" target="_blank" rel="noopener noreferrer">CONTACT</a>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1'
                    >
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                            }`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}>
                    <div className='flex flex-col space-y-4 pt-4 border-t border-gray-200'>
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className='text-black font-medium hover:opacity-70 transition-opacity text-left'
                            >
                                {item.name}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className='bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors w-fit'
                        >
                            CONTACT
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar