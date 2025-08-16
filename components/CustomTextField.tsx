import { Eye, EyeOff, LucideIcon, X } from "lucide-react-native";
import React, { memo, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

interface CustomTextFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  isPassword?: boolean;
  Icon: LucideIcon;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  onClear?: () => void;
  showClear?: boolean;
}

/**
 * CustomTextField component
 *
 * A React functional component that renders a customized text input field with an icon.
 * It accepts various props to customize its behavior and appearance.
 *
 * @param {CustomTextFieldProps} props - The props for the CustomTextField component
 * @param {string} props.value - The value of the text input field
 * @param {function} props.onChangeText - The function to handle text input changes
 * @param {string} props.placeholder - The placeholder text for the text input field
 * @param {boolean} [props.isPassword=false] - Indicates if the text input field is for password entry
 * @param {React.ComponentType} props.Icon - The icon component to display next to the text input field
 * @param {string} [props.autoCapitalize="none"] - The auto-capitalization behavior for the text input field
 * @param {function} [props.onClear] - The function to handle clearing the text input field
 * @param {boolean} [props.showClear=false] - Indicates if the clear button should be displayed
 * @return {React.ReactElement} The rendered CustomTextField component
 */
const CustomTextField: React.FC<CustomTextFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  isPassword = false,
  Icon,
  autoCapitalize = "none",
  onClear,
  showClear = false,
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
      {showClear && !isPassword && (
        <Pressable onPress={onClear} style={styles.passwordToggle}>
          <X size={20} color="#666" />
        </Pressable>
      )}
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
