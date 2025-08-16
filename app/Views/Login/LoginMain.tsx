import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

const LoginMain = () => {
  return (
    <View>
      <Text>Login Main Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
// Mmeoize the component to prevent unnecessary re-renders and improve performance
export default memo(LoginMain);
