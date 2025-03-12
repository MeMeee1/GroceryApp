// PhoneNumberVerification.tsx
import React from 'react';
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
import { Link } from 'expo-router';
import BackgroundImage from '~/components/BackgroundImage';
import colors from '~/components/Colors';
import fonts from '~/components/Fonts';
import { Ionicons } from "@expo/vector-icons";
import {useRouter} from "expo-router";

const { width, height } = Dimensions.get('window');

const PhoneNumberVerification: React.FC = () => {
  const router = useRouter();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <BackgroundImage GoBack={() => router.back()} >
      {/* <View style={styles.container}> */}
        {/* Title */}
        {/* <Container> */}
        <Text style={styles.title}>Enter your mobile number</Text>
        <Text style={styles.subtitle}>Mobile Number</Text>

        {/* Input Field */}
        <View style={styles.inputContainer}>
          <Image source={require('~/assets/flag_icon.png')} style={styles.flag} />
          <Text style={styles.countryCode}>+880</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.fab}  onPress={()=>router.push("/phone_otp")}>
            <Ionicons name="chevron-forward-outline" size={width * 0.08} color={colors.white} />
          </TouchableOpacity>
       {/* </View> */}
        {/* </Container> */}
      </BackgroundImage>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05,
  },
  title: {
    fontSize: width * 0.06,
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
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
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
    position: 'absolute',
    bottom: height * 0.02,
    right: width * 0.1,
    backgroundColor: colors.green,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    fontSize: 24,
    color: colors.white,
  },
});

export default PhoneNumberVerification;