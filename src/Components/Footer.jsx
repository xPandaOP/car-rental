import React from "react";
import {
    FaArrowAltCircleRight,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <main className=" bg-gray-300 w-full my-10">
      <div className=" max-w-[1500px] mx-auto p-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="first col-span-2 flex flex-col gap-6">
            <div className="title">
              <h1 className=" text-xl font-bold">Car Rentals</h1>
              <p className=" font-medium text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, enim cupiditate hic nemo quaerat asperiores?
              </p>
            </div>
            <div className="info flex flex-col gap-2">
              <div className="location flex items-center gap-5">
                <FaLocationArrow /> <h1>Queens,New York</h1>
              </div>
              <div className="location flex items-center gap-5">
                <FaMobileAlt /> <h1>+1 0123456789</h1>
              </div>
              <div className="icons flex text-2xl gap-5 my-2">
                <a className=" hover:text-primary duration-200" href="#">
                  <FaInstagram />
                </a>
                <a className=" hover:text-primary duration-200" href="#">
                  <FaFacebook />
                </a>
                <a className=" hover:text-primary duration-200" href="#">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="second col-span-1">
            <div className="Link ">
                <h1 className=" text-xl font-bold">Important Links</h1>
                <nav className=" flex flex-col gap-2 my-2 font-semibold">
              <a className=" flex items-center gap-3 text-gray-700 hover:text-primary" href="#"> <span><FaArrowAltCircleRight/></span>Home</a>
              <a className=" flex items-center gap-3 text-gray-700 hover:text-primary" href="#"> <span><FaArrowAltCircleRight/></span>Services</a>
              <a className=" flex items-center gap-3 text-gray-700 hover:text-primary" href="#"> <span><FaArrowAltCircleRight/></span>About</a>
              <a className=" flex items-center gap-3 text-gray-700 hover:text-primary" href="#"> <span><FaArrowAltCircleRight/></span>Booking</a>
              <a className=" flex items-center gap-3 text-gray-700 hover:text-primary" href="#"> <span><FaArrowAltCircleRight/></span>Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
