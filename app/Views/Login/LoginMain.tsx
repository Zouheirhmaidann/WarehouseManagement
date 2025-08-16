import { useAuth } from "@/context/auth-context";
import { GLOBAL_VAR } from "@/GlobalVar";
import { loginUser } from "@/services/LoginServices/loginFunctions";
import { presentToast } from "@/services/sharedServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  // Function to handle the login
  const handleLogin = useCallback(async () => {
    // Call the login function
    const response = await loginUser(username, password);
    // Check if there was an error
    if (response?.error) throw Error(response?.message);
    // Check for the token
    if (response?.token) {
      // set the username in async storage
      await AsyncStorage.setItem(GLOBAL_VAR.USERNAME, response?.user?.username);
      // set the token
      setToken(response.token);
      presentToast("success", "Login successful");
    }
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
