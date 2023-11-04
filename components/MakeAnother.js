import * as React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const MakeAnother = ({ visible, onClose }) => {
  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onClose}
          contentContainerStyle={styles.containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    elevation: 5,
    marginTop: "auto",
  },
});

export default MakeAnother;
