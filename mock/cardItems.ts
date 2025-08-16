import { Move, Package, Scan, Truck } from "lucide-react-native";

export const MENU_ITEMS = [
  {
    id: 1,
    title: "Associate RFIDs",
    icon: Scan,
    color: "#4CAF50",
    isFunctional: false,
  },
  {
    id: 2,
    title: "Store Products",
    icon: Package,
    color: "#2196F3",
    isFunctional: false,
  },
  {
    id: 3,
    title: "My Orders",
    icon: Truck,
    color: "#FF9800",
    screenRoute: "/Views/MyOrders/OrdersMain",
    isFunctional: true,
  },
  {
    id: 4,
    title: "Move Items",
    icon: Move,
    color: "#9C27B0",
    isFunctional: false,
  },
];
