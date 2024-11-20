import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main>
      {/* Banner principal */}
      <div className="main-banner">
        <img src="/images/banner.jpg" alt="Main Banner" className="banner-image" />
        <h1 className="banner-text">Our Menu</h1>
      </div>

      {/* Barra de búsqueda, filtros y carrito */}
      <div className="filters-bar">
        {/* Barra de búsqueda */}
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search menu..." 
            className="search-input" 
          />
          <button className="search-button">
            <img src="/images/search-icon.png" alt="Search" className="search-icon" />
          </button>
        </div>

        {/* Menú de filtros al lado del buscador */}
        <div className="menu-filters">
          {/* Menú desplegable de dietas (después de la barra de búsqueda) */}
          <div className="dietary-filter">
            <button className="dropdown-button">
              Dietary <span className="dropdown-arrow">&#9660;</span>
            </button>
            <div className="dropdown-content">
              <label><input type="checkbox" /> Gluten Free</label>
              <label><input type="checkbox" /> Dairy Free</label>
              <label><input type="checkbox" /> Vegetarian</label>
              <label><input type="checkbox" /> Vegan</label>
              <label><input type="checkbox" /> Halal Friendly</label>
            </div>
          </div>

          {/* Botones de menú */}
          <button className="filter-button">Full Menu</button>
          <button className="filter-button">Breakfast & Tea</button>
          <button className="filter-button">Lunches</button>
          <button className="filter-button">Buffets & BBQs</button>
          <button className="filter-button">Finger Food & Platters</button>
          <button className="filter-button">Canape & Events</button>
        </div>

        {/* Flecha de entrega */}
        <div className="delivery-time">
          <button className="arrow-button">&#8594;</button>
        </div>

        {/* Carrito de compras y checkout */}
        <div className="cart-container">
          <button className="cart-button">
            <img src="/images/cart-icon.png" alt="Cart" className="cart-icon" />
            <span className="cart-count">0</span>
          </button>
          <div className="checkout-container">
            <span className="checkout-amount">$379.50</span>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      </div>

      {/* Productos del menú */}
      <div className="menu-items">
        {/* Aquí van los elementos del menú */}
      </div>
    </main>
  );
};

export default Main;  