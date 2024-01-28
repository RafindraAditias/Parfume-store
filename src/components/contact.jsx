import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./components.css";
import Email from "./fotocontact/email.png";
import Facebook from "./fotocontact/facebook.png";
import Instagram from "./fotocontact/instagram.png";
import Logo from "./fotocontact/Logo Medina Fragrance 1-01.png";
import Model from "./fotocontact/model_2-removebg-preview.png";
import Nama from "./fotocontact/Nama 1-01.png";
import Twitter from "./fotocontact/twitter.png";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ty3a49",
        "template_xz6tzpi",
        form.current,
        "PfuywYSpzv2vpVzRC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-contact">
      <div className="container-contact-1">
        <div className="main-content">
          <div className="main-content-1">
            <div>
              <h1>GLOBAL</h1>
              <p>1019 Market St</p>
              <p>San Fransisco, CA 94103</p>
              <p>888-670-4887</p>
            </div>
            <div>
              <h1>AUSTRALIA</h1>
              <p>3/395 Collins St</p>
              <p>Melbourne VIC 3000</p>
              <p>Australia</p>
              <p>+61 3 9008 6775</p>
            </div>
          </div>
          <div className="main-content-2">
            <div>
              <h1>DENMARK</h1>
              <p>Snaregade 12</p>
              <p>1205 Kobenhavn</p>
              <p>Denmark</p>
              <p>+45 30 308 08524</p>
            </div>
            <div>
              <h1>FRANCE</h1>
              <p>266 Place Ernest Grainer</p>
              <p>34000 Montpellier</p>
              <p>France</p>
              <p>+33 9 75 18 20 86</p>
            </div>
          </div>
          <div className="main-content-3">
            <div>
              <h1>GERMANY</h1>
              <p>Neue Schonhauser Str. 3-5</p>
              <p>10178 Berlin</p>
              <p>Germany</p>
              <p>+49 30 308 08524</p>
            </div>
            <div>
              <h1>INDONESIA</h1>
              <p>Ki. Monginsida N0. 161</p>
              <p>51553 Jakarta Barat</p>
              <p>Indonesia</p>
              <p>+62 858 9475 2515</p>
            </div>
          </div>
        </div>
        <div className="main-content-4">
          <img src={Model} alt="content-model" className="content-model" />
          <img
            src={Logo}
            alt="content-model-logo"
            className="content-model-logo"
          />
        </div>
      </div>
      <div className="container-contact-2">
        <div className="seccond-contact">
          <div className="seccond-content-1">
            <img src={Instagram} alt="seccond-content-logo" />
            <a href="https://instagram.com/medina.fragrance?igshid=ZGUzMzM3NWJiOQ==">@Medina_Fragrance</a>
          </div>
          <div className="seccond-content-2">
            <img src={Facebook} alt="seccond-content-logo" />
            <a href="https://www.facebook.com/profile.php?id=100094455253166&mibextid=ZbWKwL">@Medina_Fragrance</a>
          </div>
          <div className="seccond-content-3">
            <img src={Twitter} alt="seccond-content-logo" />
            <a href="https://twitter.com/MDNFragrance?t=BgBqloylUbqNjS_pBPePNw&s=33">@Medina_Fragrance</a>
          </div>
        </div>
        <div className="seccond-content-4">
          <img src={Nama} alt="seccond-content-logo" />
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="container-contact-33">
          <div className="third-content-13">
            <h1>GET IN TOUCH</h1>
            <p>HAVE SOME QUESTION?</p>
            <img src={Email} alt="third-content-logo" />
          </div>
          <div className="third-content33">
            <div className="nama-email">
              <div className="third-content-22">
                <label>NAME</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name..."
                  className="third-content-input3"
                />
              </div>
              <div className="third-content-33">
                <label>EMAIL</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="third-content-input3"
                />
              </div>
            </div>
            <div className="subeject-message">
              <div className="third-content-44">
                <label>SUBJECT</label>
                <input
                  type="text"
                  name="user_subject"
                  placeholder="Subject"
                  className="third-content-input"
                />
              </div>
              <div className="third-content-55">
                <label>MESSAGE</label>
                <textarea
                  name="message"
                  cols="48"
                  rows="10"
                  placeholder="Message"
                  className="third-content-input-5"
                ></textarea>
              </div>
            </div>
            <div className="third-content-66">
              <button type="submit">SUBMIT</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
