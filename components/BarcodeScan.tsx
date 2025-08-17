import { Order } from "@/types/OrderTypes";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { memo, useEffect, useRef, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface BarcodeScanProps {
  order: Order;
}

const BarcodeScan = ({ order }: BarcodeScanProps) => {
  // Request camera permission
  const [permission, requestPermission] = useCameraPermissions();
  // State to hold the scanned items
  const [scannedItems, setScannedItems] = useState<string[]>([]);
  // scanning ref to avoid rapid re-scans
  const isScanningRef = useRef(false);
  const router = useRouter();

  // useEffect to ask for permission as soon as the component mounts
  useEffect(() => {
    if (!permission) return;
    if (!permission.granted) {
      requestPermission();
    }
  }, [permission]);

  if (!permission) {
    return <Text>Requesting camera permission…</Text>;
  }
  if (!permission.granted) {
    return <Text>No access to camera</Text>;
  }

  // funciton to handle item scanned
  const handleBarcode = ({ type, data }: { type: string; data: string }) => {
    // ignore rapid re-scans
    if (isScanningRef.current) return;
    // avoid duplicates
    if (scannedItems.includes(data)) return;

    if (scannedItems.length < order.num_items) {
      // lock immediately
      isScanningRef.current = true;
      setScannedItems((prev) => [...prev, data]);

      Alert.alert(
        "Item Scanned",
        `Item ${scannedItems.length + 1} of ${order.num_items} scanned`
      );

      // Unlock scanning after 800ms
      setTimeout(() => {
        isScanningRef.current = false;
      }, 800);
    }
  };
  // Function to handle complete scanning
  const handleDone = () => {
    if (scannedItems.length === order.num_items) {
      Alert.alert("Success", "All items have been scanned!", [
        { text: "OK", onPress: () => router.back() },
      ]);
    } else {
      Alert.alert(
        "Error",
        `Please scan all ${order.num_items} items. (${scannedItems.length} scanned)`
      );
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFill}
        onBarcodeScanned={handleBarcode}
        barcodeScannerSettings={{
          barcodeTypes: ["ean13"],
        }}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ChevronLeft size={25} color={"black"} />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.scannerOverlay}>
        <View style={styles.scannerFrame} />
      </View>

      <View style={styles.overlay}>
        <View style={styles.modernContainer}>
          <View style={styles.progressInfo}>
            <Text style={styles.counter}>
              {scannedItems.length} / {order.num_items}
            </Text>
            <Text style={styles.label}>items scanned</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBar,
                { width: `${(scannedItems.length / order.num_items) * 100}%` },
              ]}
            />
            <Pressable onPress={handleDone} style={[styles.doneButton]}>
              <Text
                style={[
                  { color: "white", fontSize: 18 },
                  scannedItems.length === order.num_items &&
                    styles.enabledButton,
                ]}
              >
                {scannedItems.length === order.num_items
                  ? "Ready to be fullfilled ✓"
                  : "Scanning..."}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modernContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  progressInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  counter: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  label: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    marginLeft: 8,
  },
  progressBarContainer: {
    height: 45,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 25,
    overflow: "hidden",
    position: "relative",
  },
  progressBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#4A90E2",
    borderRadius: 25,
  },
  doneButton: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    lineHeight: 45,
    textAlignVertical: "center",
    justifyContent: "center",
  },
  enabledButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  scannerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  scannerFrame: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "transparent",
  },
  container: { flex: 1, backgroundColor: "#000" },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 20,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
    borderRadius: 20,
  },
  backButtonText: {
    color: "black",
    fontSize: 18,
  },
});
// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(BarcodeScan);
