import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import img1_mobile from "./All images/banner3mobile.jpg";
import img1 from "./All images/banner3.jpg"; // Import desktop version of the image
import discountImage from "./All images/25.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Sectionimg1 = () => {
  return (
    <>
      <div className="mt-2 px-3 md:mt-2 w-full  discount-image-container">
        <img
          className="w-full h-auto md:hidden object-cover cursor-pointer" // Use only on mobile screens
           src={img1_mobile} // Use mobile image
          alt="Best Seller Banner"
        />
        <img
          className="hidden md:block w-full h-auto object-cover cursor-pointer w-full" // Use on screens md and above
           src={img1} // Use desktop image
          alt="Best Seller Banner"
        />
      <img
  className="absolute -top-12  right-6  z-1 h-28 " // Adjust positioning as per your requirement
   src={discountImage} // Discount image source
  alt="25% Discount"
/>

      </div>

      <div className="text-center md:text-left m-8">
        <h1 className="text-xl md:text-4xl mx-2 mt-8 font-shubh md:mt-16">
          FRAGRANCES MADE IN INDIA MEN AND WOMEN
        </h1>
        <p className="text-sm font-shubh text-gray-700 md:text-base font-medium md:relative md:top-2 md:p-4 md:ml-8 md:mr-8 md:text-base m-2">
          Discover your signature fragrance from our exclusive collection for Men
        </p>
        <Link to="/destination-page">
          <button className="h-10 px-4 font-shubh mt-8 bg-black text-white transform hover:scale-125 transition duration-500 text-sm relative bottom-3">
            DISCOVER
          </button>
        </Link>
      </div>
    </>
  );
};

export default Sectionimg1;

