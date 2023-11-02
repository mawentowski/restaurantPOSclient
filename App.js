import { Provider as PaperProvider } from "react-native-paper";
import { registerRootComponent } from "expo";
import HomeScreen from "./screens/Home";
import MenuScreen from "./screens/Menu";
import AppetizerScreen from "./screens/Appetizer";
import MainCourseScreen from "./screens/MainCourse";
import DessertScreen from "./screens/Dessert";
import CartItemScreen from "./screens/CartItem";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartItemsContextProvider from "./store/context/cartItemsContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <CartItemsContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Appetizer" component={AppetizerScreen} />
            <Stack.Screen name="MainCourse" component={MainCourseScreen} />
            <Stack.Screen name="Dessert" component={DessertScreen} />
            <Stack.Screen name="CartItem" component={CartItemScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartItemsContextProvider>
    </PaperProvider>
  );
}

registerRootComponent(App);
