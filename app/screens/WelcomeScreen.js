import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Trade. Play. Upgrade. Game On.</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} />
        <AppButton title={"Register"} color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 80,
  },
  tagline: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
