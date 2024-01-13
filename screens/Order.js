import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import {
  Card,
  Avatar,
  Button,
  Text,
  Divider,
  useTheme,
  List,
  Surface,
} from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { CartItemsContext } from "../store/context/cartItemsContext"; // Import your CartItemsContext
import PlaceOrderBar from "../components/OrderScreen/PlaceOrderBar";
import menuData from "../menuData"; // Import your menu data
import * as costCalculationUtils from "../utils/costCalculationUtils";

export default function OrderScreen({ navigation }) {
  // const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const cartItemsCtx = useContext(CartItemsContext);
  const theme = useTheme();
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
      let item = menuData.appetizers.find((appetizer) => appetizer.id === id);

      // If not found in appetizers, find in mainCourses
      if (!item) {
        item = menuData.mainCourses.find((mainCourse) => mainCourse.id === id);
      }

      // If not found in mainCourses, find in desserts
      if (!item) {
        item = menuData.desserts.find((dessert) => dessert.id === id);
      }

      if (item) {
        console.log(" quantity typeof is", typeof quantity);

        console.log(" item.pricetypeof is", typeof item.price);
        const itemCost = costCalculationUtils.roundCost(quantity * item.price);

        newCartItemsArray.push({
          id: id,
          description: item.description,
          image: item.image,
          price: item.price,
          quantity: quantity,
          name: item.name,
          itemCost: itemCost,
        });
      }
      console.log("The item in the order screen looks like", item);
      console.log("the typeof item is:", typeof item);
    });

    // Update the state with the new array
    setCartItemsArray(newCartItemsArray);
  }, [cartItems, menuData.appetizers]);

  return (
    <ScrollView style={styles.orderDetailsContainer}>
      <View style={[styles.orderSummaryContainer]}>
        <View style={[styles.container]}>
          <Text variant="titleMedium">Order Summary</Text>
          <Pressable
            style={styles.totalCartItemCostContainer}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={styles.addItemsLink}>Add Items</Text>
          </Pressable>
        </View>
        <View style={[styles.cartItemsArrayContainer]}>
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
              )} // Add your custom function here
            />
          ))}
        </View>

        <Divider />
        <View style={styles.orderSummaryContainer}>
          <View style={[styles.container]}>
            <Text variant="labelLarge">Subtotal</Text>
            <Text style={styles.totalCartItemCostContainer}>
              ${roundedSubTotal}
            </Text>
          </View>

          <View style={[styles.container]}>
            <Text variant="labelLarge">Tax ({taxPercentage}%)</Text>
            <Text style={styles.totalCartItemCostContainer}>
              ${roundedTaxedAmt}
            </Text>
          </View>
        </View>
      </View>

      <PlaceOrderBar
        navigation={navigation}
        roundedTotalCost={roundedTotalCost}
      ></PlaceOrderBar>
    </ScrollView>
  );
}

const ListItemRight = () => {
  <View>
    <Text>Test</Text>;
  </View>;
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

  cartItemsArrayContainer: {
    paddingLeft: 16,
    paddingRight: 0,
    margin: 0,
    marginRight: -7,
    // flexDirection: "row",
    // justifyContent: "flex-start",
    // alignItems: "center",
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

  addItemsLink: {},
  surface: {
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
