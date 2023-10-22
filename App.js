import React from "react";
import { View, Text, Image } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import ImageViewer from "./components/ImageViewer";
const PlaceholderImage = require("./assets/favicon.png");
import { Avatar } from "react-native-paper";
import WelcomeCard from "./components/WelcomeCard";
import { registerRootComponent } from "expo";

export default function App() {
  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} />
        </View> */}
        <WelcomeCard />
        {/* <Avatar.Icon size={24} icon="folder" /> */}
      </View>
    </PaperProvider>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#25292e",
//     alignItems: "center",
//   },
//   imageContainer: {
//     // flex: 1,
//     paddingTop: 58,
//   },
//   image: {
//     width: 20,
//     height: 20,
//     borderRadius: 18,
//   },
// });

// register your main component in an Expo app. This is typically used in your App.js file or the entry point of your Expo project to register the root component of your application. Specifucally required to view the web server.
registerRootComponent(App);
