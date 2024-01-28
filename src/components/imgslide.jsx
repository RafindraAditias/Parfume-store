/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./components.css";
import { Element } from "react-scroll";
import Slide1 from "./img/slide1.jpeg";
import Slide2 from "./img/slide2.jpeg";
import Slide3 from "./img/slide3.jpeg";
import Slide4 from "./img/slide4.jpeg";
import Slide5 from "./img/slide5.jpeg";
import Slide6 from "./img/slide6.jpeg";

const ImgSlide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideCount = 3;

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 0.5);
    } else {
      setSlideIndex(slideCount - 1);
    }
  };

  const nextSlide = () => {
    if (slideIndex < slideCount - 1) {
      setSlideIndex(slideIndex + 0.5);
    } else {
      setSlideIndex(0);
    }
  };

  return (
    <Element name="gallery-section">
    <div className="imgslide">
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          <img src={Slide1} alt="image 1" className="image1" />
          <img src={Slide2} alt="image 2" className="image2" />
          <img src={Slide3} alt="Image 3" className="image3" />
          <img src={Slide4} alt="Image 4" className="image4" />
          <img src={Slide5} alt="Image 5" className="image5" />
          <img src={Slide6} alt="Image 6" className="image6" />
        </div>
        <a className="prev" onClick={prevSlide}>
          &#10094;
        </a>
        <a className="next" onClick={nextSlide}>
          &#10095;
        </a>
      </div>
    </div>
    </Element>
  );
};

export default ImgSlide;
