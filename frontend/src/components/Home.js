// Carousel.js


// ImageSlider.js
// import React from 'react';
// import  { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import "../styles/NewCrousel.css";
// import Image1 from "../assets/NgoHome1.jpg"
// import Image2 from "../assets/localimg.jpg"
// import Image3 from "../assets/Image3.jpg"
// import Image4 from "../assets/Image4.jpg"




// const images = [
//   Image1,
//   Image2,
//   Image3,
//   Image4,
//   'https://via.placeholder.com/1600x600/33C4FF/FFFFFF?text=Image+2',
//   'https://via.placeholder.com/1600x600/33FF57/FFFFFF?text=Image+3',
// ];

// const ImageSlider = () => {
//   const [index, setIndex] = useState(0);

//   // Spring for smooth transitions
//   const fadeIn = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     reset: true,
//   });

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="slider-container">
//       <animated.div className="slider-image" style={fadeIn}>
//         <img src={images[index]} alt={`Slide ${index + 1}`} />
//       </animated.div>
//       <button className="prev-btn" onClick={prevSlide}>
//         &#10094;
//       </button>
//       <button className="next-btn" onClick={nextSlide}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;


// src/components/ImageSlider.js

// src/components/ImageSlider.js

import React, { useState, useEffect } from 'react';
import "../styles/ImageSlider.css"; // Import the CSS file
import Navbar from "./Navbar"
import Layout from "../pages/Layout"
// Import images
import Image1 from "../assets/NgoHome1.jpg";
import Image2 from "../assets/localimg.jpg";
import Image3 from "../assets/Image3.jpg";
import Home1 from "../assets/Home1.jpg";
import Home2 from "../assets/Home2.jpg";
import Home3 from "../assets/Home3.jpg" ;
import Home5 from "../assets/Home5.png";
import Home6 from "../assets/Home6.png";






const images = [Image1, Image2, Image3,Home1,Home2,Home3,Home5,Home6];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((image, i) => (
          <div key={i} className="slider-image">
            <img src={image} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    <Layout/>
</>

  );
};
export default ImageSlider;

