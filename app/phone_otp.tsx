import {
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
import colors from '~/components/Colors';
import fonts from '~/components/Fonts';
import { Button } from "~/components/Button";
import BackgroundImage from '~/components/BackgroundImage';
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

export default function OTPVerification() {
  const router = useRouter();
  return (
   
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <BackgroundImage GoBack={() => router.back()} >
      {/* Back Button */}
      {/* <View style={styles.container}> */}

      {/* Title */}
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <Text style={styles.subtitle}>Code</Text>

      {/* Input Field */}
      <View style={styles.inputContainer}>
        
        
        <TextInput
          style={styles.input}
          placeholder="- - - -"
          keyboardType="phone-pad"
          maxLength={4}
        />
      </View>
      <Text style={styles.resendTxt}>Resend Code</Text>
      
       <TouchableOpacity style={styles.fab} onPress={()=>router.push("/location")}>
          <Ionicons name="chevron-forward-outline" size={width * 0.08} color={colors.white} />
        </TouchableOpacity>
        {/* </View> */}
    </BackgroundImage>
    </TouchableWithoutFeedback>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
    fontSize: width * 0.065,
    fontFamily: fonts.bold,
    marginTop: height * 0.1,
    marginBottom: height * 0.02,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: colors.gray,
    fontFamily: fonts.light,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
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
    bottom: height * 0.03,
    right: width * 0.1,
    backgroundColor: colors.green,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  resendTxt: {
    position: "absolute",
    bottom: height * 0.05,
    right: width * 0.1,
    backgroundColor: "transparent",
    left:20,
    fontSize:16,
    color:colors.seaGreen,
    fontFamily:fonts.medium,
  },
});
