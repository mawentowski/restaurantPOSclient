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

## Course: API documentation mastery: full stack technical writing course

SDKs > Sample Apps | Libraries (edit READMEs)

## Ideas

## Type of restaurant / recipes

Use simple AMerican fare menu where there are layers or ingredients.
So burgers, etc. Factor in receipes.

So its like a resturant platform (POS Point of sale ) + KDS (Kitchen Display System)

## POS App

- Customer loyalty / points
- Allergies

Hit checkout to appear on KDS.

https://github.com/anggaprytn/Restaurant_Client/tree/master

## KDS - (Kitchen Display System)

https://www.youtube.com/watch?v=Ryo4y7Ier_M

KDS (Kitchen Display System) Impact on Operators & Guests that receives orders from mobile apps.
Cafeteria stations: grill stations, coffee bar, salad bar -- each have one. --- ipad
Destirbute tasks to differnet people -- prints out tasks to do.
The KDS can print a receipt for the order, they can view it like that, or on the monitor. Info on chit.
Take it off and put it on their line so they can view it hanging up -- concept guide
The info on the chit has a information architecture that syncs to the ingrediences that are placed in order.

Current orders
scheduled orders -- takeaway?
Finished: orders compelted in same day

There's an expeditor that pulls all the orders togehter to either give the bus boy or to give for the takeout station.

### Search

Chefs search for specific order or client

### Filter

Items / Categories

Items - Order type: pickup / in restaurant

## Analytics Board

Most items ordered. Maybe connect to PowerBI.

## Concepts

Map of restaurant with different stations
They create kitchen diagram using Mermaid
Maybe architecture diagram using structurzr.
These are the concept guides.

### Chit

n a restaurant context, a "chit" typically refers to a small piece of paper or a digital order ticket that the kitchen or bar staff uses to record and manage customer orders. When a server takes an order from a customer, they write down the details of the order on a chit or enter it into a point-of-sale (POS) system, which then generates a digital chit. This chit includes information such as the table number, the items ordered, any special instructions, and sometimes the customer's name or other identifying information.

The chit serves as a communication tool between the front-of-house staff (servers) and the back-of-house staff (chefs or kitchen staff and bartenders). It ensures that the kitchen prepares the correct dishes and that the bar makes the correct drinks. Once the order is ready, it is often matched with the chit before being served to the appropriate table.

Chits help streamline the ordering and food preparation process in a restaurant, ensuring that orders are accurate and that food and drinks are delivered to the right tables. They are an essential part of restaurant operations, whether they are written on paper or managed digitally through a POS system.

### Personas

Define personas as YAML then use that for fixtures data to test login.

### Docker

Similar to Symfony next js, you have an attached api reference and conceptual documentation site.

### Tools

Postman
Curl

### Ideas

Spec-first, code first.
So you take the perspective of the API developer developing the API then the client.
