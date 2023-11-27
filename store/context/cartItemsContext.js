import React, { createContext, useState } from "react";
import menuData from "../../menuData"; // Import your menu data

export const CartItemsContext = createContext({
  cartItems: {},
  addCartItem: (id) => {},
  removeCartItem: (id) => {},
  setCartItemQuantity: (id, quantity) => {},
  getCartItemQuantity: (id) => 0,
  getTotalItems: () => 0,
  getSubTotal: () => 0,
  getCartItemsList: () => {},
});

function CartItemsContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  function getCartItemsList() {
    return cartItems;
  }

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

  // In this updated CartItemsContextProvider, we've added a getSubTotal function that iterates through the cartItems and calculates the total cost by multiplying the quantity of each item by its corresponding price from menuData.

  function getSubTotal() {
    console.log("Calculating total cost...");

    // Create a variable to store the total cost and initialize it to 0
    let totalCost = 0;

    // Iterate over the keys (item IDs) in cartItems using reduce
    Object.keys(cartItems).forEach((id) => {
      console.log(`Processing item with ID: ${id}`);

      // Retrieve the quantity of the item from the cartItems object using the current item ID (id)
      const quantity = cartItems[id];
      console.log(`Quantity of item with ID ${id}: ${quantity}`);

      // Find the corresponding menu item (e.g., appetizer) in menuData by matching the item's ID
      let item = menuData.appetizers.find((appetizer) => appetizer.id === id);

      // If not found in appetizers, find in mainCourses
      if (!item) {
        item = menuData.mainCourses.find((mainCourse) => mainCourse.id === id);
      }

      // If not found in mainCourses, find in desserts
      if (!item) {
        item = menuData.desserts.find((dessert) => dessert.id === id);
      }

      console.log(
        `Found item with ID ${id}: ${item.name}, Price: ${item.price.toFixed(
          2
        )}`
      );

      // Calculate the cost of the current item by multiplying its quantity by its price
      const itemCost = quantity * item.price.toFixed(2);
      console.log(`Cost of item with ID ${id}: ${itemCost}`);

      // Add the item cost to the running total
      totalCost += itemCost;
    });

    // Format the total cost with two decimal places (e.g., "5.50")
    // totalCost = totalCost.toFixed(2);

    // Log the total cost before returning it
    console.log(`Total Cost: ${totalCost}`, typeof totalCost);

    // Return the totalCost, which is the calculated total cost of all items in the cart
    return totalCost;
  }

  // Function to round a number to a specified number of decimal places
  // function roundToDecimalPlaces(number, decimalPlaces) {
  //   const factor = 10 ** decimalPlaces;
  //   return Math.round(number * factor) / factor;
  // }

  const value = {
    cartItems,
    addCartItem,
    removeCartItem,
    setCartItemQuantity,
    getCartItemQuantity,
    getTotalItems,
    getSubTotal,
    getCartItemsList,
  };

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
}

export default CartItemsContextProvider;
