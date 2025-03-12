import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import fonts from '~/components/Fonts';
import colors from '~/components/Colors';

interface GroceryComponentProps {
  icon: ImageSourcePropType;
  text: string;
  backgroundColor?: string; // Optional prop for background color
  width?: number; // Optional prop for fixed width
}

const GroceryComponent: React.FC<GroceryComponentProps> = ({
  icon,
  text,
  backgroundColor = colors.green, // Default background color
  width = 150, // Default fixed width
}) => {
  return (
    <View style={[styles.container, { backgroundColor, width }]}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    padding: 25,
  },
  icon: {
    width: 40,
    height: 30,
    marginRight: 10, 
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.black,
  },
});

export default GroceryComponent;