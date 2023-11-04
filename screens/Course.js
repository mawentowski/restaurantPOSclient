import React, { useEffect } from "react";
import { StyleSheet, FlatList, Pressable } from "react-native";
import MenuItem from "../components/MenuItem";
import menuData from "../menuData";

const CourseScreen = ({ navigation, route }) => {
  // const courseData = menuData[course];
  const { course, handleMenuItemPress } = route.params;

  // useEffect(() => {
  //   console.log("course:", course);
  //   console.log("menuData[course]:", menuData[course]);
  // });

  return (
    // <Pressable onPress={handleMenuItemPress}>Test</Pressable>

    <FlatList
      data={menuData[course]}
      numColumns={2}
      contentContainerStyle={styles.cartItemCardsContainer}
      renderItem={({ item }) => {
        console.log("item:", item);
        return (
          <MenuItem
            item={item}
            navigation={navigation}
            handleMenuItemPress={handleMenuItemPress}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  cartItemCardsContainer: {
    flexDirection: "row",

    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
});

export default CourseScreen;
