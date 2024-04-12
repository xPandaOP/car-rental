import React from 'react'
import carPNG from './../assests/carPNG.png'

const HeroSection = () => {
  return (
    <div className=' max-w-[1500px] lg:h-[800px] mx-auto p-4'>
     <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div
      data-aos='fade-in'
      data-aos-duration='1500'
       className="titles order-2 sm:order-1">
        <h1 className=' text-2xl lg:text-4xl xl:text-4xl font-bold text-primary'>Effortless</h1>
        <h1 className=' text-4xl lg:text-7xl xl:text-8xl font-bold lg:py-2 text-gray-700'>Car Rentals</h1>
        <p className=' text-gray-700 font-medium md:pb-4 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, harum.</p>
        <button className=' text-white bg-primary p-2 rounded-md px-4 font-medium'>Get Started</button>
      </div>
      <div
      data-aos='zoom-in'
      className=' order-1 sm:order-2'>
<img  src={carPNG} alt="/" />

      </div>
     </div>
    </div>
  )
}

export default HeroSection
