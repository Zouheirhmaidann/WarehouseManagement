import CustomTextField from "@/components/CustomTextField";
import ScreenHeader from "@/components/ScreenHeader";
import AxiosInstance from "@/helpers/axiosInstance";
import { presentToast } from "@/services/sharedServices";
import { Order } from "@/types/OrderTypes";
import { Search } from "lucide-react-native";
import { MotiView } from "moti";
import React, { memo, useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import OrderCard from "./OrderCard";
import OrdersKpis from "./OrdersKpis";
import OrdersStatus from "./OrdersStatus";

const OrdersMain = () => {
  // state to hold the orders data
  const [ordersData, setOrdersData] = useState<Order[] | null>(null);
  // State to hold the filtered orders data
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  // State to hold the selected status
  const [selectedStatus, setSelectedStatus] = useState<number>(1);
  // state to hold the search query text
  const [searchQuery, setSearchQuery] = useState("");
  // state to hold the refreshing value
  const [refreshing, setRefreshing] = useState(false);

  // Function to fetch the orders
  const fetchOrders = useCallback(async () => {
    try {
      setRefreshing(true);
      // Call the api
      const { data: response } = await AxiosInstance.get(
        `/fetchOrders?status=${selectedStatus}`
      );

      // Check for response
      if (!response || !Array.isArray(response))
        throw new Error("Invalid response");

      setOrdersData(response);
      setFilteredOrders(response);
    } catch (err: any) {
      presentToast("error", "Error!", err?.message || "Something went wrong");
      setOrdersData([]);
      setFilteredOrders([]);
    } finally {
      // Ensure refreshing is always stopped
      setRefreshing(false);
    }
  }, [selectedStatus, setRefreshing]);

  // useEffect to fetch the orders when the component mounts or selectedStatus changes
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // useEffect to filter the data
  useEffect(() => {
    // check if there is any data
    if (!ordersData) return;
    const filtered =
      ordersData.filter((order) => {
        const query = searchQuery.toLowerCase();
        return (
          order.client_name.toLowerCase().includes(query) ||
          order.order_number.toLowerCase().includes(query)
        );
      }) || [];
    setFilteredOrders(filtered);
  }, [ordersData, searchQuery]);

  // calculate the total items
  const totalItems = filteredOrders.reduce(
    (acc, cur) => acc + (cur.num_items || 0),
    0
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.main}>
        <ScreenHeader title="My Orders" />

      <OrdersStatus
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <OrdersKpis totalOrders={filteredOrders.length} totalItems={totalItems} />

      {ordersData && ordersData.length > 0 && (
        <MotiView
          style={styles.searchContainer}
          from={{ translateY: 20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: "timing", duration: 600, delay: 400 }}
        >
          <CustomTextField
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search by client name or order number"
            Icon={Search}
            onClear={() => setSearchQuery("")}
            showClear={searchQuery.length > 0}
          />
        </MotiView>
      )}

      <FlatList
        contentContainerStyle={[
          styles.listContainer,
          filteredOrders.length === 0 && ordersData?.length
            ? { justifyContent: "center" }
            : {},
        ]}
        data={filteredOrders}
        renderItem={({ item }) => <OrderCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchOrders} />
        }
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        onEndReachedThreshold={0.5}
      />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: "#fff" },
  searchContainer: { paddingHorizontal: 16, marginBottom: 10 },
  listContainer: { paddingBottom: 50, marginBottom: 10 },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
});

// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(OrdersMain);
