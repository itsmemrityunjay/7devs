import React, { useRef, useState } from 'react'
import Person from '../assets/person.jpg'
import LogoImage from '../assets/Logo.png'
import LogoGlowing from '../assets/LogoGlowing.png'
import { ImageWithFallback } from './figma/ImageWithFallback'

const Blogs = () => {
    const scrollRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const blogPosts = [
        {
            title: "WRITE YOUR BIO LIKE A PRO",
            excerpt: "Talking about yourself can feel weird. Lucky for you, I've made a career out of it. I'll teach you how to showcase your experience, how to embellish without lying, and generate interest that makes you money.",
            date: "March 15, 2024",
            category: "eGuide",
            readTime: "5 min read",
            image: Person
        },
        {
            title: "GOALS: HOW TO SET & GET THEM",
            excerpt: "Learn everything I know about goal setting, from finding your vision to tactical planning, and, of course, how to get the shit actually done.",
            date: "March 10, 2024",
            category: "eGuide",
            readTime: "7 min read",
            image: LogoGlowing
        },
        {
            title: "The Future of Digital Branding in 2024",
            excerpt: "Exploring emerging trends and technologies that are reshaping how brands connect with their audiences in the digital landscape.",
            date: "March 5, 2024",
            category: "eGuide",
            readTime: "6 min read",
            image: LogoImage
        }
    ]

    return (
        <section id="blogs" className='py-8 md:py-10 bg-black overflow-x-hidden'>
            <div className='container mx-auto px-4 md:px-8'>
                <div className='relative mb-6 md:mb-8'>
                    <div className='flex flex-col items-start mb-2'>
                        {/* <h3 className='text-lg font-normal text-white tracking-normal'>Our</h3> */}
                        <div className='flex items-baseline relative'>
                            <h2 className='text-6xl md:text-7xl font-bold text-white tracking-tighter leading-none'>
                                Blogs
                            </h2>
                        </div>
                    </div>

                    {/* FREE text positioned absolutely */}
                    {/* <div className='absolute top-0 md:top-0 right-[50%] md:right-auto md:left-[55%] text-2xl md:text-3xl font-normal text-white tracking-normal'>
                        FREE
                    </div> */}

                    {/* Arrow decoration */}
                    {/* <div className='absolute right-[15%] top-6 hidden md:block'>
                        <div className='w-32 h-0.5 bg-red-500 transform rotate-45'></div>
                    </div> */}

                    {/* Navigation Arrows */}
                    <div className='absolute right-0 top-1/2 -translate-y-1/2 flex space-x-3 md:space-x-4'>
                        <button
                            onClick={() => {
                                if (scrollRef.current) {
                                    // For mobile, scroll by individual card width
                                    const isMobile = window.innerWidth < 768;
                                    const scrollAmount = isMobile
                                        ? scrollRef.current.scrollLeft - scrollRef.current.querySelector('article').offsetWidth
                                        : scrollRef.current.scrollLeft - scrollRef.current.clientWidth;

                                    scrollRef.current.scrollTo({
                                        left: Math.max(0, scrollAmount), // Prevent scrolling past the beginning
                                        behavior: 'smooth'
                                    });

                                    const newActiveSlide = Math.max(0, activeSlide - 1);
                                    setActiveSlide(newActiveSlide);
                                }
                            }}
                            className='w-8 h-8 md:w-10 md:h-10 border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-300 focus:outline-none'
                            aria-label="Previous slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-red-500 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                if (scrollRef.current) {
                                    // For mobile, scroll by individual card width
                                    const isMobile = window.innerWidth < 768;
                                    const scrollAmount = isMobile
                                        ? scrollRef.current.scrollLeft + scrollRef.current.querySelector('article').offsetWidth
                                        : scrollRef.current.scrollLeft + scrollRef.current.clientWidth;

                                    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

                                    scrollRef.current.scrollTo({
                                        left: Math.min(maxScroll, scrollAmount), // Prevent scrolling past the end
                                        behavior: 'smooth'
                                    });

                                    const newActiveSlide = Math.min(blogPosts.length - 1, activeSlide + 1);
                                    setActiveSlide(newActiveSlide);
                                }
                            }}
                            className='w-8 h-8 md:w-10 md:h-10 border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-300 focus:outline-none'
                            aria-label="Next slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-red-500 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="relative mb-6 md:mb-8">
                    {/* Horizontal scrolling container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory hide-scrollbar md:pl-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {blogPosts.map((post, index) => (
                            <article
                                key={index}
                                className={`flex-shrink-0 w-full md:w-1/2 snap-center ${index > 0 ? 'border-l border-red-800/30' : ''}`}
                            >
                                <div className="bg-transparent overflow-hidden h-full px-4 md:px-8">
                                    {/* Card image/thumbnail area with actual image */}
                                    <div className="w-full aspect-[16/9] bg-gray-800 overflow-hidden">
                                        <ImageWithFallback
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            fallback="https://via.placeholder.com/600x400/FF0000/FFFFFF/?text=7Devs+Resource"
                                        />
                                    </div>

                                    <div className="py-2 md:py-3">
                                        {/* Category tag */}
                                        <div className="mb-2 flex items-center">
                                            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                                                {post.category}
                                            </span>
                                            <span className="ml-2 text-white text-xs font-normal">
                                                Free
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg md:text-xl font-bold text-red-500 mb-2 uppercase leading-tight tracking-normal">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed max-w-lg">
                                            {post.excerpt}
                                        </p>

                                        {/* CTA Button */}
                                        <button className="border-2 border-white text-white px-3 py-1 text-xs font-medium hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 uppercase tracking-wide">
                                            Get Guide
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Add custom CSS to hide scrollbar but maintain functionality */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}} />

                {/* Navigation dots/indicators - placed more subtly at bottom */}
                <div className="flex justify-center gap-4 mt-4">
                    {blogPosts.map((_, index) => {
                        // Function to scroll to specific slide
                        const scrollToSlide = () => {
                            if (scrollRef.current) {
                                const cardWidth = scrollRef.current.querySelector('article').offsetWidth;
                                const gap = 0; // No gap in our current design

                                scrollRef.current.scrollTo({
                                    left: index * cardWidth,
                                    behavior: 'smooth'
                                });

                                setActiveSlide(index);
                            }
                        };

                        return (
                            <button
                                key={index}
                                onClick={scrollToSlide}
                                className={`w-2 h-2 rounded-full ${index === activeSlide ? 'bg-red-500' : 'bg-gray-600 hover:bg-red-300'} transition-colors`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Blogs
