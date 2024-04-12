import React from 'react'

const imgFaces = [{
    img : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon : '⭐⭐⭐⭐⭐' ,
    name : 'Harry',
    aosDelay:'0'
},{
    img : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon : '⭐⭐⭐⭐⭐' ,
    name : 'Eva',
    aosDelay:'400'
},{
    img : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon : '⭐⭐⭐⭐⭐' ,
    name : 'David',
    aosDelay:'800'
},]

const Testamonials = () => {
  return (
    <div className=' max-w-[1500px] mx-auto p-4 my-10 sm:my-[100px]'>
      <div className="text text-center ">
        <h1 className='text-4xl lg:text-6xl font-bold text-primary'>What our clients have to say</h1>
        <p className=' text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
      <div className="wrapper">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {imgFaces.map((data)=> (
                <div
                data-aos='fade-up'
                data-aos-delay={data.aosDelay} key={data} className=' border p-10 grid place-items-center my-10 bg-gray-200'>
                    <div className="img">
                        <img className='h-[120px] w-[120px] object-cover rounded-full' src={data.img} alt="" />
                        <h1 className=' py-2'>{data.icon}</h1>
                    </div>
                    <div className="texts">
                        
                        <h1 className='text-gray-600'>Lorem ipsum dolor sit amet consectetur.</h1>

                        <h1 className=' text-center font-semibold text-gray-600'>{data.name}</h1>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Testamonials
