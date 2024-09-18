import React from "react";
import "../styles/Footer.css"; // Ensure you have the CSS file linked

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="footer-section address">
          <h3>Address</h3>
          <p className="address-text">
            Navrang Arcade, Chatrapati Shivaji Maharaj Path, Naupada Thane
          </p>
        </div>

        <div className="footer-section explore">
          <h3>Explore Us</h3>
          <ul>
            <li>About Us</li>
            <li>Donate</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section contact-us">
          <h3>Contact Info</h3>
          <ul>
            <li>7498216958</li>
            <li>bhosalesau96@gmail.com</li>
            <li>Mon-Fri / 9:00 AM to 5:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>Saurabh Bhosale &copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
