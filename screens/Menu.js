import React from "react";
import { View, Text, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppetizerScreen from "./Appetizer"; // Import the AppetizerScreen component
import MainCourseScreen from "./MainCourse"; // Import the MainCourseScreen component
import DessertScreen from "./Dessert"; // Import the MainCourseScreen component

// Define your tab screens
const Tab = createMaterialTopTabNavigator();

const MenuTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Appetizer" component={AppetizerScreen} />
      <Tab.Screen name="MainCourse" component={MainCourseScreen} />
      <Tab.Screen name="Dessert" component={DessertScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
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
    <>
      {/* Your app header or navigation can go here */}
      <View style={{ flex: 1 }}>
        <MenuTabs />
        <View
          style={{
            backgroundColor: "red",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button title="Confirm order" onPress={confirmOrder} />
          <Button title="Call waiter" onPress={callWaiter} />
          <Button title="View bill" onPress={viewBill} />
        </View>
      </View>
    </>
  );
};

export default App;
