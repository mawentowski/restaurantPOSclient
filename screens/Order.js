import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import {
  Text,
  Divider,
  List,
  Surface,
} from "react-native-paper";
import { CartItemsContext } from "../store/context/cartItemsContext";
import PlaceOrderBar from "../components/OrderScreen/PlaceOrderBar";
import menuData from "../menuData";
import * as costCalculationUtils from "../utils/costCalculationUtils";

export default function OrderScreen({ navigation }) {
  const cartItemsCtx = useContext(CartItemsContext);
  const cartItems = cartItemsCtx.cartItems;
  const subTotal = cartItemsCtx.getSubTotal();
  const taxPercentage = 0.8;
  const taxedAmt = subTotal - subTotal * taxPercentage;
  const roundedTaxedAmt = costCalculationUtils.roundCost(taxedAmt);
  const totalCost = costCalculationUtils.calculateTotalCost(subTotal, taxedAmt);
  const roundedSubTotal = costCalculationUtils.roundCost(subTotal);
  const [cartItemsArray, setCartItemsArray] = useState([]);

  useEffect(() => {
    const newCartItemsArray = Object.keys(cartItems).map((id) => {
      const quantity = cartItems[id];
      let item = menuData.appetizers.find((appetizer) => appetizer.id === id) ||
                 menuData.mainCourses.find((mainCourse) => mainCourse.id === id) ||
                 menuData.desserts.find((dessert) => dessert.id === id);

      if (item) {
        const itemCost = costCalculationUtils.roundCost(quantity * item.price);

        return {
          id: id,
          description: item.description,
          image: item.image,
          price: item.price,
          quantity: quantity,
          name: item.name,
          itemCost: itemCost,
        };
      }
      return null;
    }).filter(Boolean);

    setCartItemsArray(newCartItemsArray);
  }, [cartItems, menuData.appetizers, menuData.mainCourses, menuData.desserts]);

  return (
    <ScrollView style={styles.orderDetailsContainer}>
      <View style={styles.orderSummaryContainer}>
        <View style={styles.container}>
          <Text variant="titleMedium">Order Summary</Text>
          <Pressable
            style={styles.totalCartItemCostContainer}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={styles.addItemsLink}>Add Items</Text>
          </Pressable>
        </View>
        <View style={styles.cartItemsArrayContainer}>
          {cartItemsArray.map((item) => (
            <List.Item
              title={item.name}
              key={item.id}
              description={() => (
                <Pressable
                  style={styles.totalCartItemCostContainer}
                  onPress={() => navigation.navigate("Item", { item: item })}
                >
                  <Text style={styles.addItemsLink}>Edit</Text>
                </Pressable>
              )}
              left={(props) => (
                <Surface style={styles.surface} elevation={1}>
                  <Text>{item.quantity}x</Text>
                </Surface>
              )}
              right={() => (
                <View>
                  <Text>${item.itemCost}</Text>
                </View>
              )} 
            />
          ))}
        </View>

        <Divider />
        <View style={styles.orderSummaryContainer}>
          <View style={styles.container}>
            <Text variant="labelLarge">Subtotal</Text>
            <Text style={styles.totalCartItemCostContainer}>
              ${roundedSubTotal}
            </Text>
          </View>

          <View style={styles.container}>
            <Text variant="labelLarge">Tax ({taxPercentage}%)</Text>
            <Text style={styles.totalCartItemCostContainer}>
              ${roundedTaxedAmt}
            </Text>
          </View>
        </View>
      </View>

      <PlaceOrderBar
        navigation={navigation}
        roundedTotalCost={totalCost} // fixed variable name
      />
    </ScrollView>
  );
}

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

  cartItemsArrayContainer: {
    paddingLeft: 16,
    paddingRight: 0,
    margin: 0,
    marginRight: -7,
  },

  addItemsLink: {},
  surface: {
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
