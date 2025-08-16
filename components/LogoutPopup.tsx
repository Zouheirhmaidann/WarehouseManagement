import { AnimatePresence, MotiView } from "moti";
import { MotiPressable } from "moti/interactions";
import { Pressable, StyleSheet, Text } from "react-native";
import { Easing } from "react-native-reanimated";

type LogoutPopupProps = {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

/**
 * LogoutPopup Component
 *
 * A React component that renders a confirmation popup for logout.
 * @param {LogoutPopupProps} props - The props for the LogoutPopup component
 * @param {boolean} props.isVisible - Whether the popup is visible or not
 * @param {function} props.onConfirm - The function to handle confirmation
 * @param {function} props.onCancel - The function to handle cancellation
 * @returns {JSX.Element} A confirmation popup for logout
 */
export const LogoutPopup = ({
  isVisible,
  onConfirm,
  onCancel,
}: LogoutPopupProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "timing", duration: 200 }}
          style={styles.overlayContainer}
        >
          <Pressable style={styles.pressable} onPress={onCancel}>
            <MotiView
              style={styles.popup}
              from={{
                opacity: 0,
                scale: 0.9,
                translateY: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateY: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                translateY: 10,
              }}
              transition={{
                type: "timing",
                duration: 250,
                easing: Easing.inOut(Easing.ease),
              }}
            >
              <Text style={styles.title}>Logout</Text>
              <Text style={styles.message}>
                Are you sure you want to logout?
              </Text>
              <MotiView style={styles.buttonContainer}>
                <MotiPressable
                  onPress={onCancel}
                  animate={({ pressed }) => ({
                    scale: pressed ? 0.95 : 1,
                    opacity: pressed ? 0.9 : 1,
                  })}
                  transition={{ type: "timing", duration: 100 }}
                  style={[styles.button, styles.cancelButton]}
                >
                  <Text style={[styles.buttonText, styles.cancelButtonText]}>
                    Cancel
                  </Text>
                </MotiPressable>
                <MotiPressable
                  onPress={onConfirm}
                  animate={({ pressed }) => ({
                    scale: pressed ? 0.95 : 1,
                    opacity: pressed ? 0.9 : 1,
                  })}
                  transition={{ type: "timing", duration: 100 }}
                  style={[styles.button, styles.confirmButton]}
                >
                  <Text style={[styles.buttonText, styles.confirmButtonText]}>
                    Confirm
                  </Text>
                </MotiPressable>
              </MotiView>
            </MotiView>
          </Pressable>
        </MotiView>
      )}
    </AnimatePresence>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  pressable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 24,
    width: "80%",
    maxWidth: 400,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  message: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  cancelButton: {
    backgroundColor: "#f1f1f1",
  },
  cancelButtonText: {
    color: "#666",
  },
  confirmButton: {
    backgroundColor: "#ff4444",
  },
  confirmButtonText: {
    color: "white",
  },
});
