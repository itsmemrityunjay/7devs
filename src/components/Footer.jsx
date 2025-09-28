import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" className='bg-white text-black py-16 border-t border-gray-200'>
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-4 gap-8 mb-12'>
                    {/* Brand */}
                    <div className='md:col-span-2'>
                        <h3 className='text-3xl font-bold mb-4'>
                            7DEVS.
                        </h3>
                        <p className='text-gray-600 mb-6 max-w-md'>
                            We're your Digital Brand Architects, crafting experiences that captivate and strategies that deliver real impact.
                        </p>
                        <button className='bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors'>
                            <a href="tel:+917889930884" className='hover:text-black transition-colors'>Get Started</a>
                        </button>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className='text-xl font-bold mb-4'>Services</h4>
                        <ul className='space-y-2 text-gray-600'>
                            <li><a href="https://wa.me/917889930884?text=Hi!%20I%20am%20looking%20for%20Brand%20Design%20services." target="_blank" rel="noopener noreferrer" className='hover:text-black transition-colors'>Brand Design</a></li>
                            <li><a href="https://wa.me/917889930884?text=Hi!%20I%20am%20looking%20for%20Web%20Development%20services." target="_blank" rel="noopener noreferrer" className='hover:text-black transition-colors'>Web Development</a></li>
                            <li><a href="https://wa.me/917889930884?text=Hi!%20I%20am%20looking%20for%20Digital%20Marketing%20services." target="_blank" rel="noopener noreferrer" className='hover:text-black transition-colors'>Digital Marketing</a></li>
                            <li><a href="https://wa.me/917889930884?text=Hi!%20I%20am%20looking%20for%20Content%20Creation%20services." target="_blank" rel="noopener noreferrer" className='hover:text-black transition-colors'>Content Creation</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className='text-xl font-bold mb-4'>Connect</h4>
                        <ul className='space-y-2 text-gray-600'>
                            {/* <li><a href="#" className='hover:text-black transition-colors'>LinkedIn</a></li>
                            <li><a href="#" className='hover:text-black transition-colors'>Twitter</a></li> */}
                            <li><a href="https://www.instagram.com/sevendevs.in/" target="_blank" rel="noopener noreferrer" className='hover:text-black transition-colors'>Instagram</a></li>
                            <li><a href="https://wa.link/1yvinh" target="_blank" rel="noopener noreferrer" className='hover:text-black transition-colors'>Whatsapp</a></li>
                            <li><a href="mailto:hello@7devs.in" target="_blank" rel="noopener noreferrer" className='hover:text-black transition-colors'>Mail Us</a></li>
                            <li><a href="tel:+917889930884" className='hover:text-black transition-colors'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className='border-t border-gray-200 pt-8 text-center text-gray-500'>
                    <p>&copy; 2024 7DEVS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
