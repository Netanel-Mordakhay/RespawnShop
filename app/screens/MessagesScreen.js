import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";

// Mock data
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/batman.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/batman.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={<ListItemSeperator />}
      ></FlatList>
    </Screen>
  );
}

export default MessagesScreen;
