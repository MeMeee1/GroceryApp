import { Stack, Link, useNavigation } from 'expo-router';
import { Text, ImageBackground, StyleSheet, Dimensions, View, Image } from 'react-native';
import { Button } from '~/components/Button';
import colors from '~/components/Colors';
import fonts from '~/components/Fonts';
import { useRouter } from 'expo-router';
const { width, height } = Dimensions.get('window');

export default function Home() {
  const router = useRouter();
  return (
    <ImageBackground source={require("~/assets/onboarding_screen.png")} style={styles.image}>
      <View style={styles.row_container}>
        <Image source={require('~/assets/carrot_icon.png')} style={styles.icon} />
        <Text style={styles.main_text}>Welcome{"\n"} to our store</Text>
        <Text style={styles.sub_text}>Get your groceries in as fast as one hour</Text>
        <Button title='Get Started' style={styles.button} onPress={()=>router.push("/sign_in")}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flexGrow:1,
    justifyContent: 'flex-end',
    width: '100%', 
    height: '100%',
  },
  row_container: {
    alignItems: 'center',
  },
  icon: {
    width: width * 0.1,
    height: width * 0.12,
    marginBottom: height * 0.02,
  },
  main_text: {
    color: colors.white,  
    textAlign: 'center',
    fontSize: width * 0.15,
    fontFamily: fonts.bold, 
    marginBottom: height * 0.01,
  },
  sub_text: {
    color: colors.white,
    fontSize: width * 0.045,
    textAlign: 'center',
    marginBottom: height * 0.02,
    fontFamily: fonts.medium, 
  },
  button: {
    
    backgroundColor: colors.green,  
    width: "80%",
    height: "17%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: "8%",
  },
});