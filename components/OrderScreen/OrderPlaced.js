import React, { useEffect } from "react";
import {
  Modal,
  Portal,
  Text,
  Button,
  PaperProvider,
  Dialog,
} from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import { useContext } from "react";
import { CartItemsContext } from "../../store/context/cartItemsContext"; // Import your CartItemsContext

const OrderPlaced = ({
  //   visible,
  //   onClose,
  //   item,
  navigation,
  //   dismissMakeAnotherModal,
}) => {
  //   const cartItemsCtx = useContext(CartItemsContext);
  //   const cartItemQuantity = cartItemsCtx.getCartItemQuantity(item.id);
  // const totalCost = cartItemsCtx.getSubTotal();

  //   const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Set a timeout to navigate to the Home screen after 3 seconds
    const timeoutId = setTimeout(() => {
      navigation.navigate("Home");
    }, 1500); // 3000 milliseconds (3 seconds)

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <Portal>
      <Dialog visible={true} onDismiss={() => navigation.navigate("Home")}>
        <Dialog.Content>
          <Text style={styles.modalText}>Order Placed!</Text>
        </Dialog.Content>
      </Dialog>
    </Portal>

    // <View>
    //   <Portal>
    //     <Modal
    //       visible={true}
    //       onDismiss={() => navigation.navigate("Home")}
    //       contentContainerStyle={styles.orderPlacedModalContainer}
    //     >
    //       <View style={styles.orderPlacedTextContainer}>
    //         <Text>Order Placed!</Text>
    //       </View>
    //       {/* <View style={[styles.modalView, styles.modalHeader]}>
    //         <Text>{item.name}</Text>
    //         <Text style={styles.basePriceContainer}>{item.price}</Text>
    //       </View>
    //       <View style={[styles.modalView, styles.modalBody]}>
    //         <Image style={styles.cartItemImage} source={item.image} />

    //         <View style={styles.itemOrderInfo}>
    //           <Text>{item.name}</Text>
    //         </View>
    //         <View style={styles.cartItemQuantityContainer}>
    //           <Text>{cartItemQuantity}</Text>
    //         </View>
    //         <View style={styles.cartItemTotalCost}>
    //           <Text>124</Text>
    //         </View>
    //       </View> */}

    //       {/* <View style={[styles.modalView, styles.makeAnotherBtnContainer]}>
    //         <Button
    //           mode="contained"
    //           style={styles.makeAnotherBtn}
    //           onPress={() => {
    //             dismissMakeAnotherModal();
    //             navigation.navigate("ItemInfo", { item: item });
    //           }}
    //         >
    //           Make Another
    //         </Button>
    //       </View> */}
    //     </Modal>
    //   </Portal>
    // </View>
  );
};

const styles = StyleSheet.create({
  // orderPlacedModalContainer: {
  //   backgroundColor: "white",
  //   elevation: 5,
  //   borderRadius: 35,
  //   margin: "auto",
  // },

  // orderPlacedTextContainer: {
  //   padding: 25,
  //   flex: 1,
  // },
  modalText: {
    textAlign: "center",
  },
});

export default OrderPlaced;
