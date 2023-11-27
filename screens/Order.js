import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import { Card, Avatar, Button, Text } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { CartItemsContext } from "../store/context/cartItemsContext"; // Import your CartItemsContext
import PlaceOrderBar from "../components/OrderScreen/PlaceOrderBar";
import menuData from "../menuData"; // Import your menu data
import * as costCalculationUtils from "../utils/costCalculationUtils";

export default function OrderScreen({ navigation }) {
  // const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const cartItemsCtx = useContext(CartItemsContext);
  // const cartItemQuantity = cartItemsCtx.getCartItemQuantity(item.id);

  const cartItems = cartItemsCtx.cartItems;
  // returns number
  const subTotal = cartItemsCtx.getSubTotal();
  console.log("typeof subTotal:", typeof subTotal);
  const taxPercentage = 0.8;
  console.log("typeof taxPercentage:", typeof taxPercentage);
  const taxedAmt = subTotal - subTotal * taxPercentage;
  console.log("typeof taxedAmt:", typeof taxedAmt);
  const roundedTaxedAmt = costCalculationUtils.roundCost(taxedAmt);
  const totalCost = costCalculationUtils.calculateTotalCost(subTotal, taxedAmt);
  console.log("typeof totalCost:", typeof totalCost);

  const roundedSubTotal = costCalculationUtils.roundCost(subTotal);
  console.log(
    "roundedSubTotalis the following type before being rendered",
    typeof roundedSubTotal
  );
  const roundedTotalCost = costCalculationUtils.roundCost(totalCost);
  console.log(
    "roundedTotalCost the following type before being rendered",
    typeof roundedTotalCost
  );

  const [cartItemsArray, setCartItemsArray] = useState([]);

  useEffect(() => {
    console.log("cartItemsArray", cartItemsArray);
    const newCartItemsArray = [];

    Object.keys(cartItems).forEach((id) => {
      const quantity = cartItems[id];
      const item = menuData.appetizers.find((appetizer) => appetizer.id === id);

      if (item) {
        console.log(" quantity typeof is", typeof quantity);
        console.log(" item.pricetypeof is", typeof item.price);
        const itemCost = costCalculationUtils.roundCost(quantity * item.price);

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

        <View>
          {cartItemsArray.map((item, index) => (
            <ItemRow key={index} item={item} />
          ))}
        </View>
        <View style={styles.orderSummaryContainer}>
          <View style={[styles.container]}>
            <Text>Subtotal</Text>
            <Text style={styles.totalCartItemCostContainer}>
              ${roundedSubTotal}
            </Text>
          </View>

          <View style={[styles.container]}>
            <Text>Tax ({taxPercentage}%)</Text>
            <Text style={styles.totalCartItemCostContainer}>
              ${roundedTaxedAmt}
            </Text>
          </View>
          <View style={[styles.container]}>
            <Text>Total</Text>
            <Text style={styles.totalCartItemCostContainer}>
              ${roundedTotalCost}
            </Text>
          </View>
        </View>
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
      <View style={styles.cartItemsubTotal}>
        <Text>${item.itemCost} </Text>
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

  cartItemsubTotal: {},
});
