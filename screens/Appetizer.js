import React from "react";
import { View, Button } from "react-native";
import { useState } from "react";
import { List } from "react-native-paper";
import MenuItem from "../components/MenuItem"; // Import the custom MenuItem component
import menuData from "../MenuData";
import Carousel from "react-native-snap-carousel";
import { ScrollView } from "react-native-gesture-handler";

const AppetizerScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]); // Track selected items
  const appetizers = menuData.appetizers;

  const handleAddToCart = (item) => {
    console.log(`Button pressed for item: ${item.name}`);
    setSelectedItems([...selectedItems, item]);
    const updatedItems = [...selectedItems, item];
    console.log("Selected Items:", updatedItems);
  };

  return (
    <View>
      <View>
        {appetizers.map((appetizer) => (
          <MenuItem
            key={appetizer.id}
            item={appetizer}
            onAdd={handleAddToCart}
          />
        ))}
      </View>
      {/* 
      <ScrollView>
        {appetizers.map((appetizer) => (
          <MenuItem
            key={appetizer.id}
            item={appetizer}
            onAdd={handleAddToCart}
            count={selectedItems.filter((i) => i.id === appetizer.id).length}
          />
        ))}
      </ScrollView> */}
    </View>
  );
};

export default AppetizerScreen;
