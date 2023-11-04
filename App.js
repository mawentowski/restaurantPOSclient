import { Provider as PaperProvider } from "react-native-paper";
import { registerRootComponent } from "expo";
import HomeScreen from "./screens/Home";
import MenuScreen from "./screens/Menu";
import CartItemScreen from "./screens/CartItem";
import BasketScreen from "./screens/Basket";
import CourseScreen from "./screens/Course";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartItemsContextProvider from "./store/context/CartItemsContext";

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
            <Stack.Screen name="CartItem" component={CartItemScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} />
            {/* <Stack.Screen name="Course" component={CourseScreen} /> */}

            <Stack.Screen
              name="CourseScreen"
              component={CourseScreen}
              initialParams={{}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartItemsContextProvider>
    </PaperProvider>
  );
}

registerRootComponent(App);
