// BackgroundImage.tsx
import React, { ReactNode } from 'react';
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
  ImageBackground
} from 'react-native';
import {Container} from '~/components/Container';
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get('window');

interface BackgroundImageProps {
  children: ReactNode;
  GoBack?: () => void;
  EnableBackButton?: boolean;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children,GoBack,EnableBackButton=true }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('~/assets/bg_img.png')}
    >
      {EnableBackButton && (  
            <TouchableOpacity style={styles.backButton} onPress={GoBack}>  
              <Ionicons name="chevron-back-outline" size={width * 0.08} color="black" />  
            </TouchableOpacity>  
      )}  
      
      
      <Container>
      
      {children}
      </Container>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "white",
  },
  backButton:{
    position: "absolute",
    top: height * 0.05,
    left: width * 0.03,
    zIndex: 10,
  }
});

export default BackgroundImage;