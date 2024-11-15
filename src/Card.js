import React from "react";
import "./Card.css";

const Card = ({ flag, name }) => {
  return (
    <div className="countryCard">
      <img
        src={flag}
        alt={`Flag of ${name}`}
        className="cardImage"
      />
      <div className="cardContent">
        <h3 className="cardTitle">{name}</h3>
      </div>
    </div>
  );
};

export default Card;