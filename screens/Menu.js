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
// import OrderBar from "../components/OrderBar";
import CourseScreen from "./Course";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CartItemsContext } from "../store/context/CartItemsContext"; // Import your CartItemsContext
// import { TouchableOpacity } from "react-native-web";
import MakeAnother from "../components/MakeAnother";

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

  // You'll have to pass these as part of initial params to the course, thenm down to the Menu item
  // MENU > COURSE > MENUITEM

  const [showMakeAnother, setShowMakeAnother] = useState(false);

  const handleMenuItemPress = (item, cartItemQuantity) => {
    console.log("the item.id is:", item.id);
    console.log(
      "The cartItemQuantity registered by handMenuItemPress is:",
      cartItemQuantity
    );

    if (cartItemQuantity > 0) {
      setShowMakeAnother(true);
      console.log("The cartItemQuantity > 0");
    } else {
      console.log("The cartItemQuantity = 0");
      navigation.navigate("CartItem", { item: item });
    }
    console.log("The handleMenuItemPress was pressed");
  };

  // See the return statement for the condition

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
          {/* <Tab.Screen
            name="Dessert"
            component={CourseScreen}
            initialParams={{
              course: "desserts",
              handleMenuItemPress: handleMenuItemPress,
            }}
          /> */}
          <Tab.Screen
            name="Appetizer"
            component={CourseScreen}
            initialParams={{
              course: "appetizers",
              handleMenuItemPress: handleMenuItemPress,
            }}
          />

          {/* <Tab.Screen
            name="Main Course"
            component={CourseScreen}
            initialParams={{ course: "mainCourses" }}
          />
          <Tab.Screen
            name="Dessert"
            component={CourseScreen}
            initialParams={{ course: "desserts" }}
          /> */}
        </Tab.Navigator>
        {/* <OrderBar /> */}

        <RenderAppBar />

        {showMakeAnother && <MakeAnother />}
        {/* {showMakeAnother && (
          <MakeAnother
            visible={showMakeAnother}
            onClose={() => setShowMakeAnother(false)}
          />
        )} */}
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
