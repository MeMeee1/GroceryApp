import { Stack, Link, useNavigation } from 'expo-router';
import { Text, ImageBackground, StyleSheet, Dimensions, View, Image } from 'react-native';
import { Button } from '~/components/Button';
import { useEffect } from 'react';
import { useFonts } from "expo-font";
const { width, height } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Gilroy-Light": require("~/assets/fonts/Gilroy-Light.otf"),
    "Gilroy-ExtraBold": require("~/assets/fonts/Gilroy-ExtraBold.otf"),
  });
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <ImageBackground source={require("~/assets/onboarding_screen.png")} style={styles.image}>
        <View style={styles.row_container}>
          <Image source={require('~/assets/carrot_icon.png')} style={styles.icon} />
          <Text style={styles.main_text}>Welcome{"\n"} to our store</Text>
          <Text style={styles.sub_text}>Get your groceries in as fast as one hour</Text>
          <Link href='/sign_in' asChild>
            <Button title='Get Started' style={styles.button} />
          </Link>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
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
    color: '#fff',
    textAlign: 'center',
    fontSize: width * 0.13,
    fontFamily: 'Gilroy-Bold',
    marginBottom: height * 0.01,
  },
  sub_text: {
    color: '#fff',
    fontSize: width * 0.045,
    textAlign: 'center',
    marginBottom: height * 0.02,
    ''
    fontFamily: 'Gilroy-Light',
  },
  button: {
    backgroundColor: '#53B175',
    width: "80%",
    height: "17%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop:"8%",
  
  },
});
