import React from "react";
import { Text, View } from "react-native";
export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}>
        Welcome to the Home Screen!
      </Text>
    </View>
  );
}
