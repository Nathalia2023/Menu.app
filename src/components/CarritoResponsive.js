import React, { useState, useRef, useEffect } from "react";

const CartComponent = ({ cart, deliveryFee, gst }) => {
    const cartQuantity = 4; // Esta es la cantidad del carrito, se puede hacer dinámica
    const [searchQuery, setSearchQuery] = useState("");
    const [showDietaryFilters, setShowDietaryFilters] = useState(false);
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    console.log(deliveryFee)
    const toggleDietaryFilters = () => {
        setShowDietaryFilters(!showDietaryFilters);
    };

    const closeDietaryFilters = () => {
        setShowDietaryFilters(false);
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal + deliveryFee + gst;
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <footer className="cart-responsive-parent">
        <div className="container">
            <div className="set-time-btn-container">
                <button className="set-time-btn">Set Delivery Time(s)</button>
            </div>
            <div className="cart-container">
                <button className="price-container" onClick={toggleDietaryFilters}>
                    <img
                        src="images/icons/shopping-cart.svg" // Ruta de la imagen del carrito
                        alt="Carrito"
                        className="cart-icon" /><span className="cart-quantity-btn">{cartQuantity}</span>
                    <span className="cart-price">$379.50</span>
                </button>
                {/**Ventana */}
                {showDietaryFilters && (
                    <div className="items-cart-container">
                        <div className="items-cart-header">
                            <img
                                src="images/icons/shopping-cart.svg" // Ruta de la imagen del carrito
                                alt="Carrito"
                                className="cart-icon-header" />
                            <span className="cart-quantity-btn-header">{cartQuantity}</span>
                            <button className="close-button-header" onClick={closeDietaryFilters}>
                                ✖
                            </button>
                        </div>
                        <div className='cart-list-container'>
                            <ul className="cart-list">
                                {cart.map((item, index) => (
                                    <li key={index} className="cart-item">
                                        <div className="item-details">
                                            <div className="item-header">
                                                <span className="item-quantity">x{item.quantity}</span>
                                                <div className='row'>
                                                    <button className="edit-button">edit</button>
                                                    <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                                                </div>
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
                                <div className='cont-row'>
                                    <span>Delivery Fee</span>
                                    <img src='images/icons/info.svg' />
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
                        <div className='summary-line-total'>
                            <div className="summary-total">
                                <span className='text-total'>Total</span>
                                <div className='text-number-total'>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="delivery-info">
                            <span>We deliver to Sydney, Monday to Saturday.</span>
                            <button className="see-locations-btn">See locations</button>
                        </div>
                    </div>
                )}
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
        </footer>
    );
};

export default CartComponent;
