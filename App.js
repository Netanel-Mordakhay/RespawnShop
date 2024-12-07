import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Switch } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  {
    label: "Playstation",
    value: 1,
  },
  {
    label: "Xbox",
    value: 2,
  },
  {
    label: "PC",
    value: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Screen>
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          items={categories}
          icon="apps"
          placeholder="category"
        />
        <AppTextInput icon="email" placeholder="email" />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
