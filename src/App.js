   // src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes, not Switch
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
// Import pages
import HomePage from './pages/HomePage';
 
import  AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import WebDevelopment from './pages/WebDevelopment';
 

const App = () => {
  
  return (
    
    <Router>
      <div className="app">
        <Navbar/>
        {/* Define Routes for Each Page */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use 'element' instead of 'component' */}
          <Route path="/services/mobile-app-development" component={MobileAppDevelopment} />
          <Route path="/services/web-development" component={WebDevelopment} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
           
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
