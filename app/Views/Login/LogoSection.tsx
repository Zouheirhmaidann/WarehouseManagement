import { MotiView } from "moti";
import React, { memo } from "react";
import { Image } from "react-native";
import { styles } from "./loginStyles";

// Logo section component
const LogoSection = () => (
  <MotiView
    from={{
      opacity: 0,
      translateY: -50,
    }}
    animate={{
      opacity: 1,
      translateY: 0,
    }}
    transition={{
      type: "spring",
      delay: 100,
    }}
    style={styles.logoContainer}
  >
    <Image
      source={require("@/assets/images/wakilni-logo.png")}
      style={styles.logo}
      resizeMode="contain"
    />
  </MotiView>
);
// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(LogoSection);
