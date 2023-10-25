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

const Tab = createMaterialTopTabNavigator();

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const confirmOrder = () => {
    // Implement your confirm order logic
    console.log("Ordered confirmed");
  };

  const callWaiter = () => {
    // Implement your call waiter logic
    console.log("Waiter called");
  };

  const viewBill = () => {
    // Implement your view bill logic
    console.log("Bill viewed");
  };

  // temporary test, really want to output menu data but not sure how to parse the object
  const carouselItems = [
    {
      text: "1",
      id: Math.random().toString(),
    },

    {
      text: "2",
      id: Math.random().toString(),
    },
    {
      text: "3",
      id: Math.random().toString(),
    },
    {
      text: "4",
      id: Math.random().toString(),
    },
    {
      text: "5",
      id: Math.random().toString(),
    },
    {
      text: "6",
      id: Math.random().toString(),
    },
  ];

  return (
    <>
      <View style={{ flex: 1 }}>
        <Tab.Navigator>
          <Tab.Screen
            name="Appetizer"
            component={AppetizerScreen}
            initialParams={{ selectedItems }}
          />
          <Tab.Screen name="MainCourse" component={MainCourseScreen} />
          <Tab.Screen name="Dessert" component={DessertScreen} />
        </Tab.Navigator>
        <View
          style={{
            width: "100%",
            // height: 100,
            // backgroundColor: "green",
            // flexDirection: "row",
            // justifyContent: "space-between",
          }}
        >
          {/* FLATLIGHT GUIDE:
          https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31197378#notes 
          */}
          <FlatList
            horizontal
            contentContainerStyle={styles.box}
            data={carouselItems}
            renderItem={(itemData) => {
              return (
                <Image
                  style={styles.carouselImage}
                  alt={itemData.item.text}
                  source={require("../assets/icon.png")}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
        <View
          style={{
            backgroundColor: "red",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "stretch",
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

const styles = StyleSheet.create({
  box: {
    // width: "100%",
    backgroundColor: "blue",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "baseline",
  },
  carouselImage: {
    width: 100, // Set the width of each item
    height: 100,
    backgroundColor: "lightblue",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Menu;
