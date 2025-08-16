import { GLOBAL_VAR } from "@/GlobalVar";
import CustomTextField from "@/components/CustomTextField";
import { LoginFormProps } from "@/types/LoginTypes";
import { Lock, User } from "lucide-react-native";
import { MotiView } from "moti";
import React, { memo } from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./loginStyles";

/**
 * LoginForm Component
 *
 * A React component that renders a login form with animated elements.
 * @returns {JSX.Element} A login form component with animated elements
 *
 * @param {LoginFormProps} props - The props for the LoginForm component
 * @param {string} props.username - The username value
 * @param {function} props.setUsername - The function to update the username value
 * @param {string} props.password - The password value
 * @param {function} props.setPassword - The function to update the password value
 * @param {function} props.onLogin - The function to handle login submission
 */
const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  onLogin,
}: LoginFormProps) => (
  <MotiView
    from={{
      opacity: 0,
      scale: 0.8,
      translateY: 50,
    }}
    animate={{
      opacity: 1,
      scale: 1,
      translateY: 0,
    }}
    transition={{
      type: "spring",
      delay: 300,
      damping: 15,
    }}
    style={styles.formContainer}
  >
    <MotiView
      from={{ translateX: -GLOBAL_VAR.SCREEN_WIDTH }}
      animate={{ translateX: 0 }}
      transition={{
        type: "spring",
        delay: 500,
        damping: 20,
      }}
      style={styles.inputContainer}
    >
      <CustomTextField
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        Icon={User}
        autoCapitalize="none"
        inputHeight={60}
      />
    </MotiView>

    <MotiView
      from={{ translateX: GLOBAL_VAR.SCREEN_WIDTH }}
      animate={{ translateX: 0 }}
      transition={{
        type: "spring",
        delay: 700,
        damping: 20,
      }}
      style={styles.inputContainer}
    >
      <CustomTextField
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        Icon={Lock}
        isPassword
        inputHeight={60}
      />
    </MotiView>

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
        delay: 900,
        damping: 15,
      }}
      style={styles.buttonContainer}
    >
      <Pressable
        style={({ pressed }) => [
          styles.loginButton,
          pressed && styles.loginButtonPressed,
          (!username || !password) && styles.loginButtonDisabled,
        ]}
        onPress={onLogin}
        disabled={!username || !password}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
    </MotiView>
  </MotiView>
);
// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(LoginForm);
