import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Text,
  TextInput,
  Portal,
  Dialog,
} from "react-native-paper";

export default function WelcomeCard({ navigation }) {
  const [text, setText] = useState("");
  const [tipVisible, setTipVisible] = useState(false);

  const handleSubmit = () => {
    if (text.length === 0) {
      // If the input is empty, show the tip message
      setTipVisible(true);
      // Automatically hide the tip message after a brief timeout
      setTimeout(() => setTipVisible(false), 2000); // 2000 milliseconds (2 seconds)
    } else if (/^\d{1,2}$/.test(text)) {
      // Valid input, you can perform your submission logic here
      navigation.navigate("Menu"); // Navigate to the "Menu" screen
    }
  };

  return (
    <View>
      <Card>
        <Card.Content style={styles.welcomeCardContainer}>
          <Text variant="titleLarge">Welcome to Vinnie's!</Text>
          <Text variant="bodyMedium">Let us know your table number</Text>
        </Card.Content>

        <TextInput
          label="Table #"
          value={text}
          onChangeText={(text) => setText(text)}
          keyboardType="numeric"
          maxLength={2}

          // placeholder="Search..."
        />

        <Card.Actions style={styles.cardActions}>
          <Button mode="contained" onPress={handleSubmit}>
            Ok
          </Button>
        </Card.Actions>
      </Card>

      <Portal>
        <Dialog visible={tipVisible} onDismiss={() => setTipVisible(false)}>
          <Dialog.Content>
            <Text style={styles.tip}>Please enter a table number</Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeCardContainer: {
    textAlign: "center",
  },
  cardActions: {
    justifyContent: "center",
  },
  tip: {
    textAlign: "center",
    // color: "red",
    // fontWeight: "bold",
    // fontSize: 14,
  },
});
