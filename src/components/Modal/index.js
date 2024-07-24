import React from "react";
import "./styles.scss";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container  max-w-7xl relative px-8">
        <div className="modal-content">
          <div className="content">
            <button className="modal-close" onClick={() => onClose()}>
              &times;
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
