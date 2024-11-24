import React, { useState } from "react";


function FilterSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="filter-section">
      {/* Barra de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search menu"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button className="search-button">
          <img src="/images/icono_lupa.png" alt="Search Icon" />
        </button>
      </div>

      {/* Botones de categorías */}
      <div className="category-buttons">
        <button className="category-button dietary">Dietary</button>
        <button className="category-button">Full Menu</button>
        <button className="category-button">Breakfast & Teas</button>
        <button className="category-button">Lunches</button>
        <button className="category-button">Buffets & BBQs</button>
        <button className="category-button">Finger Food & Platters</button>
        <button className="category-button">Canapés & Events</button>
      </div>

      {/* Botón con la flecha */}
      <div className="arrow-button-container">
        <button className="arrow-button">
          <img src="/assets/boton flecha.png" alt="Arrow Icon" />
        </button>
      </div>
    </div>
  );
}

export default FilterSection;
