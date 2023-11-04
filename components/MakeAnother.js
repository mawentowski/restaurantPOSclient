import * as React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";

const MakeAnother = ({ visible, onClose }) => {
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    elevation: 5,
  };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onClose}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={onClose}>
        Close
      </Button>
    </PaperProvider>
  );
};

export default MakeAnother;
