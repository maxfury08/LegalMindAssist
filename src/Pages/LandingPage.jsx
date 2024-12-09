import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Features from '../Components/Features'
import About from '../Components/About'
import LegalServices from '../Components/LegalServices'
import Testimonials from '../Components/Testimonials'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const LandingPage = () => {
  return (
    <div className=' bg-black font-poppins'>
        <Navbar/>
        <Hero/>
        <About/>
        <Features/>
        <LegalServices/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default LandingPage