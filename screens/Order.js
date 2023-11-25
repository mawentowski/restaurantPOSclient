import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import { Card, Avatar, Button, Text } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { CartItemsContext } from "../store/context/CartItemsContext"; // Import your CartItemsContext
import PlaceOrderBar from "../components/OrderScreen/PlaceOrderBar";
import menuData from "../menuData"; // Import your menu data

export default function OrderScreen({ navigation }) {
  // const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const cartItemsCtx = useContext(CartItemsContext);
  // const cartItemQuantity = cartItemsCtx.getCartItemQuantity(item.id);

  const cartItems = cartItemsCtx.cartItems;
  const totalCost = cartItemsCtx.getTotalCost();
  // Looks like:
  // {"appetizer-1": 1, "appetizer-2": 1};

  const [cartItemsArray, setCartItemsArray] = useState([]);

  useEffect(() => {
    console.log("cartItemsArray", cartItemsArray);
    const newCartItemsArray = [];

    Object.keys(cartItems).forEach((id) => {
      const quantity = cartItems[id];
      const item = menuData.appetizers.find((appetizer) => appetizer.id === id);

      if (item) {
        const itemCost = (quantity * item.price).toFixed(2);

        // Create an object for each item and push it to the array
        newCartItemsArray.push({
          id: id,
          quantity: quantity,
          name: item.name,
          itemCost: itemCost,
        });
      }
    });

    // Update the state with the new array
    setCartItemsArray(newCartItemsArray);
  }, [cartItems, menuData.appetizers]);

  return (
    <ScrollView style={styles.orderDetailsContainer}>
      <View style={[styles.orderSummaryContainer]}>
        <View style={[styles.container]}>
          <Text>Order Summary</Text>
          <Text style={styles.totalCartItemCostContainer}>Add Items</Text>
        </View>

        {/* Flatlist that isn't scrollable

         */}

        <View>
          {cartItemsArray.map((item, index) => (
            <ItemRow key={index} item={item} />
          ))}
        </View>
        <View style={styles.orderSummaryContainer}>
          <View style={[styles.container]}>
            <Text>Subtotal</Text>
            <Text style={styles.totalCartItemCostContainer}>{totalCost}</Text>
          </View>
        </View>

        {/* <View styles={styles.container}>
        </View> */}
      </View>

      <PlaceOrderBar navigation={navigation}></PlaceOrderBar>
    </ScrollView>
  );
}

const ItemRow = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cartItemQuantityContainer}>
        <Text>{item.quantity}</Text>
      </View>
      <View style={styles.cartItemOrderInfo}>
        <Text>{item.name} </Text>
      </View>
      <View style={styles.cartItemTotalCost}>
        <Text>{item.itemCost} </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  orderDetailsContainer: {
    backgroundColor: "#FFFFFF",
    marginTop: 2,
    flex: 1,
  },
  orderSummaryContainer: {
    marginTop: 2,
    width: "100%",
  },

  container: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartItemQuantityContainer: {
    // width: 20,
    // height: 20,
    // borderWidth: 1,
    // borderColor: "#333",
    // borderRadius: "50%",
    // alignItems: "center",
  },

  cartItemOrderInfo: {
    maxWidth: 180,
  },

  cartItemTotalCost: {},
});
