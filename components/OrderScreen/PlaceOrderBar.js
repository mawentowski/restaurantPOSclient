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
import { CartItemsContext } from "../../store/context/CartItemsContext"; // Import your CartItemsContext
import OrderPlaced from "./OrderPlaced";

const PlaceOrderBar = ({ navigation }) => {
  const BOTTOM_APPBAR_HEIGHT = 110;
  const MEDIUM_FAB_HEIGHT = 56;
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  //   <Pressable onPress={() => navigation.navigate("OrderDetails")}>
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
        <Appbar.Content title={<PlaceOrderBarContent />}></Appbar.Content>

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
    </Portal>
  );
};

const PlaceOrderBarContent = () => {
  // const cartItemsCtx = useContext(CartItemsContext);
  // const itemCount = cartItemsCtx.getTotalItems();
  // const totalCost = cartItemsCtx.getTotalCost();
  const [visible, setVisible] = useState(false); // State to control the visibility of the modal

  const showModal = () => setVisible(true); // Function to show the modal
  // const hideModal = () => setVisible(false);

  return (
    <View style={[styles.makeAnotherBtnContainer]}>
      <View style={styles.modalView}>
        <Text>Total</Text>
        <Text style={styles.totalPrice}>$239</Text>
      </View>

      <Button
        mode="contained"
        style={styles.makeAnotherBtn}
        onPress={showModal}
      >
        Place Order
      </Button>

      {visible && (
        <OrderPlaced
          // it will be true
          // visible={true}
          // onClose={() => setShowMakeAnother(false)}
          // item={currentItem}
          navigation={navigation}
          // dismissMakeAnotherModal={dismissMakeAnotherModal}
        />
      )}
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
  modalView: {
    flexDirection: "row",
    paddingBottom: 15,

    // paddingRight: 16,
  },
  makeAnotherBtnContainer: {
    // paddingTop: 40,
    // paddingBottom: 40,
    paddingRight: 11,
  },

  makeAnotherBtn: {
    flex: 1,
    borderRadius: 5,
  },

  totalPrice: {
    marginLeft: "auto",
  },
  // fab: {
  //   position: "absolute",
  //   right: 16,
  // },
  // dot: {
  //   width: 5,
  //   height: 5,
  //   alignSelf: "center",
  //   marginLeft: 10,
  //   marginRight: 10,
  //   marginTop: 2,
  // },
});

export default PlaceOrderBar;
