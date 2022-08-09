import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MenuItemWrapper = ({ title }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 2,
    padding: 10,
    justifyContent: "center",
  },
  text: { textAlignVertical: "center", textAlign: "center" },
});

export default MenuItemWrapper;
