import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabScreen from "./TabScreen";
import AppetizerScreen from "./Appetizer";

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
      <Tab.Screen name="Appetizer" component={AppetizerScreen} />
      {/* <Tab.Screen name="Appetizer">
        {() => (
          <TabScreen selectedItems={selectedItems} onAddToCart={onAddToCart} />
        )}
      </Tab.Screen> */}
      {/* Add other tabs here */}
    </Tab.Navigator>
  );
};

export default MenuTabs;

<MenuTabs
  // selectedItems: This is a prop that you are passing the selectedItems state to the <MenuTabs> component. It allows the <MenuTabs> component to access the selectedItems array, which presumably holds a list of items that have been selected by the user.
  selectedItems={selectedItems}
  // onAddToCart: This is a callback function that you are passing to the <MenuTabs> component. When an item is added to the cart (in this case, when the user selects an item in the AppetizerScreen), the onAddToCart function is called, and it receives the item as an argument. Inside the function, it updates the selectedItems state by adding the newly selected item to the existing items in the array.
  onAddToCart={(item) => {
    setSelectedItems([...selectedItems, item]);
  }}
/>;
{
  /* Carousel is missing */
}
{
  /* View for fixed buttons at the bottom */
}
