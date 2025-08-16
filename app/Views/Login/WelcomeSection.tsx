import { MotiView } from "moti";
import React, { memo } from "react";
import { Text } from "react-native";
import styles from "./loginStyles";

// Welcome section component
const WelcomeSection = () => (
  <MotiView
    from={{
      opacity: 0,
      scale: 0.8,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      type: "spring",
      delay: 200,
    }}
    style={styles.welcomeContainer}
  >
    <Text style={styles.welcomeTitle}>Welcome Back!</Text>
    <Text style={styles.welcomeSubtitle}>Sign in to continue</Text>
  </MotiView>
);
// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(WelcomeSection);
