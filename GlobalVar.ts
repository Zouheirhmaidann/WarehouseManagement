import { Dimensions } from "react-native";

export const GLOBAL_VAR = {
  PRIMARY_COLOR: "#ffcd00",
  ACTIVE_TAB_ICON_COLOR: "#fff",
  INACTIVE_TAB_ICON_COLOR: "#ccc",
  AUTH_TOKEN: "auth_token",
  USERNAME: "username",
  BACKEND_URL: "https://api.example.com",
  SCREEN_WIDTH: Dimensions.get("window").width,
  SCREEN_HEIGHT: Dimensions.get("window").height,
};
