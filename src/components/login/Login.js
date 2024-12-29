import React from "react";
import "./Login.css"
const Login = ({ cart, deliveryFee, gst, isOpen, onClose }) => {



  if (!isOpen) return null;
  return (
    <div className="login-overlay" >
      <div className="login-content">
        <div className="hedaer-login">
          <div className="btn">
            <button className="back-btn" onClick={onClose}>Back to Menu</button>
          </div>
          <div className="logo-container">
            <img src="..\images\logo\vanilla-blue-logo.png"></img>
          </div>
        </div>
        <div className="login-container-parent">
          <div className="container-login">

            <div className="two">
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
              <div className="login-container-child">
                <div className="returning">
                  <h3>Returning customer - sing in</h3>
                </div>
                <div className="new">
                  <h3>New customer - get set up</h3>
                </div>
              </div>
            </div>
            <div className="cart-login-container">
              <h2>cart</h2>
            </div>

          </div>


        </div>

      </div>
    </div>


  );
}
export default Login;
