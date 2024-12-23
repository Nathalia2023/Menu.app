import React from 'react';
import './ShowCartModal.css';

const ShowCartModal = ({ onClose }) => {
  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        {/* Header */}
        <header className="modal-header">
          <button className="back-to-menu" onClick={onClose}>
            &larr; Back To Menu
          </button>
          <div className="logo-cart">
            <img src="/images/logo/vanilla-blue-logo.png" alt="logo-cart" />
          </div>
        </header>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress-step active">
            <div className="circle"></div>
            <span>Account</span>
          </div>
          <div className="line"></div>
          <div className="progress-step">
            <div className="circle"></div>
            <span>Delivery</span>
          </div>
          <div className="line"></div>
          <div className="progress-step">
            <div className="circle"></div>
            <span>Payment</span>
          </div>
        </div>

        {/* Main Body */}
        <div className="modal-body">
          <div className="content-wrapper">
            {/* Account Section */}
            <div className="account-section">
              <div className="account-column">
                <h2>Returning customer - sign in</h2>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" placeholder="Enter your password" />
                  <a href="/" className="forgot-password">Forgotten password?</a>
                </div>
                <button className="action-button">Sign In</button>
              </div>

              <div className="account-column">
                <h2>New customer - get set up</h2>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Create Password (optional)</label>
                  <input type="password" placeholder="Create a password" />
                  <p className="info-text">This will register you for an account</p>
                </div>
                <button className="action-button">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCartModal;
