import React from "react";
import "../modal/modal2.css";

const Modal = ({ isOpen, onClose, title, children, imagen }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
