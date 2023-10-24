import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabScreen from "./TabScreen";

const Tab = createMaterialTopTabNavigator();

// Was passed selectedItems array (which is empty) from Menu.js
// And the callback function that allows for updating the selected items state
const MenuTabs = ({ selectedItems, onAddToCart }) => {
  return (
    // <Tab.Navigator>
    //   <Tab.Screen
    //     name="Appetizer"
    //     component={() => (
    //       <TabScreen selectedItems={selectedItems} onAddToCart={onAddToCart} />
    //     )}
    //   />
    // </Tab.Navigator>
    <Tab.Navigator>
      <Tab.Screen name="Appetizer">
        {() => (
          <TabScreen selectedItems={selectedItems} onAddToCart={onAddToCart} />
        )}
      </Tab.Screen>
      {/* Add other tabs here */}
    </Tab.Navigator>
  );
};

export default MenuTabs;
