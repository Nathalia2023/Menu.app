import React from 'react';
import './Header.css'; // Asegúrate de tener un archivo CSS separado

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
      <img src="/images/vanilla-blue-logo.png" alt="Vanilla Blue Logo" className="logo" />
        <div className="order-now-container">
          <button className="order-now-btn">Order Now</button>
        </div>
      </div>
      <div className="nav-container">
        <div className="quick-quote">
          <button className="quote-btn">Quick Quote</button>
        </div>
        <div className="login-signout">
          <button className="login-btn">Login</button>
          <button className="signout-btn">Sign Out</button>
        </div>
        <div className="menu-icon">
          <button className="hamburger-menu">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
