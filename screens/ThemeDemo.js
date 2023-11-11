import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Avatar, Button, Text } from "react-native-paper";
import { useContext } from "react";
import { CartItemsContext } from "../store/context/CartItemsContext"; // Import your CartItemsContext
import PlaceOrderBar from "../components/PlaceOrderBar";

export default function OrderScreen({ navigation }) {
  // const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const cartItemsCtx = useContext(CartItemsContext);
  // const cartItemQuantity = cartItemsCtx.getCartItemQuantity(item.id);

  return (
    <ScrollView style={styles.orderDetailsContainer}>
      <View style={[styles.orderSummaryContainer]}>
        <View style={[styles.container]}>
          <Text>Order Summary</Text>
          <Text style={styles.totalCartItemCostContainer}>Add Items</Text>
        </View>
        <View styles={styles.container}>
          <View style={[styles.container]}>
            <View style={styles.cartItemQuantityContainer}>
              <Text>2{/* {cartItemQuantity} */}</Text>
            </View>
            <View style={styles.cartItemOrderInfo}>
              <Text>
                Mama Nena's Famous Green Tea
                {/* {item.name} */}
              </Text>
            </View>
            <View style={styles.cartItemTotalCost}>
              <Text>$124</Text>
            </View>
          </View>
          <View style={[styles.container]}>
            <View style={styles.cartItemQuantityContainer}>
              <Text>2{/* {cartItemQuantity} */}</Text>
            </View>
            <View style={styles.cartItemOrderInfo}>
              <Text>
                Mama Nena's Famous Green Tea
                {/* {item.name} */}
              </Text>
            </View>
            <View style={styles.cartItemTotalCost}>
              <Text>$124</Text>
            </View>
          </View>
          <View style={[styles.container]}>
            <View style={styles.cartItemQuantityContainer}>
              <Text>2{/* {cartItemQuantity} */}</Text>
            </View>
            <View style={styles.cartItemOrderInfo}>
              <Text>
                Mama Nena's Famous Green Tea
                {/* {item.name} */}
              </Text>
            </View>
            <View style={styles.cartItemTotalCost}>
              <Text>$124</Text>
            </View>
          </View>
          <View style={[styles.container]}>
            <View style={styles.cartItemQuantityContainer}>
              <Text>2{/* {cartItemQuantity} */}</Text>
            </View>
            <View style={styles.cartItemOrderInfo}>
              <Text>
                Mama Nena's Famous Green Tea
                {/* {item.name} */}
              </Text>
            </View>
            <View style={styles.cartItemTotalCost}>
              <Text>$124</Text>
            </View>
          </View>
          <View style={[styles.container]}>
            <View style={styles.cartItemQuantityContainer}>
              <Text>2{/* {cartItemQuantity} */}</Text>
            </View>
            <View style={styles.cartItemOrderInfo}>
              <Text>
                Mama Nena's Famous Green Tea
                {/* {item.name} */}
              </Text>
            </View>
            <View style={styles.cartItemTotalCost}>
              <Text>$124</Text>
            </View>
          </View>
          <View style={[styles.container]}>
            <View style={styles.cartItemQuantityContainer}>
              <Text>2{/* {cartItemQuantity} */}</Text>
            </View>
            <View style={styles.cartItemOrderInfo}>
              <Text>
                Mama Nena's Famous Green Tea
                {/* {item.name} */}
              </Text>
            </View>
            <View style={styles.cartItemTotalCost}>
              <Text>$124</Text>
            </View>
          </View>
          <View style={[styles.container]}>
            <View style={styles.cartItemQuantityContainer}>
              <Text>2{/* {cartItemQuantity} */}</Text>
            </View>
            <View style={styles.cartItemOrderInfo}>
              <Text>
                Mama Nena's Famous Green Tea
                {/* {item.name} */}
              </Text>
            </View>
            <View style={styles.cartItemTotalCost}>
              <Text>$124</Text>
            </View>
          </View>
          <View style={[styles.container]}>
            <View style={styles.cartItemQuantityContainer}>
              <Text>2{/* {cartItemQuantity} */}</Text>
            </View>
            <View style={styles.cartItemOrderInfo}>
              <Text>
                Mama Nena's Famous Green Tea
                {/* {item.name} */}
              </Text>
            </View>
            <View style={styles.cartItemTotalCost}>
              <Text>$124</Text>
            </View>
          </View>
          <View style={[styles.container]}>
            <View style={styles.cartItemQuantityContainer}>
              <Text>2{/* {cartItemQuantity} */}</Text>
            </View>
            <View style={styles.cartItemOrderInfo}>
              <Text>
                Mama Nena's Famous Green Tea
                {/* {item.name} */}
              </Text>
            </View>
            <View style={styles.cartItemTotalCost}>
              <Text>$124</Text>
            </View>
          </View>
          <View style={[styles.container]}>
            <View style={styles.cartItemQuantityContainer}>
              <Text>2{/* {cartItemQuantity} */}</Text>
            </View>
            <View style={styles.cartItemOrderInfo}>
              <Text>
                Mama Nena's Famous Green Tea
                {/* {item.name} */}
              </Text>
            </View>
            <View style={styles.cartItemTotalCost}>
              <Text>$124</Text>
            </View>
          </View>
        </View>
      </View>

      <PlaceOrderBar navigation={navigation}></PlaceOrderBar>
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
