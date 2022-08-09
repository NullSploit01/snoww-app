import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MenuItemWrapper from "./MenuItemWrapper";
const MeuItemButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <MenuItemWrapper title={title} />
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
