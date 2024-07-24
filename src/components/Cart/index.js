import React, { useState } from "react";
import "./styles.scss";
import { ReactComponent as CartSvg } from "../../assets/cart.svg";
import Modal from "../Modal";
import CartModal from "../CartModal";
import { useCartContext } from "../../contexts/CartContext";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);

  const { total } = useCartContext();

  return (
    <div
      className="relative w-8 h-8 hover:cursor-pointer"
      onClick={() => toggleModal()}>
      <CartSvg className="icon" />

      {/* TODO better padding on item counts */}
      <div className="bubble p-0.5">
        <span className="text-xs">{total}</span>
      </div>

      <Modal isVisible={isOpen} onClose={closeModal}>
        <CartModal />
      </Modal>
    </div>
  );
};

export default Cart;
