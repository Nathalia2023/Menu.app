import React from "react";

const MenuItem = ({ name, price, image, tags }) => {
  return (
    <div className="menu-item">
      <img src={image} alt={name} className="menu-item-image" />
      <div className="menu-item-details">
        <h3>{name}</h3>
        <p>{tags.join(", ")}</p>
        <span className="menu-item-price">{price}</span>
      </div>
    </div>
  );
};

export default MenuItem;
