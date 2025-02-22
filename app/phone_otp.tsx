import { View, Text, TextInput,ImageBackground, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { Stack,Link, useLocalSearchParams } from 'expo-router';
import { Button } from "~/components/Button";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
const { width, height } = Dimensions.get("window");

export default function OTPVerification() {
  const navigation = useNavigation();
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
      {/* Back Button */}
      

      {/* Title */}
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <Text style={styles.subtitle}>Code</Text>

      {/* Input Field */}
      <View style={styles.inputContainer}>
        
        
        <TextInput
          style={styles.input}
          placeholder="- - - -"
          keyboardType="phone-pad"
          maxLength={10}
        />
      </View>
      <Text style={styles.resendTxt}>Resend Code</Text>
      <Link href='/location' asChild>
      <Button style={styles.fab} title=">" onPress={() => {}} />
      </Link>
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05,
  },
  backButton: {
    position: "absolute",
    top: height * 0.05,
    left: width * 0.05,
    padding: 10,
  },
  title: {
    fontSize: width * 0.06,
    fontFamily: 'Gilroy-Bold',
    marginTop: height * 0.1,
    marginBottom: height * 0.02,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: "gray",
    fontFamily: 'Gilroy-Light',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
    marginTop: height * 0.01,
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
    fontSize: 18,
  },
  fab: {
    position: "absolute",
    bottom: height * 0.1,
    right: width * 0.1,
    backgroundColor: "#53B175",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  resendTxt: {
    position: "absolute",
    bottom: height * 0.12,
    right: width * 0.1,
    backgroundColor: "transparent",
    left:20,
    fontSize:16,
    color:"#53B175",
    fontFamily: 'Gilroy-Light',
  },
});
