import React, { useState, useEffect } from 'react';
import './Heder.css';
import Search from './All Icons/search.png';
import logo from './All Icons/logo2.png';
import star from './All Icons/star.png';
import bag from './All Icons/beg.png';
import ham from './All Icons/ham.png';

function Heder2() {
  const [showLow, setShowLow] = useState(false);

  const toggleLow = () => {
    setShowLow(!showLow);
  };

  useEffect(() => {
    // Close the low div when clicked outside of it
    const handleClickOutside = (event) => {
      const lowDiv = document.querySelector('.low');
      if (lowDiv && !lowDiv.contains(event.target)) {
        setShowLow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="div1">
          <a href="#">
            <img  loading="lazy" src={Search} />
          </a>
        </div>
        <div className="div2">
          <a href="#">
            <img loading="lazy" src={logo} />
          </a>
        </div>
        <div className="div3">
          <div className="d3">
            <a href="#">
              <img className="img1" loading="lazy"  src={star} />
            </a>
            <a href="#">
              <img className="img2" loading="lazy" src={bag} />
            </a>
            <a href="#" onClick={toggleLow}>
              <img className="img3" loading="lazy" src={ham} />
            </a>
          </div>
        </div>
      </div>
      <nav class="flex justify-center font-shubh">
        <ul className="nav1 font-shubh">
          <li>
            <a href="#">B2B</a>
          </li>
          <li>
            <a href="#"> HOME</a>
          </li>
          <li>
            <a href="#"> ABOUT US</a>
          </li>
          <li>
            <a href="#">SHOP NOW</a>
          </li>
          <li>
            <a href="#">GIFTING</a>
          </li>
          <li>
            <a href="#">WEDDING</a>
          </li>

          <li>
            <a href="#"> PR & MEDIA</a>
          </li>
          <li>
            <a href="#">CONTACT US </a>
          </li>
        </ul>
      </nav>

      <div className={`low ${showLow ? "show" : ""}`}>
        <div className="l-c">
          <ul className="nav-f">
            <li>
              <a href="#">B2B</a>
            </li>
            <li>
              <a href="#"> HOME</a>
            </li>
            <li>
              <a href="#"> ABOUT US</a>
            </li>
            <li>
              <a href="#">SHOP NOW</a>
            </li>
            <li>
              <a href="#">GIFTING</a>
            </li>
            <li>
            <a href="#">WEDDING</a>
          </li>
            <li>
              <a href="#"> PR & MEDIA</a>
            </li>
            <li>
              <a href="#">CONTACT US </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Heder2;


