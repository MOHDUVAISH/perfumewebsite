import React from 'react'
import logo from "./All Icons/logo2.png";

const LastImg = () => {
  return (
    <>
      {/* Image for desktop screens */}
      <div className="hidden lg:block w-full h-2  bg-white text-black text-center font-subh">
        <div className="flex justify-center items-center h-full">
          <a href="#">
            <img  className="h-20 mt-12"  src={logo} alt="Logo" />
          </a>
        </div>
      </div>

      {/* Image for mobile screens */}
      <div className="w-full h-20 relative top-2 relative bottom-14  bg-white text-black text-center font-subh text-2xl block sm:hidden lg:hidden flex justify-center items-center">
        <a href="#">
          <img  className="h-14 mb-12" src={logo} alt="Logo" />
        </a>
      </div>
    </>
  )
}

export default LastImg
