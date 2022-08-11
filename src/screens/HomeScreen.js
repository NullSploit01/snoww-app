import { View, StyleSheet } from "react-native";
import MeuItemButton from "../components/MenuItemButton";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <View style={styles.row}>
        <MeuItemButton
          screen="Calendar"
          title="Calendar"
          navigation={navigation}
          icon="calendar"
        />
        <View style={{ flex: 0.1 }} />
        <MeuItemButton
          screen="Gallery"
          navigation={navigation}
          title="Gallery"
          icon="photo-video"
        />
      </View>
      <View style={styles.row}>
        <MeuItemButton
          navigation={navigation}
          screen="Chat"
          title="Chat"
          icon="rocketchat"
        />
        <View style={{ flex: 0.1 }} />
        <MeuItemButton
          navigation={navigation}
          screen="Activities"
          title="Activities"
          icon="tasks"
        />
      </View>
      <View style={styles.row}>
        <MeuItemButton
          screen="Notes"
          navigation={navigation}
          title="Personal Notes"
          icon="sticky-note"
        />
        <View style={{ flex: 0.1 }} />
        <MeuItemButton
          screen="Profile"
          navigation={navigation}
          title="Profile"
          icon="address-book"
        />
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
