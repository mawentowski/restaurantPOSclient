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
import { CartItemsContext } from "../store/context/CartItemsContext"; // Import your CartItemsContext
import * as calculateCostUtils from "../utils/calculateCost";

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
      <View style={styles.cartActions}>
        {/* <TouchableOpacity
          style={styles.cartButton}
          onPress={addItemToCartHandler}
        >
          <Text style={styles.cartButtonText}>
            {itemCount > 0 ? "Add More" : "Add to Cart"}
          </Text>
        </TouchableOpacity>
        {itemCount > 0 && (
          <TouchableOpacity
            style={styles.cartButton}
            onPress={removeItemFromCartHandler}
          >
            <Text style={styles.cartButtonText}>Remove</Text>
          </TouchableOpacity>
        )} */}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    // flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    // marginBottom: 16,
    // paddingHorizontal: 8,
    // borderRadius: 8,
    // overflow: "hidden",
    // width: "100%",
    flex: 1,
    // width: "100%",
    alignItems: "flex-start",
  },
  carouselImage: {
    marginLeft: "7.5%",
    marginRight: "7.5%",
    width: "85%",
    aspectRatio: 1,
    borderRadius: 18,
    // maxWidth: "50%",
    // maxHeight: "50%",
  },
  cardItemInfoContainer: {
    padding: 8,
    marginLeft: "7.5%",
    marginRight: "7.5%",
    width: "85%",
    // maxWidth: "50%",
    // maxHeight: "50%",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
  },
  cartActions: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  cartButton: {
    flex: 1,
    backgroundColor: "blue",
    padding: 8,
    alignItems: "center",
  },
  cartButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default MenuItem;

// 7.5
// first time 35%
// 7.5
// 7.5
// second item 35%
// 7.5
