import React from "react";
import insta from './All images/insta.jpg';

function Insta (){
    return (
      <>
        <div className="">
        <h3 className="text-center font-shubh text-xl mb-6 sm:text-5xl">Instagram feed</h3>


          {/* <div class="elfsight-app-6d9db673-01a6-4b8a-a131-ec06422b2410" data-elfsight-app-lazy></div> */}
          <div class="flex justify-center ">
            <img
              class="object-cover w-full h-auto"
              src={insta}
              alt="Instagram Image"
            />
          </div>
        </div>
      </>
    );
}

export default Insta;