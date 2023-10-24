import React from "react";
import { View } from "react-native";
import { List, Button, Text } from "react-native-paper";

export default function MenuItem({ item, selectedItems }) {
  const { id, name, description, image, price } = item;

  const handleAddToCart = () => {
    // Add the item to the selectedItems
    selectedItems.push(item);
  };

  return (
    <View>
      <List.Item
        key={id}
        title={name}
        description={
          <View>
            <Text>{description}</Text>
            <Text style={{ fontWeight: "bold" }}>{price}</Text>
          </View>
        }
        left={(props) => <List.Icon {...props} icon={image} />}
        right={() => (
          <Button
            mode="contained"
            style={{ alignSelf: "flex-start" }}
            onPress={handleAddToCart}
          >
            Add +
          </Button>
        )}
      />
    </View>
  );
}
