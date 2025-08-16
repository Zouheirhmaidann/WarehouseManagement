import { GLOBAL_VAR } from "@/GlobalVar";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ScreenHeader = ({ title }: { title: string }) => {
  return (
    <View
      style={[
        styles.headerContainer,
        { height: GLOBAL_VAR.SCREEN_HEIGHT * 0.07 },
      ]}
    >
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          router.back();
        }}
      >
        <ChevronLeft size={35} color={"black"} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  headerTitle: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
});
// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(ScreenHeader);
