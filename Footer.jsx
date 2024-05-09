

import React, { useState } from "react";
import insta from "./All Icons/4.1.png";
import fb from "./All Icons/5.1.png";
import mail from "./All Icons/6.png";
import rightarrow from "./All Icons/right.png";
import logo from "./All Icons/logo2.png";

const Footer = () => {
  // State for managing dropdown visibility on mobile screens
  const [isSupportOpen, setSupportOpen] = useState(false);
  const [isSubscribeOpen, setSubscribeOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);

  return (
    <footer className="bg-black h-58 text-white py-4 lg:py-8 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:gap-32 ">
        {/* Support section */}
        <div className="flex-1 mb-2 lg:mb-2 lg:mr-20 mt-2 font-himan">
          <div className="flex justify-between items-center lg:flex-col lg:items-start">
            <h3
              className="text-base lg:text-lg font-medium mb-2 lg:mb-4 cursor-pointer"
              onClick={() => setSupportOpen(!isSupportOpen)}
            >
              Support
            </h3>
            {/* Toggle button for mobile screens */}
            <button
              className="lg:hidden"
              onClick={() => setSupportOpen(!isSupportOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`${
                  isSupportOpen ? "-rotate-180" : "rotate-0"
                } w-8 h-8 inline-block`}
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown menu for Support - only on mobile screens */}
          {isSupportOpen && (
            <div className="lg:hidden text-sm lg:text-base mb-2 lg:mb-2">
              <p>About Us</p>
              <p>Terms & Services</p>
              <p>Contact</p>
              <p>Call - 9899893834 </p>
              <p>Email - support@Savour&aura.com</p>
            </div>
          )}

          {/* Always visible content for desktop screens */}
          <div className="hidden lg:block text-sm lg:text-base mb-2 lg:mb-2 mt-2">
            <p className="mb-0 lg:mb-0">About Us</p>
            <p className="mb-0 lg:mb-0">Terms & Services</p>
            <p className="mb-0 lg:mb-0">Contact</p>
            <p className="mb-0 lg:mb-0">Call - 9899893834</p>
            <p className="mb-0 lg:mb-0">Email - support@Savour&aura.com</p>
          </div>
        </div>

        {/* Subscribe section */}
        <div className="flex-2 mb-2 lg:mb-2 lg:mr-20 mt-2">
          <div className="flex justify-between items-center lg:flex-col lg:items-start">
            <h3
              className="text-base lg:text-lg font-medium mb-2 lg:mb-4 cursor-pointer"
              onClick={() => setSubscribeOpen(!isSubscribeOpen)}
            >
              Subscribe
            </h3>
            {/* Toggle button for mobile screens */}
            <button
              className="lg:hidden"
              onClick={() => setSubscribeOpen(!isSubscribeOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`${
                  isSubscribeOpen ? "-rotate-180" : "rotate-0"
                } w-8 h-8 inline-block`}
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown menu for Subscribe - only on mobile screens */}
          {isSubscribeOpen && (
            <>
              <p className="lg:hidden text-sm font-himan lg:text-base mb-2 lg:mb-4 line-clamp-2">
                Enter your email below to be the first to know about new
                collections and product launches.
              </p>
              <div className="lg:hidden flex flex-col lg:flex-row items-center relative">
                <div className="relative flex items-center w-full lg:max-w-96">
                  <img
                    className="absolute left-3 top-/3 transform -translate-y-1/4 text-gray-500 h-5 w-5"
                    src={mail}
                    alt="mail icon"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-white text-gray-900 px-54 py-2 focus:outline-none w-full text-sm lg:text-base mb-2 lg:mb-0 pl-12"
                  />
                  <img
                    className="absolute right-3 top-1/3 transform -translate-y-1/4 text-gray-500 h-5 w-5"
                    src={rightarrow}
                    alt="mail icon"
                  />
                </div>
              </div>
              <div className="lg:hidden flex font-shubh justify-start lg:justify-start lg:mt-2 lg:ml-2">
                <img className="h-5 w-5 mr-2" src={insta} alt="" />
                <img className="h-5 w-5" src={fb} alt="" />
              </div>
            </>
          )}

          {/* Always visible content for desktop screens */}
          <div className="hidden lg:block text-sm lg:text-base mb-6 lg:mb-4 line-clamp-2">
            Enter your email below to be the first to know about new collections
            and product launches.
          </div>
          <div className="hidden lg:flex lg:items-center relative">
            <div className="relative flex items-center w-full lg:max-w-96">
              <img
                className="absolute left-3 top-/3 transform -translate-y-1/4 text-gray-500 h-5 w-5"
                src={mail}
                alt="mail icon"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-white text-gray-900 px-54 py-2 focus:outline-none w-full text-sm lg:text-base mb-2 lg:mb-0 pl-12"
              />
              <img
                className="absolute right-3 top-1/3 transform -translate-y-1/4 text-gray-500 h-5 w-5"
                src={rightarrow}
                alt="mail icon"
              />
            </div>
          </div>
          <div className="hidden lg:flex font-shubh justify-start lg:justify-start lg:mt-2 lg:ml-2">
            <img className="h-5 w-5 mr-2" src={insta} alt="" />
            <img className="h-5 w-5" src={fb} alt="" />
          </div>
        </div>

        {/* Company section */}
        <div className="flex-1 font-himan mt-2">
          <div className="flex justify-between items-center lg:flex-col lg:items-start">
            <h3
              className="text-base lg:text-lg font-medium mb-2 lg:mb-4 cursor-pointer"
              onClick={() => setCompanyOpen(!isCompanyOpen)}
            >
              Company
            </h3>
            {/* Toggle button for mobile screens */}
            <button
              className="lg:hidden"
              onClick={() => setCompanyOpen(!isCompanyOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`${
                  isCompanyOpen ? "-rotate-180" : "rotate-0"
                } w-8 h-8 inline-block`}
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown menu for Company- only on mobile screens */}
          {isCompanyOpen && (
            <div className="lg:hidden text-sm lg:text-base  lg:mb-2 mr-28">
              <p>PrivacyPolicy</p>
              <p>ShippingPolicy</p>
              <p>RefundPolicy</p>
            </div>
          )}

          {/* Always visible content for desktop screens */}
          <div className="hidden lg:block text-sm lg:text-base lg:mb-2">
            <p>PrivacyPolicy</p>
            <p>ShippingPolicy</p>
            <p>RefundPolicy</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;






