import { View, StyleSheet, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.Home}>
      <Text>HomeScreen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

const styles = StyleSheet.create({
  Home: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default HomeScreen;
