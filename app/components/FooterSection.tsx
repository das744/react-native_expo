import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For social media icons
import { Link } from "expo-router";

const { width } = Dimensions.get("window"); // Get screen width

const FooterDesign = () => {
  const isMobile = width < 768; // If screen width < 768px, treat it as mobile

  return (
    <View style={styles.footerContainer}>
      <View style={isMobile ? styles.columnContainer : styles.rowContainer}>
        {/* Company Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Our Company</Text>
          <Text style={styles.footerText}>
            We provide innovative solutions to grow your business. Our expert team ensures top-notch service and customer satisfaction.
          </Text>
        </View>

        {/* Quick Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Links</Text>
    
            {/* Internal Links */}
        <Link href="/AboutScreen" asChild>
          <TouchableOpacity>
            <Text style={styles.footerLink}>About Us</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ServiceScreen" asChild>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Services</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ContactScreen" asChild>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Contact</Text>
          </TouchableOpacity>
        </Link>
        </View>

        {/* Contact Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Info</Text>
          <Text style={styles.footerText}>Email: info@example.com</Text>
          <Text style={styles.footerText}>Phone: +123 456 7890</Text>
          <Text style={styles.footerText}>Address: 123 Main Street, Sydney</Text>
        </View>

        {/* Follow Us */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Follow Us</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com")}>
              <Ionicons name="logo-facebook" size={30} color="#3b5998" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com")}>
              <Ionicons name="logo-instagram" size={30} color="#e4405f" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.twitter.com")}>
              <Ionicons name="logo-twitter" size={30} color="#1DA1F2" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer Copyright */}
      <View style={styles.copyright}>
        <Text style={styles.footerText}>© 2025 Your Website. All Rights Reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#333",
    padding: 20,
    paddingBottom: 20,

   
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  columnContainer: {
    flexDirection: "column",
  },
  section: {
    width: "23%", // For web: 4 sections in one row
    minWidth: 200,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 16,
    color: "#bbb",
    marginBottom: 5,
  },
  footerLink: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    textDecorationLine: "underline",
  },
  socialIcons: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  copyright: {
    borderTopWidth: 1,
    borderTopColor: "#444",
    paddingTop: 10,
    alignItems: "center",
    marginTop: 20,
  },
});

export default FooterDesign;
