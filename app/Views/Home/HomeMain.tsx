import { GLOBAL_VAR } from "@/GlobalVar";
import CardComponent from "@/components/CardComponent";
import { LogoutPopup } from "@/components/LogoutPopup";
import { useAuth } from "@/context/auth-context";
import { MENU_ITEMS } from "@/mock/cardItems";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogOut } from "lucide-react-native";
import { MotiView } from "moti";
import React, { memo, useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const HomeMain = () => {
  const [username, setUsername] = useState("");
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const { setToken } = useAuth();

  useEffect(() => {
    const getUsername = async () => {
      const storedUsername = await AsyncStorage.getItem(GLOBAL_VAR.USERNAME);
      if (storedUsername) setUsername(storedUsername);
    };
    getUsername();
  }, []);
  // Function to handle logout icon press
  const handleLogout = useCallback(() => {
    setShowLogoutPopup(true);
  }, []);
  // Function to handle confirm logout
  const handleConfirmLogout = useCallback(() => {
    setToken(null);
    setShowLogoutPopup(false);
  }, [setToken]);
  // funciton to handle cancel logout
  const handleCancelLogout = useCallback(() => {
    setShowLogoutPopup(false);
  }, []);
  // Item card rendered in the flatlist
  const renderItem = ({
    item,
    index,
  }: {
    item: (typeof MENU_ITEMS)[0];
    index: number;
  }) => (
    <MotiView
      key={item.id}
      from={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        type: "spring",
        delay: 100 * index,
        damping: 15,
      }}
    >
      <CardComponent
        title={item.title}
        icon={item.icon}
        iconWrapperColor={item.color}
        isFunctional={item.isFunctional}
        screenRoute={item.screenRoute}
      />
    </MotiView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText} numberOfLines={1}>
          Welcome, {username || "Zouheir Hmaidan"}
        </Text>
        <Pressable onPress={handleLogout} style={styles.logoutButton}>
          <LogOut color="#666" size={24} />
        </Pressable>
      </View>
      <FlatList
        data={MENU_ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.columnWrapper}
        scrollEnabled={false}
      />
      <LogoutPopup
        isVisible={showLogoutPopup}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    width: GLOBAL_VAR.SCREEN_WIDTH - 100,
    marginRight: 16,
  },
  logoutButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
  grid: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  columnWrapper: {
    justifyContent: "center",
    gap: 20,
    marginBottom: 20,
  },
});
// Memoize the component to prevent unnecessary re-renders and improve performance
export default memo(HomeMain);
