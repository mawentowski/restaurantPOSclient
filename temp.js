import React from "react";
import { StyleSheet, FlatList, Pressable, Text, View } from "react-native";
import MenuItem from "../components/MenuItem";
import menuData from "../MenuData";
import { Button } from "react-native-paper";

const AppetizerScreen = ({ navigation }) => {
  const appetizers = menuData.appetizers;

  const navigateScreen = () => {
    navigation.navigate("Home");
  };

  return (
    // <FlatList
    //   data={appetizers}
    //   numColumns={2}
    //   contentContainerStyle={styles.cartItemCardsContainer}
    //   renderItem={({ item }) => (
    //     <MenuItem item={item} navigation={navigation} />
    //   )}
    //   keyExtractor={(item) => item.id}
    // />
    <View>
      <Button title="View bill" onPress={navigateScreen} />
    </View>
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
