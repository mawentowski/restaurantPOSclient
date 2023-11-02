import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CounterComponent = ({ count, increment, decrement, price }) => {
  const buttonStyle = count === 0 ? styles.greenButton : styles.blueButton;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text>+</Text>
      </TouchableOpacity>
      {/* <Text style={buttonStyle}>
        {count === 0 ? "Back to Menu" : `Add to basket - $${count * price}`}
      </Text> */}
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

export default CounterComponent;
