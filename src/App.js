import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Cart from './components/Cart';
import CartResponsive from './components/CarritoResponsive';
import Filter from './components/Filter';
import Menu from './components/Menu';
import Login from './components/login/Login';
import './styles/App.css';

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

      const [isLoginOpen, setIsLoginOpen] = useState(false);
      const handleLoginOpen = () => {
          setIsLoginOpen(true);
      };
  
      const handleLoginClose = () => {
          setIsLoginOpen(false);
      };

  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showFullCart, setShowFullCart] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCartClick = () => {
    if (isMobile) {
      setShowFullCart(false);
    }
  };

  const handleFilterToggle = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="app">

      <Header />
      <Banner />
      {/*Contenido de la página*/}
      <div className="main-content">
        <div className="filters-cart-container">
          {/* Pasamos isMobile como prop a Filter.js */}
          <Filter
            filters={filters}
            setFilters={setFilters}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            isMobile={isMobile}
            handleFilterToggle={handleFilterToggle}
          />
        </div>
        {/* Contenido del menu */}
        <Menu filters={filters} setCart={setCart} className="menu" />
        {!isMobile || showFullCart ? (
          <Cart cart={cart} deliveryFee={deliveryFee} gst={gst} />
        ) : (
          <div className="mobile-cart-footer" onClick={handleCartClick}>
            <CartResponsive cart={cart} deliveryFee={deliveryFee} gst={gst} />
          </div>
        )}
      </div>
  
      <Login cart={cart} deliveryFee={deliveryFee} gst={gst} isOpenLogin={isLoginOpen} onCloseLogin={() => setIsLoginOpen(false)} />

    </div>
    
  );
};

export default App;
