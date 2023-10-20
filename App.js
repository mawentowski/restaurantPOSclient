import * as React from "react";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import { View, Text } from "react-native";

export default function Main() {
  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
