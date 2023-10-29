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
          <MenuItem key={appetizer.id} item={appetizer} />
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
    flexWrap: "wrap",

    // backgroundColor: "blue",
    // width: 100,
    // height: 100,
    // justifyContent: "space-between",
    // alignItems: "baseline",
  },
});

export default AppetizerScreen;
