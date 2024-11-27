import React from "react";
import "./Filter.css"; // Archivo CSS para los estilos

const Section = ({ title, subtitle, products }) => {
  return (
    <div className="menu-section">
      {/* Título y botón "Browse All" */}
      <div className="menu-header">
        <h2>{title}</h2>
        <button className="browse-button">Browse All</button>
      </div>

      {/* Subtítulo */}
      <p className="menu-subtitle">
        <strong>{subtitle}</strong>
      </p>

      {/* Productos en dos filas */}
      <div className="product-grid">
        {products.slice(0, 5).map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-details">
                <div className="product-quantity">
                  <img
                    src="/images/iconopersona.png"
                    alt="User Icon"
                    className="user-icon"
                  />
                  <span>
                    {product.quantity} {product.type}
                  </span>
                </div>
                <div className="product-price">{product.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="product-grid">
        {products.slice(5, 10).map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-details">
                <div className="product-quantity">
                  <img
                    src="/images/iconopersona.png"
                    alt="User Icon"
                    className="user-icon"
                  />
                  <span>
                    {product.quantity} {product.type}
                  </span>
                </div>
                <div className="product-price">{product.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Expand */}
      <button className="expand-button">
        <img
          src="/assets/flechaExpand.png"
          alt="Expand Icon"
          className="expand-icon"
        />
        Expand
      </button>
    </div>
  );
};

const FilterSection = () => {
  // Productos para cada sección
  const breakfastProducts = [
    { id: 1, name: "Breakfast Canapes Collection", price: "$10.00", image: "/images/image1.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 2, name: "Breakfast Pots", price: "$12.00", image: "/images/image2.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 3, name: "Team Breakfast Collection", price: "$10.00", image: "/images/image3.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 4, name: "Savoury Breakfast Bruschetta", price: "$12.00", image: "/images/image4.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 5, name: "Loaded Mini Muffins", price: "$10.00", image: "/images/image5.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 6, name: "Breakfast Pastry Collection", price: "$12.00", image: "/images/image6.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 7, name: "Petit Frittata Collection", price: "$10.00", image: "/images/image7.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 8, name: "Quiche Collection", price: "$12.00", image: "/images/image8.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 9, name: "Savoury Galettes", price: "$10.00", image: "/images/image9.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 10, name: "Breakfast Pots", price: "$12.00", image: "/images/image10.jpg", badge: "Top", quantity: 6, type: "V" },
    
  ];

  const lunchProducts = [
    { id: 1, name: "Breakfast Canapes Collection", price: "$10.00", image: "/images/image1.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 2, name: "Breakfast Pots", price: "$12.00", image: "/images/image2.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 3, name: "Team Breakfast Collection", price: "$10.00", image: "/images/image3.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 4, name: "Savoury Breakfast Bruschetta", price: "$12.00", image: "/images/image4.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 5, name: "Loaded Mini Muffins", price: "$10.00", image: "/images/image5.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 6, name: "Breakfast Pastry Collection", price: "$12.00", image: "/images/image6.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 7, name: "Petit Frittata Collection", price: "$10.00", image: "/images/image7.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 8, name: "Quiche Collection", price: "$12.00", image: "/images/image8.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 9, name: "Savoury Galettes", price: "$10.00", image: "/images/image9.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 10, name: "Breakfast Pots", price: "$12.00", image: "/images/image10.jpg", badge: "Top", quantity: 6, type: "V" },
    
  ];

  const buffetProducts = [
    { id: 1, name: "Breakfast Canapes Collection", price: "$10.00", image: "/images/image1.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 2, name: "Breakfast Pots", price: "$12.00", image: "/images/image2.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 3, name: "Savoury Breakfast Bruschetta", price: "$10.00", image: "/images/image3.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 4, name: "Savoury Breakfast Bruschetta", price: "$12.00", image: "/images/image4.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 5, name: "Loaded Mini Muffins", price: "$10.00", image: "/images/image5.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 6, name: "Breakfast Pastry Collection", price: "$12.00", image: "/images/image6.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 7, name: "Petit Frittata Collection", price: "$10.00", image: "/images/image7.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 8, name: "Quiche Collection", price: "$12.00", image: "/images/image8.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 9, name: "Savoury Galettes", price: "$10.00", image: "/images/image9.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 10, name: "Breakfast Pots", price: "$12.00", image: "/images/image10.jpg", badge: "Top", quantity: 6, type: "V" },
    
  ];

  const fingerFoodProducts = [
    { id: 1, name: "Breakfast Canapes Collection", price: "$10.00", image: "/images/image1.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 2, name: "Breakfast Pots", price: "$12.00", image: "/images/image2.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 3, name: "Savoury Breakfast Bruschetta", price: "$10.00", image: "/images/image3.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 4, name: "Loaded Mini Muffins", price: "$12.00", image: "/images/image4.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 5, name: "Loaded Mini Muffins", price: "$10.00", image: "/images/image5.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 6, name: "Breakfast Pastry Collection", price: "$12.00", image: "/images/image6.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 7, name: "Petit Frittata Collection", price: "$10.00", image: "/images/image7.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 8, name: "Quiche Collection", price: "$12.00", image: "/images/image8.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 9, name: "Savoury Galettes", price: "$10.00", image: "/images/image9.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 10, name: "Breakfast Pots", price: "$12.00", image: "/images/image10.jpg", badge: "Top", quantity: 6, type: "V" },
    
  ];

  const canapesProducts = [
    { id: 1, name: "Breakfast Canapes Collection", price: "$10.00", image: "/images/image1.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 2, name: "Breakfast Pots", price: "$12.00", image: "/images/image2.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 3, name: "Savoury Breakfast Bruschetta", price: "$10.00", image: "/images/image3.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 4, name: "Loaded Mini Muffins", price: "$12.00", image: "/images/image4.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 5, name: "Loaded Mini Muffins", price: "$10.00", image: "/images/image5.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 6, name: "Breakfast Pastry Collection", price: "$12.00", image: "/images/image6.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 7, name: "Petit Frittata Collection", price: "$10.00", image: "/images/image7.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 8, name: "Quiche Collection", price: "$12.00", image: "/images/image8.jpg", badge: "Top", quantity: 6, type: "V" },
    { id: 9, name: "Savoury Galettes", price: "$10.00", image: "/images/image9.jpg", badge: "New", quantity: 8, type: "NF" },
    { id: 10, name: "Breakfast Pots", price: "$12.00", image: "/images/image10.jpg", badge: "Top", quantity: 6, type: "V" },
    
  ];

  return (
    <div className="menu-page">
      {/* Filtros */}
      <div className="filter-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search menu"
            className="search-input"
          />
          
        </div>
        <div className="category-buttons">
          <button className="category-button">Dietary</button>
          <button className="category-button">Full Menu</button>
          <button className="category-button">Breakfast & Teas</button>
          <button className="category-button">Lunches</button>
          <button className="category-button">Buffets & BBQs</button>
          <button className="category-button">Finger Food & Platters</button>
          <button className="category-button">Canapés & Events</button>
        </div>
      </div>

      {/* Secciones */}
      <Section
        title="Breakfast and Tea"
        subtitle="Breakfast and Tea Collections"
        products={breakfastProducts}
      />
      <Section
        title="Lunches"
        subtitle="Lunch Collections"
        products={lunchProducts}
      />
      <Section
        title="Buffets and BBQ"
        subtitle="Buffets and BBQ Collections"
        products={buffetProducts}
      />
      <Section
        title="Finger Food"
        subtitle="Finger Food Collections"
        products={fingerFoodProducts}
      />
      <Section
        title="Canapés & Events"
        subtitle="Canapés & Events Collections"
        products={canapesProducts}
      />
    </div>
  );
};

export default FilterSection;
