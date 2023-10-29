import { View, StyleSheet } from "react-native";
import MenuItem from "../components/MenuItem";
import menuData from "../MenuData";

const AppetizerScreen = ({}) => {
  // const { selectedItems } = route.params;
  const appetizers = menuData.appetizers;

  return (
    <View>
      <View style={styles.cartItemCardsContainer}>
        {appetizers.map((appetizer) => (
          <MenuItem
            key={appetizer.id}
            item={appetizer}
            style={styles.cartItemCard}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemCardsContainer: {
    // width: "100%",
    // backgroundColor: "red",
    flexDirection: "row",
    // backgroundColor: "blue",
    // width: 100,
    // height: 100,
    // justifyContent: "space-between",
    // alignItems: "baseline",
    flex: 1,
  },
  cartItemCard: {
    // backgroundColor: "lightblue",
    // backgroundColor: "green",
    // flex: 1,
    // width: 100,
    // height: 100,
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
  },
});

export default AppetizerScreen;
