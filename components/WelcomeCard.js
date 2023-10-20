import * as React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text, TextInput } from "react-native-paper";

export default function WelcomeCard() {
  const [text, setText] = React.useState("");
  return (
    <Card>
      <Card.Content style={styles.welcomeCardContainer}>
        <Text variant="titleLarge">Welcome to Vinnie's!</Text>
        <Text variant="bodyMedium">Please enter your table number:</Text>
      </Card.Content>
      <TextInput
        label="Table Number"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button mode="contained" onPress={() => console.log("Pressed")}>
        Order
      </Button>
    </Card>
  );
}
const styles = StyleSheet.create({
  welcomeCardContainer: {
    textAlign: "center", // Align text within a component
    // Additional styles can be added here
  },
});
