import { imageLoader } from "@/context/ImageLoader";
import { GLOBAL_VAR } from "@/GlobalVar";
import { presentToast } from "@/services/sharedServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import { Keyboard } from "react-native";
// Create an Axios instance with the base URL and default headers
const AxiosInstance = axios.create({
  baseURL: GLOBAL_VAR.BACKEND_URL,
  timeout: 200000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the auth token in the headers and dismiss the keyboard before making the request
AxiosInstance.interceptors.request.use(
  async (config) => {
    try {
      // Dismiss the keyboard before making the request
      Keyboard.dismiss();
      // Show the loader
      imageLoader.show();
      // Fetch the token from AsyncStorage
      const token = await AsyncStorage.getItem(GLOBAL_VAR.AUTH_TOKEN);
      // Fetch the username from AsyncStorage
      const username = await AsyncStorage.getItem(GLOBAL_VAR.USERNAME);
      // Dismiss the keyboard before making the request

      // If the token is not null and the username exists, set the auth token in the headers
      if (token !== null && username && !config.headers["auth-token"]) {
        config.headers["auth-token"] = token;
        config.headers.username = username;
        config.baseURL = GLOBAL_VAR.BACKEND_URL;
      }
      return config;
    } catch (error) {
      // Toast the error
      presentToast("error", "Unable to retrieve data");
      throw error;
    }
  },
  (error) => Promise.reject(error)
);

//This is used to handle the response or the error
AxiosInstance.interceptors.response.use(
  (res) => {
    // Hide the loader on successful response
    imageLoader.hide();
    return res;
  },
  async (error) => {
    // Hide the loader on error
    imageLoader.hide();
    // Dismiss the keyboard when an error occurs
    Keyboard.dismiss();
    // If the error response status is 401, clear the AsyncStorage and redirect to the login screen
    if (error?.response?.status === 401) {
      await AsyncStorage.clear();
      router.replace("/Views/Login/LoginMain");
      return Promise.reject(error);
    }
    presentToast(
      "error",
      "Login Failed",
      error?.response?.data || error.message || "An error occurred"
    );
  }
);

export default AxiosInstance;
