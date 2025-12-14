import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (sweet) => {
    setCart((prev) => ({
      ...prev,
      [sweet._id]: {
        ...sweet,
        qty: (prev[sweet._id]?.qty || 0) + 1,
      },
    }));
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) => ({
      ...prev,
      [id]: { ...prev[id], qty },
    }));
  };

  const removeFromCart = (id) => {
    const copy = { ...cart };
    delete copy[id];
    setCart(copy);
  };

  const clearCart = () => setCart({});

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQty, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);