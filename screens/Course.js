import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import MenuItem from "../components/MenuItem";
import menuData from "../menuData";

const CourseScreen = ({ navigation, course }) => {
  // const courseData = menuData[course];

  useEffect(() => {
    console.log("course:", course);
    console.log("menuData[course]:", menuData[course]);
    // console.log("courseData:", courseData);
  });

  return (
    <FlatList
      data={menuData[course]}
      numColumns={2}
      contentContainerStyle={styles.cartItemCardsContainer}
      renderItem={({ item }) => {
        console.log("item:", item); // Add this line to log the item
        return <MenuItem item={item} navigation={navigation} />;
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
    paddingHorizontal: 8, // Add horizontal padding to control spacing at the edges
  },
});

export default CourseScreen;
