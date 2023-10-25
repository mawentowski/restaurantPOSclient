import { View } from "react-native";
import MenuItem from "../components/MenuItem";
import menuData from "../MenuData";

const AppetizerScreen = ({}) => {
  // const { selectedItems } = route.params;
  const appetizers = menuData.appetizers;

  return (
    <View>
      {appetizers.map((appetizer) => (
        <MenuItem key={appetizer.id} item={appetizer} />
      ))}
    </View>
  );
};

export default AppetizerScreen;
