import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, View, StyleSheet } from "react-native";

// Funciton used to avoid status bar
function Screen({ children, style, innerStyle }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={innerStyle}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
