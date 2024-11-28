import React, { useState, useRef, useEffect } from "react";

const FilterSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDietaryFilters, setShowDietaryFilters] = useState(false);
  const contentRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDietaryFilters = () => {
    setShowDietaryFilters(!showDietaryFilters);
  };

  const closeDietaryFilters = () => {
    setShowDietaryFilters(false);
  };


  const scrollContent = (direction) => {
    if (contentRef.current) {
      contentRef.current.scrollLeft += direction === "right" ? 800 : -800;
    }
  };

  return (
    <div className="filter-section">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search menu"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="select-container">
        <button
          className="dietary-select"
          onClick={toggleDietaryFilters} // Alterna la visibilidad
        >
          Dietary <span className="arrow-icon">⮟</span>
        </button>
      </div>
      {showDietaryFilters && (
        <div className="dietary-filters">
          <div className="filters-header">
            <span className="filters-title">Filter by diet</span>
            <button className="close-button" onClick={closeDietaryFilters}>
              ✖
            </button>
          </div>
          <div className="filters-list">
            <label>
              <input type="checkbox" value="GF" /> Gluten Free
            </label>
            <label>
              <input type="checkbox" value="DF" /> Dairy Free
            </label>
            <label>
              <input type="checkbox" value="V" /> Vegetarian
            </label>
            <label>
              <input type="checkbox" value="VG" /> Vegan
            </label>
            <label>
              <input type="checkbox" value="H" /> Halal Friendly
            </label>
            <label>
              <input type="checkbox" value="CF" /> Capsaicin Free
            </label>
            <label>
              <input type="checkbox" value="AF" /> Allium Free
            </label>
            <label>
              <input type="checkbox" value="SF" /> Sesame Free
            </label>
            <label>
              <input type="checkbox" value="NF" /> Nut Free*
            </label>
          </div>
        </div>
      )}
      <div className="arrows-container">
        <button id="arrow-button-left" onClick={() => scrollContent("left")}></button>
      </div>
      <div className="category-buttons-container" ref={contentRef}>
        <button className="category-button dietary">Full Menu</button>
        <button className="category-button">Breakfast & Teas</button>
        <button className="category-button">Lunches</button>
        <button className="category-button">Buffets & BBQs</button>
        <button className="category-button">Finger Food & Platters</button>
        <button className="category-button">Canapés & Events</button>
      </div>
      <div className="arrows-container">
        <button id="arrow-button-right" onClick={() => scrollContent("right")}></button>
      </div>
    </div>
  );
};

export default FilterSection;
