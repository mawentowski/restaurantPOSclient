import React, { useContext, useEffect, useState } from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { CartItemsContext } from "../../store/context/cartItemsContext"; // Import your CartItemsContext

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
          <View style={[styles.modalView]}>
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
    backgroundColor: "black",
    elevation: 6,
    flex: 1,
    margin: 0,
    position: "absolute", // Position the modal absolutely
    top: -StatusBar.currentHeight, // Adjust the top position by the status bar height
    left: 0,
    right: 0,
    bottom: 0,
  },

  modalView: {
    flexDirection: "row",
    paddingVertical: "3.5%",
  },
  cartItemImage: {
    // width: "10%",
    // aspectRatio: 1,
  },

  makeAnotherBtn: {
    flex: 1,
    // borderRadius: 5,
  },
});

export default ExpandImage;
