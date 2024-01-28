import "./components.css";
import "./product.css";
import emailjs from "emailjs-com";
import React, { useState, useRef } from "react";
import { Element } from "react-scroll";
import Mockup1 from "./img/formen/mockup 1.jpg";
import Mockup2 from "./img/formen/mockup 2.jpg";
import Mockup3 from "./img/formen/mockup 3.jpg";
import Mockup4 from "./img/formen/mockup 4.jpg";
import Mockup6 from "./img/formen/mockup 6.jpg";
import Mockup7 from "./img/formen/mockup 7.jpg";
import Mockup8 from "./img/formen/mockup 8.jpg";
import Mockup10 from "./img/formen/mockup 10.jpg";

// npm i @emailjs/browser

const Formenandgirl = () => {
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

  const [isPaymentVisible, setPaymentVisible] = useState(false);

  const handleProductButtonClick = () => {
    setPaymentVisible(true);
  };

  const handleCloseButtonClick = () => {
    setPaymentVisible(false);
  };

  const [isPaymentVisible2, setPaymentVisible2] = useState(false);

  const handleProductButtonClick2 = () => {
    setPaymentVisible2(true);
  };

  const handleCloseButtonClick2 = () => {
    setPaymentVisible2(false);
  };

  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const handleProductButtonClickDescription = () => {
    setDescriptionVisible(true);
  };

  const handleCloseButtonClickDescription = () => {
    setDescriptionVisible(false);
  };

  const [isDescriptionVisible2, setDescriptionVisible2] = useState(false);

  const handleProductButtonClickDescription2 = () => {
    setDescriptionVisible2(true);
  };

  const handleCloseButtonClickDescription2 = () => {
    setDescriptionVisible2(false);
  };

  const [isDescriptionVisible3, setDescriptionVisible3] = useState(false);

  const handleProductButtonClickDescription3 = () => {
    setDescriptionVisible3(true);
  };

  const handleCloseButtonClickDescription3 = () => {
    setDescriptionVisible3(false);
  };

  const [isDescriptionVisible4, setDescriptionVisible4] = useState(false);

  const handleProductButtonClickDescription4 = () => {
    setDescriptionVisible4(true);
  };

  const handleCloseButtonClickDescription4 = () => {
    setDescriptionVisible4(false);
  };

  const [isDescriptionVisible5, setDescriptionVisible5] = useState(false);

  const handleProductButtonClickDescription5 = () => {
    setDescriptionVisible5(true);
  };

  const handleCloseButtonClickDescription5 = () => {
    setDescriptionVisible5(false);
  };

  const [isDescriptionVisible6, setDescriptionVisible6] = useState(false);

  const handleProductButtonClickDescription6 = () => {
    setDescriptionVisible6(true);
  };

  const handleCloseButtonClickDescription6 = () => {
    setDescriptionVisible6(false);
  };

  const [isDescriptionVisible7, setDescriptionVisible7] = useState(false);

  const handleProductButtonClickDescription7 = () => {
    setDescriptionVisible7(true);
  };

  const handleCloseButtonClickDescription7 = () => {
    setDescriptionVisible7(false);
  };

  const [isDescriptionVisible8, setDescriptionVisible8] = useState(false);

  const handleProductButtonClickDescription8 = () => {
    setDescriptionVisible8(true);
  };

  const handleCloseButtonClickDescription8 = () => {
    setDescriptionVisible8(false);
  };

  return (
    <div className="container-for">
      <Element name="formen-section" className="contoh">
      <div className="for-section">
        <h1 id="formen">FOR MEN</h1>
        <div className="for-section-card">
          <div className="product-card">
            <img src={Mockup4} alt="" />
            <div className="product-card-text">
              <div className="product-name">
                <h1>MYSTIQOUR</h1>
                <h2>NOIR</h2>
              </div>
              <div className="product-price">
                <h3>300$</h3>
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={handleProductButtonClick}
                ></i>
                <i
                  className="fa-solid fa-clipboard"
                  onClick={handleProductButtonClickDescription}
                ></i>
              </div>
            </div>
          </div>
          <div className="product-card">
            <img src={Mockup1} alt="" />
            <div className="product-card-text">
              <div className="product-name">
                <h1>ETERNAL</h1>
                <h2>ESSENCE</h2>
              </div>
              <div className="product-price">
                <h3>300$</h3>
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={handleProductButtonClick}
                ></i>
                <i
                  className="fa-solid fa-clipboard"
                  onClick={handleProductButtonClickDescription2}
                ></i>
              </div>
            </div>
          </div>
          <div className="product-card">
            <img src={Mockup7} alt="" />
            <div className="product-card-text">
              <div className="product-name">
                <h1>SERENITY</h1>
                <h2>WHISPER</h2>
              </div>
              <div className="product-price">
                <h3>300$</h3>
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={handleProductButtonClick}
                ></i>
                <i
                  className="fa-solid fa-clipboard"
                  onClick={handleProductButtonClickDescription3}
                ></i>
              </div>
            </div>
          </div>
          <div className="product-card">
            <img src={Mockup8} alt="" />
            <div className="product-card-text">
              <div className="product-name">
                <h1>ENCHANTED</h1>
                <h2>DREAMS</h2>
              </div>
              <div className="product-price">
                <h3>300$</h3>
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={handleProductButtonClick}
                ></i>
                <i
                  className="fa-solid fa-clipboard"
                  onClick={handleProductButtonClickDescription4}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Element>
      <Element name="forwomen-section" className="footer-section">
      <div className="for-section">
        <h1 id="forwomen">FOR WOMEN</h1>
        <div className="for-section-card">
          <div className="product-card">
            <img src={Mockup3} alt="" />
            <div className="product-card-text">
              <div className="product-name">
                <h1>RADIANT</h1>
                <h2>AURA</h2>
              </div>
              <div className="product-price">
                <h3>300$</h3>
                <i
class="fa-solid fa-cart-shopping"
                  onClick={handleProductButtonClick2}
                ></i>
                <i
                  className="fa-solid fa-clipboard"
                  onClick={handleProductButtonClickDescription5}
                ></i>
              </div>
            </div>
          </div>
          <div className="product-card">
            <img src={Mockup2} alt="" />
            <div className="product-card-text">
              <div className="product-name">
                <h1>MOONLIT</h1>
                <h2>OBSESSION</h2>
              </div>
              <div className="product-price">
                <h3>300$</h3>
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={handleProductButtonClick2}
                ></i>
                <i
                  className="fa-solid fa-clipboard"
                  onClick={handleProductButtonClickDescription6}
                ></i>
              </div>
            </div>
          </div>
          <div className="product-card">
            <img src={Mockup6} alt="" />
            <div className="product-card-text">
              <div className="product-name">
                <h1>AURORA</h1>
                <h2>BREEZE</h2>
              </div>
              <div className="product-price">
                <h3>300$</h3>
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={handleProductButtonClick2}
                ></i>
                <i
                  className="fa-solid fa-clipboard"
                  onClick={handleProductButtonClickDescription7}
                ></i>
              </div>
            </div>
          </div>
          <div className="product-card">
            <img src={Mockup10} alt="" />
            <div className="product-card-text">
              <div className="product-name">
                <h1>BLISSFUL</h1>
                <h2>BLOOM</h2>
              </div>
              <div className="product-price">
                <h3>300$</h3>
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={handleProductButtonClick2}
                ></i>
                <i
                  className="fa-solid fa-clipboard"
                  onClick={handleProductButtonClickDescription8}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Element>

      {isPaymentVisible && (
        <form ref={form} onSubmit={sendEmail}>
          <div className="payment transition">
            <h1 className="payTitle">Personal Information</h1>
            <label>Parfume Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Parfum Name"
              className="third-content-input"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="third-content-input"
            />
            <label>Whats Up Number</label>
            <input
              type="text"
              name="user_subject"
              placeholder="Whats Up Number"
              className="third-content-input"
            />
            <label>Address</label>
            <textarea
              name="message"
              cols="48"
              rows="10"
              placeholder="Fullname + Address"
              className="third-content-input-5 anjay"
            ></textarea>
            <button className="payButton">Checkout!</button>
            <span className="close" onClick={handleCloseButtonClick}>
              X
            </span>
          </div>
        </form>
      )}

      {isPaymentVisible2 && (
        <form ref={form} onSubmit={sendEmail}>
          <div className="payment2 transition2">
            <h1 className="payTitle">Personal Information</h1>
            <label>Parfume Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Parfume Name"
              className="third-content-input"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="third-content-input"
            />
            <label>Whats Up Number</label>
            <input
              type="text"
              name="user_subject"
              placeholder="Whats Up Number"
              className="third-content-input"
            />
            <label>Address</label>
            <textarea
              name="message"
              cols="48"
              rows="10"
              placeholder="Fullname + Address"
              className="third-content-input-5 anjay"
            ></textarea>
            <button className="payButton">Checkout!</button>
            <span className="close" onClick={handleCloseButtonClick2}>
              X
            </span>
          </div>
        </form>
      )}

      <div className="head-deskripsi">
        {isDescriptionVisible && (
          <div className="deskripsi transition">
            <div className="imgdes">
              <img src={Mockup4} alt="" />
            </div>
            <div className="deskripsi-des">
              <h1>Mystiqour Noir</h1>
              <p>
                Mystiqour Noir menampilkan kombinasi bahan-bahan langka dan
                berkualitas tinggi, dengan perpaduan yang sempurna antara aroma
                bunga, kayu, rempah-rempah, dan sentuhan lembut lainnya.
                Keunikan parfum ini terletak pada campuran yang rumit dan
                harmonis, menciptakan lapisan-lapisan aroma yang menarik dan
                menggoda.
              </p>
              <span
                className="closedes"
                onClick={handleCloseButtonClickDescription}
              >
                X
              </span>
            </div>
          </div>
        )};

        {isDescriptionVisible2 && (
          <div className="deskripsi transition">
            <div className="imgdes">
              <img src={Mockup1} alt="" />
            </div>
            <div className="deskripsi-des">
              <h1>Eternal Essence</h1>
              <p>
                Eternal Essence memadukan kelembutan dan kekuatan dalam harmoni
                yang sempurna. Parfum ini menggambarkan sentuhan yang elegan
                dengan lapisan aroma yang rumit, menciptakan pengalaman
                multisensori yang memukau.
              </p>
              <span className="closedes" onClick={handleCloseButtonClickDescription2}>
                X
              </span>
            </div>
          </div>
        )}

        {isDescriptionVisible3 && (
          <div className="deskripsi transition">
            <div className="imgdes">
              <img src={Mockup7} alt="" />
            </div>
            <div className="deskripsi-des">
              <h1>Serenity Whisper</h1>
              <p>
                Serenity Whisper menggambarkan kelembutan dan keanggunan dalam
                harmoni yang sempurna. Dengan perpaduan aroma bunga yang lembut,
                sentuhan kayu yang hangat, dan nuansa musk yang menenangkan,
                parfum ini menciptakan pengalaman yang menenangkan dan memanjakan
                indra penciuman.
              </p>
              <span className="closedes" onClick={handleCloseButtonClickDescription3}>
                X
              </span>
            </div>
          </div>
        )}

        {isDescriptionVisible4 && (
          <div className="deskripsi transition">
            <div className="imgdes">
              <img src={Mockup8} alt="" />
            </div>
            <div className="deskripsi-des">
              <h1>Enchanted Dreams</h1>
              <p>
                Enchanted Dreams menciptakan atmosfer yang mempesona dan memikat
                dengan aroma yang magis dan menggoda. Parfum ini menggabungkan
                sentuhan bunga yang lembut, rempah-rempah yang misterius, dan
                nuansa kayu yang hangat, menciptakan campuran yang memikat dan
                memikat hati.
              </p>
              <span className="closedes" onClick={handleCloseButtonClickDescription4}>
                X
              </span>
            </div>
          </div>
        )}

        {isDescriptionVisible5 && (
          <div className="deskripsi2 transition">
            <div className="imgdes">
              <img src={Mockup3} alt="" />
            </div>
            <div className="deskripsi-des">
              <h1>Radiant Aura</h1>
              <p>
                Radiant Aura menggambarkan kombinasi sempurna antara kecerahan dan
                kehangatan. Parfum ini mencampurkan nuansa buah-buahan segar,
                bunga yang memikat, dan sentuhan musk yang lembut, menciptakan
                harmoni aroma yang menyegarkan dan memanjakan indra penciuman.
              </p>
              <span className="closedes" onClick={handleCloseButtonClickDescription5}>
                X
              </span>
            </div>
          </div>
        )}

        {isDescriptionVisible6 && (
          <div className="deskripsi2 transition">
            <div className="imgdes">
              <img src={Mockup2} alt="" />
            </div>
            <div className="deskripsi-des">
              <h1>Moonlit Obsession</h1>
              <p>
                Moonlit Obsession menghadirkan suasana yang magis dan menggoda
                dengan aroma yang memikat dan memabukkan. Parfum ini menggabungkan
                sentuhan bunga yang mempesona, aroma kayu yang dalam, dan sentuhan
                misterius lainnya, menciptakan kombinasi yang memikat dan
                membangkitkan obsesi.
              </p>
              <span className="closedes" onClick={handleCloseButtonClickDescription6}>
                X
              </span>
            </div>
          </div>
        )}

        {isDescriptionVisible7 && (
          <div className="deskripsi2 transition">
            <div className="imgdes">
              <img src={Mockup6} alt="" />
            </div>
            <div className="deskripsi-des">
              <h1>Aurora Breeze</h1>
              <p>
                Aurora Breeze menghadirkan atmosfer yang segar dan energik dengan
                aroma yang mencerminkan kesegaran dan keindahan alam. Parfum ini
                menggabungkan nuansa buah-buahan segar, sentuhan bunga yang lembut,
                dan sentuhan ringan dari aroma oseanik atau udara segar, menciptakan
                perpaduan yang menyegarkan dan menghidupkan suasana.
              </p>
              <span className="closedes" onClick={handleCloseButtonClickDescription7}>
                X
              </span>
            </div>
          </div>
        )}

        {isDescriptionVisible8 && (
          <div className="deskripsi2 transition">
            <div className="imgdes">
              <img src={Mockup10} alt="" />
            </div>
            <div className="deskripsi-des">
              <h1>Blissful Bloom</h1>
              <p>
                Blissful Bloom menciptakan suasana yang ceria dan mempesona dengan
                campuran aroma bunga yang segar, buah-buahan yang manis, dan
                sentuhan musk yang lembut. Parfum ini menciptakan perpaduan yang
                harmonis dan memanjakan indra penciuman dengan aroma yang menggoda
                dan menyenangkan.
              </p>
              <span className="closedes" onClick={handleCloseButtonClickDescription8}>
                X
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Formenandgirl;
