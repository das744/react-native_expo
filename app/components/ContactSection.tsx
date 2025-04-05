import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Form submitted:", { name, email, message });
    // You can add logic to send this data to a server or API
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contactDetails}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.paragraph}>Email: info@example.com</Text>
        <Text style={styles.paragraph}>Phone: +123 456 7890</Text>
        <Text style={styles.paragraph}>Address: 123 Main Street, Sydney</Text>
      </View>

      <View style={styles.contactForm}>
        <Text style={styles.formHeading}>Get in Touch</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Message"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={(text) => setMessage(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#f9f9f9",
    flexWrap: "wrap",
  },
  contactDetails: {
    flex: 1,
    marginRight: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  contactForm: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  formHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    marginBottom: 15,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#ff7f50",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  // Make it responsive
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column", // Stack content on smaller screens
    },
    contactDetails: {
      marginBottom: 20,
    },
    contactForm: {
      marginTop: 20,
    },
  },
});

export default ContactSection;
