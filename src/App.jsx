import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Services from './Components/Services'
import CarPrices from './Components/CarPrices'
import Testamonials from './Components/Testamonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  useEffect(()=> {
    AOS.init( {
      offset : 100 ,
      duration : 800 ,
      easing : 'ease-in-sine',
      delay : 100,
    });
    AOS.refresh()
  },[])
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Services/>
      <CarPrices/>
      <Testamonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
