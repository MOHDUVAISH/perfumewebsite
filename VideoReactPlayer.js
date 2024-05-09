

import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import videoDesktop from "./assets/video1.mp4";
import videoMobile from "./assets/video2.mp4";

const ReactVideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Start loading the video as soon as the component mounts
    videoRef.current.load();
  }, []);

  // Function to determine if the device is a mobile phone
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  // Choose the appropriate video based on the device type
  const videoUrl = isMobile() ? videoMobile : videoDesktop;

  return (
    <div className="relative w-full h-full object-cover">
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        playsInline
        muted
        loop
        width="100%"
        height="100%"
        controls={false}
        preload="auto" // Preload the video
      />
    </div>
  );
};

export default ReactVideoPlayer;
