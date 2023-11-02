import React, { useContext, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CounterComponent from "../components/Counter";
import { CartItemsContext } from "./CartItemsContext"; // Import your CartItemsContext

const CartItemScreen = ({ route, navigation }) => {
  const item = route.params;
  const { getCartItemQuantity } = useContext(CartItemsContext);

  // Set the initial count based on the item in the cart or default to 1
  const initialCount = getCartItemQuantity(item.id) || 1;

  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log("count type:", typeof count);
    console.log("item.price type:", typeof item.price);
  });

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const buttonStyle = count === 0 ? styles.greenButton : styles.blueButton;

  return (
    <View>
      <Text>
        {item.id}, {item.name}, {item.image}, {item.price}. The count is:{" "}
        {count}
      </Text>
      <CounterComponent
        count={count}
        increment={increment}
        decrement={decrement}
        price={item.price}
      />
      <Button
        title={
          count === 0
            ? "Back to Menu"
            : `Add to basket - $${count * item.price}`
        }
        onPress={() => {
          if (count === 0) {
            // Handle "Back to Menu" action
            console.log("Back to Menu");
            // For example, navigate to a different screen
            navigation.navigate("Appetizer");
          } else {
            console.log("Add to basket");
            // Handle "Add to basket" action
            // For example, add the item to the basket
          }
        }}
        style={buttonStyle}
      />
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
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  count: {
    fontSize: 18,
  },
  blueButton: {
    color: "blue",
  },
  greenButton: {
    color: "green",
  },
});

export default CartItemScreen;
