// app/service.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FooterDesign from './components/FooterSection';

export default function ServicesPage() {
  const services = [
    { title: 'Web Development', description: 'Building responsive and dynamic websites.' },
    { title: 'Mobile App Development', description: 'Creating beautiful and functional mobile apps.' },
    { title: 'UI/UX Design', description: 'Designing user interfaces that are both functional and visually appealing.' },
    { title: 'Digital Marketing', description: 'Helping you reach your target audience through effective online strategies.' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Services</Text>
      </View>

      <View style={styles.servicesList}>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
            <TouchableOpacity style={styles.serviceButton}>
              <Text style={styles.serviceButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        ))}
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
  servicesList: {
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: '#f1f1f1',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  serviceButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  serviceButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});