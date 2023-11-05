import { View, StyleSheet } from "react-native";
import { Card, Avatar, Button, Text } from "react-native-paper";
import { useContext } from "react";
import { CartItemsContext } from "../store/context/CartItemsContext"; // Import your CartItemsContext

export default function BasketScreen() {
  // const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const cartItemsCtx = useContext(CartItemsContext);
  // const cartItemQuantity = cartItemsCtx.getCartItemQuantity(item.id);

  return (
    <View style={styles.orderDetailsContainer}>
      <View style={[styles.modalView, styles.orderSummaryContainer]}>
        <Text>Order Summary</Text>
        <Text style={styles.basePriceContainer}>Add Items</Text>
      </View>
      <View style={[styles.modalBody]}>
        <View style={[styles.modalView]}>
          <View style={styles.cartItemQuantityContainer}>
            <Text>2{/* {cartItemQuantity} */}</Text>
          </View>
          <View style={styles.itemOrderInfo}>
            <Text>
              Mama Nena's Famous Green Tea
              {/* {item.name} */}
            </Text>
          </View>
          <View style={styles.cartItemTotalCost}>
            <Text>$124</Text>
          </View>
        </View>
        <View style={[styles.modalView]}>
          <View style={styles.cartItemQuantityContainer}>
            <Text>2{/* {cartItemQuantity} */}</Text>
          </View>
          <View style={styles.itemOrderInfo}>
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
  );
}
const styles = StyleSheet.create({
  orderDetailsContainer: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 2,

    // borderTopWidth: 1,
    // borderTopColor: "#333",
  },
  // orderSummaryContainer: {
  //   marginTop: 2,
  //   width: "100%",
  // },
  modalView: {
    flexDirection: "row",
    padding: 16,
    // paddingRight: 16,
  },
  orderSummaryContainer: {
    marginTop: 2,
    width: "100%",
  },
  modalBody: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  basePriceContainer: {
    marginLeft: "auto",
  },
  cartItemImage: {
    width: "10%",
    aspectRatio: 1,
  },
  itemOrderInfo: {
    maxWidth: 180,
  },
  cartItemQuantityContainer: {
    // width: 20,
    // height: 20,
    // borderWidth: 1,
    // borderColor: "#333",
    // borderRadius: "50%",
    // alignItems: "center",
  },
  cartItemTotalCost: {},
});
