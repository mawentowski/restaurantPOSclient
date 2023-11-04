import React, { createContext, useState } from "react";
import menuData from "../../menuData"; // Import your menu data

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

  // In this updated CartItemsContextProvider, we've added a getTotalCost function that iterates through the cartItems and calculates the total cost by multiplying the quantity of each item by its corresponding price from menuData.

  function getTotalCost() {
    console.log("Calculating total cost...");

    // Create a variable to store the total cost and initialize it to 0
    // ME NOTE: its looping through all items in the cart, updating total cost for each item
    // in the cart, adding it up each time
    const totalCost = Object.keys(cartItems).reduce((total, id) => {
      console.log(`Processing item with ID: ${id}`);
      // Use the reduce method to iterate over the keys (item IDs) in cartItems

      // Retrieve the quantity of the item from the cartItems object using the current item ID (id)
      const quantity = cartItems[id];
      console.log(`Quantity of item with ID ${id}: ${quantity}`);

      // Find the corresponding menu item (e.g., appetizer) in menuData by matching the item's ID
      const item = menuData.appetizers.find((appetizer) => appetizer.id === id);
      console.log(
        `Found item with ID ${id}: ${item.name}, Price: ${item.price}`
      );

      // Calculate the cost of the current item by multiplying its quantity by its price
      const itemCost = quantity * item.price;
      console.log(`Cost of item with ID ${id}: ${itemCost}`);

      // Add the item cost to the running total
      return total + itemCost;
    }, 0);

    // Log the total cost before returning it
    console.log(`Total Cost: ${totalCost}`);

    // Return the totalCost, which is the calculated total cost of all items in the cart
    return totalCost;
  }

  const value = {
    cartItems,
    addCartItem,
    removeCartItem,
    setCartItemQuantity,
    getCartItemQuantity,
    getTotalItems,
    getTotalCost,
  };

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
}

export default CartItemsContextProvider;
