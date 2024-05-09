
import React from 'react';
import Search from "./All Icons/search.png";
import bag from "./All Icons/beg.png";
import home from "./All Icons/home.png";

const StickyFooter = () => {
  // Function to check if the current device is a mobile device
  const isMobile = () => {
    return window.innerWidth <= 768; // Assuming tablets have a width greater than 768px
  };

  // Render footer only on mobile devices
  if (isMobile()) {
    return (
      <div className="flex flex-col mt-6 ">
        {/* Main content of the page. It should be outside the footer to ensure the footer stays at the bottom */}
      
        {/* Footer will always be fixed at the bottom of the screen, but hidden on tablet and desktop sizes */}
        <footer className="bg-white text-white p-2.5 fixed bottom-0  w-full block md:hidden lg:hidden border-t-2 border-gray z-10">
          <div className="flex justify-around ">
            <div className="border-r-2 border-gray pr-16">
              <img src={Search} alt="Search Icon" className="w-8 h-8 md:w-16 md:h-16" />
            </div>
            <div className="border-r-2 border-gray pr-16">
              <img src={home} alt="Missing Logo" className="w-6 h-6 md:w-16 md:h-16 relative top-1" />
            </div>
            <div>
              <img src={bag} alt="Bag Icon" className="w-8 h-8 md:w-16 md:h-16" />
            </div>
          </div>
        </footer>
      </div>
    );
  } else {
    // Render nothing on tablet and desktop screens
    return null;
  }
};

export default StickyFooter;


