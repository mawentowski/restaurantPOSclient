import React from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import MenuItem from "../components/UI/MenuItem"; // Import the custom MenuItem component
import menuData from "../MenuData";

const AppetizerScreen = () => {
  const handleAddToCart = (item) => {
    // Add the selected item to the cart or perform other actions
  };

  const appetizers = menuData.appetizers;

  return (
    <View>
      {appetizers.map((appetizer) => (
        <MenuItem key={appetizer.id} item={appetizer} onAdd={handleAddToCart} />
      ))}
    </View>
  );
};

export default AppetizerScreen;
