import React from "react";
import { Button, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppetizerScreen from "./Appetizer"; // Import the AppetizerScreen component
import MainCourseScreen from "./MainCourse"; // Import the MainCourseScreen component
import DessertScreen from "./Dessert"; // Import the MainCourseScreen component
const Tab = createMaterialTopTabNavigator();

export default function MenuScreen({ navigation }) {
  return (
    <>
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Menu Screen</Text>
      </View> */}
      <Tab.Navigator>
        <Tab.Screen name="Appetizer" component={AppetizerScreen} />
        <Tab.Screen name="MainCourse" component={MainCourseScreen} />
        <Tab.Screen name="Dessert" component={DessertScreen} />
      </Tab.Navigator>
    </>
  );
}
