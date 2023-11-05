import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CounterComponent = ({ count, increment, decrement, price }) => {
  const isCountZero = count === 0;
  const isCountMaxed = count === 5;

  return (
    <View style={styles.container}>
      {!isCountZero && (
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.count}>{count}</Text>
      {!isCountMaxed && (
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
      )}
      {/* <Text style={styles.buttonStyle}>
        {isCountZero ? "Back to Menu" : `Add to basket - $${count * price}`}
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
  buttonStyle: {
    color: "blue",
  },
});

export default CounterComponent;
