import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MeuItemButton from "../components/MenuItemButton";
const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <View style={styles.row}>
        <MeuItemButton title="Calender" />
        <View style={{ flex: 0.1 }} />
        <MeuItemButton title="Gallery" />
      </View>
      <View style={styles.row}>
        <MeuItemButton title="Chat" />
        <View style={{ flex: 0.1 }} />
        <MeuItemButton title="Activities" />
      </View>
      <View style={styles.row}>
        <MeuItemButton title="Personal Notes" />
        <View style={{ flex: 0.1 }} />
        <MeuItemButton title="Profile" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: "column",
  },
  row: {
    flex: 2,
    flexDirection: "row",
    padding: 10,
  },
});

export default HomeScreen;
