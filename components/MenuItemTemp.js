import React from "react";
import { Button, View, StyleSheet } from "react-native";

const MenuItem = ({ item, navigation }) => {
  const navigationHandler = () => {
    navigation.navigate("MainCourse");
  };
  return (
    <View>
      <Button
        onPress={navigationHandler}
        title="Learn More"
        color="purple" // Set text color to purple
        accessibilityLabel="Learn more about this purple button"
        style={styles.button} // Add a style for background color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "purple", // Set the background color to purple
  },
});

export default MenuItem;
