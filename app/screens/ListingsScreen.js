import React from "react";
import Screen from "../components/Screen";
import { StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

// Mock data
const listings = [
  {
    id: 1,
    title: "Playstation Portable",
    price: 140,
    image: require("../assets/psportable.jpg"),
  },
  {
    id: 2,
    title: "Xbox series x",
    price: 200,
    image: require("../assets/xboxseriesx.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen} innerStyle={styles.innerScreen}>
      <FlatList
        // Listings data
        data={listings}
        // Key
        keyExtractor={(listing) => listing.id.toString()}
        // Renders from item to card
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey,
  },
  innerScreen: {
    flex: 1,
    padding: 10,
  },
});

export default ListingsScreen;
