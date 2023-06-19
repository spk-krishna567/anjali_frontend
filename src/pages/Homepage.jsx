import React from "react";

import "./Homepage.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { TbTruckDelivery } from "react-icons/tb";
import { BsPatchCheckFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";

import home_intropic from "../images/home-intropic.png";
import silksaree from "../images/silk_saree.png";
import balchuri from "../images/Baluchori_saree.jpg";
import banarasi from "../images/banarasi_saree.webp";
import bomkai from "../images/Bomkai_saree.jpg";
import kanchipuri from "../images/kanchipuram_saree.jpeg";
import sambalpuri from "../images/Sambalpuri.jpg";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="homepage-intro">
        <div className="intro-quote">
          <div className="quote-start">
            The perfect matching accessory for a{" "}
            <span className="quote-saree">saree</span> is not the jewelry but
            your smile
          </div>
          <div className="quote-end">
            add smile to your saree by Shoping in Anjali silks
          </div>
          <button className="introshop-now">Show Now</button>
        </div>
        <img
          src={home_intropic}
          alt="home_intropic"
          className="home_intropic"
        />
      </div>
      <p className="quote-saree">Silk Saress</p>
      <div className="services">
        <div className="cards">
          <img src={balchuri} alt="" />
          <p>balchuri saree</p>
        </div>
        <div className="cards">
          <img src={banarasi} alt="" />
          <p>banarasi saree</p>
        </div>
        <div className="cards">
          <img src={bomkai} alt="" />
          <p>bomkai saree</p>
        </div>
        <div className="cards">
          <img src={kanchipuri} alt="" />
          <p>kanchipuri saree</p>
        </div>
        <div className="cards">
          <img src={sambalpuri} alt="" />
          <p>sambalpuri saree</p>
        </div>
      </div>
      <div className="assurance">
        <p className="assurance-heading">Our Services</p>
        <div className="service-icon">
          <div className="icon-cards">
            <TbTruckDelivery className="service-specific" />
            <p>Express Delivery</p>
          </div>
          <div className="icon-cards">
            <BsPatchCheckFill className="service-specific" />
            <p>Quality Check</p>
          </div>
          <div className="icon-cards">
            <GiReturnArrow className="service-specific" />
            <p>Easy Returns</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
