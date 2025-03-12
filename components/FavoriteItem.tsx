import React from 'react';
import { Dimensions,View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import colors from '~/components/Colors';
import fonts from './Fonts';
import { Ionicons } from '@expo/vector-icons';
interface FavoriteItemProps {
  title: string;
  imageUrl: ImageSourcePropType;
  subtitle:string;
  price: string;
}
const { width, height } = Dimensions.get('window');
const FavoriteItem: React.FC<FavoriteItemProps> = ({ title, imageUrl, subtitle,price }) => {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
        <Ionicons name="chevron-forward-outline" size={width * 0.05} color="black" /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems:"center"

  },
  titleContainer:{
    flex:1,
  },
  title: {
    fontSize: 14,
    fontFamily:fonts.bold,
    color: colors.black,
  },
  subtitle: {
    fontSize: 12,
    color: colors.gray,
    fontFamily:fonts.light,
  },
  price: {
    fontSize: 14,
    color: colors.black,
    fontFamily:fonts.bold,
    paddingRight:5
    // marginRight:10
  },
});

export default FavoriteItem;
