import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NoInternet() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No internet connection</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
  },
});
