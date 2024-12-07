import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Switch } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <RegisterScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
