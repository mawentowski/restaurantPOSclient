import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { List, Button, Text } from "react-native-paper";
import { CartItemsContext } from "../store/context/cartItemsContext.js";
import { useContext } from "react";

export default function MenuItem({ item }) {
  const { id, name, description, image, price } = item;

  const cartItemsCtx = useContext(CartItemsContext);
  const itemCount = cartItemsCtx.cartItems[id] || 0;

  const addItemToCartHandler = () => {
    cartItemsCtx.addCartItem(id);
    console.log();
    // if (itemCount > 0) {
    //   cartItemsCtx.removeCartItem(id);
    // } else {
    //   cartItemsCtx.addCartItem(id);
    // }
    console.log("Updated Cart Items:", cartItemsCtx.cartItems);
  };

  return (
    <View style={styles.cartItem}>
      <Image style={styles.carouselImage} source={{ image }} />
      <View style={styles.cardItemInfoContainer}>
        <Text>{name}</Text>
        <Text>{price}</Text>
      </View>

      {/*       
      <List.Item
        key={id}
        title={name}
        description={
          <View>
            <Text>{description}</Text>
            <Text style={{ fontWeight: "bold" }}>{price}</Text>
          </View>
        }
        left={(props) => <List.Icon {...props} icon={image} />}
        right={() => (
          <View>
            <Button
              mode="contained"
              style={{ alignSelf: "flex-start" }}
              onPress={addItemToCartHandler}
            >
              {itemCount > 0 ? "Remove" : "Add"}
            </Button>
            <Text style={{ alignSelf: "center", marginTop: 8 }}>
              {itemCount > 0 ? `Count: ${itemCount}` : ""}
            </Text>
          </View>
        )}
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  cartItem: {
    // flex: "1",
    // width: 100,
    height: 150,
    // justifyContent: "center",
    // alignItems: "center",
    width: "50%",
    backgroundColor: "red",
  },
  cardItemInfoContainer: {},

  carouselImage: {
    flex: 1,
    // height: "100%",
    backgroundColor: "yellow",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
