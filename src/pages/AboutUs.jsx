import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-description">
          We are a leading IT company focused on delivering innovative solutions to businesses across the globe.
        </p>
        <button className="hero-button">Learn More</button>
      </div>

      {/* Mission Section */}
      <section className="mission-section">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-description">
          Our mission is to empower businesses with cutting-edge technology solutions and services that enable them to thrive in the digital world.
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
       
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img className="team-member-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnqdEy9-d0INKjpftwAnh-Q_ItsuV9YTdTg&s " alt="Team Member 1" />
            <h3 className="team-member-name">John Doe</h3>
            <p className="team-member-role">CEO</p>
          </div>
          <div className="team-member">
            <img className="team-member-image" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VOF8oyW73546IoljXkLzuLKmEBkf8x9edg&s" alt="Team Member 2" />
            <h3 className="team-member-name">Jane Smith</h3>
            <p className="team-member-role">CTO</p>
          </div>
          <div className="team-member">
            <img className="team-member-image" src="https://img.freepik.com/premium-photo/team-building-partnership-business-success-concept-bottom-view-business-people-putting-hands-together_109710-3407.jpg?semt=ais_hybrid " alt="Team Member 3" />
            <h3 className="team-member-name">Michael Johnson</h3>
            <p className="team-member-role">Lead Developer</p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <h2 className="history-title">Our Journey</h2>
        <p className="history-description">
          Founded in 2010, we have grown from a small startup into a global leader in IT services, helping hundreds of businesses optimize their operations with state-of-the-art technologies.
        </p>
      </section>
      
    </div>
  );
}

export default AboutUs;
