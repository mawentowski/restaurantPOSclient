import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import {
  Appbar,
  FAB,
  useTheme,
  Text,
  Button,
  Portal,
} from "react-native-paper";
import CounterComponent from "../components/Counter";
import { CartItemsContext } from "../store/context/CartItemsContext"; // Import your CartItemsContext
import * as calculateCostUtils from "../utils/calculateCost";
import AddToOrderBar from "../components/AddToOrderBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ItemInfoScreen = ({ route, navigation }) => {
  const BOTTOM_APPBAR_HEIGHT = 110;
  const { bottom } = useSafeAreaInsets();

  const theme = useTheme();
  const { item } = route.params;
  const cartItemsCtx = useContext(CartItemsContext);

  // Set the initial count based on the item in the cart or default to 1
  const initialCount = 1;

  // const initialCount = cartItemsCtx.getCartItemQuantity(item.id) || 1;

  const [count, setCount] = useState(initialCount);

  // State variable to store currentQuantity
  const [currentQuantity, setCurrentQuantity] = useState(0);

  useEffect(() => {
    console.log("count type:", typeof count);
    console.log("Rounded item cost:", roundedSingleItemPrice);
  });

  useEffect(() => {
    // Fetch the current quantity when the component mounts
    setCurrentQuantity(cartItemsCtx.getCartItemQuantity(item.id));
  }, [item.id, cartItemsCtx]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  // const buttonStyle = count === 0 ? styles.greenButton : styles.blueButton;

  useEffect(() => {
    console.log(cartItemsCtx);
  });

  const roundedSingleItemPrice = calculateCostUtils.roundCost(item.price);

  return (
    <>
      <Appbar.Header style={{ backgroundColor: theme.colors.elevation.level2 }}>
        <Appbar.Content
          title={<CartItemHeroImage item={item} />}
        ></Appbar.Content>
      </Appbar.Header>
      <ScrollView style={styles.cartItemInfoContainer}>
        <View style={styles.infoHeader}>
          <Text variant="titleMedium">{item.name}</Text>
          <Text style={styles.itemPrice} variant="titleMedium">
            ${roundedSingleItemPrice}
          </Text>
        </View>
        <Text style={styles.cartItemDescription}>{item.description}</Text>
        <CounterComponent
          count={count}
          increment={increment}
          decrement={decrement}
          price={roundedSingleItemPrice}
        />
      </ScrollView>

      <Portal>
        <Appbar
          style={[
            styles.bottom,
            {
              height: BOTTOM_APPBAR_HEIGHT + bottom,
              backgroundColor: theme.colors.elevation.level2,
            },
          ]}
          safeAreaInsets={{ bottom }}
        >
          <Appbar.Content
            title={
              <Button
                mode="contained"
                // title={
                //   count === 0
                //     ? "Back to Menu"
                //     : `Add to order - $${calculateCostUtils.calculateCostByCount(
                //         count,
                //         roundedSingleItemPrice
                //       )}`
                // }
                onPress={() => {
                  if (count > 0 && count !== currentQuantity) {
                    // If the count is different, update the cart with the new quantity
                    cartItemsCtx.setCartItemQuantity(item.id, count);
                    console.log("Quantity updated");
                  }
                  if (count === 0 && currentQuantity !== 0) {
                    cartItemsCtx.removeCartItem(item.id);
                  }

                  navigation.navigate("Menu");
                }}
                // cant get styling to work
                style={[
                  styles.button,
                  count !== 0 && styles.greenButton,
                  count === 0 && currentQuantity !== 0 && styles.redButton,
                  count === 0 && currentQuantity === 0 && styles.blueButton,
                ]}
              >
                {count === 0
                  ? "Back to Menu"
                  : `Add to order - $${calculateCostUtils.calculateCostByCount(
                      count,
                      roundedSingleItemPrice
                    )}`}
              </Button>
            }
          ></Appbar.Content>
        </Appbar>
      </Portal>
    </>
  );
};

const CartItemHeroImage = (item) => {
  return <Image style={styles.dot} source={require("../assets/favicon.png")} />;
};
{
  /* <Button title="test">Test button</Button> */
}
{
  /* <Image style={styles.itemImage} source={item.image} /> */
}

const styles = StyleSheet.create({
  itemImage: {
    padding: 8,
    marginLeft: "7.5%",
    marginRight: "7.5%",
    width: "85%",
    width: "85%",
    aspectRatio: 1,
    // borderRadius: 18,
  },

  dot: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 2,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
  },

  // imageContainer: {

  // }

  // cartItemInfoContainer: {
  //   marginTop: "5%",
  //   marginLeft: "7.5%",
  //   marginRight: "7.5%",
  // },

  infoHeader: {
    flexDirection: "row",
  },
  itemPrice: {
    marginLeft: "auto",
  },

  btnContainer: {
    marginTop: "auto",
  },
  button: {
    // padding: 10,
    // borderWidth: 1,
    // borderColor: "gray",
    marginTop: "auto",
  },

  cartItemDescription: {
    paddingTop: "3%",
    paddingBottom: "3%",
  },

  counter: {
    // paddingTop: "3%",
  },

  count: {
    fontSize: 18,
  },
  greenButton: {
    color: "green",
  },
  blueButton: {
    color: "blue",
  },

  redButton: {
    color: "red",
  },
  bottom: {
    // backgroundColor: "aquamarine",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default ItemInfoScreen;
