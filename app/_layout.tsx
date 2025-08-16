import { AuthProvider } from "@/context/auth-context";
import { ImageLoaderComponent } from "@/context/ImageLoader";
import { toastConfig } from "@/helpers/ToastConfig";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
export default function RootLayout() {
  return (
    <>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar barStyle="dark-content" />
        <Toast config={toastConfig} />
        <ImageLoaderComponent />
      </AuthProvider>
    </>
  );
}
