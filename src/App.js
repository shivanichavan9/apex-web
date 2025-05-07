import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes, not Switch
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
// Import pages
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import WebDevelopment from './pages/WebDevelopment';
import Investors from './pages/Investors';
import Privacy from './pages/Privacy';
import Products from './pages/Products';
import OurCulture from './pages/OurCulture';
import Support from './pages/Support';
import Career from './pages/Career'; 
import Services from './pages/Services';
import Login from './pages/Login';  
import Signup from './pages/Signup';
 
 
  

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* Define Routes for Each Page */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about us" element={<AboutUs />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ourculture" element={<OurCulture />} />
          <Route path="/support" element={<Support />} />
           
          <Route path="/career" element={<Career />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
           
           

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
