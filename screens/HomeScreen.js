import React from "react";
import { Button, View, Text } from "react-native";
import WelcomeCard from "../components/WelcomeCard";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <WelcomeCard />
    </View>
  );
}
