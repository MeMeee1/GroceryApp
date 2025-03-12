import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '~/components/Colors';
import fonts from '~/components/Fonts';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface BeverageComponentProps {
  name: string;
  size: string;
  price: string;
  imageUrl: any;
}

const BeverageComponent: React.FC<BeverageComponentProps> = ({ name, size, price, imageUrl }) => {
  const handleAddToCart = () => {
    const imageUrlString = typeof imageUrl === 'string' ? imageUrl : imageUrl.toString();

    router.push({
      pathname: '/product_detail',
      params: {
        name,
        price,
        imageUrl: imageUrlString,
        description: 'Apples Are Nutritional. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Heartful And Varied Diet.',
      },
    });
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imageUrl} style={styles.image} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
        <Text style={styles.size} numberOfLines={1} ellipsizeMode="tail">{size}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>{price}</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
            <Ionicons name="add" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 10,
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 210,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.black,
    marginBottom: 5,
    textAlign: 'left',
  },
  size: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.gray,
    marginBottom: 5,
    textAlign: 'left',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.black,
    textAlign: 'left',
  },
  addButton: {
    borderWidth: 1,
    backgroundColor: colors.green,
    borderColor: colors.green,
    borderRadius: 10,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BeverageComponent;
