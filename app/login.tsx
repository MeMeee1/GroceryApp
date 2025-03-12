import {
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import { useRouter } from "expo-router";
  import BackgroundImage from '~/components/BackgroundImage';
  import { Button } from "~/components/Button";
  import { useState } from "react";
import fonts from '~/components/Fonts';
import colors from '~/components/Colors';
  
  const { width, height } = Dimensions.get("window");
  
  export default function AuthScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <BackgroundImage EnableBackButton={false}>
          <ScrollView contentContainerStyle={styles.container}>
            <Image source={require("~/assets/o_carrot_icon.png")} style={styles.logo} />
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Enter your email and password</Text>
  
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
              />
            </View>
  
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
              />
            </View>
  
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
  
            <Button style={styles.button} title="Log In" onPress={() => router.push("/signup")} />
            <TouchableOpacity onPress={() => router.push("/signup")}>  
                <Text style={styles.signupTxt}>   
                    Don't have an account?{' '}  
                    <Text style={styles.signupLink}>Signup</Text>  
                </Text>  
            </TouchableOpacity>  
          </ScrollView>
        </BackgroundImage>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",

        paddingHorizontal: width * 0.05,
    },
    logo: {
      width: 43,
      height: 50,
      marginBottom: 40,
      alignSelf:"center"
    },
    title: {
      fontSize: width * 0.08,
      color: "#333",
      alignSelf: "flex-start",
      marginBottom: 10,
      fontFamily: 'Gilroy-Bold',
    },
    subtitle: {
      fontSize: width * 0.045,
      color: "#666",
      alignSelf: "flex-start",
      marginBottom: 30,
      fontFamily: fonts.regular,
    },
    inputContainer: {
      flexDirection: "column",
      marginBottom: 10,
      width: "100%",
    },
    label: {
      color: colors.gray,
      fontFamily: fonts.regular,
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      paddingVertical: 10,
      fontSize: 13,
      color: "#181725",
      height: 40,
      marginBottom: 10,
      fontFamily:fonts.regular
    },
    forgotPassword: {
      alignSelf:"flex-end",
      fontFamily: fonts.regular,
      marginBottom: 15,
      color: colors.black,
    },
    button: {
      width: "100%",
      backgroundColor: colors.green,
      
      alignItems: "center",
      justifyContent: 'center',
    borderRadius: 15,
    marginTop: "8%",
    },
    signupTxt: {  
       alignSelf:"center",
       marginTop:10,
       color: 'black', 
       fontFamily:fonts.medium,
      },  
      signupLink: {  
        color: 'green',   
         
      },  
  });
  