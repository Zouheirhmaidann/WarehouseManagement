import { GLOBAL_VAR } from "@/GlobalVar";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: GLOBAL_VAR.SCREEN_WIDTH * 0.05,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: Math.min(GLOBAL_VAR.SCREEN_WIDTH * 0.6, 300),
    height: Math.min(GLOBAL_VAR.SCREEN_HEIGHT * 0.15, 100),
  },
  formContainer: {
    width: "100%",
    maxWidth: Math.min(400, GLOBAL_VAR.SCREEN_WIDTH * 0.9),
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: Math.min(20, GLOBAL_VAR.SCREEN_WIDTH * 0.05),
    padding: GLOBAL_VAR.SCREEN_WIDTH * 0.05,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: GLOBAL_VAR.PRIMARY_COLOR,
    paddingVertical: Math.min(15, GLOBAL_VAR.SCREEN_HEIGHT * 0.02),
    borderRadius: Math.min(12, GLOBAL_VAR.SCREEN_WIDTH * 0.03),
    width: "100%",
    alignItems: "center",
    shadowColor: GLOBAL_VAR.PRIMARY_COLOR,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  loginButtonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: Math.min(18, GLOBAL_VAR.SCREEN_WIDTH * 0.045),
    fontWeight: "600",
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  welcomeTitle: {
    fontSize: Math.min(28, GLOBAL_VAR.SCREEN_WIDTH * 0.07),
    fontWeight: "bold",
    color: GLOBAL_VAR.PRIMARY_COLOR,
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: Math.min(16, GLOBAL_VAR.SCREEN_WIDTH * 0.04),
    color: "#666",
  },
});
