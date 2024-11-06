import React from "react";
import "./PizzaCard.css";

const PizzaCard = ({ pizza }) => {
  // Split allergens by commas and trim any spaces
  const allergensArray = pizza.allergens
    ? pizza.allergens
        .split(",")
        .map((allergen) => allergen.trim().toLowerCase()) // Normalize
    : [];

  // Map allergens to their respective emojis
  const allergens = allergensArray.map((allergen, index) => {
    switch (allergen) {
      case "milk":
        return (
          <span key={index} className="allergen" role="img" aria-label="milk">
            🧀
          </span>
        );
      case "wheat":
        return (
          <span key={index} className="allergen" role="img" aria-label="wheat">
            🌾
          </span>
        );
      case "nuts":
        return (
          <span key={index} className="allergen" role="img" aria-label="nuts">
            🥜
          </span>
        );
      case "vegan on request":
        return (
          <span key={index} className="allergen" role="img" aria-label="vegan">
            🌱
          </span>
        );
      default:
        return (
          <span key={index} className="allergen" role="img" aria-label="other">
            ❓
          </span>
        );
    }
  });

  return (
    <div className="pizza-card">
      <img src={pizza.image} alt={pizza.name} className="pizza-image" />
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <div className="price">{pizza.price}</div>
      {/* <div className="allergens-container">
        {allergens.length > 0 ? (
          allergens
        ) : (
          <span className="no-allergens">No allergens</span>
        )}
      </div> */}
    </div>
  );
};

export default PizzaCard;
