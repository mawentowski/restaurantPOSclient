import React, { useContext, useEffect, useState } from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import { CartItemsContext } from "../../store/context/CartItemsContext"; // Import your CartItemsContext

const ExpandImage = ({
  visible,
  onClose,
  item,
  navigation,
  dismissExpandedImage,
}) => {
  useEffect(() => {
    console.log("Effectively navigated to the expand imag popup");
  });
  // const cartItemsCtx = useContext(CartItemsContext);
  // const cartItemQuantity = cartItemsCtx.getCartItemQuantity(item.id);
  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onClose}
          contentContainerStyle={styles.containerStyle}
        >
          <View>{/* View for image */}</View>
          {/* Absolutely positioned exit button */}
          <View style={[styles.modalView, styles.makeAnotherBtnContainer]}>
            <Button
              mode="contained"
              style={styles.makeAnotherBtn}
              onPress={() => {
                dismissExpandedImage();
              }}
            >
              Close Expand Image
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
    paddingTop: 16,
    // paddingLeft: '3.5%',
    // paddingRight: '3.5%',
    padding: "3.5%",
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
    alignItems: "center",
  },
  cartItemTotalCost: {},

  makeAnotherBtnContainer: {},
  makeAnotherBtn: {
    flex: 1,
    borderRadius: 5,
  },
});

export default ExpandImage;
