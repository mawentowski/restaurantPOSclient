import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Pressable, View } from "react-native";
import MenuItem from "../components/MenuItem";
import menuData from "../menuData";

import MakeAnother from "../components/MakeAnother";

const CourseScreen = ({ navigation, route }) => {
  // const courseData = menuData[course];
  const { course } = route.params;

  // useEffect(() => {
  //   console.log("course:", course);
  //   console.log("menuData[course]:", menuData[course]);
  // });

  const [showMakeAnother, setShowMakeAnother] = useState(false);

  const handleMenuItemPress = (item, cartItemQuantity) => {
    console.log("the item.id is:", item.id);
    console.log(
      "The cartItemQuantity registered by handMenuItemPress is:",
      cartItemQuantity
    );

    if (cartItemQuantity > 0) {
      setShowMakeAnother(true);
      console.log("The cartItemQuantity > 0");
    } else {
      console.log("The cartItemQuantity = 0");
      navigation.navigate("CartItem", { item: item });
    }
    console.log("The handleMenuItemPress was pressed");
  };

  return (
    // <Pressable onPress={handleMenuItemPress}>Test</Pressable>
    <View>
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

      {showMakeAnother && (
        <MakeAnother
          // it will be true
          visible={showMakeAnother}
          onClose={() => setShowMakeAnother(false)}
        />
      )}
    </View>
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
