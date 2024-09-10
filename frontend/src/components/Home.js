import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import homeimage from "../assets/Ngo-home.avif";
import Layout from "../pages/Layout"
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="img-container">
          <div className="img">
            <img className="homeimg" src={homeimage} alt="Home Image" />
          </div>

          <nav>
            <ul className="Header">
              <li className="Nav">
                <Link to="/">Home</Link>
              </li>
              <li className="Nav">
                <Link to="/About">About Us</Link>
              </li>
              <li className="Nav">
                <Link to="/Contact">Contact</Link>
              </li>
              <li className="Nav">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Layout/>
    </>
  );
};

export default Home;
