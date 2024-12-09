import React from "react";
import HeroImage from "../assets/hero.png";
import { FaAngleRight } from "react-icons/fa6";
import Text from "./Text";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate =useNavigate();
  return (
    <div className="min-h-screen bg-black">
      <div>
        <div className="flex justify-between items-center  px-12 mx-16  ">
          <div className=" text-gray-700 py-8 dark:text-slate-100">
            <div className=" my-5 text-4xl ">
            <h1 className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#fef6e5]  font-abeezee to-white text-5xl my-4 font-semibold">Your</h1>
             <h1 className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#f9e3b5] font-abeezee  to-white text-6xl my-4 font-semibold">Personal</h1>
             <h1 className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-t from-[#FFC446] font-abeezee  to-white text-6xl my-4 py-2 font-semibold">Legal Assistant</h1>
              <p className=" text-sm text-gray-300 my-4 max-w-xl">
                your trusted AI-powered legal advisor tailored for the Sri
                Lankan legal system. Navigate through our site to discover how
                we can help you with accurate, timely, and contextually relevant
                legal advice.
              </p>
            </div>
            <div className="flex mt-6">
              <button onClick={()=>navigate('/chatbot')}  className=" flex items-center gap-3 py-3 px-6 rounded-full bg-white text-black font-semibold text-sm md:text-lg">
                Get Started
                <FaAngleRight className="text-black text-2xl" />
              </button>
            </div>
          </div>
          <img
            src={HeroImage}
            alt="/"
            className="mx-auto w-auto "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
