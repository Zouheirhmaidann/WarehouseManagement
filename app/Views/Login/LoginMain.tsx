import { useAuth } from "@/context/auth-context";
import React, { memo, useCallback, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import LoginForm from "./LoginForm";
import { styles } from "./loginStyles";
import LogoSection from "./LogoSection";
import WelcomeSection from "./WelcomeSection";

/**
 * LoginMain Component
 *
 * A React component that renders a login screen with animated elements.
 * @returns {JSX.Element} A login screen component with animated elements
 *
 */
const LoginMain = () => {
  // State to hold the username
  const [username, setUsername] = useState("");
  // state to hold the password
  const [password, setPassword] = useState("");

  const { setToken } = useAuth();

  const handleLogin = useCallback(() => {
    // Implement login logic here
    console.log("Login attempted", { username, password });
    setToken("bla bla");
  }, [username, password, setToken]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <LogoSection />
        <WelcomeSection />
        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          onLogin={handleLogin}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(LoginMain);
