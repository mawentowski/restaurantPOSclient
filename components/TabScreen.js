import React from "react";
import { View } from "react-native";
import AppetizerScreen from "./Appetizer";

const TabScreen = ({ selectedItems, onAddToCart }) => {
  return (
    <View>
      <AppetizerScreen
        selectedItems={selectedItems}
        onAddToCart={onAddToCart}
      />
    </View>
  );
};

export default TabScreen;
