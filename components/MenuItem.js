import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useContext } from "react";
import { CartItemsContext } from "../store/context/CartItemsContext"; // Import your CartItemsContext
import * as calculateCostUtils from "../utils/calculateCost";

const MenuItem = ({ item, navigation }) => {
  const { id, name, image, price } = item;
  const cartItemsCtx = useContext(CartItemsContext);
  const itemCount = cartItemsCtx.cartItems[id] || 0;

  const addItemToCartHandler = () => {
    cartItemsCtx.addCartItem(id);
  };

  const removeItemFromCartHandler = () => {
    cartItemsCtx.removeCartItem(id);
  };

  useEffect(() => {
    console.log(cartItemsCtx);
  });

  // navigation.navigate("CartItem");
  // onPress={() => {}}
  return (
    <Pressable
      style={styles.cartItem}
      onPress={() => {
        navigation.navigate("CartItem", { item: item });
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
    flex: 1, // Each item takes up 50% of the screen width
    backgroundColor: "lightgray",
    marginBottom: 16, // Add margin for spacing between rows
    paddingHorizontal: 8, // Add horizontal padding to control spacing at the edges
    borderRadius: 8,
    overflow: "hidden",
  },
  carouselImage: {
    width: "100%",
    aspectRatio: 1,
  },
  cardItemInfoContainer: {
    padding: 8,
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
