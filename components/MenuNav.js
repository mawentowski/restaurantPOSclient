import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppetizerScreen from "../screens/Appetizer"; // Import the AppetizerScreen component
import MainCourseScreen from "../screens/MainCourse"; // Import the MainCourseScreen component

export default function MenuNav() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Appetizer" component={AppetizerScreen} />
      <Tab.Screen name="MainCourse" component={MainCourseScreen} />
    </Tab.Navigator>
  );
}
