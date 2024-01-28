import React from "react";
import "./components.css";
import Aisyah from "./Content-Profile/aisyah.jpg";
import Aldi from "./Content-Profile/aldi.jpg";
import Andhika from "./Content-Profile/andhika.jpg";
import Atun from "./Content-Profile/atun.jpg";
import Dennis from "./Content-Profile/dennis.jpg";
import Iyan from "./Content-Profile/iyan.jpg";
import Khatsu from "./Content-Profile/khatsu.jpg";
import Rafi from "./Content-Profile/rafi.jpg";
import Raihan from "./Content-Profile/raihan.jpg";
import Afrizal from "./Content-Profile/afrizal.jpg"
import Sutan from "./Content-Profile/sutan.jpg";
import Model1 from "./Content-Profile/model 1.jpg";

const About = () => {
  return (
    <div className="About">
      <div className="top-model">
        <img src={Model1} alt="Dokumentasi" />
        <p>ABOUT US</p>
      </div>
      <div className="content-head1">
        <h1>YOUR LOVELY FRAGRANCE</h1>
        <p>
          Welcome to MEDINA FRAGRANCE, the trusted source for captivating and
          personality-reflected exclusive fragrances. We offer the finest
          collection of perfumes from renowned brands, with a focus on
          authenticity and customer satisfaction. With an easy online shopping
          experience and responsive customer service, we are committed to
          providing an unparalleled experience in creating beauty and confidence
          through fragrances. Join us at MEDINA FRAGRANCE and discover alluring
          and enchanting scents.
        </p>
      </div>
      <div className="content-head2">
        <h1>OUR MISSION</h1>
        <p>
          Our mission at MEDINA FRAGRANCE is to provide our customers with the
          best quality perfumes. We are committed to delivering an exceptional
          shopping experience by offering the most comprehensive selection from
          world-renowned perfume brands. Customer satisfaction is our top
          priority, and we strive to provide responsive and professional
          customer service. Additionally, we aim to inspire our customers to
          express themselves through confidence-boosting fragrances. We also
          care about the environment and the community, focusing on sustainable
          practices and supporting eco-friendly perfume products. Join us at
          MEDINA FRAGRANCE and discover captivating, uplifting, and
          beauty-reflecting perfumes that resonate with your true self.
        </p>
      </div>
      <div className="content-profile-title">
        <h1>TEAM MEMBER</h1>
      </div>
      <div className="content-profile">
        <div>
          <img src={Rafi} alt="Profil image" />
          <p>MOCH RAFINDRA ADITIAS</p>
          <p className="npm">227006516059</p>
        </div>
        <div>
          <img src={Raihan} alt="profile-image" />
          <p>M. RAIHAN PUTRA F.</p>
          <p className="npm">227006516069</p>
        </div>
        <div>
          <img src={Andhika} alt="profile-image" />
          <p>ANDIKA PRATAMA</p>
          <p className="npm">227006516072</p>
        </div>
      </div>
      <div className="content-profile">
        <div>
          <img src={Aldi} alt="profile-image" />
          <p>ALDIFA HADIZH</p>
          <p className="npm">227006516100</p>
        </div>
        <div>
          <img src={Dennis} alt="profile-image" />
          <p>DENNIS FERNANDO</p>
          <p className="npm">227006516096</p>
        </div>
        <div>
          <img src={Khatsu} alt="profile-image" />
          <p>KHANSA ZAKIYAH</p>
          <p className="npm">2227006516074</p>
        </div>
      </div>
      <div className="content-profile">
        <div>
          <img src={Aisyah} alt="profile-image" />
          <p>AISYAH NUR O</p>
          <p className="npm">227006516066</p>
        </div>
        <div>
          <img src={Afrizal} alt="profile-image" />
          <p>AFRIZAL RINO NUR ALFIAN</p>
          <p className="npm">227006516111</p>
        </div>
        <div>
          <img src={Atun} alt="profile-image" />
          <p>MAULIDATUN NAZWA</p>
          <p className="npm">227006516050</p>
        </div>
      </div>
      <div className="content-profile">
        <div>
          <img src={Iyan} alt="profile-image" />
          <p>FERDIANSYACH</p>
          <p className="npm">227006516093</p>
        </div>
        <div>
          <img src={Sutan} alt="profile-image" />
          <p>SUTAN SAFAH TIRZAVIANTO</p>
          <p className="npm">227006516128</p>
        </div>
      </div>
      <div className="content-head2">
        <h1>OUR CULTURE</h1>
        <p>
          Our culture at MEDINA FRAGRANCE is based on beauty, creativity,
          community, experience, and quality. We view beauty as an endless
          source of inspiration, reflected in every perfume we present. We
          foster an environment that nurtures creativity, encouraging our team
          to think outside the box and generate unique perfume concepts. We
          build a strong community around the love for perfumes and beauty,
          where we share knowledge, experiences, and inspiration. We are
          committed to delivering an unforgettable experience to our customers
          through a user-friendly website, in-depth information about
          fragrances, and responsive customer service. We emphasize
          uncompromising quality by providing only genuine and high-quality
          perfumes. With this culture as our foundation, we at MEDINA FRAGRANCE
          are ready to be your partner in exploring the enchanting world of
          perfumes, offering captivating, inspiring, and spirit-awakening
          experiences through every fragrance we offer.
        </p>
      </div>
    </div>
  );
};

export default About;
