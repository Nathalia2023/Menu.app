import React, { useState } from 'react';

const Cart = ({ cart, deliveryFee, gst }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleToggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee + gst;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-header-icon">
          <div className="cart-icon-wrapper">
            <img src="/images/carrito de compras.png" alt="Cart Icon" />
            <span className="cart-badge">{totalItems}</span>
          </div>
          <span className="cart-total">${total.toFixed(2)}</span>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
      <button className="delivery-time-btn" onClick={handleToggleCalendar}>
        <img src="/assets/calendario.png" alt="Calendar Icon" className="calendar-icon" />
        Set Delivery Time(S)
      </button>
      {showCalendar && (
        <div className="calendar-popup">
          <p>Select a delivery date:</p>
          <input type="date" className="calendar-input" />
        </div>
      )}

      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <div className="item-details">
              <div className="item-header">
                <span className="item-quantity">x {item.quantity}</span>
                <button className="edit-button">Edit</button>
                <span className="item-name">{item.name}</span>
              </div>
              <div className="item-footer">
                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                <img
                  src="/images/icono caneca basura.png"
                  alt="Delete Icon"
                  className="delete-icon"
                />
              </div>
            </div>
            {index < cart.length - 1 && <hr className="item-divider" />}
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <div className="summary-line">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="summary-line">
          <span>Sub Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-line">
          <span>GST Total</span>
          <span>${gst.toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <div className="delivery-info">
        <span>We deliver to Sydney, Monday to Saturday.</span>
        <button className="see-locations-btn">See locations</button>
      </div>
    </div>
  );
};

export default Cart;
