import { View, ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import { useFonts } from "~/components/Fonts"; // Import the useFonts hook

export default function Layout() {
  const fontsLoaded = useFonts(); // Use the hook to check if fonts are loaded

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}