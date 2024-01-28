/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./components.css";
import LogoMedina from "./img/Logo Medina Fragrance-01.png"
import LogoNama from "./img/Nama-01.png"

const Footer = () => {
    return(
      <footer>
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-top-left-logo">
            <img className="logo" src={LogoMedina} alt="" />
            <img className="logo-nama" src={LogoNama} alt="" />
          </div>
          <p>
            MEDINA FRAGRANCE. Your Lovely Fragrance. Captivating Perfumes.
            Uncompromising quality. Join us and discover the beauty of
            fragrances.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-top-right-1">
            <h1 className="footer-top-right-1-title">COMPANY</h1>
            <p>Support</p>
            <p>Info</p>
            <p>Marketing</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer-top-right-2">
            <h1 className="footer-top-right-2-title">ADDRESS</h1>
            <p>California</p>
            <p>New Darrellburgh 92578</p>
            <p>Von View</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom-line"></div>
      <div className="footer-bottom">
        <p>2023 MEDINA FRAGRANCE. All Right reserved</p>
        <p></p>
      </div>
    </footer>
    );
};

export default Footer;