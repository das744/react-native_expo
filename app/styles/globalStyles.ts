// src/styles/globalStyles.ts
import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#ff7f50",
  secondary: "#333",
  background: "#f4f4f4",
  text: "#555",
  white: "#fff",
  fontFamily:"inter"
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
    fontFamily: COLORS.fontFamily,
  },
  paragraph: {
    fontSize: 16,
    color: COLORS.text,
    fontFamily: COLORS.fontFamily,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
});
