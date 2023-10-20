import React from "react";
import { View, Text } from "react-native";
import {
  Provider as PaperProvider,
  Card,
  Paragraph,
  Title,
} from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Open up App.js to start working on your app!</Text>
        <Card>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </PaperProvider>
  );
}
