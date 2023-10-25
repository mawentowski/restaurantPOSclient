import { Provider as PaperProvider } from "react-native-paper";
import { registerRootComponent } from "expo";
import HomeScreen from "./screens/Home";
import MenuScreen from "./screens/Menu";
import AppetizerScreen from "./screens/Appetizer";
import MainCourseScreen from "./screens/MainCourse";

import DessertScreen from "./screens/Dessert";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Appetizer" component={AppetizerScreen} />
          <Stack.Screen name="MainCourse" component={MainCourseScreen} />
          <Stack.Screen name="Dessert" component={DessertScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

registerRootComponent(App);
