 // src/pages/Contact.js
 import React from 'react';
 import './Contact.css';

 const Contact = () => {
   return (
     <div className="contact-page">
       {/* Contact Section */}
       <section id="contact" className="contact">
         <h2>Contact Us</h2>
         <p>Have a project in mind? Reach out to us, and we will bring your ideas to life.</p>
         <form>
           <input type="text" placeholder="Your Name" required />
           <input type="email" placeholder="Your Email" required />
           <textarea placeholder="Your Message" required></textarea>
           <button type="submit">Send Message</button>
         </form>
       </section>
     </div>
   ); 
 
 };
 
 export default Contact;
 
 