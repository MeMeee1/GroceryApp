import { View, Text, Image, StyleSheet, Dimensions,ImageBackground } from "react-native";
import { useState } from "react";
import { Button } from "~/components/Button"; 
import { Stack, Link } from "expo-router";
import CustomPicker from "~/components/CustomPicker";
import { useFonts } from "expo-font";
const { width, height } = Dimensions.get("window");

export default function SelectLocationScreen() {
  const [selectedZone, setSelectedZone] = useState<string>("Banasree");
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>();
  const [fontsLoaded] = useFonts({
    "Gilroy-Light": require("~/assets/fonts/Gilroy-Light.otf"),
    "Gilroy-ExtraBold": require("~/assets/fonts/Gilroy-ExtraBold.otf"),
  });
  if (!fontsLoaded) {
    return null;  // You can replace this with a loading component
  }
  return (
    <>
      <Stack.Screen options={{ title: "" }} />
      <ImageBackground style={styles.container} source={require("~/assets/bg_img.png")}> 
        <Image source={require("~/assets/location_icon.png")} style={styles.image} />
        
        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.subtitle}>
          Switch on your location to stay in tune with what's happening in your area
        </Text>

        <Text style={styles.label}>Your Zone</Text>
          <CustomPicker
            value={selectedZone}
            onValueChange={setSelectedZone}
            options={["Banasree", "Gulshan"]}
          />

          <Text style={styles.label}>Your Area</Text>
          <CustomPicker
            value={selectedArea}
            onValueChange={setSelectedArea}
            options={["Residential", "Commercial"]}
          />

          <Link href="/login" asChild>
            <Button title="Submit" style={styles.submitButton} />
          </Link>
        </ImageBackground>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: height * 0.1,

    
  },
  image: {
    width: width * 0.5,
    height: height * 0.2,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontFamily: 'Gilroy-Bold',
    marginTop: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 50,
    fontFamily: 'Gilroy-Light',
  },
  formContainer: {
    width: "100%",
    marginTop: 20, // Fixed push down issue
  },
  label: {
    marginTop:5,
    alignSelf: "flex-start",
    marginLeft: 18,
    marginBottom: 5,
    fontWeight: "500",
    color:"#7C7C7C",
    fontFamily: 'Gilroy-Light',
  },
  submitButton: {
    width: "90%",
    marginTop: 20,
    backgroundColor: "#28A745",
  },
});
