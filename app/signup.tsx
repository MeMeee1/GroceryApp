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
  import colors from "~/components/Colors";
  const { width } = Dimensions.get("window");
  
  export default function SignupScreen() {
    const router = useRouter();
   
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState("");
  
    // const handleSignup = () => {
    //   if (!email || !password || !userName) {
    //     setError("All fields are required");
    //     return;
    //   }
  
    //   if (password !== userName) {
    //     setError("Passwords do not match");
    //     return;
    //   }
  
    //   setError("");
    //   console.log("Sign up successful!");
    //   router.push("/login"); // Redirect to login screen
    // };
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <BackgroundImage EnableBackButton={false}>
          <ScrollView contentContainerStyle={styles.container}>
            <Image source={require("~/assets/o_carrot_icon.png")} style={styles.logo} />
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Create an account to get started</Text>
  
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
             
                
                placeholder="RiseVest"
         
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
               
              
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
              <Text style={styles.agreementTxt}> By continuing you agree to our <Text style={styles.termsLink}>Terms of Service</Text> and<Text style={styles.privacyLink}> Privacy Policy.</Text></Text>
            </TouchableOpacity>
           
  
            <Button style={styles.button} title="Sign Up" onPress={()=>{router.push("/(tabs)")}} />
  
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={styles.loginText}>
                Already have an account? <Text style={styles.loginLink}>Log in</Text>
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
      alignItems: "center",
      paddingHorizontal: width * 0.05,
    },
    logo: {
      width: 43,
      height: 50,
      marginBottom: 40,
    },
    title: {
      fontSize: width * 0.08,
      color: "#333",
      alignSelf: "flex-start",
      marginBottom: 10,
      fontFamily: fonts.bold,
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
      borderBottomColor: colors.lightGray,
      paddingVertical: 10,
      fontSize: 13,
      color: colors.black,
      height: 40,
      marginBottom: 10,
    },
    errorText: {
      color: colors.red,
      alignSelf: "flex-start",
      marginBottom: 10,
    },
    button: {
        width: "100%",
        backgroundColor: colors.green,
        
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: "8%",
    },
    loginText: {
      marginTop: 15,
      fontFamily: fonts.medium,
      color: colors.black,
    },
    termsLink: {
        color: colors.green,
        fontFamily: fonts.medium,
      },
      privacyLink: {
        color: colors.green,
        fontFamily: fonts.medium,
      },
      loginLink: {
        color: colors.green,
        fontFamily: fonts.medium,
      },
    agreementTxt: {
        //backgroundColor:"green",
     
        marginBottom: 10,

        fontFamily: fonts.light,
       fontSize:12,
        color: colors.black,
      },
  });
  