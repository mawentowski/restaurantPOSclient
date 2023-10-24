import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import MenuTabs from "./MenuTabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppetizerScreen from "./Appetizer";

const Tab = createMaterialTopTabNavigator();

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
    <Tab.Navigator>
      <Tab.Screen name="Appetizer" component={AppetizerScreen} />
    </Tab.Navigator>
  );
};

export default Menu;
