import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-services">
        <p>Quick Links</p>
        <div className="footer-quicklinks">
          <a href="">About</a>
          <a href="">Offers and Discounts</a>
          <a href="">Get Coupons</a>
          <a href="">Contact Us</a>
        </div>
      </div>
      <div className="footer-services">
        <p>Others Silks</p>
        <div className="footer-newproducts">
          <a href="">Cotton Silk</a>
          <a href="">Designer Silk</a>
          <a href="">Uppada Silk</a>
          <a href="">Madanapalli Silk</a>
        </div>
      </div>
      <div className="footer-services">
        <p>Support</p>
        <div className="footer-support">
          <a href="">FAQ's</a>
          <a href="">Terms and Conditions</a>
          <a href="">Privacy Policy</a>
          <a href="">Report Technical issue</a>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright &copy; 2023 All Rights Reserved @ <br />{" "}
        <span className="footer-company">Anjali Silks</span>
      </div>
    </div>
  );
};

export default Footer;
