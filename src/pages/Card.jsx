// src/Components/Card.jsx
import React from 'react';
import './Card.css'; // If you have custom CSS for your card

function Card({ title, description, imageUrl, link }) {
  return (
    
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">Learn More</a>
      </div>
    </div>
  );
}


export default Card;

