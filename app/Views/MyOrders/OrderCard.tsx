import { Order } from "@/types/OrderTypes";
import { MotiView } from "moti";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
// Component the renders the OrdersCard
const OrderCard = ({ item }: { item: Order }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/Views/MyOrders/BarcodeScan/BarcodeScanScreen",
      params: { order: JSON.stringify(item) },
    });
  };
  return (
    <Pressable onPress={handlePress}>
      <MotiView
        style={styles.container}
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <View style={styles.header}>
          <Text style={styles.orderNumber}>{item.order_number}</Text>
          <Text style={styles.date}>
            {new Date(item.created_at).toLocaleDateString()}
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.label}>Client:</Text>
            <Text style={styles.value}>{item.client_name}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Recipient:</Text>
            <Text style={styles.value}>{item.recipient_name}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.value}>{item.location_en}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Items:</Text>
            <Text style={styles.value}>{item.num_items}</Text>
          </View>

          {item.notes && (
            <View style={styles.notes}>
              <Text style={styles.label}>Notes:</Text>
              <Text style={styles.noteText}>{item.notes}</Text>
            </View>
          )}
        </View>
      </MotiView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  content: {
    gap: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    width: 80,
  },
  value: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  notes: {
    marginTop: 8,
  },
  noteText: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
    marginTop: 4,
  },
});
// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(OrderCard);
