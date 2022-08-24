import React from "react";
import "./card.css"

function Card({ width, altText, iconurl, cardHeading, cardDescription }) {
  return (
    <div className={`card-container ${width}`}>
      <img src={iconurl} className="card-image" alt={altText} />
      <h3 className="card-heading">{cardHeading}</h3>
      <p className="card-desc">{cardDescription}</p>
    </div>
  );
}

export default Card;
