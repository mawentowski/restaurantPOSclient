import React from "react";
import { View } from "react-native";
import { useState } from "react";
import { List } from "react-native-paper";
import MenuItem from "../components/UI/MenuItem"; // Import the custom MenuItem component
import menuData from "../MenuData";

const AppetizerScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]); // Track selected items

  const handleAddToCart = (item) => {
    console.log(`Button pressed for item: ${item.name}`);
    setSelectedItems([...selectedItems, item]);
    const updatedItems = [...selectedItems, item];
    console.log("Selected Items:", updatedItems);
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
