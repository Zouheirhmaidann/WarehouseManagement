import { LogoutPopup } from "@/components/LogoutPopup";
import { useAuth } from "@/context/auth-context";
import { router } from "expo-router";
import React, { memo, useCallback } from "react";
import { View } from "react-native";

const Logout = () => {
  // Set the token from use Auth
  const { setToken } = useAuth();
  // Function to handle confirm logout
  const handleConfirmLogout = useCallback(() => {
    setToken(null);
    router.replace("/");
  }, [setToken]);
  // Function to handle cancel logout
  const handleCancelLogout = useCallback(() => {
    router.back();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <LogoutPopup
        isVisible={true}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </View>
  );
};

// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(Logout);
