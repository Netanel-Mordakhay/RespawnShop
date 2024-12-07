import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import App from "../../App";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        source={require("../assets/psportable.jpg")}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Playstation Portable</AppText>
        <AppText style={styles.price}>$140</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="The Batman"
            subTitle="7 Listings"
            image={require("../assets/batman.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  price: {
    color: colors.accent,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;
