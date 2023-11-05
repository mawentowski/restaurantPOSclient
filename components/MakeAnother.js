import * as React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import { useContext } from "react";
import { CartItemsContext } from "../store/context/CartItemsContext"; // Import your CartItemsContext

const MakeAnother = ({ visible, onClose, item, navigation }) => {
  const cartItemsCtx = useContext(CartItemsContext);
  const cartItemQuantity = cartItemsCtx.getCartItemQuantity(item.id);
  // const totalCost = cartItemsCtx.getTotalCost();
  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onClose}
          contentContainerStyle={styles.containerStyle}
        >
          <View style={[styles.modalView, styles.modalHeader]}>
            <Text>{item.name}</Text>
            <Text style={styles.basePriceContainer}>{item.price}</Text>
          </View>
          <View style={[styles.modalView, styles.modalBody]}>
            <Image style={styles.cartItemImage} source={item.image} />

            <View style={styles.itemOrderInfo}>
              <Text>{item.name}</Text>
            </View>
            <View style={styles.cartItemQuantityContainer}>
              <Text>{cartItemQuantity}</Text>
            </View>
            <View style={styles.cartItemTotalCost}>
              <Text>124</Text>
            </View>
          </View>
          <View style={[styles.modalView, styles.makeAnotherBtnContainer]}>
            <Button
              mode="contained"
              style={styles.makeAnotherBtn}
              onPress={() => {
                navigation.navigate("Dessert");
              }}
            >
              Make Another
            </Button>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    elevation: 5,
    marginTop: "auto",
    paddingLeft: 0,
    paddingRight: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  modalView: {
    flexDirection: "row",
    padding: 16,
    // paddingRight: 16,
  },
  modalHeader: {
    borderBottomColor: "#F2F2F2",
    borderBottomWidth: 8,
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
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: "50%",
    alignItems: "center",
  },
  cartItemTotalCost: {},

  makeAnotherBtnContainer: {},
  makeAnotherBtn: {
    flex: 1,
  },
});

export default MakeAnother;
