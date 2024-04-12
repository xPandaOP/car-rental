import React from "react";
import Car1 from './../assests/car2.png'
import Car2 from './../assests/car3.png'
import Car3 from './../assests/car4.png'

const carData = [{
    img : Car1 ,
    name : 'BMW UX',
    price : "$150/Day",
    aosDelay : '0'
},{
    img : Car2 ,
    name : 'KIA UX',
    price : "$140/Day",
    aosDelay : '400'
},{
    img : Car3 ,
    name : 'BMW UX',
    price : "$100/Day",
    aosDelay : '800'
},

]

const CarPrices = () => {
  return (
    <div className=" max-w-[1500px] mx-auto p-4">
      <h1 className="text-4xl lg:text-6xl font-bold text-primary">Top Recommended</h1>
      <p className=" text-gray-700 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="wrapper">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
{carData.map((data)=>(
    <div key={data}
    data-aos='fade-up'
    data-aos-delay={data.aosDelay}
     className=" border-2 hover:border-primary/60 p-5 w-full group cursor-pointer">
        <div>
<h1 className=" font-bold text-gray-700">12KM</h1>
        <img className=" h-[150px] w-full object-contain group-hover:translate-x-8 xl:group-hover:translate-x-16 duration-300" src={data.img} alt="" />
        </div>
        <div className="text">

        <h1 className=" font-bold text-primary">{data.name}</h1>
        <h2 className=" font-bold text-primary">{data.price}</h2>
        </div>
    </div>
))}
        </div>
      </div>
    </div>
  );
};

export default CarPrices;
