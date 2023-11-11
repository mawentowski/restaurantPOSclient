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
          style={[styles.counterIconContainer, styles.absolutePositionedLeft]}
        >
          <Button styles={styles.counterIcon} icon="minus-thick" />

          {/* <Image
            source={require("../../assets/minus-thick.svg")}
            style={[
              styles.counterIcon,
              {
                borderColor: theme.colors.elevation.level2,
              },
            ]}
          /> */}
        </TouchableOpacity>
      )}
      <Text style={styles.itemCountContainer} variant="titleMedium">
        {count}
      </Text>
      {!isCountMaxed && (
        <TouchableOpacity
          onPress={increment}
          style={[styles.counterIconContainer, styles.absolutePositionedRight]}
        >
          <Button icon="plus-thick" />
          {/* <Image
            source={require("../../assets/plus-thick.svg")}
            style={[
              styles.counterIcon,
              {
                borderColor: theme.colors.elevation.level2,
              },
            ]}
          /> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // margin: "auto",
    paddingVertical: "10%",
  },
  relativeContainer: {
    // position: "relative",
    // alignItems: "center",
    // flexDirection: "row",
    // justifyContent: "center",
    // margin: "auto",
  },

  absolutePositionedLeft: {
    position: "absolute",
    // top: "-25%",
    left: 120,
  },

  absolutePositionedRight: {
    position: "absolute",
    // top: "-25%",
    right: 120,
  },

  counterIconContainer: {
    // padding: 0,
    // margin: 0,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 12,
  },

  counterIcon: {
    // margin: 0,
    // padding: 0,
  },

  itemCountContainer: {
    fontSize: 18,
    // paddingHorizontal: "10%",
  },
});

export default CounterComponent;
