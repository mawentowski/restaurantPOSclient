import React, { createContext, useState } from "react";

export const CartItemsContext = createContext({
  cartItems: {},
  addCartItem: (id) => {},
  removeCartItem: (id) => {},
  setCartItemQuantity: (id, quantity) => {},
  getCartItemQuantity: (id) => 0,
  getTotalItems: () => 0,
  getTotalCost: () => 0,
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
      if (updatedCartItems.hasOwnProperty(id)) {
        delete updatedCartItems[id];
      }
      return updatedCartItems;
    });
  }

  function setCartItemQuantity(id, quantity) {
    setCartItems((currentCartItems) => {
      const updatedCartItems = { ...currentCartItems };
      updatedCartItems[id] = quantity;
      return updatedCartItems;
    });
  }

  function getCartItemQuantity(id) {
    return cartItems[id] || 0;
  }

  function getTotalItems() {
    const quantities = Object.values(cartItems);
    return quantities.reduce((total, quantity) => total + quantity, 0);
  }
  // function getTotalCost() {
  //   const quantities = Object.values(cartItems);
  //   return quantities.reduce((total, quantity) => total + quantity, 0);
  // }

  const value = {
    cartItems,
    addCartItem,
    removeCartItem,
    setCartItemQuantity,
    getCartItemQuantity,
    getTotalItems,
  };

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
}

export default CartItemsContextProvider;
