import { GLOBAL_VAR } from "@/GlobalVar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";
// Define the AuthContext with default values
const AuthContext = createContext({
  token: null as string | null,
  setToken: (_: string | null) => {},
  isLoading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // State to hold the authentication token
  const [token, setToken] = useState<string | null>(null);
  // State to indicate if the authentication state is loading
  const [isLoading, setIsLoading] = useState(true);
  // Function to set the token and handle navigation based on its value
  const setTheToken = async (token: string | null) => {
    setToken(token);
    // if token is null, redirect to login screen
    if (token === null) {
      AsyncStorage.clear();
      router.replace("/Views/Login/LoginMain");
    } else {
      // if token is provded, redirect to the home screen
      await AsyncStorage.setItem(GLOBAL_VAR.AUTH_TOKEN, token);
      router.replace("/(tabs)/Home");
    }
  };
  // useEffect to load the token from AsyncStorage when the component mounts
  useEffect(() => {
    const loadToken = async () => {
      // Retrieve the token from AsyncStorage
      const storedToken = await AsyncStorage.getItem(GLOBAL_VAR.AUTH_TOKEN);
      setToken(storedToken);
      setIsLoading(false);
    };
    loadToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken: setTheToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
// Export a custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
