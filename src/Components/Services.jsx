import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'
const skillData = [
  {
    name : ' Best Price' ,
    icon : ( <FaCameraRetro className=' text-4xl text-primary group-hover:text-white'/>),
    desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, reiciendis.' ,
    aosDelay:'0'
  },{
    name : ' Fast and Safe' ,
    icon : ( < GiNotebook className=' text-4xl text-primary group-hover:text-white'/>),
    desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, reiciendis.' ,
    aosDelay:'400'
  },{
    name : ' Experience Drivers' ,
    icon : ( <SlNote className=' text-4xl text-primary group-hover:text-white'/>),
    desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, reiciendis.' ,
    aosDelay:'800'
  }
]

const Services = () => {
  return (
    <div className='p-4 py-12 max-w-[1500px] mx-auto'>
      <div className="title">
        <h1 className=' w-full text-center text-4xl lg:text-6xl font-bold text-gray-600 '>Why Choose Us</h1>
      </div>

      <div className="wrapper py-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {skillData.map((data)=>(
            <div
            key={data}
            data-aos='fade-up'
            data-aos-delay={data.aosDelay} className='group cursor-pointer bg-black m-2 flex flex-col justify-center items-center p-5 h-[300px] hover:bg-primary/80 transition-all'>
              <div>{data.icon}</div>
              <h1 className=' text-white  text-2xl font-bold py-3'>{data.name}</h1>
              <p className=' text-gray-200  text-center py-2'>{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
