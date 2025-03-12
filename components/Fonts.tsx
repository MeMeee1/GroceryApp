import * as Font from "expo-font";
import { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

const fonts = {
  light:"Gilroy-Light",
  extraBold: "Gilroy-ExtraBold",
  regular: "Gilroy-Regular",
  semiBold: "Gilroy-SemiBold",
  medium: "Gilroy-Medium",
  heavy: "Gilroy-Heavy",
  bold: "Gilroy-Bold",
};

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "Gilroy-Light": require("~/assets/fonts/Gilroy-Light.ttf"), // Use the actual font family name
          "Gilroy-ExtraBold": require("~/assets/fonts/Gilroy-ExtraBold.ttf"),
          "Gilroy-Regular": require("~/assets/fonts/Gilroy-Regular.ttf"),
          "Gilroy-SemiBold": require("~/assets/fonts/Gilroy-SemiBold.ttf"),
          "Gilroy-Medium": require("~/assets/fonts/Gilroy-Medium.ttf"),
          "Gilroy-Heavy": require("~/assets/fonts/Gilroy-Heavy.ttf"),
          "Gilroy-Bold": require("~/assets/fonts/Gilroy-Bold.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    }

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default fonts;