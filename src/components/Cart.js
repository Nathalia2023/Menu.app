import React, { useState } from 'react';
import ShowCartModal from './modal/ShowCartModal'; // Asegúrate de importar el modal correcto
import DeliveryTimeModal from './modal/DeliveryTimeModal'; // Si el modal de fecha sigue siendo necesario

const Cart = ({ cart, deliveryFee, gst }) => {
  const [showCartModal, setShowCartModal] = useState(false); // Estado para mostrar el modal del carrito
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal de la fecha de entrega
  const [deliveryDate, setDeliveryDate] = useState(null); // Nuevo estado para almacenar la fecha y hora

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal); // Alterna la visibilidad del modal del carrito
  };

  const toggleModal = () => {
    setShowModal(!showModal); // Alterna la visibilidad del modal de entrega
  };

  const handleDateTimeSelect = (date, time) => {
    setDeliveryDate({ date, time }); // Guarda la fecha y hora seleccionadas
    setShowModal(false); // Cierra el modal de entrega después de seleccionar la fecha
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee + gst;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-header-icon" onClick={toggleCartModal}>
          <div className="cart-icon-wrapper">
            <img src="/images/icons/shopping-cart.svg" alt="Cart Icon" />
            <span className="cart-badge">{totalItems}</span>
          </div>
          <span className="cart-total">${total.toFixed(2)}</span>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>

      <div className="delivery-time-btn-container">
        <button className="delivery-time-btn" onClick={toggleModal}>
          {deliveryDate ? `${deliveryDate.date} at ${deliveryDate.time}` : 'Set Delivery Time(S)'}
        </button>
      </div>

      {/* Modal del carrito */}
      {showCartModal && (
        <ShowCartModal
          cart={cart}
          deliveryFee={deliveryFee}
          gst={gst}
          onClose={toggleCartModal} // Cierra el modal del carrito
        />
      )}

      {/* Modal de fecha de entrega */}
      <DeliveryTimeModal
        isOpen={showModal}
        onClose={toggleModal}
        onSelectDateTime={handleDateTimeSelect} // Pasamos la función para manejar la fecha y hora seleccionada
      />

      <div className="cart-list-container">
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="item-details">
                <div className="item-header">
                  <div className="row">
                    <span className="item-quantity">x{item.quantity}</span>
                    <button className="edit-button">edit</button>
                  </div>
                  <span className="item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="item-footer">
                  <span className="item-name">{item.name}</span>
                  <img
                    src="/images/icons/trash-2.svg"
                    alt="Delete Icon"
                    className="delete-icon"
                  />
                </div>
              </div>
              {index < cart.length - 1 && <hr className="item-divider" />}
            </li>
          ))}
        </ul>
      </div>

      <div className="cart-summary">
        <div className="summary-line1">
          <div className="cont-row">
            <span>Delivery Fee</span>
            <img src="images/icons/info.svg" />
          </div>
          <span className="delivery-fee">${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="summary-line">
          <span>Sub Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-line">
          <span>GST Total</span>
          <span>${gst.toFixed(2)}</span>
        </div>
      </div>
      <div className="summary-line-total">
        <div className="summary-total">
          <span className="text-total">Total</span>
          <div className="text-number-total">
            <span>${total.toFixed(2)}</span>
          </div>
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
