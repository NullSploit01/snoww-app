import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MenuItemWrapper from "./MenuItemWrapper";
const MeuItemButton = ({ screen, title, icon, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={styles.item}
    >
      <MenuItemWrapper icon={icon} title={title} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 2,
    padding: 10,
  },
});

export default MeuItemButton;
