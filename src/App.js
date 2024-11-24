import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([
    { name: "Scrummy Scones and Sides", price: 6.75, quantity: 18 },
    { name: "Morning Milk Buns - Maple bacon, free range eggs", price: 11.59, quantity: 11 },
    { name: "Savoury Breakfast Bruschetta Collection", price: 17.33, quantity: 3 },
    { name: "Warm Breakfast Bread Collection", price: 52.00, quantity: 1 },
  ]);

  const deliveryFee = 22.0;
  const gst = 2.5;

  const [filters, setFilters] = useState({
    glutenFree: false,
    dairyFree: false,
    vegan: false,
    vegetarian: false,
    halalFriendly: false,
  });

  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="app">
      <Header />
      <Banner />
      <div className="main-content">
        <div className="filters-cart-container">
          <Filter
            filters={filters}
            setFilters={setFilters}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
          {/* Pasamos los datos del carrito al componente */}
          <Cart cart={cart} deliveryFee={deliveryFee} gst={gst} />
        </div>
        {/* Asegúrate de que `Menu` pueda actualizar el carrito con `setCart` */}
        <Menu filters={filters} setCart={setCart} />
      </div>
    </div>
  );
};

export default App;
