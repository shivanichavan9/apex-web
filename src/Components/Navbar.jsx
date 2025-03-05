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
        <ul>
          <li><a href="/">Home</a></li>

          {/* Dropdown for About Us */}
          <li className="dropdown">
            <a href="/about">About Us</a>
            {/* Dropdown Menu */}
            <ul className="dropdown-menu">
              <li><a href="/products">Products</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/investors">Investors</a></li>
              <li><a href="/ourculture">Our Culture</a></li>
            </ul>
          </li>

          <li><a href="/contact">Contact</a></li>
           
          <li><a href="/support">Support</a></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/demoproduct">DemoProduct </a></li>
           
         </ul>
      </nav>
    </header>
  );
};

export default Navbar;
