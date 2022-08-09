import { View, StyleSheet, Text, Button } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.Home}>
      <Text>LoginScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Home: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default LoginScreen;
