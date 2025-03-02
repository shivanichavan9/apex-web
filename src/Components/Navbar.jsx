   // src/components/Navbar.jsx
   import React from 'react';
   import './Navbar.css';
   
    
    // You can create a Navbar-specific CSS file if needed.
   
   const Navbar = () => {
    
     return (
       <header className="header">
         <div className="logo">
           <h1>Apex</h1>
         </div>
         <nav className="navbar">
           <ul>
             <li><a href="/">Home Page</a></li>  {/* Update href to work with routing */}
             <li><a href="/about">About Us</a></li>
             <li><a href="/contact">Contact</a></li>
           </ul>
         </nav>
       </header>
     );
   }
   
   export default Navbar;
   