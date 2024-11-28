const Header = () => {
  return (
      <header className="header">
          <div className="logo">
              <img src="/images/logo/vanilla-blue-logo.png" alt="logo" />
              <button className="order-now">Order now</button>
          </div>
          <div className="header-actions-menu">
                  <div className="quick-quote-m">Quick Quote</div>
                  <div className="auth-buttons-m">
                      <button className="login-m" id="active">Log In</button>
                      <button className="signup-m">Sign Up</button>
                  </div>
              </div>
          <input type="checkbox" id="nav_check" hidden />
          <label htmlFor="nav_check" className="hamburger">
              <div></div>
              <div></div>
              <div></div>
          </label>
          <nav>
              <button className="close-btn" onClick={() => (document.getElementById('nav_check').checked = false)}>
                  &times;
              </button>
              <div className="header-actions">
                  <div className="quick-quote">Quick Quote</div>
                  <div className="auth-buttons">
                      <button className="login">Log In</button>
                      <button className="signup">Sign Up</button>
                  </div>
                  <div className="list-links">
                    <div className="full-catering">
                    <p>Full Catering Menu</p>
                    <ul>
                        <li>Breackfast & Teas</li>
                        <li>Lunches</li>
                        <li>Buffest & BBQs</li>
                        <li>Finger Food & Platters</li>
                        <li>Melbourne Cup</li>
                        <li>Canape & Events</li>
                        <li>Value Collections</li>
                        <li>Christmas</li>
                        <li>Beer & Wine</li>
                        <li>Special Diets</li>
                        <li>Drinks & Servingware</li>
                        <li>School Cateen Catering</li>
                    </ul>
                    </div>
                    <div className="links">
                        <p>About</p>
                        <p>Quick Quote</p>
                        <p>Blog</p>
                        <p>Sustainability</p>
                        <p>Safe Careting</p>
                        <p>Delivery Locations</p>
                        <p>Contact Us</p>
                    </div>
                  </div>
              </div>
          </nav>
      </header>
  );
};

export default Header;
