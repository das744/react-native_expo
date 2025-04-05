import { ScrollView, View, StyleSheet } from 'react-native';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServiceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/FooterSection'; // Import Footer component

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <HeroSection />
        <ServicesSection />
        <AboutSection/>
        <ContactSection />
        <Footer/>
      </ScrollView>
    
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up full height
    justifyContent: 'space-between', // This will distribute space between content
  },
  scroll: {
    flexGrow: 1, // Make the ScrollView content expand to fill available space
    justifyContent: 'flex-start', // Align items at the top
  },
});
