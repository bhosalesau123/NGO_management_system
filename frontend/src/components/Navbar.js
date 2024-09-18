// src/components/Navbar.js

// import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo2 from "../assets/Logo2.png";
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Importing react-icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo2} alt="Logo" />
      </div>

      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services">Impact</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects">Programs</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Ngo-Login</Link>
        </li>
      </ul>

      <div className="navbar-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
      </div>

      <div>
        <button className='Donate'>Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
