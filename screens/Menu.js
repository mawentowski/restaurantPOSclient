import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppetizerScreen from "./Appetizer";
import MainCourseScreen from "./MainCourse";
import DessertScreen from "./Dessert";
import OrderBar from "../components/OrderBar";

const Tab = createMaterialTopTabNavigator();

const Menu = () => {
  // const [selectedItems, setSelectedItems] = useState([]);
  return (
    <>
      <View style={{ flex: 1 }}>
        <Tab.Navigator>
          <Tab.Screen
            name="Appetizer"
            component={AppetizerScreen}
            // initialParams={{ selectedItems }}
          />
          <Tab.Screen name="MainCourse" component={MainCourseScreen} />
          <Tab.Screen name="Dessert" component={DessertScreen} />
        </Tab.Navigator>
        <OrderBar />
      </View>
    </>
  );
};

export default Menu;
