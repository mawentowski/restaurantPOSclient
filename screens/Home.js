import { View } from "react-native";
import WelcomeCard from "../components/WelcomeCard";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <WelcomeCard navigation={navigation} />
    </View>
  );
}
