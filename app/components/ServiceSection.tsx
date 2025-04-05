import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Service data
const services = [
  {
    title: "Web Design",
    subcategories: [
      "Responsive Design",
      "UI/UX Design",
      "E-commerce Design",
    ],
  },
  {
    title: "SEO Optimization",
    subcategories: ["On-Page SEO", "Off-Page SEO", "Local SEO"],
  },
  {
    title: "Digital Marketing",
    subcategories: [
      "Social Media Marketing",
      "Content Marketing",
      "Email Campaigns",
    ],
  },
  {
    title: "App Development",
    subcategories: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Development",
    ],
  },
];

const ServiceCard = ({ title, subcategories }: { title: string, subcategories: string[] }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.subcategories}>
        {subcategories.map((subcategory, index) => (
          <Text key={index} style={styles.subcategoryText}>
            {index + 1}. {subcategory}
          </Text>
        ))}
      </View>
    </View>
  );
};

const ServicesSection = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Our Services</Text>

      {/* Services Grid Layout */}
      <View style={styles.gridContainer}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            subcategories={service.subcategories}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    
  },
  card: {
    width: "48%", // Each card takes up almost half the width
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
   
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subcategories: {
    marginTop: 10,
  },
  subcategoryText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
  },

  // Make grid responsive
  "@media (max-width: 768px)": {
    gridContainer: {
      flexDirection: "column", // Stack cards vertically on mobile
    },
    card: {
      width: "100%", // Cards take up full width on smaller screens
    },
  },
});

export default ServicesSection;
