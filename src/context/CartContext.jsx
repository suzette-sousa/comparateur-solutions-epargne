import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const { children } = props;

  const [cartItems, setCartItems] = useState([]);

  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  const addToCart = (item) => {
    if (!isItemInCart(item.id)) {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, isItemInCart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
