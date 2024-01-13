import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { Appbar, useTheme, Text, Button, Portal } from "react-native-paper";
import CounterComponent from "../components/ItemScreen/Counter";
import { CartItemsContext } from "../store/context/cartItemsContext";
import * as costCalculationUtils from "../utils/costCalculationUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { ExpandImage } from "../components/ItemScreen/ExpandImage";
import ExpandImage from "../components/ItemScreen/ExpandImage";

// It needs to determine if this an UPDATE order, or an ADD TO order
// maybe UPDATE = false.
// Order screem object it passes needs to be edited to match item below: itemLooksLike
// This is what Orderscreen looks like

const ItemScreen = ({ route, navigation }) => {
  const BOTTOM_APPBAR_HEIGHT = 110;
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  const { item } = route.params;

  const MarkAnotherLooksLike = [
    {
      description: "Description for Appetizer 1",
      id: "appetizer-1",
      image: 2,
      name: "appetizer-1",
      price: 5.5,
    },
  ];

  const ItemInTheOrderScreen = [
    {
      description: "Description for Appetizer 1",
      id: "appetizer-1",
      image: 2,
      name: "appetizer-1",
      price: 5.5,
    },
  ];

  const cartItemsCtx = useContext(CartItemsContext);
  const initialCount = 1;
  const [count, setCount] = useState(initialCount);
  const [currentQuantity, setCurrentQuantity] = useState(0);

  useEffect(() => {
    console.log("the item is the ItemScreen looks like:", item);
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

  const roundedSingleItemPrice = costCalculationUtils.roundCost(item.price);

  const [showExpandImage, setExpandImage] = useState(false);
  // const [currentItem, setCurrentItem] = useState({});

  const handleImagePress = () => {
    setExpandImage(true);
  };

  const dismissExpandedImage = () => {
    setExpandImage(false);
  };

  return (
    <>
      <Appbar.Header
        style={{
          backgroundColor: theme.colors.elevation.level2,
          height: 140,
          paddingLeft: 0,
          // marginLeft: 0,
        }}
      >
        <Appbar.Content
          style={{ paddingLeft: 0, marginLeft: 0, alignItems: "center" }}
          title={
            <CartItemHeroImage
              item={item}
              navigation={navigation}
              handleImagePress={handleImagePress}
            />
          }
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
                style={[styles.button]}
              >
                {count === 0
                  ? "Back to Menu"
                  : `Add to order - $${costCalculationUtils.calculateCostByCount(
                      count,
                      roundedSingleItemPrice
                    )}`}
              </Button>
            }
            style={styles.btnContainer}
          ></Appbar.Content>
        </Appbar>
      </Portal>

      {showExpandImage && (
        <ExpandImage
          // it will be true
          visible={true}
          onClose={() => setExpandImage(false)}
          item={item}
          navigation={navigation}
          dismissExpandedImage={dismissExpandedImage}
        />
      )}
    </>
  );
};

const CartItemHeroImage = ({ item, handleImagePress }) => {
  return (
    <Pressable style={styles.imgContainer} onPress={handleImagePress}>
      <Image style={styles.itemImage} source={item.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  appBarHeader: {
    paddingLeft: 0,
  },
  cartItemInfoContainer: {
    paddingTop: "5%",
    paddingLeft: "3.5%",
    paddingRight: "3.5%",
    backgroundColor: "#FFFFFF",
  },

  infoHeader: {
    flexDirection: "row",
  },
  itemPrice: {
    marginLeft: "auto",
  },

  cartItemDescription: {
    paddingTop: "3%",
    paddingBottom: "3%",
  },

  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingLeft: "3.5%",
    paddingRight: "3.5%",
  },

  btnContainer: {
    marginLeft: 0,
    justifyContent: "center",
  },

  button: {
    borderRadius: 5,
  },

  imgContainer: {
    justifyContent: "center",
  },

  itemImage: {
    // width: "100%",
    height: "200%",
    // resizeMode: "cover",
    aspectRatio: 1,
  },
});

export default ItemScreen;
