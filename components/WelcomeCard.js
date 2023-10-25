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
  const [tableNumber, setTableNumber] = useState("");
  const [tableNumbers, setTableNumbers] = useState([]);

  // setTableNumbers is asynchronous, when you log it, it wont be updated yet normally
  // this hook runs whenever the state is updated
  useEffect(() => {
    console.log(tableNumbers);
  }, [tableNumbers]);

  // experimenting with updating array
  function addTableNumbersHandler(text) {
    setTableNumbers((currentTableNumbers) => [...currentTableNumbers, text]);
  }

  const addTableNumberHandler = (text) => {
    setTableNumber(text);
    // The following cannot access the tableNumber
    // console.log(`The table number is now ${tableNumber}`);
    // console.log(text);
  };

  // Define a function to filter out non-numeric characters
  const handleTextChange = (text) => {
    // Filter out non-numeric characters using a regular expression
    const numericText = text.replace(/[^0-9]/g, "");
    setText(numericText);
  };

  const handleSubmit = () => {
    if (text.length === 0) {
      // If the input is empty, show the tip message
      setTipVisible(true);
      // Automatically hide the tip message after a brief timeout
      setTimeout(() => setTipVisible(false), 2000); // 2000 milliseconds (2 seconds)
    } else if (/^\d{1,2}$/.test(text)) {
      // Valid input, you can perform your submission logic here
      addTableNumberHandler(text);
      addTableNumbersHandler(text);
      navigation.navigate("Menu");
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
          onChangeText={handleTextChange} // Use the filtered text
          keyboardType="numeric"
          maxLength={2}
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
      {/* output each item in array */}
      {/* <View>
        {tableNumbers.map((tableNumber) => (
          <Text key={tableNumber}>{tableNumber}</Text>
        ))}
      </View> */}
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
  },
});
