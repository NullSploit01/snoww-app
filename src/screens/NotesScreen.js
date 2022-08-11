import React from "react";
import { Text, View, StyleSheet } from "react-native";
const NotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Notes Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default NotesScreen;
