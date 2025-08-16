import { GLOBAL_VAR } from "@/GlobalVar";
import { LucideIcon } from "lucide-react-native";
import React, { memo } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface CardComponentProps {
  icon: LucideIcon;
  iconWrapperColor: string;
  title: string;
  isFunctional?: boolean;
  style?: ViewStyle;
}

const CardComponent = ({
  icon: Icon,
  iconWrapperColor,
  title,
  isFunctional = true,
  style,
}: CardComponentProps) => {
  return (
    <View style={[styles.container, !isFunctional && styles.disabled, style]}>
      <View style={[styles.iconWrapper, { backgroundColor: iconWrapperColor }]}>
        <Icon color="white" size={24} />
      </View>
      <Text
        style={[styles.title, !isFunctional && styles.disabledText]}
        numberOfLines={1}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    width: GLOBAL_VAR.SCREEN_WIDTH / 2 - 30,
    aspectRatio: 1,
    justifyContent: "center",
  },
  iconWrapper: {
    padding: 15,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    lineHeight: 25,
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: "#666",
  },
});
// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(CardComponent);
