



import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img21 from "./Star images/starimg.png";
import img22 from "./Star images/Miniimg.png";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};

const items = [
  <div className="relative cursor-pointer select-none">
    <div className="bg-white rounded-lg p-4 mb-4 transition duration-300 transform hover:shadow-md hover:border ml-4 hover:-translate-y-2">
      <h5 className="text-xl ml-2">sid</h5>
      <img className="w-24 ml-2 mb-2" src={img21} alt="" />
      <h5 className="text-base font-medium ml-2">Price Well</h5>
      <p className="border-b border-gray-300 pb-2 ml-2 text-gray-500 text-base">
        A sophisticated mild fragrance that lights me up every time would highly
        recommend this day wear. Great citrusy and woody perfume
      </p>
      <img className="w-12 h-12 ml-2" src={img22} alt="" />
      <h4 className="text-lg ml-20 -mt-10 ">Citrus Amber 50ML</h4>
    </div>
  </div>,
  <div className="relative ml-4 cursor-pointer select-none">
    <div className="bg-white rounded-lg p-4 mb-4 transition duration-300 transform hover:shadow-md hover:border ml-4 hover:-translate-y-2">
      <h5 className="text-xl ml-2">Naina</h5>
      <img className="w-24 ml-2 mb-2" src={img21} alt="" />
      <h5 className="text-base font-medium ml-2">Love it</h5>
      <p className="border-b border-gray-300 pb-2 ml-2 text-gray-500 text-base">
        This is such a beautiful fragrence! Works best for all. i bought this
        one for my friend' b' day and she loved it! the new branding looks
        international.{" "}
      </p>
      <img className="w-12 h-12 ml-2" src={img22} alt="" />
      <h4 className="text-lg ml-20  -mt-10">Vanilla Wood 50ML</h4>
    </div>
  </div>,
  <div className="relative ml-4 cursor-pointer select-none">
    <div className="bg-white rounded-lg p-4 mb-4 transition duration-300 transform hover:shadow-md hover:border ml-4 hover:-translate-y-2">
      <h5 className="text-xl ml-2">Neha and Rahul</h5>
      <img className="w-24 ml-2 mb-2" src={img21} alt="" />
      <h5 className="text-base font-medium ml-2">Oud for everyday use</h5>
      <p className="border-b border-gray-300 pb-2 ml-2 text-gray-500 text-base">
        This one is an underdog! bought it for my self, but my fiance loved it
        so much that ordering a second bottle
      </p>
      <img className="w-12 h-12 ml-2" src={img22} alt="" />
      <h4 className="text-lg ml-20  -mt-10 ">Persian Oud 50ML</h4>
    </div>
  </div>,
  <div className="relative ml-4 cursor-pointer select-none">
    <div className="bg-white rounded-lg p-4 mb-4 transition duration-300 transform hover:shadow-md hover:border ml-4 hover:-translate-y-2">
      <h5 className="text-xl ml-2">sid</h5>
      <img className="w-24 ml-2 mb-2" src={img21} alt="" />
      <h5 className="text-base font-medium ml-2">Price Well</h5>
      <p className="border-b border-gray-300 pb-2 ml-2 text-gray-500 text-base">
        A sophisticated mild fragrance that lights me up every time would highly
        recommend this day wear. Great citrusy and woody perfume
      </p>
      <img className="w-12 h-12 ml-2" src={img22} alt="" />
      <h4 className="text-lg ml-20  -mt-10 ">Citrus Amber 50ML</h4>
    </div>
  </div>,
  <div className="relative ml-4 cursor-pointer select-none">
    <div className="bg-white rounded-lg p-4 mb-4 transition duration-300 transform hover:shadow-md hover:border ml-4 hover:-translate-y-2">
      <h5 className="text-xl ml-2">sid</h5>
      <img className="w-24 ml-2 mb-2" src={img21} alt="" />
      <h5 className="text-base font-medium ml-2">Price Well</h5>
      <p className="border-b border-gray-300 pb-2 ml-2 text-gray-500 text-base">
        A sophisticated mild fragrance that lights me up every time would highly
        recommend this day wear. Great citrusy and woody perfume
      </p>
      <img className="w-12 h-12 ml-2" src={img22} alt="" />
      <h4 className="text-lg ml-20  -mt-10 ">Citrus Amber 50ML</h4>
    </div>
  </div>,
  <div className="relative ml-4 cursor-pointer select-none">
    <div className="bg-white rounded-lg p-4 mb-4 transition duration-300 transform hover:shadow-md hover:border ml-4 hover:-translate-y-2">
      <h5 className="text-xl ml-2">sid</h5>
      <img className="w-24 ml-2 mb-2" src={img21} alt="" />
      <h5 className="text-base font-medium ml-2">Price Well</h5>
      <p className="border-b border-gray-300 pb-2 ml-2 text-gray-500 text-base">
        A sophisticated mild fragrance that lights me up every time would highly
        recommend this day wear. Great citrusy and woody perfume
      </p>
      <img className="w-12 h-12 ml-2" src={img22} alt="" />
      <h4 className="text-base ml-20  -mt-10 ">Citrus Amber 50ML</h4>
    </div>
  </div>,
  <div className="relative ml-4 cursor-pointer select-none">
    <div className="bg-white rounded-lg p-4 mb-4 transition duration-300 transform hover:shadow-md hover:border ml-4 hover:-translate-y-2">
      <h5 className="text-xl ml-2">sid</h5>
      <img className="w-24 ml-2 mb-2" src={img21} alt="" />
      <h5 className="text-base font-medium ml-2">Price Well</h5>
      <p className="border-b border-gray-300 pb-2 ml-2 text-gray-500 text-base">
        A sophisticated mild fragrance that lights me up every time would highly
        recommend this day wear. Great citrusy and woody perfume
      </p>
      <img className="w-12 h-12 ml-2" src={img22} alt="" />
      <h4 className="text-lg ml-20  -mt-10 ">Citrus Amber 50ML</h4>
    </div>
  </div>,
];

const TextSlider = () => (
  <div>
    <h1 className="text-xl md:text-4xl mx-2 mt-4 font-shubh md:mt-6 md:mb-10 text-center">
      What People Are Saying
    </h1>
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableDotsControls
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  </div>
);


export default TextSlider;









