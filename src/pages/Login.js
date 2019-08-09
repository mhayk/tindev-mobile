import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00f',
    justifyContent: 'center',
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 20,
  },
});
