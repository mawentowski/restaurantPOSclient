import { createContext, useState } from "react";

export const CartItemsContext = createContext({
  cartItems: {},
  addCartItem: (id) => {},
  removeCartItem: (id) => {},
  getCartItemQuantity: (id) => 0,
});

function CartItemsContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  function addCartItem(id) {
    setCartItems((currentCartItems) => {
      const updatedCartItems = { ...currentCartItems };
      updatedCartItems[id] = (updatedCartItems[id] || 0) + 1;
      return updatedCartItems;
    });
  }

  function removeCartItem(id) {
    setCartItems((currentCartItems) => {
      const updatedCartItems = { ...currentCartItems };
      if (updatedCartItems[id] && updatedCartItems[id] > 0) {
        updatedCartItems[id] -= 1;
      }
      return updatedCartItems;
    });
  }

  function getCartItemQuantity(id) {
    return cartItems[id] || 0;
  }

  const value = {
    cartItems,
    addCartItem,
    removeCartItem,
    getCartItemQuantity,
  };

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
}

export default CartItemsContextProvider;
