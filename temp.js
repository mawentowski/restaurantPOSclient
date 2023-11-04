getTotalItems: () => 0,
  function getTotalItems() {
    const quantities = Object.values(cartItems);
    return quantities.reduce((total, quantity) => total + quantity, 0);
  };
  getTotalItems,