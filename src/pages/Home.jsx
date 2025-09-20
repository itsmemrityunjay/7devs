import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import USPSection from '../components/USPSection'
import USPElaboration from '../components/USPElaboration'
import Services from '../components/Services'
import OurWork from '../components/OurWork'
import Clients from '../components/Clients'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Scroller from '../components/Scroller'

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <Hero />
            <USPSection />
            <USPElaboration />
            <Services />
            <OurWork />
            <Scroller />
            <Clients />
            <Blogs />
            <Footer />
        </div>
    )
}

export default Home