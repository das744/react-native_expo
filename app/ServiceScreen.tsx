import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import FooterDesign from "./components/FooterSection";
// Service data with descriptions for each subcategory
const services = [
  {
    title: "Web Design",
    description: "Creating visually appealing, user-friendly websites with responsive designs.",
    subcategories: [
      { name: "Responsive Design", text: "Designs that work across all devices seamlessly." },
      { name: "UI/UX Design", text: "User-centric designs focused on usability and aesthetics." },
      { name: "E-commerce Design", text: "Custom designs to help you sell products online effectively." },
    ],
  },
  {
    title: "SEO Optimization",
    description: "Improving your site's visibility and ranking on search engines.",
    subcategories: [
      { name: "On-Page SEO", text: "Optimizing content and HTML structure to improve rankings." },
      { name: "Off-Page SEO", text: "Building backlinks and social signals to increase domain authority." },
      { name: "Local SEO", text: "Helping your business rank higher in local search results." },
    ],
  },
  {
    title: "Digital Marketing",
    description: "Boost your brand's visibility and engagement through various digital platforms.",
    subcategories: [
      { name: "Social Media Marketing", text: "Leveraging social platforms to grow your audience and brand." },
      { name: "Content Marketing", text: "Creating valuable content to engage and educate your audience." },
      { name: "Email Campaigns", text: "Designing and executing email campaigns to nurture leads." },
    ],
  },
  {
    title: "App Development",
    description: "Developing custom mobile apps for iOS, Android, and cross-platform solutions.",
    subcategories: [
      { name: "iOS Development", text: "Building custom apps for the iPhone and iPad." },
      { name: "Android Development", text: "Creating apps tailored for Android smartphones and tablets." },
      { name: "Cross-Platform Development", text: "Building apps that work on both iOS and Android with a single codebase." },
    ],
  },
];

// Get screen width
const { width } = Dimensions.get("window");

const ServiceCard = ({ title, description, subcategories }: { title: string, description: string, subcategories: { name: string, text: string }[] }) => {
  return (
    <View style={styles.card}>
      {/* Left side: Service Heading and Description */}
      <View style={styles.leftSide}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>

      {/* Right side: Bullet Points for Subcategories */}
      <View style={styles.rightSide}>
        {subcategories.map((subcategory, index) => (
          <View key={index} style={styles.bulletPointContainer}>
            <Text style={styles.bulletPoint}>
              • {subcategory.name}
            </Text>
            <Text style={styles.subcategoryText}>
              {subcategory.text}
            </Text>
          </View>
        ))}
      </View>
      
    </View>
  );
};

const ServicesSection = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Our Services</Text>

      {/* Services Layout */}
      <View style={styles.servicesContainer}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            subcategories={service.subcategories}
          />
        ))}
      </View>
      <FooterDesign/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
    minHeight: "25%",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Allow wrapping of cards
    justifyContent: "space-between", // Space out the cards
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: width > 768 ? "48%" : "100%", // 48% width for larger screens, 100% for smaller ones
    paddingBottom: 20,
  },
  leftSide: {
    flex: 1,
    marginRight: 20, // Add margin on larger screens
  },
  rightSide: {
    flex: 1,
    paddingLeft: 10, // Padding for the right side
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 15,
    color: "#777",
  },
  bulletPointContainer: {
    marginBottom: 15,
  },
  bulletPoint: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  subcategoryText: {
    fontSize: 14,
    color: "#777",
  },
});

export default ServicesSection;
