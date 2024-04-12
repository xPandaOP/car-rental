import React from 'react'

const Contact = () => {
  return (
    <div className=' max-w-[1500px] mx-auto bg-[#192f37] p-4 text-white'>
      <div className="grid grid-cols-1 sm:grid-cols-3 py-6 px-3">
        <div className="left col-span-2">
            <h1 className=' text-3xl lg:text-5xl font-bold'>Let's collaborate on your upcoming car rental venture</h1>
            <p className=' text-gray-300 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque repudiandae accusantium voluptas.

</p>
        </div>
        <div className=" grid place-items-center ">
            <button className=' bg-primary p-4 font-semibold hover:bg-primary/80 duration-300'>Contact Us</button>
        </div>
    </div>
    </div>
  )
}

export default Contact
