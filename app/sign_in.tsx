import { View, Text, Image, TextInput, StyleSheet, Dimensions,SafeAreaView } from "react-native";
import { Stack, Link, useNavigation } from 'expo-router';
import colors from '~/components/Colors';
import fonts from '~/components/Fonts';
import { useEffect } from 'react';
import { Button } from '~/components/Button';
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
const { width, height } = Dimensions.get("window");

export default function SignInScreen() {
  const router =useRouter();
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
        <Button hasIcon={true} icon={<FontAwesome name="google" size={24} color={colors.white} />} title="Continue with Google" style={styles.googleButton} onPress={()=>router.push('/phone_verification')} />
       
        <Button hasIcon={true} icon={<FontAwesome name="facebook-f" size={24} color={colors.white} />}title="Continue with Facebook" style={styles.facebookButton} onPress={()=>router.push('/phone_verification')}/>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    fontSize: width * 0.065,
    fontFamily: fonts.bold,
    marginBottom: height * 0.05, 
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
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
    fontFamily: fonts.regular,
  },
  orText: {
    textAlign: "center",
    color: colors.gray,
    marginVertical: height * 0.03,
    fontFamily: fonts.regular,
  },
  googleButton: {
    backgroundColor: colors.custom_light_blue,
    marginBottom: height * 0.015,
   
  },
  facebookButton: {
    backgroundColor: colors.custom_dark_blue,
  },
});