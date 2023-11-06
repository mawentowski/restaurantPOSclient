import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, FAB, useTheme, Text, Button } from "react-native-paper";
import CounterComponent from "../components/Counter";
import { CartItemsContext } from "../store/context/CartItemsContext"; // Import your CartItemsContext
import * as calculateCostUtils from "../utils/calculateCost";

const ItemInfoScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const cartItemsCtx = useContext(CartItemsContext);

  // Set the initial count based on the item in the cart or default to 1
  const initialCount = cartItemsCtx.getCartItemQuantity(item.id) || 1;

  const [count, setCount] = useState(initialCount);

  // State variable to store currentQuantity
  const [currentQuantity, setCurrentQuantity] = useState(0);

  useEffect(() => {
    console.log("count type:", typeof count);
    console.log("Rounded item cost:", roundedSingleItemPrice);
  });

  useEffect(() => {
    // Fetch the current quantity when the component mounts
    setCurrentQuantity(cartItemsCtx.getCartItemQuantity(item.id));
  }, [item.id, cartItemsCtx]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const buttonStyle = count === 0 ? styles.greenButton : styles.blueButton;

  useEffect(() => {
    console.log(cartItemsCtx);
  });

  const roundedSingleItemPrice = calculateCostUtils.roundCost(item.price);

  return (
    <View>
      <Text>
        {item.id}, {item.name}, {item.image}, {roundedSingleItemPrice}. The
        count is: {count}
      </Text>
      <CounterComponent
        count={count}
        increment={increment}
        decrement={decrement}
        price={roundedSingleItemPrice}
      />
      <Button
        mode="contained"
        // title={
        //   count === 0
        //     ? "Back to Menu"
        //     : `Add to order - $${calculateCostUtils.calculateCostByCount(
        //         count,
        //         roundedSingleItemPrice
        //       )}`
        // }
        onPress={() => {
          if (count > 0 && count !== currentQuantity) {
            // If the count is different, update the cart with the new quantity
            cartItemsCtx.setCartItemQuantity(item.id, count);
            console.log("Quantity updated");
          }
          if (count === 0 && currentQuantity !== 0) {
            cartItemsCtx.removeCartItem(item.id);
          }

          navigation.navigate("Menu");
        }}
        // cant get styling to work
        style={[
          styles.button,
          count !== 0 && styles.greenButton,
          count === 0 && currentQuantity !== 0 && styles.redButton,
          count === 0 && currentQuantity === 0 && styles.blueButton,
        ]}
      >
        {count === 0
          ? "Back to Menu"
          : `Add to order - $${calculateCostUtils.calculateCostByCount(
              count,
              roundedSingleItemPrice
            )}`}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
  button: {
    // padding: 10,
    // borderWidth: 1,
    // borderColor: "gray",
  },
  count: {
    fontSize: 18,
  },
  greenButton: {
    color: "green",
  },
  blueButton: {
    color: "blue",
  },

  redButton: {
    color: "red",
  },
});

export default ItemInfoScreen;
