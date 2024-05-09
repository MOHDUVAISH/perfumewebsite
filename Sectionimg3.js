import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import img3_mobile from "./All images/banner6mobile.jpg";
import img3 from "./All images/banner6.jpg"; // Import desktop version of the image
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Sectionimg3 = () => {
  return (
    <>
      <div className="mt-2 px-3 md:mt-2">
        <img
          className="w-full h-auto md:hidden object-cover cursor-pointer" // Use only on mobile screens
          loading="lazy"  src={img3_mobile} // Use mobile image
          alt="Best Seller Banner"
        />
        <img
          className="hidden md:block w-full h-auto object-cover cursor-pointer mt-4" // Use on screens md and above
          loading="lazy" src={img3} // Use desktop image
          alt="Best Seller Banner"
        />
      </div>

      <div className="text-center md:text-left m-8">
        <h1 className="text-xl md:text-4xl mx-2 mt-8 font-shubh md:mt-16">
          CANDLES
        </h1>
        <p className="text-sm font-shubh text-gray-700 md:text-base font-medium md:relative md:top-2 md:p-4 md:ml-8 md:mr-8 md:text-base m-2">
          Indulge your senses and elevate your space with our enchanting
          collection of scented candles
        </p>
        <Link to="/destination-page">
          <button className="h-10 px-4 mt-8 bg-black font-shubh text-white transform hover:scale-125 transition duration-500 text-sm relative bottom-3">
            DISCOVER
          </button>
        </Link>
      </div>
    </>
  );
};

export default Sectionimg3;
