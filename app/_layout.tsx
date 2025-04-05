// app/layout.tsx
import { Slot } from 'expo-router';
import NavbarSection from './components/Navbar';
import FooterSection from './components/FooterSection';

export default function Layout() {
  return (
    <>
      <NavbarSection />
      <Slot /> {/* This will render the current page */}
      {/* <FooterSection /> */}
    </>
  );
}
