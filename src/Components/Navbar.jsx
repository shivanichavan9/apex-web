import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>Apex</h1>
        </Link>
      </div>
        

      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>

           

          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/About Us">AboutUs</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/Privacy">Privacy</Link></li>
           
          <li><Link to="/ Culture"> Culture </Link></li>
           
           
          

           
        </ul>
         {/* Dropdown for About Us */}
       <li className="dropdown">
            <Link to="/investors">Investors</Link>
            <ul className="dropdown-menu">
            
               
              <li><Link to="/ourculture">Our Culture</Link></li>
              <li><Link to="/Products"> Products</Link></li>
            </ul>
          </li>

      </nav>
    </header>
  );
};

export default Navbar;
