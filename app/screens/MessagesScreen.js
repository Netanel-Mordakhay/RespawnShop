import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import ListItemDeleteActions from "../components/lists/ListItemDeleteActions";

// Mock data
const initialMessages = [
  {
    id: 1,
    title: "Hi, how are you?",
    description:
      "This is the message description. This is the message description. This is the message description.",
    image: require("../assets/batman.jpg"),
  },
  {
    id: 2,
    title: "ANSWER PLEASE",
    description: "This is the message description.",
    image: require("../assets/batman.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages); // Messages hook
  const [refreshing, setRefreshing] = useState(false); // Refresh hook

  // Handle message delete function
  const handleDelete = (message) => {
    // #1. Delete message from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("clicked message", item)}
            renderRightActions={() => (
              <ListItemDeleteActions onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={<ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/batman.jpg"),
            },
          ])
        }
      ></FlatList>
    </Screen>
  );
}

export default MessagesScreen;
