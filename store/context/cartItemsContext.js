import { createContext, useState } from "react";

export const CartItemsContext = createContext({
  ids: [],
  addCartItems: (id) => {},
  removeCartItems: (id) => {},
});
// You can wrap other components/app in this component so they can interact with this context.
function CartItemsContextProvider({ children }) {
  const [cartItemsIds, setCartItemsIds] = useState([]);

  function addCartItem(id) {
    // when updating state based on previous state, pass a function which
    // creates a new array that includes the old snapshot + the ID of the newly added cart item.
    setCartItemsIds((currentCartItemIds) => [...currentCartItemIds, id]);
  }

  // return filtered version of array to filter out ID we received as a param
  // so new state is the old state filtered.
  // if mealId is not equal to ID, keep it, if not, it returns false and filters out mealId (that is removed)
  function removeCartItem(id) {
    setCartItemsIds((currentCartItemIds) =>
      currentCartItemIds.filter((mealId) => mealId !== id)
    );
  }

  // so all components wrapped by this provider can
  // call the functions or read the Ids
  const value = {
    ids: cartItemsIds,
    // the first is function executed inside other components (arbitrary)
    // the second is the same as the function as done before
    addCartItem: addCartItem,
    removeCartItem: removeCartItem,
  };
  // value refers to value above
  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
}

export default CartItemsContextProvider;

// left off 117.
