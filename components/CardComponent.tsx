import { GLOBAL_VAR } from "@/GlobalVar";
import { router } from "expo-router";
import { LucideIcon } from "lucide-react-native";
import React, { memo, useCallback } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface CardComponentProps {
  icon: LucideIcon;
  iconWrapperColor: string;
  title: string;
  isFunctional?: boolean;
  style?: ViewStyle;
  screenRoute?: string;
}

const CardComponent = ({
  icon: Icon,
  iconWrapperColor,
  title,
  isFunctional = true,
  screenRoute,
  style,
}: CardComponentProps) => {
  // Function to redirect to the screen
  const handleNavigation = useCallback(() => {
    if (!screenRoute) return;
    // Naivgate to the desired screen
    router.push(screenRoute as unknown as any);
  }, [screenRoute]);
  return (
    <TouchableOpacity
      style={[styles.container, !isFunctional && styles.disabled, style]}
      onPress={handleNavigation}
      disabled={!isFunctional}
    >
      <View style={[styles.iconWrapper, { backgroundColor: iconWrapperColor }]}>
        <Icon color="white" size={24} />
      </View>
      <Text
        style={[styles.title, !isFunctional && styles.disabledText]}
        numberOfLines={1}
      >
        {title}
      </Text>
    </TouchableOpacity>
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
