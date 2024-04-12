import React, { useState } from "react";
import DarkMode from "./DarkMode";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";



const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Cars",
    link: "/cars",
  },
  {
    id: 3,
    name: "Booking",
    link: "/booking",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];
const Navbar = () => {
  const [ nav , setNav]= useState(false)
  const handleNav = ()=> {
    setNav(!nav)
  }
  return (
    <main className="  p-4 shadow-md">
      <div className=" flex justify-between max-w-[1500px] mx-auto  items-center">
        <div className="logo-left">
          <h1 className=" text-3xl font-bold tracking-tight text-primary">
            Car Rentals
          </h1>
        </div>

        <div className="right">
          <nav className=" hidden sm:flex gap-5 text-gray-600">
            {NavLinks.map((data) => (
              <div key={data.id}>
                <a
                  className="hover:text-primary font-medium text-[17px]"
                  href={data.link}
                >
                  {data.name}
                </a>
              </div>
            ))}
          </nav>
          
        </div>

        <div onClick={handleNav} className="icons-menu block sm:hidden cursor-pointer">
          { nav ? <IoMdClose size={20} /> :  <RiMenu3Fill size={20} />}
        </div>
        
        {/* MOBILE NAV */}

        <div className={ nav ? " absolute top-0 left-0 w-[60%] bg-primary h-screen z-10 p-5" : 'hidden'}>
          <h1 className=" text-4xl font-bold text-white">Car Rentals</h1>
          <nav className=" p-4 flex flex-col gap-5 text-2xl text-white ">
          {NavLinks.map((data) => (
              <div  key={data.id} className=" p-2 border-b-2 " > 
                <a onClick={handleNav}
                  className=" font-medium"
                  href={data.link}
                >
                  {data.name}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>


    </main>
  );
};

export default Navbar;
