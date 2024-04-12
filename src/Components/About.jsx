import React from 'react'
import car1 from './../assests/car2.png'

const About = () => {
  return (
    <div className=' bg-slate-200 '>
      <div className="grid grid-cols-1 sm:grid-cols-2 p-4 items-center max-w-[1500px] md:h-[320px] lg:h-[600px] mx-auto gap-5"> 
      <div
      data-aos='slide-right'
       className="img">
        <img className='w-[80%]' src={car1} alt="" />
      </div>
      <div
      data-aos='fade-up'
  className="text ">
        <h1 className=' text-4xl lg:text-6xl font-bold text-primary'>About Us</h1>
        <p className='  text-gray-700 font-medium py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ea, impedit eaque laborum hic fuga eum consequuntur. </p>
        <button className=' text-white bg-primary p-2 rounded-lg font-medium '>Get Started</button>
      </div>
      </div>

    </div>
  )
}

export default About
