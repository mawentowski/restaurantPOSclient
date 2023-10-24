import React from "react";
import { View, Text } from "react-native";
import MenuItem from "../components/MenuItem"; // Import the custom MenuItem component
import menuData from "../MenuData";

const AppetizerScreen = ({ selectedItems, onAddToCart }) => {
  const appetizers = menuData.appetizers;

  const handleAddToCart = (item) => {
    // Call the onAddToCart function to add the selected item
    onAddToCart(item);
  };

  return (
    <View>
      <Text style={{ backgroundColor: "red" }}>Test</Text>
    </View>
    // <View>
    //   {appetizers.map((appetizer) => (
    //     <MenuItem key={appetizer.id} item={appetizer} onAdd={handleAddToCart} />
    //   ))}
    //   <Text>Test</Text>
    // </View>
  );
};

export default AppetizerScreen;
