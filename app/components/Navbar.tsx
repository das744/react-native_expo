import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Platform,
} from "react-native";
import { useRouter, Link } from "expo-router";

// Optional: Enforce type safety for route paths
type Routes = "/tabs" | "/about" | "/service" | "/contact";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    setMenuVisible(false);
    router.push(path as any); // 👈 Avoids TS error, but less safe
  };


  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>MyApp</Text>

      {/* Hamburger Menu Icon */}
      <TouchableOpacity
        onPress={() => setMenuVisible(true)}
        style={styles.menuIcon}
      >
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      {/* Slide-up Modal Menu */}
      <Modal visible={menuVisible} animationType="slide" transparent>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setMenuVisible(false)}
          activeOpacity={1}
        >
          <View style={styles.menu}>
            {/* Home (Link for prefetch) */}
            <Link href={"/(tabs)" as const} asChild>
              <TouchableOpacity onPress={() => setMenuVisible(false)}>
                <Text style={styles.menuItem}>Home</Text>
              </TouchableOpacity>
            </Link>


            {/* Other pages using router.push */}
            <TouchableOpacity onPress={() => handleNavigation("/AboutScreen")}>
              <Text style={styles.menuItem}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigation("/ServiceScreen")}>
              <Text style={styles.menuItem}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigation("/ContactScreen")}>
              <Text style={styles.menuItem}>Contact</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingTop: Platform.OS === "ios" ? 50 : 30,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  menuIcon: {
    padding: 8,
  },
  menuText: {
    fontSize: 28,
    color: "#333",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  menu: {
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 350,
    marginHorizontal: 20,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 25,
    color: "#333",
    textAlign: "center",
  },
});

export default Navbar;
