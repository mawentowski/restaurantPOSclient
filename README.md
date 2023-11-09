```shell
# nodeJS is dependency, check others.
# create an expo app
npx create-expo-app AwesomeProject
cd AwesomeProject
# starts server where you can scan your phone
npx expo start
# Install react native paper
npm install react-native-paper
# work on the web: https://docs.expo.dev/workflow/web/
npx expo install react-dom react-native-web @expo/webpack-config
# start the webpack dev server with:
npx expo start --web
# View at something like http://localhost:19006
```

Sample food delivery app:
https://github.com/anggaprytn/Restaurant_Client

Components:
https://callstack.github.io/react-native-paper/docs/components/Button/

# Lessons learned

If you use `StyleSheet`, you must import it _in the file_: `import { StyleSheet } from "react-native"`.

I think each component needs `import * as React from "react";`, but not sure.

Initialize screens from `App.js`

Any function that has a button that navigates to a screen must have a `{ navigation }` argument

Components cannot trigger page navigation themselves, you must pass the `navigation` argument from a screen to a component like:

```jsx
// screen
<WelcomeCard navigation={navigation} />
// component: Then use it as a argument in the component:
export default function HomeScreen({ navigation })
```

Buttons dont support inline styling.

Use view most of the time to do 'box' styling because text or other things its not supported.

STYLES DO NOT CASCADE!!!!!!!!

Scrollview best for contnt, not lists, which can grow (see ./scroll-view-template.js). It renders all items.

Generate random key

```js
const = () => {
    key: Math.random().String()
}
```

You have import things FOR EVERY FILE.

### MANAGING STATE BETWEEN COMPONENTS

component talk to parent component about state

Pass handler props

See 29.
https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31197384#notes

This is how you pass a component as a argument:

```javascript
<Appbar.Content title={<BasketSummary />}></Appbar.Content>
```

### Passing things

```javascript
// inline function
<Pressable onPress={() => console.log("Pressed")}/>
// function call
<Pressable onPress={pressHandler}/>
// component housed in root
<Appbar.Content title={<BasketSummary />}></Appbar.Content>
// pass a function in a template literal
`Add to basket - $${CalculateCostByCount(count, roundedSingleItemPrice)}`
// pass function as a prop
price={roundSingleItemCost()}
// pass navigation to component
// note: you dont need to pass to screens because they are wrapped by Nav in App.js
const AppetizerScreen = ({ navigation }) => {<MenuItem item={item} navigation={navigation} />}
// On press simply navigating
<Pressable onPress={() => navigation.navigate("Basket")}/>
// onpress navigation, also passing a variable
<Pressable onPress={() => { navigation.navigate("CartItem", item) }}/>
// local images
<Image style={styles.dot} source={require("../assets/circle-solid.svg")}/>
// console.logging, passing a string and the variable to display
// updates when wrapping component state updates
useEffect(() => { console.log("count type:", typeof count);
    console.log("item.price type:", typeof roundedItemCost);
  });
  // pass util functions (traditional exported JS functions) and accessing specific functions
import * as calculateCostUtils from "../utils/calculateCost";
const roundedSingleItemPrice = calculateCostUtils.roundCost(item.price);
// Pass arguments with navigation:
onPress={() => {
  navigation.navigate("CartItem", { item: item });
}}
// then...
const CartItemScreen = ({ route, navigation }) => {
  const { item } = route.params;
  // for tabs you have to use initial params to pass props to screen component:
<Tab.Screen
  name="Main Course"
  component={CourseScreen}
  initialParams={{ course: "mainCourses" }}
/>
// Then...define in App.js
<Stack.Screen
  name="CourseScreen"
  component={CourseScreen}
  initialParams={{}}
/>
// Pass more than one class:
<View style={[styles.modalView, styles.modalHeader]}/>
// Views nroamlly require this, for example, if they wrap flatlist
<View style={{ flex: 1 }}/>
// When the only funxtion in a component is default, you import it like this:
import PlaceOrderBar from "../components/PlaceOrderBar";
// You can set timers using UseEffect

```

### Redux

Old state solution: const [selectedItems, setSelectedItems] = useState([]);

When the `selectedItems` array is empty, hide the `OrderBar` component.
When click Add button in `MenuItem`, update `selectedItems` array, thereby making the `OrderBar` visible.

The `OrderBar` needs to display the images in `MenuData` of menu items that have been selected, with their number of selected as an icon in the top right corner of the image. So, it needs as input the selected item's image from `MenuData` as well as a count of how many have been selected.

Nice to add a transition from moving in from bottom.

So, when you Add an item, it captures the item.

Bill
Name, Qty, Price
Item#1
Subtotal
Service Charge (5.5%)
TAX (10%)
TOTAL
Order

```js
const selectedItems = [
  {
    id: "appetizer-1",
    name: "Appetizer X",
    description: "Description for Appetizer 1",
    image: require("./assets/icon.png"),
    price: "$5.50",
    count: "1",
  },
];
```

<!-- Issue -->

The Menu screen is the screen that displays the modal.
Whether the modal is visible is determined by the showMakeAnother boolean state
In the return statement, it will check if showMakeAnother is true, and pass some params.

The trigger for the modal displaying is clicking a MenuItem.
So, the MenuItem needs to inherit the handleMenuItemPress function that exists in Menu. So thats MENU > COURSE > MENU ITEM. It may or may not need to inherit the state.

You'll need to pass whatever needs to be passed from Menu to courses. This means defining what needs to be defined as part of the initailParams object.

## Todo

make max size of item order 5
make the minus icon go away if there is it zero

## Features

Timer with status on progress of order
Change order? It calls the waiter to help.
Maybe call waiter button

Servers have their own app that can edit orders after theyve been submitted.

The server updates the system when they deliver it so the app closes out and allows you to enter the table again.

## Table input screen

When they type a letter in table field, show helper text

https://callstack.github.io/react-native-paper/docs/components/HelperText/

## Orderdetails

<!-- The modal can have a counter -->

## Menu

Create context for table number
