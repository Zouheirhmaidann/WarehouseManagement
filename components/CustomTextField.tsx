import { Eye, EyeOff, LucideIcon } from "lucide-react-native";
import React, { memo, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

interface CustomTextFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  isPassword?: boolean;
  Icon: LucideIcon;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  isPassword = false,
  Icon,
  autoCapitalize = "none",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Icon size={20} color="#666" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !showPassword}
        autoCapitalize={autoCapitalize}
        placeholderTextColor="#999"
      />
      {isPassword && (
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={styles.passwordToggle}
        >
          {showPassword ? (
            <EyeOff size={20} color="#666" />
          ) : (
            <Eye size={20} color="#666" />
          )}
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f8f8f8",
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  passwordToggle: {
    padding: 5,
  },
});
// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(CustomTextField);
