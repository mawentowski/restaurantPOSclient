import React from "react";
import { View } from "react-native";
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
    <View>
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
      />
    </View>
  );
}
