import React from 'react';

const Header = () => {
    return (
      <header className="header">
        <div className="logo-container">
          <img src="/assets/vanilla-blue-logo.png" alt="Vanilla Blue Logo" className="logo" />
          <button className="order-now">Order Now</button>
        </div>
        <div className="header-actions">
          <div className="quick-quote">Quick Quote</div>
          <div className="auth-buttons">
            <button className="login">Log In</button>
            <button className="signup">Sign Up</button>
          </div>
          <div className="hamburger-menu">
            <img src="/assets/iconoHamburguesa.png" alt="Hamburger Menu" />
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  