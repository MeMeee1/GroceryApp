import React, { useState,useEffect } from "react";  
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions,ImageBackground } from "react-native";  
import { useNavigation } from "@react-navigation/native";  
import { Stack,Link, useLocalSearchParams } from 'expo-router';
const { width, height } = Dimensions.get("window");  
import {Button} from "~/components/Button"
import { useFonts } from "expo-font";

export default function AuthScreen() {  
  const navigation = useNavigation();  
  const [isLogin, setIsLogin] = useState(true);  
  const [username, setUsername] = useState("");  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
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
    <>
    <Stack.Screen options={{ title: '' }} />
    
    <ImageBackground style={styles.container} source={require("~/assets/bg_img.png")}>  
      <Image source={require("~/assets/o_carrot_icon.png")} style={styles.logo} />  
      <Text style={styles.title}>{isLogin ? "Login" : "Sign Up"}</Text>  
      <Text style={styles.subtitle}>{isLogin ? "Enter your emails and password" : "Enter your credentials to continue"}</Text>  

      {!isLogin && (  
        <View style={styles.inputContainer}>  
          <Text style={styles.label}>Username</Text>  
          <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Username" />  
        </View>  
      )}  

      <View style={styles.inputContainer}>  
        <Text style={styles.label}>Email</Text>  
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email"  keyboardType="email-address" />  
      </View>  

      <View style={styles.inputContainer}>  
        <Text style={styles.label}>Password</Text>  
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />  
      </View>  

      {isLogin && (  
        <Text style={styles.forgotPassword}>Forgot Password?</Text>  
       
      )}  

      {!isLogin && (  
        <Text style={styles.termsText}>  
          By continuing, you agree to our {" "}  
          <Text style={styles.linkText}>Terms of Service</Text> and {" "}  
          <Text style={styles.linkText}>Privacy Policy</Text>.  
        </Text>  
      )}  

      
      <Button style={styles.button} title={isLogin ? "Log In" : "Sign Up"}/>
      <Text style={styles.footerText}>  
        {isLogin ? "Don't have an account? " : "Already have an account? "}  
        <Text style={styles.signupText} onPress={() => setIsLogin(!isLogin)}>  
          {isLogin ? "Sign Up" : "Login"}  
        </Text>  
      </Text>  
    </ImageBackground>  
    </>
  );  
}  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: "center",  
    alignItems: "center",  
    paddingHorizontal: width * 0.05,  
    backgroundColor: "#FAFAFA",   
   
  },  
  logo: {  
    width: 43, // Slightly larger logo  
    height: 50,  
    marginBottom: 40, // More space above the title  
  },  
  title: {  
    fontSize: width * 0.08, // Larger title for better visibility  
     
    color: "#333", // Darker color for contrast  
    alignSelf: "flex-start",  
    marginBottom: 10,  
    fontFamily: 'Gilroy-Bold',
  },  
  subtitle: {  
    fontSize: width * 0.045,  
    color: "#666", // Softer subtitle color  
    alignSelf: "flex-start",  
    marginBottom: 30, // Increased margin for better layout  
    fontFamily: 'Gilroy-Light',
  },  
  inputContainer: {  
    flexDirection: "column",  
    marginBottom: 10,  
    width: "100%",  
  },  
  label: {  
    
   
    color: "#B1B1B1",  
    fontFamily: 'Gilroy-Light',
  },  
  input: {  
   
    borderBottomWidth: 1, // Only the bottom border  
    borderBottomColor: "#ccc", // Color of the bottom border  
    paddingVertical: 10, // Added vertical padding for better space  
   // paddingHorizontal: 5, // Keeping horizontal padding minimal  
    fontSize: 13,  
    color: "#181725",  
    height: 40, // Set a height to give it structure  
    marginBottom:10, // Added spacing between input fields  
  },  
  forgotPassword: {  
    alignSelf: "flex-end",  
    fontFamily: 'Gilroy-Light',
    marginBottom: 15,  
  },  
  termsText: {  
    fontSize: 12,  
    color: "#666",  
    textAlign: "left",  
    alignSelf: "flex-start",
    fontFamily: 'Gilroy-Light',  
    
 
  },  
  linkText: {  
    color: "#28A745",  
   
    fontFamily: 'Gilroy-Light',
  },  
  button: {  
    width: "100%",  
    backgroundColor: "#28A745",  
    padding: 15,  
    fontFamily: 'Gilroy-Light',
    alignItems: "center",  
    shadowColor: "#000",  
    shadowOpacity: 0.2,  
    shadowRadius: 2,  
    elevation: 5,  
    marginTop: 10,  
  },  
  buttonText: {  
    color: "#fff",  
    fontWeight: "bold",  
    fontSize: 16,  
  },  
  footerText: {  
    marginTop: 20,  
    color: "gray",  
  },  
  signupText: {  
    color: "#28A745",  
    fontFamily: 'Gilroy-Light',
  },  
  
});