import React from 'react';
import "./components.css";
import Banner from "./banner";
import Collection from "./colection";
import ImgSlide from "./imgslide";
import Service from "./service";
import Formanwoman from"./formen";

const About = () => {

    return (
        <div>
            <Banner />
            <Collection />
            <Formanwoman />
            <ImgSlide />
            <Service />
        </div>
    );
};

export default About