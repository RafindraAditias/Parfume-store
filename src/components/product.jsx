import React, { useState } from "react";
import "./product.css";
import Polosan from "./img/polosan.png"
import Visa from "./img/visa.png"
import Master from "./img/master.png"

const Products = () => {
  const [isPaymentVisible, setPaymentVisible] = useState(false);

  const handleProductButtonClick = () => {
    setPaymentVisible(true);
  };

  const handleCloseButtonClick = () => {
    setPaymentVisible(false);
  };

  return (
    <div>
      <section id="hal2">
        <div className="container-section">
          <span className="circleleft"></span>
          <div className="imgright">
            <img src={Polosan} alt="product" className="parfum1img" />
          </div>

          <div className="captionsection">
            <h1 className="Subjudul1">Mystique Noir</h1>
            <p className="subjudulcaption">
              Mystique Noir adalah sebuah parfum yang misterius dan memikat,
              dengan sentuhan kegelapan yang menggoda. Parfum ini menciptakan
              aura yang memikat dan memanjakan indera dengan keharuman yang
              memikat dan memikat
            </p>
            <p className="price">300$</p>
            <i className="fa-solid fa-cart-shopping" onClick={handleProductButtonClick}></i>
          </div>
        </div>
      </section>

      {isPaymentVisible && (
        <div className="payment">
          <h1 className="payTitle">Personal Information</h1>
          <label>Name and Surname</label>
          <input type="text" placeholder="John Doe" className="payInput" />
          <label>Phone Number</label>
          <input type="text" placeholder="+1 234 5678" className="payInput" />
          <label>Address</label>
          <input type="text" placeholder="Elton St 21 22-145" className="payInput" />
          <h1 className="payTitle">Card Information</h1>
          <div className="cardIcons">
            <img src={Visa} width="40" alt="" className="cardIcon" />
            <img src={Master} alt="" width="40" className="cardIcon" />
          </div>
          <input type="password" className="payInput" placeholder="Card Number" />
          <div className="cardInfo">
            <input type="text" placeholder="mm" className="payInput sm" />
            <input type="text" placeholder="yyyy" className="payInput sm" />
            <input type="text" placeholder="cvv" className="payInput sm" />
          </div>
          <button className="payButton">Checkout!</button>
          <span className="close" onClick={handleCloseButtonClick}>X</span>
        </div>
      )}
    </div>
  );
};

export default Products;
