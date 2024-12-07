import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <GestureHandlerRootView style={styles.container}>
      <Screen>
        <AppTextInput placeholder="username" icon="email" />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
