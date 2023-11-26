import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Text } from "react-native-paper";

import { useContext } from "react";
import { CartItemsContext } from "../../store/context/cartItemsContext"; // Import your CartItemsContext
import * as calculateCostUtils from "../../utils/calculateCost";

const MenuItem = ({ handleMenuItemPress, item }) => {
  const { id, name, image, price } = item;
  const cartItemsCtx = useContext(CartItemsContext);
  // const itemCount = cartItemsCtx.cartItems[id] || 0;

  const cartItemQuantity = cartItemsCtx.getCartItemQuantity(item.id);

  const addItemToCartHandler = () => {
    cartItemsCtx.addCartItem(id);
  };

  const removeItemFromCartHandler = () => {
    cartItemsCtx.removeCartItem(id);
  };

  useEffect(() => {
    console.log("The cartItemQuantity is:", cartItemQuantity);
  });

  // navigation.navigate("CartItem");
  // onPress={() => {}}
  return (
    <Pressable
      style={styles.cartItem}
      onPress={() => {
        handleMenuItemPress(item, cartItemQuantity);
      }}
    >
      {/* Your view contents */}

      <Image style={styles.carouselImage} source={image} />

      <View style={styles.cardItemInfoContainer}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>
          {calculateCostUtils.roundCost(price)}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flex: 1,
    // alignItems: "flex-start",
    // maxWidth: "50%",
    // maxHeight: "50%",
  },
  carouselImage: {
    // marginLeft: "7.5%",
    // marginRight: "7.5%",

    // width: "60%",
    // height: "60%",
    // flex: 1,
    // height: '85%',
    width: 170,
    height: 170,
    // aspectRatio: 1,
    borderRadius: 18,
  },
  cardItemInfoContainer: {
    // padding: 8,
    // marginLeft: "7.5%",
    // marginRight: "7.5%",
    // width: "85%",
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
  cartActions: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // padding: 8,
  },
});

export default MenuItem;

// 7.5
// first time 35%
// 7.5
// 7.5
// second item 35%
// 7.5
