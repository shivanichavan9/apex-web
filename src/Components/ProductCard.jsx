import React from 'react';
import "../pages/sn.css";
const ProductCard = ({ title, description, image }) => {
    return (
      <div className="productcard">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ProductCard;
  