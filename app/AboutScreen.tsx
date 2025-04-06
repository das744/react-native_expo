import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import FooterDesign from "./components/FooterSection";


const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About Us</Text>
      </View>

      <View style={styles.content}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1741988766604-04b6f1b3236d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzh8fHxlbnwwfHx8fHw%3D/400x200' }} style={styles.image} />
        <Text style={styles.paragraph}>
          We are a company dedicated to providing the best service to our customers. Our team
          is made up of passionate individuals who are committed to excellence.
        </Text>
        <Text style={styles.paragraph}>
          Our mission is to deliver high-quality products and services that exceed expectations
          and build lasting relationships with our clients.
        </Text>
      </View>
      <FooterDesign/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
});

export default AboutScreen;
