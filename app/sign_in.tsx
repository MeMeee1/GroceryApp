import { View, Text, Image, TextInput, StyleSheet, Dimensions } from "react-native";
import { Stack, Link, useNavigation } from 'expo-router';

import { useEffect } from 'react';
import { Button } from '~/components/Button';
import { useFonts } from "expo-font";
const { width, height } = Dimensions.get("window");

export default function SignInScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const [fontsLoaded] = useFonts({
    "Gilroy-Light": require("~/assets/fonts/Gilroy-Light.otf"),
    "Gilroy-ExtraBold": require("~/assets/fonts/Gilroy-ExtraBold.otf"),
  });
  if (!fontsLoaded) {
    return null;  // You can replace this with a loading component
  }
  return (
    <View style={styles.container}>
      <Image source={require("~/assets/grocery_bag.png")} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>
        
        <View style={styles.inputContainer}>
          <Image source={require("~/assets/flag_icon.png")} style={styles.flag} />
          <Text style={styles.countryCode}>+880</Text>
          <TextInput style={styles.input} placeholder="Enter your phone number" keyboardType="phone-pad" />
        </View>
        
        <Text style={styles.orText}>Or connect with social media</Text>
        <Link href='/phone_verification' asChild>
            <Button title="Continue with Google" style={styles.googleButton} />
        </Link>
        <Link href='/phone_verification' asChild>
            <Button title="Continue with Facebook" style={styles.facebookButton} />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: height * 0.3,
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05, 
    marginTop:"17%"
  },
  title: {
    fontSize: width * 0.06,
    fontFamily: 'Gilroy-Bold',
    marginBottom: height * 0.05, 
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Gilroy-Bold',
  },
  orText: {
    textAlign: "center",
    color: "gray",
    marginVertical: height * 0.03,
    fontFamily: 'Gilroy-Light',
  },
  googleButton: {
    backgroundColor: "#4C6EF5",
    marginBottom: height * 0.015,
  },
  facebookButton: {
    backgroundColor: "#3B5998",
  },
});