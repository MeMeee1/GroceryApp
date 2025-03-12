import React, { ReactNode } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import { Container } from '~/components/Container';
import { Ionicons } from "@expo/vector-icons";
import colors from './Colors';
import fonts from './Fonts';

const { width, height } = Dimensions.get('window');

interface BackgroundImageProps {
  children: ReactNode;
  GoBack?: () => void;
  EnableBackButton?: boolean;
  title?: string;
  useBackgroundImage?: boolean;
  backgroundColor?: string;
  EnableFilterButton?: boolean; // New prop to enable filter icon
  onFilterPress?: () => void; // Callback for filter button press
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ 
  children, 
  GoBack, 
  EnableBackButton = true, 
  title, 
  useBackgroundImage = true, 
  backgroundColor = colors.white, 
  EnableFilterButton = false, // Default to false
  onFilterPress 
}) => {
  const Content = (
    <>
      {/* Header Section */}
      <View style={styles.header}>
        {EnableBackButton && (
          <TouchableOpacity style={styles.backButton} onPress={GoBack}>
            <Ionicons name="chevron-back-outline" size={width * 0.08} color={colors.black} />
          </TouchableOpacity>
        )}

        {title && <Text style={styles.title}>{title}</Text>}

        {EnableFilterButton && (
          <TouchableOpacity style={styles.filterIcon} onPress={onFilterPress}>
            <Image
              source={require('~/assets/icons/filter_icon.png')}
              style={styles.filterImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>

      <Container>{children}</Container>
    </>
  );

  return useBackgroundImage ? (
    <ImageBackground
      style={styles.container}
      source={require('~/assets/bg_img.png')}
    >
      {Content}
    </ImageBackground>
  ) : (
    <View style={[styles.container, { backgroundColor }]}>{Content}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center the title
    paddingVertical: height * 0.02,
    position: "absolute",
    top: height * 0.02,
    width: "100%",
    zIndex: 10,
  },
  backButton: {
    position: "absolute",
    left: width * 0.03,
  },
  title: {
    fontSize: width * 0.06,
    fontFamily:fonts.bold,
    color: colors.black,
    textAlign: "center",
  },
  filterIcon: {
    position: "absolute",
    right: width * 0.03,
  },
  filterImage: {
    width: width * 0.05,
    height: width * 0.05,
  },
});

export default BackgroundImage;
