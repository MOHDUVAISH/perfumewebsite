import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App';
import Heder2 from './Hesader2';
import ReactVideoPlayer from './VideoReactPlayer';
import Sectionimg1 from './Sectionimg1';
import AliceCarousel from './AliceCarousel';
import Sectionimg2 from './Sectionimg2';
import Sectionimg3 from './Sectionimg3';
import Footer from './Footer';
import Sectionabout from './Sectionabout'
import Insta from './Insta';
import TextSlider from './TextSlider';
import Alicecarousels1 from './Alicecarousel1';
import Alicecarousels2 from './Alicecarousel2';
import StickyFooter from './stickyfooter';
import SingleVideo from './SingleVideo';
import LastImg from './LastImg';










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <>
 <Heder2/>
      <ReactVideoPlayer/>
      <Sectionabout/>
   
   
      <Sectionimg1/>
      <AliceCarousel/>
      <Sectionimg2/>
      <Alicecarousels1/>
    
      <Sectionimg3/>
      <Alicecarousels2/>
      <TextSlider/>
    <Insta/>
    <SingleVideo/>
  
      <Footer/>
      <LastImg/>
  
      <StickyFooter/>
      
     
    </>
  </BrowserRouter>
);

