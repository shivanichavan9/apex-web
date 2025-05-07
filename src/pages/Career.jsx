import React from 'react';
// Import custom CSS for the page styling
 import './Career.css'
 

const Careers = () => {
  return (
    <div className="careers-page">
      <header className="careers-header">
        <h1 className="careers-title">Career Opportunities</h1>
        <p className="careers-subtitle">
          Explore exciting career opportunities with us. Join our team and be part of something great!
        </p>
      </header>

      <section className="open-positions">
        <h2 className="positions-heading">Open Positions</h2>

        <div className="job-listing">
          <h3 className="job-title">Software Engineer</h3>
          <p className="job-description">
            We are looking for a passionate Software Engineer to join our development team. You’ll play a key role in developing and maintaining software applications.
          </p>
          <ul className="job-responsibilities">
            <li>Develop and maintain software applications</li>
            <li>Collaborate with cross-functional teams</li>
            <li>Write clean, scalable, and efficient code</li>
          </ul>
          <ul className="job-qualifications">
            <li>Bachelor’s degree in Computer Science or related field</li>
            <li>Experience with Java, Python, or C++</li>
            <li>Strong problem-solving skills</li>
          </ul>
          <p className="job-benefits">
            Benefits include competitive salary, growth opportunities, and a supportive work environment.
          </p>
          <button className="apply-button">Apply Now</button>
        </div>

        <div className="job-listing">
          <h3 className="job-title">Product Designer</h3>
          <p className="job-description">
            Join our creative team and help design amazing user experiences. Work closely with our engineering teams to deliver visually appealing designs.
          </p>
          <ul className="job-responsibilities">
            <li>Design user interfaces for web and mobile applications</li>
            <li>Conduct user research and usability testing</li>
            <li>Work closely with engineers to implement designs</li>
          </ul>
          <ul className="job-qualifications">
            <li>Proven experience in UI/UX design</li>
            <li>Proficiency in Figma, Sketch, or Adobe XD</li>
            <li>A strong portfolio showcasing your design work</li>
          </ul>
          <p className="job-benefits">
            We offer a competitive salary, career growth, and a collaborative design-focused environment.
          </p>
          <button className="apply-button">Apply Now</button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
