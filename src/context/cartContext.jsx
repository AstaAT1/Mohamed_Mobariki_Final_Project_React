import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const addToCart = () => {
    setCount((c) => c + 1);
    setShow(true);

    setTimeout(() => setShow(false), 1200);
  };

  return (
    <CartContext.Provider value={{ count, addToCart, show }}>
      {children}
    </CartContext.Provider>
  );
}

