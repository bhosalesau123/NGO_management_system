import React from "react";
import "../styles/Footer.css"
const Footer = () => {
  return (
    <><div className="footer-main">
      <div className="footer" id ="footer">
        <div className="adress">
          <h3>Adress</h3>
          <div className="adress-text">
            Navrang archade,chatrapti shivaji maharaj path,naupada thane
          </div>
        </div>

        <div className="explore">
          <h3>Explore us</h3>
          <ul>
            <li>About us</li>
            <li>Donate</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="contact-us">
          <h3>Contact-info</h3>
          <ul>
          <li>7498216958</li>
          <li>bhosalesau96@gmail.com</li>
          <li>mon-fri/9:00 am to 5:00 pm</li>
          </ul>
        </div>

        
      </div>
      <div className="copyright" style={{justifyContent:"center",flexDirection:"column",}}>
      <p style={{color:"Gray", fontWeight:"bold", marginBottom:"20px"}}>  Saurabh Bhosale &copy; {new Date().getFullYear()} . All rights are reserved.
      </p>
</div>
      </div>
      
    </>
  );
};

export default Footer;
