import React from "react";
import "../modal-cart/modalExtras.css";

const Modal = ({ isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-extra" onClick={onClose}>
      <div className="modal-content-extra" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;