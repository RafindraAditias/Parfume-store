import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Product from "./components/product";
import Contact from "./components/contact";
import { Switch, Route } from "react-router-dom";


const MainPage = () => {
  return(
  <div>
    <Navbar />
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </Switch>
    <Footer />
  </div>
  );
};

export default MainPage
