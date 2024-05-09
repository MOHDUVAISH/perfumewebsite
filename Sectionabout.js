import React from "react";
import "./App.css";

function Sectionabout({ isAboutPage }) {
  // Conditionally set the CSS class based on whether it's the About page or not
  const textClass = isAboutPage
    ? "text-sm md:text-base"
    : "text-base md:text-lg";

  return (
    <div className="text-center">
      <div className="text-center md:text-left m-1">
        <h1 className="text-2xl font-shubh md:text-5xl mx-2 mt-10 md:mt-10 relative bottom-2">
          ABOUT US
        </h1>
      </div>
      <p
        className={`${textClass} text-gray-900 font-shubh font-normal  leading-relaxed relative bottom-9 text-center md:text-left pl-3 pr-3 pt-10 text-xl`}
      >
        <span className="inline-block text-sm md:text-gray-800 text-base font-shubh font-medium leading-7 pl-3 pr-3 font-shubh">
          The idea is to create modern fragrances with an 'India', rooted within
          the essence of these fragrances. Savour and Aura, is an experiential
          brand, that curates a journey for the user. A touch of oil-based
          fragrances takes us to a world of connecting with earthy elements and
          raw life. Diffuser fragrance oils, and those for the skin, both define
          the sync between mind, body & soul. Mrs. Sadhana Singh strongly
          believes that real beauty holds in originality and so she has used
          Indian vintage flowers & flavors, to develop each of the fragrances.
        </span>
      </p>
    </div>
  );
}

export default Sectionabout;
