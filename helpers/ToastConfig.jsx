import { GLOBAL_VAR } from "@/GlobalVar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { BaseToast, ErrorToast } from "react-native-toast-message";

/*
  This is the configuration for our custom toast visuals.
  We are extending the built-in a`BaseToast` and `ErrorToast` to override their styles.
*/
export const toastConfig = {
  /*
    Success Toast
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={styles.base}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.title}
      text2Style={styles.message}
      text1NumberOfLines={3}
      // Use the app's main color for the success indicator
      renderLeadingIcon={() => (
        <View style={[styles.indicator, styles.successIndicator]} />
      )}
    />
  ),

  /*
    Error Toast
    We are extending the default ErrorToast to just change its style
  */
  error: (props) => (
    <ErrorToast
      {...props}
      style={styles.base}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.title}
      text2Style={styles.message}
      text1NumberOfLines={3}
      // Use a red color for the error indicator
      renderLeadingIcon={() => (
        <View style={[styles.indicator, styles.errorIndicator]} />
      )}
    />
  ),

  /*
    Info Toast
  */
  info: (props) => (
    <BaseToast
      {...props}
      style={styles.base}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.title}
      text2Style={styles.message}
      text1NumberOfLines={3}
      // Use a blue color for the info indicator
      renderLeadingIcon={() => (
        <View style={[styles.indicator, styles.infoIndicator]} />
      )}
    />
  ),
};

const styles = StyleSheet.create({
  // Base style for all toasts
  base: {
    maxHeight: 100,
    width: "90%",
    borderRadius: 12,
    borderLeftWidth: 0, // We hide the default border
    backgroundColor: "#FFFFFF",
    // Modern shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Modern shadow for Android
    elevation: 5,
  },
  // Style for the accent indicator bar on the left
  indicator: {
    width: 6,
    height: "90%",
    alignSelf: "center",
    borderRadius: 3,
    marginHorizontal: 10,
  },
  successIndicator: {
    backgroundColor: "#2ECC71", // Use app's main color or a default green
  },
  errorIndicator: {
    backgroundColor: "#E74C3C", // A nice shade of red
  },
  infoIndicator: {
    backgroundColor: GLOBAL_VAR.PRIMARY_COLOR || "#2ECC71", // A nice shade of blue
  },
  // Container for the text content
  contentContainer: {
    paddingHorizontal: 10,
  },
  // Style for the main title text
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
  },
  // Style for the secondary message text
  message: {
    fontSize: 16,
    color: "#6b7280",
  },
});
