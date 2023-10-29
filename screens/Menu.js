import React, { useState } from "react";
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
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppetizerScreen from "./Appetizer";
import MainCourseScreen from "./MainCourse";
import DessertScreen from "./Dessert";
import OrderBar from "../components/OrderBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();
const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const Menu = () => {
  // const [selectedItems, setSelectedItems] = useState([]);
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <>
      <View style={{ flex: 1 }}>
        <Tab.Navigator>
          <Tab.Screen
            name="Appetizer"
            component={AppetizerScreen}
            // initialParams={{ selectedItems }}
          />
          {/* <Tab.Screen name="MainCourse" component={MainCourseScreen} />
          <Tab.Screen name="Dessert" component={DessertScreen} /> */}
        </Tab.Navigator>
        {/* <OrderBar /> */}
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
          <Appbar.Action icon="archive" onPress={() => {}} />
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
          />
        </Appbar>
      </View>
    </>
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
});

export default Menu;
