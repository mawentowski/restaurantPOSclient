import { Provider as PaperProvider } from "react-native-paper";
import { registerRootComponent } from "expo";
import HomeScreen from "./screens/Home";
import MenuScreen from "./screens/Menu";
import ItemScreen from "./screens/Item";
import OrderScreen from "./screens/Order";
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
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={MenuScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item"
              component={ItemScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Order" component={OrderScreen} />
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
