import React from "react";

const Card = ({ title, description, image, alt }) => {
  return (
    <div class="card">
      <div class="card-image">
        <img src={image} alt={alt} />
      </div>
      <div class="card-body">
        <h4 class="card__title">{title}</h4>
        <p class="card__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
