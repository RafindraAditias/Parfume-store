import React from "react";
import "./components.css";
import LogoMedina from "./img/Logo Medina Fragrance 1-01.png";
import ModelBanner from "./img/model.png";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <main className="Banner">
      <div class="first-content-left">
        <img src={LogoMedina} alt="first-content-logo" />
        <h2>FRAGRANCE WITH THE BEST QUALITY</h2>
        <h1>YOUR LOVELY FRAGRANCE</h1>
        <Link
          to="Colection"
          smooth={true}
          duration={500}
          className="scroll-link"
          offset={-130}
        >
          <button type="button">SHOP NOW</button>
        </Link>
      </div>
      <div class="first-content-right">
        <div class="first-content-background-model"></div>
        <img src={ModelBanner} alt="first-content-model" />
      </div>
    </main>
  );
};

export default Banner;
