import React from "react";
import { Link } from "react-scroll";
import "./components.css";
import { Element } from "react-scroll";
import Mockup4 from "./img/mockup 4.jpg";
import Mockup3 from "./img/mockup 3.jpg";
import Sign from "./img/sign.jpg";

const Collection = () => {
  return (
    <Element name="Colection">
    <div className="seccond-content">
      <div className="seccond-content-box">
        <img src={Mockup4} alt="FOR MEN" className="imgcolection" />
        <p>
          <Link
            to="formen-section"
            smooth={true}
            duration={500}
            className="scroll-link"
            offset={-40}
          >
            FOR MEN
          </Link>
        </p>
      </div>
      <div className="seccond-content-box">
        <img src={Mockup3} alt="FOR WOMEN" className="imgcolection" />
        <p>
          <Link
            to="forwomen-section"
            smooth={true}
            duration={500}
            className="scroll-link"
            offset={-40}
          >
            FOR WOMEN
          </Link>
        </p>
      </div>
      <div className="seccond-content-box">
        <img src={Sign} alt="OUR GALLERY" className="imgcolection" />
        <p>
          <Link
            to="gallery-section"
            smooth={true}
            duration={500}
            className="scroll-link"
            offset={-70}
          >
            OUR GALLERY
          </Link>
        </p>
      </div>
    </div>
    </Element>
  );
};

export default Collection;
