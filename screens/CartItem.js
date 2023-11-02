import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function CartItemScreen({ route, navigation }) {
  const item = route.params; // Access the item prop from the route.params
  // console.log("here is the item object");
  // console.log(item);
  useEffect(() => {
    console.log(item);
  });

  return (
    <View>
      <Text>
        {item.id}, {item.name}, {item.image}, {item.price}
      </Text>
      <Button
        title={`Add to basket - ${item.price}`}
        onPress={() => {
          navigation.navigate("Appetizer");
        }}
      />
    </View>
  );
}
