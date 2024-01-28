import React from 'react';
import './components.css';
import Delivery from './img/delivery-truck.png';
import CreditCard from './img/credit-card.png';
import ReturnBox from './img/return-box.png';
import Support from './img/support.png';


const Service = () => {
    return(
        <div className="container-service">
            <div className="service">
            <div className='imgg'>
            <img src={Delivery} alt="Delivery" />
            </div>
            <div className='nameService'>
            <p className='Title'>FREE SHIPPING</p>
            <p className='Deskription'>All Order over $300</p>
            </div>
            </div>

            <div className="service">
            <div className='imgg'>
            <img src={CreditCard} alt="Delivery" />
            </div>
            <div className='nameService'>
            <p className='Title'>QUICK PAYMENT</p>
            <p className='Deskription'>100% Secure Payment</p>
            </div>
            </div>

            <div className="service">
            <div className='imgg'>
            <img src={ReturnBox} alt="return-box" />
            </div>
            <div className='nameService'>
            <p className='Title'>FREE RETURNS</p>
            <p className='Deskription'>Money Back in 10 days</p>
            </div>
            </div>

            <div className="service">
            <div className='imgg'>
            <img src={Support} alt="Support" />
            </div>
            <div className='nameService'>
            <p className='Title'>24/7 SUPPORT</p>
            <p className='Deskription'>Get Quick Support</p>
            </div>
            </div>
        </div>
    );
};

export default Service