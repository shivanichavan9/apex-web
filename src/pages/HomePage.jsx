import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from './Card';
import './Card.css';
  // Add styling for hero section
import './HomePage.css';
const HomePage = () => {
  // Hero section images
  const heroImages = [
    " https://apexlab.com/wp-content/uploads/2022/01/Banner_1.webp",
    "https://www.areinfotech.com/uploads/Best-IT-Company-Ahmedabad.webp",
    "https://img.freepik.com/free-photo/group-young-business-people-working-office_158595-5210.jpg?t=st=1743088245~exp=1743091845~hmac=74004c18a15a08d8180d7cb4faa56017c4c03def55b6e0a5e2b8f99a4f4340a8&w=1380",
  ]; // Replace with your actual image URLs

  // Data for the cards
  const cardData = [
    {
      title: "Web Development",
      description: "We build high-performance websites tailored to your business needs.",
      imageUrl: "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
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
      imageUrl: "https://www.cloudavize.com/wp-content/uploads/2023/01/dallas-it-consulting.jpg",
      link: "/services/cloud-solutions"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Image Slider */}
      <section className="hero-slider">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
        >
          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide" style={{ backgroundImage: `url(${img})` }}>
                <div className="overlay">
                  <h2>Your Partner in Digital Transformation</h2>
                  <p>We provide cutting-edge IT solutions to help your business grow.</p>
                  <button>Get Started</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Description Section */}
      <section className="description">
        <h1>
          Apex helps companies modernize technology, reimagine processes,
          and transform experiences so they stay ahead in a fast-changing world.
        </h1>
      </section>

      {/* Card Section */}
      <section className="cards-section">
        <h2>Our Services</h2>
        <div className="card-container">
          {cardData.map((card, index) => (
            <Link key={index} to={card.link}>
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