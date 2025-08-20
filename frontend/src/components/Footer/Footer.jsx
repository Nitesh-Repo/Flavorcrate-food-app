import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo2} alt="" className="logo" />
          <p>
            FlavorCrate is a cloud kitchen delivering fresh, chef-crafted meals
            straight from our kitchen to your doorstep — fast, hot, and full of
            flavor.
          </p>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="tel:+918299745297">+91 8299745297</a>
            </li>
            <li>
              <a href="mailto:support@flavorcrate.com">
                support@flavorcrate.com
              </a>
            </li>
          </ul>
          <div className="footer-social-items">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className="footer-copyright">
        © 2025 Food Delivery. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
