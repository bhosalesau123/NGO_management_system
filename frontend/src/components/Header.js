import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {Link } from "react-router-dom"
import "../styles/Header.css"
const Header =()=> {
  return (
    <>
     <div className='Navbar-main'>
   
     <nav className="nav">
            <ul className="Header">
              <li className="Navbar">
                
                <Link className='link' to="/">Home</Link>
              </li>
              
              <li className="Navbar">
                <Link className='link'to="/payment">Donate</Link>
              </li>
              
            </ul>
          </nav>
     </div>
     
     
    </>
  );
}

export default Header