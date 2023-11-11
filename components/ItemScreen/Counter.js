import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  Appbar,
  FAB,
  useTheme,
  Portal,
  Button,
  Text,
} from "react-native-paper";

const CounterComponent = ({ count, increment, decrement, price }) => {
  const theme = useTheme();
  const isCountZero = count === 0;
  const isCountMaxed = count === 5;

  return (
    <View style={styles.container}>
      {!isCountZero && (
        <TouchableOpacity
          onPress={decrement}
          style={[styles.counterIconContainer]}
        >
          <Image
            source={require("../../assets/minus-solid.svg")}
            style={[
              styles.counterIcon,
              {
                borderColor: theme.colors.elevation.level2,
              },
            ]}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.itemCountContainer} variant="titleMedium">
        {count}
      </Text>
      {!isCountMaxed && (
        <TouchableOpacity
          onPress={increment}
          style={[styles.counterIconContainer]}
        >
          <Image
            source={require("../../assets/plus-solid.svg")}
            style={[
              styles.counterIcon,
              {
                borderColor: theme.colors.elevation.level2,
              },
            ]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: "auto",
    paddingVer: "10%",
  },
  counterIconContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  counterIcon: {
    width: 15,
    height: 15,
  },
  itemCountContainer: {
    fontSize: 18,
    paddingHorizontal: "10%",
  },
});

export default CounterComponent;
