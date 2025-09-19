import React from 'react'

const Blogs = () => {
    const blogPosts = [
        {
            title: "The Future of Digital Branding in 2024",
            excerpt: "Exploring emerging trends and technologies that are reshaping how brands connect with their audiences in the digital landscape.",
            date: "March 15, 2024",
            category: "Branding",
            readTime: "5 min read",
            image: "📝"
        },
        {
            title: "Building User-Centric Web Experiences",
            excerpt: "A comprehensive guide to creating websites that not only look great but also provide exceptional user experiences.",
            date: "March 10, 2024",
            category: "Web Design",
            readTime: "7 min read",
            image: "💻"
        },
        {
            title: "Social Media Strategy That Actually Works",
            excerpt: "Proven tactics and strategies for building a strong social media presence that drives real business results.",
            date: "March 5, 2024",
            category: "Digital Marketing",
            readTime: "6 min read",
            image: "📱"
        }
    ]

    return (
        <section id="blogs" className='py-20 bg-slate-900'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                        Latest Insights
                    </h2>
                    <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                        Stay updated with the latest trends, tips, and insights from the digital world
                    </p>
                </div>

                <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {blogPosts.map((post, index) => (
                        <article key={index} className='bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors duration-300 border border-gray-700'>
                            <div className='p-6'>
                                <div className='text-6xl mb-4 text-center'>
                                    {post.image}
                                </div>
                                <div className='mb-3'>
                                    <span className='text-sm font-semibold text-purple-400 uppercase tracking-wide'>
                                        {post.category}
                                    </span>
                                    <div className='flex items-center text-sm text-gray-400 mt-1'>
                                        <span>{post.date}</span>
                                        <span className='mx-2'>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                                <h3 className='text-xl font-bold text-white mb-3 leading-tight'>
                                    {post.title}
                                </h3>
                                <p className='text-gray-300 leading-relaxed mb-4'>
                                    {post.excerpt}
                                </p>
                                <button className='text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200'>
                                    Read More →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <button className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105'>
                        View All Posts
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Blogs
