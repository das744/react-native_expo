import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { db } from "@/scripts/firebase"; // Adjust path as needed
import { collection, addDoc } from "firebase/firestore";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [quoteType, setQuoteType] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};

    if (!name.trim()) tempErrors.name = "Name is required";
    if (!email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!message.trim()) tempErrors.message = "Message is required";
    if (!serviceType) tempErrors.serviceType = "Service type is required";
    if (!quoteType) tempErrors.quoteType = "Quote type is required";
    if (!contactMethod) tempErrors.contactMethod = "Contact method is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      await addDoc(collection(db, 'contactSectionQuotes'), {
        name,
        email,
        message,
        serviceType,
        quoteType,
        contactMethod,
        createdAt: new Date(),
      });
      

      Alert.alert("Success", "Form submitted successfully!");

      setName("");
      setEmail("");
      setMessage("");
      setServiceType("");
      setQuoteType("");
      setContactMethod("");
      setErrors({});
    } catch (error) {
      console.error("Error adding document: ", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.contactDetails}>
          <Text style={styles.heading}>Contact Us ASAP</Text>
          <Text style={styles.paragraph}>Email: info@example.com</Text>
          <Text style={styles.paragraph}>Phone: +123 456 7890</Text>
          <Text style={styles.paragraph}>Address: 123 Main Street, Sydney</Text>
        </View>

        <View style={styles.contactForm}>
          <Text style={styles.formHeading}>Get a Quote</Text>

          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Your Message"
            multiline
            numberOfLines={4}
            value={message}
            onChangeText={setMessage}
          />
          {errors.message && <Text style={styles.errorText}>{errors.message}</Text>}

          <Text style={styles.fieldLabel}>Select Service Type</Text>
          <Picker
            selectedValue={serviceType}
            onValueChange={(itemValue) => setServiceType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select one..." value="" />
            <Picker.Item label="Web Development" value="webDev" />
            <Picker.Item label="Mobile App Development" value="mobileApp" />
            <Picker.Item label="Digital Marketing" value="digitalMarketing" />
          </Picker>
          {errors.serviceType && (
            <Text style={styles.errorText}>{errors.serviceType}</Text>
          )}

          <Text style={styles.fieldLabel}>Quote Type</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => setQuoteType("Standard")}
            >
              <View
                style={
                  quoteType === "Standard"
                    ? styles.selectedRadioButton
                    : styles.radioButton
                }
              />
              <Text style={styles.radioText}>Standard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => setQuoteType("Custom")}
            >
              <View
                style={
                  quoteType === "Custom"
                    ? styles.selectedRadioButton
                    : styles.radioButton
                }
              />
              <Text style={styles.radioText}>Custom</Text>
            </TouchableOpacity>
          </View>
          {errors.quoteType && (
            <Text style={styles.errorText}>{errors.quoteType}</Text>
          )}

          <Text style={styles.fieldLabel}>Preferred Contact Method</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => setContactMethod("Email")}
            >
              <View
                style={
                  contactMethod === "Email"
                    ? styles.selectedRadioButton
                    : styles.radioButton
                }
              />
              <Text style={styles.radioText}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => setContactMethod("Phone")}
            >
              <View
                style={
                  contactMethod === "Phone"
                    ? styles.selectedRadioButton
                    : styles.radioButton
                }
              />
              <Text style={styles.radioText}>Phone</Text>
            </TouchableOpacity>
          </View>
          {errors.contactMethod && (
            <Text style={styles.errorText}>{errors.contactMethod}</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    flexWrap: "wrap",
  },
  contactDetails: {
    flex: 1,
    marginRight: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
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
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  formHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    marginBottom: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  picker: {
    height: 50,
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 10,
  },
  selectedRadioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ff7f50",
    backgroundColor: "#ff7f50",
    marginRight: 10,
  },
  radioText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ff7f50",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 5,
    marginTop: -5,
  },
});

export default ContactSection;
