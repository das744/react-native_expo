import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; 

const HeroSection = () => {
  const router = useRouter(); 

  return (
    <ImageBackground source={require("../../assets/images/hero-bg.jpg")} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.heading}>Welcome to My Website</Text>
        <Text style={styles.paragraph}>We provide the best services to help your business grow.</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/contact")}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#ff7f50",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HeroSection;
