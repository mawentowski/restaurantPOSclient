import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabScreen from "./TabScreen";
import AppetizerScreen from "./Appetizer";

const Tab = createMaterialTopTabNavigator();

// Was passed selectedItems array (which is empty) from Menu.js
// And the callback function that allows for updating the selected items state
const MenuTabs = ({ selectedItems, onAddToCart }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Appetizer" component={AppetizerScreen} />
      <Tab.Screen name="Appetizer" component={AppetizerScreen} />
    </Tab.Navigator>
  );
};

export default MenuTabs;
