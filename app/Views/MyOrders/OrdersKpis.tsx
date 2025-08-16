import { MotiView } from "moti";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
// Component the renders the OrdersKpis
const OrdersKpis = ({
  totalOrders,
  totalItems,
}: {
  totalOrders: number;
  totalItems: number;
}) => (
  <View style={styles.container}>
    <MotiView
      style={styles.mainCard}
      from={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "timing", duration: 500 }}
    >
      <MotiView
        style={[styles.kpiCard, styles.ordersCard]}
        from={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 600, delay: 200 }}
      >
        <Text style={styles.kpiValue}>{totalOrders}</Text>
        <Text style={styles.kpiLabel}>Total Orders</Text>
      </MotiView>

      <MotiView
        style={[styles.kpiCard, styles.itemsCard]}
        from={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 600, delay: 400 }}
      >
        <Text style={styles.kpiValue}>{totalItems}</Text>
        <Text style={styles.kpiLabel}>Total Items</Text>
      </MotiView>
    </MotiView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  mainCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  kpiCard: {
    flex: 1,
    minHeight: 100,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  ordersCard: {
    backgroundColor: "#4A90E2",
  },
  itemsCard: {
    backgroundColor: "#50C878",
  },
  kpiValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  kpiLabel: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
  },
});
// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(OrdersKpis);
