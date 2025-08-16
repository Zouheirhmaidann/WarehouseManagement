import { useAuth } from "@/context/auth-context";
import { useRouter } from "expo-router";
import { useEffect } from "react";
export default function Index() {
  // Use the auth context to get the token and loading state
  const { token, isLoading } = useAuth();
  // Use the router to navigate based on the authentication state
  const router = useRouter();
  // use useEffect to handle navigation after the component mounts
  useEffect(() => {
    // If not loading, check the token and navigate accordingly
    if (!isLoading) {
      if (token) {
        router.replace("/(tabs)/Home");
      } else {
        router.replace("/Views/Login/LoginMain");
      }
    }
  }, [token, isLoading, router]);
  return null;
}
