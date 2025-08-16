import { GLOBAL_VAR } from "@/GlobalVar";
import { MotiView } from "moti";
import React, { memo } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

interface ButtonProps {
  title: string;
  color: string;
  status: number;
  isSelected: boolean;
  onPress: () => void;
}
// Render the buttons
const RenderButtons = ({ title, color, isSelected, onPress }: ButtonProps) => (
  <MotiView
    from={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "timing", duration: 300 }}
  >
    <Pressable
      style={[
        styles.button,
        { backgroundColor: isSelected ? GLOBAL_VAR.PRIMARY_COLOR : color },
      ]}
      onPress={onPress}
      android_ripple={{ color: "rgba(255,255,255,0.2)" }}
    >
      <Text style={[styles.buttonText, isSelected && { fontWeight: "900" }]}>
        {title}
      </Text>
    </Pressable>
  </MotiView>
);
// Component the renders the OrdersStatus
const OrdersStatus = ({
  selectedStatus,
  setSelectedStatus,
}: {
  selectedStatus: number;
  setSelectedStatus: (status: number) => void;
}) => {
  const buttons = [
    { title: "Ready for Fulfillment", color: "#3498db", status: 1 },
    { title: "Fulfilled", color: "#2ecc71", status: 2 },
    { title: "Cancelled", color: "#e74c3c", status: 3 },
  ];

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {buttons.map((btn) => (
          <RenderButtons
            key={btn.title}
            {...btn}
            isSelected={selectedStatus === btn.status}
            onPress={() => setSelectedStatus(btn.status)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    borderRadius: 16,
    width: 220,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(OrdersStatus);
