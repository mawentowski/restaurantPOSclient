import React, { useState, useContext, useEffect } from "react";
import {
  Appbar,
  FAB,
  useTheme,
  Portal,
  Button,
  Text,
} from "react-native-paper";
import { View, StyleSheet, Image, ScrollView, FlatList } from "react-native";
import { Pressable } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import OrderBar from "../components/OrderBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { CartItemsContext } from "../store/context/cartItemfsContext"; // Import your CartItemsContext
// import OrderPlaced from "../components/OrderPlaced";
// import CounterComponent from "../components/Counter";
import { CartItemsContext } from "../../store/context/cartItemsContext"; // Import your CartItemsContext
// import * as calculateCostUtils from "../utils/calculateCost";
import * as calculateCostUtils from "../../utils/calculateCost";

const AddToOrderBar = ({ navigation, item, count }) => {
  const BOTTOM_APPBAR_HEIGHT = 110;
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  // useEffect(() => {
  //   console.log(
  //     " the first instance -- count typeof looks like:",
  //     typeof count
  //   );
  //   console.log(" count looks like:", count);
  // });

  return (
    <Portal>
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
        <Appbar.Content
          title={
            <AddToOrderBarContent
              item={item}
              navigation={navigation}
              count={count}
            />
          }
        ></Appbar.Content>
      </Appbar>
    </Portal>
  );
};

const AddToOrderBarContent = ({ item, count, navigation }) => {
  return (
    <>
      <Button title="test">Test button</Button>
    </>
  );
};

const styles = StyleSheet.create({
  bottom: {
    // backgroundColor: "aquamarine",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  // modalView: {
  //   flexDirection: "row",
  //   paddingBottom: 15,
  // },
  // makeAnotherBtnContainer: {
  //   paddingRight: 11,
  // },

  // makeAnotherBtn: {
  //   flex: 1,
  //   borderRadius: 5,
  // },

  // totalPrice: {
  //   marginLeft: "auto",
  // },
});

export default AddToOrderBar;
