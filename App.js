import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ActivitiesScreen from "./src/screens/ActivitiesScreen";
import CalendarScreen from "./src/screens/CalenderScreen";
import ChatScreen from "./src/screens/ChatScreen";
import GalleryScreen from "./src/screens/GalleryScreen";
import NotesScreen from "./src/screens/NotesScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Activities"
          component={ActivitiesScreen}
        />
        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
        />
        <Stack.Screen
          name="Notes"
          component={NotesScreen}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
