import React, { useState, createContext, useMemo, useCallback } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (product) => {
    console.log("add item fn: ", product);
    setTotal((prev) => prev + 1);
    // the item exists in the cart
    const currentItem = items.find((item) => item.id === product.id);
    console.log({ currentItem, items });

    if (currentItem) {
      setItems([
        ...items,
        {
          ...currentItem,
          quantity: currentItem.quantity + 1,
        },
      ]);
    } else {
      setItems([
        ...items,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };
  const removeItem = (product) => {
    setTotal((prev) => prev + 1);

    // the item exists in the cart
    const currentItem = items.find((item) => item.id === product.id);
    console.log({ currentItem, items });

    if (currentItem) {
      if (currentItem.quantity === 1) {
        setItems((prev) => prev.filter((i) => i.id !== currentItem.id));
      }
      setItems([
        ...items,
        {
          ...currentItem,
          quantity: currentItem.quantity - 1,
        },
      ]);
    }
  };

  const totalPrice = useCallback(() => {
    return items.reduce(
      (acc, it) => acc + it.quantity * it.prices[0].amount,
      0
    );
  }, [items]);

  console.log("totalPrice: ", totalPrice());

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, total, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => React.useContext(CartContext);
