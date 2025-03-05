import React from "react";
 

export default function OurCulture() {
  return (
    <div className="our-culture-container">
      <div className="our-culture-content">
        <h1 className="our-culture-header">Our Culture</h1>
        <p className="our-culture-description">
          At our company, we foster innovation, collaboration, and personal growth. We believe in creating a workplace where everyone feels valued and empowered.
        </p>

        {/* Mission & Values */}
        <div className="our-culture-grid">
          <div className="our-culture-card">
            <h2 className="our-culture-card-header">Our Mission</h2>
            <img
              className="our-culture-card-image"
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mission"
            />
            <p className="our-culture-card-text">
              Our mission is to revolutionize the industry by providing top-notch services with a strong focus on customer satisfaction and innovation.
            </p>
          </div>
          <div className="our-culture-card">
            <h2 className="our-culture-card-header">Our Values</h2>
            <img
              className="our-culture-card-image"
              src="https://plus.unsplash.com/premium_photo-1682437249470-f852445f3a06?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Values"
            />
            <p className="our-culture-card-text">
              We believe in integrity, ensuring transparency and honesty in all our interactions. Innovation drives us to constantly improve and adapt, delivering cutting-edge solutions to our customers.
            </p>
          </div>
        </div>

        {/* Team Culture */}
        <div className="our-culture-team-culture">
          <h2 className="our-culture-team-header">Life at Our Company</h2>
          <p className="our-culture-team-description">
            We believe in a work environment that promotes creativity and well-being. From team outings to flexible work policies, we ensure our employees have the best experience.
          </p>
          <div className="our-culture-team-grid">
            <div className="our-culture-team-card">
              <h3 className="our-culture-team-card-header">Flexible Hours</h3>
              <p className="our-culture-team-card-text">Work on your own terms with our remote and flexible work policies.</p>
            </div>
            <div className="our-culture-team-card">
              <h3 className="our-culture-team-card-header">Growth Opportunities</h3>
              <p className="our-culture-team-card-text">We invest in training and mentorship programs for your career growth.</p>
            </div>
            <div className="our-culture-team-card">
              <h3 className="our-culture-team-card-header">Team Bonding</h3>
              <p className="our-culture-team-card-text">Frequent team-building activities, retreats, and celebrations.</p>
            </div>
          </div>
        </div>

        {/* Careers Section */}
        <div className="our-culture-careers">
          <h2 className="our-culture-careers-header">Join Our Team</h2>
          <p className="our-culture-careers-description">
            Ready to be part of something great? Explore our career opportunities and grow with us.
          </p>
          <a
            href="/careers"
            className="our-culture-careers-button"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
}
