import { Order } from "@/types/OrderTypes";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import BarcodeScan from "@/components/BarcodeScan";

export default function BarcodeScanScreen() {
  const { order } = useLocalSearchParams<{ order: string }>();
  const orderData: Order = JSON.parse(order);

  return <BarcodeScan order={orderData} />;
}