import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const MenuItemWrapper = ({ title, icon }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.icon}>
        <FontAwesome5 name={icon} title={title} size={44} color="black" />
      </Text>
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
  icon: { textAlignVertical: "center", textAlign: "center" },
  text: {
    marginTop: 10,
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default MenuItemWrapper;
