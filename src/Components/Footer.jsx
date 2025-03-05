// src/Components/Footer.js
import React from 'react';
import './Footer.css';  // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-logo">Apex</h3>
          <p className="footer-description">
            Providing innovative tech solutions and services for your business.
          </p>
        </div>
        
        <div className="footer-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
            <li><a href="/products"className="footer-link">Products</a></li>
              <li><a href="/privacy"className="footer-link">Privacy</a></li>
              <li><a href="/investors"className="footer-link">Investors</a></li>
              <li><a href="/ourculture"className="footer-link">Our Culture</a></li>
            <li><a href="/support"className="footer-link">Support</a></li>
          <li><a href="/career"className="footer-link">Career</a></li>
          <li><a href="/services"className="footer-link">Services</a></li>
          <li><a href="/login"className="footer-link">Login</a></li>
          <li><a href="/signup"className="footer-link">Signup</a></li>
          <li><a href="/productdemo"className="footer-link">Product Demo</a></li>

          </ul>
        </div>

        <div className="footer-social">
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-square"></i> {/* Facebook icon */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter-square"></i> {/* Twitter icon */}
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i> {/* Instagram icon */}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Apex. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

 