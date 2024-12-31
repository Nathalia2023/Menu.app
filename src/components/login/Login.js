import React, {useState} from "react";
import "./Login.css"


const Login = ({
  cart = [{ name: "Scrummy Scones and Sides", price: 6.75, quantity: 18 },
  { name: "Morning Milk Buns - Maple bacon, free range eggs", price: 11.59, quantity: 11 },
  { name: "Savoury Breakfast Bruschetta Collection", price: 17.33, quantity: 3 },
  { name: "Warm Breakfast Bread Collection", price: 52.0, quantity: 1 },],
  deliveryFee = 22.0,
  gst = 0,
  isOpenLogin,
  onCloseLogin }) => {

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee + gst;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

   const [showItemsCart, setItemsCart] = useState(false);
    const toggleItemsCart = () => {
        setItemsCart(!showItemsCart);
    };
    const closeItemsCart = () => {
        setItemsCart(false);
    };


  if (!isOpenLogin) return null;
  return (
    <div className="login-overlay" >
      <div className="login-content">
        <div className="hedaer-login">
          <div className="btn" onClick={onCloseLogin}>
            <img src="..\images\icons\arrow-left.svg"></img>
            <button className="back-btn">Back to Menu</button>
            <button className="menu-back-btn">Menu</button>
          </div>
          <div className="logo-container">
            <img className="logo" src="..\images\logo\vanilla-blue-logo.png"></img>
          </div>
        </div>
        <div className="login-container-parent">
          <div className="container-login">
          <div className="position-container">
                <div className="blue-position">
                  <div className="circle active"></div>
                  <div className="stick"></div>
                  <div className="circle"></div>
                  <div className="stick"></div>
                  <div className="circle"></div>

                </div>
                <div className="text-position">
                  <p className="active">Account</p>
                  <p>Delivery</p>
                  <p>Payment</p>
                </div>
              </div>
            <div className="two">

              <div className="login-container-child">
                <div className="returning">
                  <h3>Returning customer - sing in</h3>
                  <form >
                    <div class="input-group">
                      <label class="label">Email address</label>
                      <input autocomplete="off" name="Email" id="Email" class="input" type="email"></input>
                    </div>
                    <div class="input-group">
                      <label class="label">Password</label>
                      <input autocomplete="off" name="Email" id="Email" class="input" type="email"></input>
                    </div>
                    <a href="#">Forgotten password?</a>
                  </form>
                  <button>Sign In &  Checkout</button>
                </div>
                <div className="new">
                  <h3>New customer - get set up</h3>
                  <form >
                    <div class="input-group">
                      <label class="label">Email address</label>
                      <input autocomplete="off" name="Email" id="Email" class="input" type="email"></input>
                    </div>
                    <div class="input-group">
                      <label class="label">Create Password (optional)</label>
                      <input autocomplete="off" name="Email" id="Email" class="input" type="email"></input>
                    </div>
                    <p>This will register you for an account</p>
                  </form>
                  <button>Register & Checkout</button>
                </div>
              </div>
              <div className="cart-login-container">
              <div className='delivery-time-btn-container'>
                <button className="delivery-time-btn">Set Delivery Time(S)</button>
                <button className="cart-btn" onClick={toggleItemsCart}>
                    <img className="cart-icon" src="..\images\icons\shopping-cart.svg"></img>
                    <span className="cart-quantity-btn">{totalItems}</span>
                    <span className="cart-price">${subtotal}</span>
                </button>
                {showItemsCart && (
                        <div className="items-cart-container">
                            <div className="items-cart-header">
                                <img
                                    src="images/icons/shopping-cart.svg" // Ruta de la imagen del carrito
                                    alt="Carrito"
                                    className="cart-icon-header" />
                                <span className="cart-quantity-btn-header">{totalItems}</span>
                                <button className="close-button-header" onClick={closeItemsCart}>
                                    ✖
                                </button>
                            </div>
                            <div className='cart-list-container-login'>
                                <ul className="cart-list">
                                    {cart.map((item, index) => (
                                        <li key={index} className="cart-item">
                                            <div className="item-details">
                                                <div className="item-header">
                                                    <span className="item-quantity">x{item.quantity}</span>
                                                    <div className='row'>
                                                        <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                                                    </div>
                                                </div>
                                                <div className="item-footer">
                                                    <span className="item-name">{item.name}</span>
                                                </div>
                                            </div>
                                            {index < cart.length - 1 && <hr className="item-divider" />}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="cart-summary-login">
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
                                <div className="summary-total-login">
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
              </div>
              <div className='cart-list-container'>
                <ul className="cart-list">
                  {cart.map((item, index) => (
                    <li key={index} className="cart-item">
                      <div className="item-details">
                        <div className="item-header">
                          <div className='row'>
                            <span className="item-quantity">x{item.quantity}</span>
                          </div>
                          <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div className="item-footer">
                          <span className="item-name">{item.name}</span>
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
            </div>
            </div>
            

          </div>


        </div>

      </div>
    </div>


  );
}

export default Login;
