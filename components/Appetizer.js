import React from "react";
import { View } from "react-native";
import MenuItem from "./MenuItem"; // Import the custom MenuItem component
import menuData from "../MenuData";

const AppetizerScreen = ({ selectedItems, onAddToCart }) => {
  const appetizers = menuData.appetizers;

  const handleAddToCart = (item) => {
    // Call the onAddToCart function to add the selected item
    onAddToCart(item);
  };

  return (
    <View>
      {appetizers.map((appetizer) => (
        // The onAdd prop in the MenuItem component is a callback function that is used to handle the action when the "Add +" button in the menu item is pressed. In your code, it's defined as onAdd={handleAddToCart}.
        <MenuItem key={appetizer.id} item={appetizer} onAdd={handleAddToCart} />
      ))}
    </View>
  );
};

export default AppetizerScreen;
