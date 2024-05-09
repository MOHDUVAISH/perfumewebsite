import React from "react";
import ReactPlayer from "react-player";
import "tailwindcss/tailwind.css";

const SingleVideo = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-4">
        <h1 className="font-shubh text-xl md:text-4xl lg:text-5xl xl:text-5xl">Youtube </h1>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div
          style={{ position: "relative", width: "97%",  paddingTop: "56.25%" }}
        >
          <ReactPlayer
            controls={true}
            url={"https://youtu.be/O_qMYbOsJEA?si=sppHRPt96NzsUcIG"}
            width="100%"
            height="90%"
            style={{ position: "absolute", top: 0, left: 0 ,  }}
          />
        </div>
      </div>
    </>
  );
};

export default SingleVideo;

