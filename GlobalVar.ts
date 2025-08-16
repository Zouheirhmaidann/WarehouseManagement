import { Dimensions } from "react-native";

export const GLOBAL_VAR = {
  PRIMARY_COLOR: "#ffcd00",
  ACTIVE_TAB_ICON_COLOR: "#fff",
  INACTIVE_TAB_ICON_COLOR: "#999999",
  AUTH_TOKEN: "auth_token",
  USERNAME: "username",
  BACKEND_URL: "http://192.168.0.106:3001/api",
  SCREEN_WIDTH: Dimensions.get("window").width,
  SCREEN_HEIGHT: Dimensions.get("window").height,
};
