import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import MenuTabs from "../components/MenuTabs";

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const confirmOrder = () => {
    // Implement your confirm order logic
  };

  const callWaiter = () => {
    // Implement your call waiter logic
  };

  const viewBill = () => {
    // Implement your view bill logic
  };

  return (
    <View>
      <MenuTabs
        // selectedItems: This is a prop that you are passing the selectedItems state to the <MenuTabs> component. It allows the <MenuTabs> component to access the selectedItems array, which presumably holds a list of items that have been selected by the user.
        selectedItems={selectedItems}
        // onAddToCart: This is a callback function that you are passing to the <MenuTabs> component. When an item is added to the cart (in this case, when the user selects an item in the AppetizerScreen), the onAddToCart function is called, and it receives the item as an argument. Inside the function, it updates the selectedItems state by adding the newly selected item to the existing items in the array.
        onAddToCart={(item) => {
          setSelectedItems([...selectedItems, item]);
        }}
      />
      {/* Carousel is missing */}
      {/* View for fixed buttons at the bottom */}
      <View
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button title="Confirm order" onPress={confirmOrder} />
        <Button title="Call waiter" onPress={callWaiter} />
        <Button title="View bill" onPress={viewBill} />
      </View>
    </View>
  );
};

export default Menu;
