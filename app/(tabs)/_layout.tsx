import { Tabs } from "expo-router";
import React from "react";

import { GLOBAL_VAR } from "@/GlobalVar";
import { House } from "lucide-react-native";
// Define a function to determine the icon color based on the focused state
const iconColor = (focused: boolean) => {
  return {
    color: focused
      ? GLOBAL_VAR.ACTIVE_TAB_ICON_COLOR
      : GLOBAL_VAR.INACTIVE_TAB_ICON_COLOR,
  };
};
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // Set the tab bar style
        tabBarStyle: {
          backgroundColor: GLOBAL_VAR.PRIMARY_COLOR,
        },
        // Set the active and inactive icon colors
        tabBarActiveTintColor: GLOBAL_VAR.ACTIVE_TAB_ICON_COLOR,
        tabBarInactiveTintColor: GLOBAL_VAR.INACTIVE_TAB_ICON_COLOR,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <House color={iconColor(focused).color} />
          ),
        }}
      />
    </Tabs>
  );
}
