import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";

export default function App() {
  return (
    <WelcomeScreen />
    //<View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
    //  <AppText>asd</AppText>
    //  <Text>asd</Text>
    //  <MaterialCommunityIcons name="email" size={60} />
    //</View>
  );
}
