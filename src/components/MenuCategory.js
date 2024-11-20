import React, { useState } from "react";
import "./menu.css";

const MenuCategory = ({ title, items }) => {
  const [expanded, setExpanded] = useState(false);

  // Número de elementos visibles por defecto
  const visibleItemsCount = 6;

  // Determinar si se deben mostrar todos los elementos o solo un subconjunto
  const visibleItems = expanded ? items : items.slice(0, visibleItemsCount);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="menu-category">
      <h2>{title}</h2>
      <div className="menu-items">
        {visibleItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="menu-item-image"
            />
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.tags.join(", ")}</p>
              <p className="menu-item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      {items.length > visibleItemsCount && (
        <button className="expand-button" onClick={toggleExpand}>
          {expanded ? "Collapse" : "Expand"}
        </button>
      )}
    </div>
  );
};

export default MenuCategory;
