import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const AboutSection = ({ scrollToContact }) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.leftPart}>
        <Text style={styles.heading}>About Us</Text>
        <Text style={styles.paragraph}>
          We are dedicated to providing the best solutions for your business growth. Our team is here to help you reach your goals with passion and expertise.
        </Text>
        <TouchableOpacity style={styles.button} onPress={scrollToContact}>
          <Text style={styles.buttonText}>Go to Contact</Text>
        </TouchableOpacity>
      </View>

    
      <View style={styles.rightPart}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/about-image-1.jpg")}
            style={styles.imageLarge}
          />
          <Image
            source={require("../../assets/images/about-image-2.jpg")}
            style={styles.imageSmall}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftPart: {
    flex: 1,
    paddingRight: 20, // Space between text and image
  },
  rightPart: {
    flex: 1,
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  imageLarge: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  imageSmall: {
    width: 150,
    height: 200,
    borderRadius: 10,
    position: "absolute",
    bottom: -20,
    right: 70,
    borderWidth: 4,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff7f50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AboutSection;
