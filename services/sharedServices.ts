import Toast from "react-native-toast-message";

const presentToast = (
  type: "success" | "error",
  message: string,
  message2?: string,
  duration?: number
) => {
  Toast.show({
    type: type,
    text1: message,
    text2: message2,
    position: "bottom",
    visibilityTime: duration || 3000,
  });
};

export { presentToast };
