import { View, Text, Image, StyleSheet, Dimensions,ImageBackground } from "react-native";
import { useState } from "react";
import { Button } from "~/components/Button"; 
import { Stack, Link, router } from "expo-router";
import CustomPicker from "~/components/CustomPicker";
import colors from '~/components/Colors';
import fonts from '~/components/Fonts';
import BackgroundImage from '~/components/BackgroundImage';
const { width, height } = Dimensions.get("window");

export default function SelectLocationScreen() {
  const [selectedZone, setSelectedZone] = useState<string>("Banasree");
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>();
  
 
  return (
   
    <BackgroundImage GoBack={()=>router.back()} >
        <View style={styles.locationContainer}>
            <Image source={require("~/assets/location_icon.png")} style={styles.image} />
            
            <Text style={styles.title}>Select Your Location</Text>
            <Text style={styles.subtitle}>
            Switch on your location to stay in tune with what's happening in your area
            </Text>
            <View style={styles.inputContainer}>
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
                <Button title="Submit" style={styles.submitButton} onPress={()=>router.push("/login")} />
               
            </View>
          </View>

         
    </BackgroundImage>
   
   
  );
}

const styles = StyleSheet.create({
 locationContainer:{

   flex: 1, 
   alignItems: "center",  
   justifyContent: "center",
   marginTop:height*0.07,
//    backgroundColor: "orange", // Use

 },
 inputContainer:{
    width:"100%",
    alignItems:"center",
    marginTop:height*0.05,
   // backgroundColor:"orange"
 },
  image: {
    width: width * 0.5,
    height: height * 0.2,
    resizeMode: "contain",
   
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.bold,
    marginTop: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 50,
    fontFamily: fonts.regular,
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
    color:colors.gray,
    fontFamily: fonts.regular,
  },
  submitButton: {
    width: "90%",
    
    backgroundColor: colors.green,
    
    height: "18%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: "8%",
  },
});
