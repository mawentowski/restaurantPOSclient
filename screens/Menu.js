import React, { useState, useContext, useEffect } from "react";
import { Appbar, FAB, useTheme } from "react-native-paper";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Pressable } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppetizerScreen from "./Appetizer";
import MainCourseScreen from "./MainCourse";
import DessertScreen from "./Dessert";
import OrderBar from "../components/OrderBar";
import CourseScreen from "./Course";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CartItemsContext } from "../store/context/CartItemsContext"; // Import your CartItemsContext
import { TouchableOpacity } from "react-native-web";

const Tab = createMaterialTopTabNavigator();
const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const Menu = ({ navigation }) => {
  // const [selectedItems, setSelectedItems] = useState([]);
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  const appBarPressHandler = () => {
    console.log("Bottom bar pressed");
  };
  const cartItemsCtx = useContext(CartItemsContext);
  const itemCount = cartItemsCtx.getTotalItems();

  const RenderAppBar = () => {
    if (itemCount > 0) {
      return (
        <Pressable onPress={() => navigation.navigate("Basket")}>
          <Appbar
            style={[
              styles.bottom,
              {
                height: BOTTOM_APPBAR_HEIGHT + bottom,
                backgroundColor: theme.colors.elevation.level2,
              },
            ]}
            safeAreaInsets={{ bottom }}
          >
            <Appbar.Content title={<BasketSummary />}></Appbar.Content>

            {/* <Appbar.Action icon="archive" onPress={() => {}} />
          <Appbar.Action icon="email" onPress={() => {}} />
          <Appbar.Action icon="label" onPress={() => {}} />
          <Appbar.Action icon="delete" onPress={() => {}} />
          <FAB
            mode="flat"
            size="medium"
            icon="plus"
            onPress={() => {}}
            style={[
              styles.fab,
              { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
            ]}
          /> */}
          </Appbar>
        </Pressable>
      );
    }
  };
  return (
    <>
      <View style={{ flex: 1 }}>
        <Tab.Navigator>
          <Tab.Screen
            name="Appetizers"
            component={() => <CourseScreen course="appetizers" />}
          />
          <Tab.Screen
            name="Main Courses"
            component={() => <CourseScreen course="mainCourses" />}
          />
          <Tab.Screen
            name="Desserts"
            component={() => <CourseScreen course="desserts" />}
          />

          {/* <Tab.Screen name="MainCourse" component={MainCourseScreen} />
          <Tab.Screen name="Dessert" component={DessertScreen} /> */}
        </Tab.Navigator>
        {/* <OrderBar /> */}

        <RenderAppBar />
      </View>
    </>
  );
};

const BasketSummary = () => {
  const cartItemsCtx = useContext(CartItemsContext);
  const itemCount = cartItemsCtx.getTotalItems();
  const totalCost = cartItemsCtx.getTotalCost();
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text>Basket</Text>

      <Image
        style={styles.dot}
        source={require("../assets/circle-solid.svg")}
      />
      <Text>{itemCount} Items</Text>
      <Text style={{ marginLeft: "auto", marginRight: 12 }}>${totalCost}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "aquamarine",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: "absolute",
    right: 16,
  },
  dot: {
    width: 5,
    height: 5,
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 2,
  },
});

export default Menu;
