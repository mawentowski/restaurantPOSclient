import React from "react";
import { StyleSheet, FlatList } from "react-native";
import MenuItem from "../components/MenuItem";
import menuData from "../menuData";

const AppetizerScreen = ({ navigation }) => {
  const appetizers = menuData.appetizers;

  return (
    <FlatList
      data={appetizers}
      numColumns={2}
      contentContainerStyle={styles.cartItemCardsContainer}
      renderItem={({ item }) => (
        <MenuItem item={item} navigation={navigation} />
      )}
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

export default AppetizerScreen;
