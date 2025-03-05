import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Card from './Card';
import './Card.css';

const HomePage = () => {
  // Data for the cards
  const cardData = [
    {
      title: "Web Development",
      description: "We build high-performance websites tailored to your business needs.",
      imageUrl: " https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",  // Replace with your image URL
      link: "/services/web-development"
    },
    {
      title: "Mobile App Development",
      description: "Developing responsive and scalable mobile apps for all platforms.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXm_P4Kv0EGuQ4C05CiF95ofiUa80bywing&s",
      link: "/services/mobile-app-development"
    },
    {
      title: "IT Consulting",
      description: "Expert IT consulting services to transform your business operations.",
      imageUrl: " https://www.cloudavize.com/wp-content/uploads/2023/01/dallas-it-consulting.jpg",  // Replace with your image URL
      link: "/services/cloud-solutions"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Your Partner in Digital Transformation</h2>
          <p>We provide cutting-edge IT solutions to help your business grow.</p>
          <button>Get Started</button>
        </div>
      </section>

       

      {/* Description Section */}
      <section>
        <div className="hp">
          <h1>
            Apex helps companies modernize technology, reimagine processes
            and transform experiences so they stay ahead in a fast-changing world.
          </h1>
        </div>
      </section>

      {/* Card Section - Adding Cards */}
      <section className="cards-section">
        <h2>Our Services</h2>
        <div className="card-container">
          {cardData.map((card, index) => (
            <Link key={index} to={card.link}> {/* Wrap each card in a Link */}
              <Card
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                link={card.link}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Have a Project in mind? Reach out to us, and we will bring your ideas to life.</p>
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

export default HomePage;

