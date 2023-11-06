import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Pressable,
  View,
  SafeAreaView,
} from "react-native";
// import { } from "react-native-paper";
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
  const [currentItem, setCurrentItem] = useState({});

  const handleMenuItemPress = (item, cartItemQuantity) => {
    console.log("the item.id is:", item.id);
    setCurrentItem(item);
    console.log(
      "The cartItemQuantity registered by handMenuItemPress is:",
      cartItemQuantity
    );

    if (cartItemQuantity > 0) {
      setShowMakeAnother(true);
      console.log("The cartItemQuantity > 0");
    } else {
      console.log("The cartItemQuantity = 0");
      navigation.navigate("ItemInfo", { item: item });
    }
    console.log("The handleMenuItemPress was pressed");
  };

  const dismissMakeAnotherModal = () => {
    setShowMakeAnother(false);
  };

  return (
    // <Pressable onPress={handleMenuItemPress}>Test</Pressable>
    <View style={{ flex: 1 }}>
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
          item={currentItem}
          navigation={navigation}
          dismissMakeAnotherModal={dismissMakeAnotherModal}
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
