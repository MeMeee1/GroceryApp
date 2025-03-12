import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router'; 
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import colors from '~/components/Colors';
import fonts from '~/components/Fonts';

const { width, height } = Dimensions.get('window');

const ProductDetail = () => {
  const { name, price, imageUrl, description } = useLocalSearchParams();
  const imageUrlString = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Back Button and Upload Button */}
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back-outline" size={width * 0.07} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.uploadButton}>
            <Feather name="upload" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Image source={imageUrlString} style={styles.productImage} resizeMode="contain" />
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.subTitle}>1kg, Price</Text>
        
        <View style={styles.quantityContainer}>
          <View style={styles.quantityControls}>
            <TouchableOpacity style={styles.quantityButton}>
              <Ionicons name="remove" size={width * 0.05} color={colors.black} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Ionicons name="add" size={width * 0.05} color={colors.green} />
            </TouchableOpacity>
          </View>
          <Text style={styles.productPrice}>{price}</Text>
        </View>

        <Text style={styles.sectionTitle}>Product Detail</Text>
        <Text style={styles.productDescription}>{description}</Text>
        <View style={styles.divider} />

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Nutritions</Text>
          <View style={styles.infoRight}>
            <Text style={styles.infoGrams}>100g</Text>
            <Ionicons name="chevron-forward" size={width * 0.045} color={colors.black} />
          </View>
        </View>
        <View style={styles.divider} />

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Review</Text>
          <View style={styles.infoRight}>
            <Text style={styles.infoStars}>⭐⭐⭐⭐⭐</Text>
            <Ionicons name="chevron-forward" size={width * 0.045} color={colors.black} />
          </View>
        </View>

        <TouchableOpacity style={styles.addToBasketButton}>
          <Text style={styles.addToBasketText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    backgroundColor: colors.lightGray,
    paddingVertical: height * 0.03,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    position: 'absolute',
    top: height * 0.05,
    left: width * 0.05,
    right: width * 0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  backButton: {
  },
  uploadButton: {
  },
  productImage: {
    width: '90%',
    height: height * 0.3,
  },
  detailsContainer: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
  },
  productName: {
    fontSize: width * 0.06,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  subTitle: {
    fontFamily: fonts.light,
    marginBottom: height * 0.015,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.03,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    borderRadius: 5,
    marginHorizontal: width * 0.02,
  },
  quantityText: {
    borderRadius: 5,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.05,
    borderWidth: 1,
    borderColor: colors.black,
    fontSize: width * 0.05,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  productPrice: {
    fontSize: width * 0.05,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  sectionTitle: {
    fontSize: width * 0.05,
    fontFamily: fonts.bold,
    color: colors.black,
    marginBottom: height * 0.01,
  },
  productDescription: {
    fontSize: width * 0.04,
    fontFamily: fonts.regular,
    color: colors.gray,
    marginBottom: height * 0.03,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    marginVertical: height * 0.01,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.03,
  },
  infoRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
  },
  infoStars: {
    fontSize: width * 0.045,
    color: colors.yellow,
  },
  infoGrams: {
    fontFamily: fonts.regular,
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.03,
    fontSize: width * 0.035,
    color: colors.black,
    backgroundColor: colors.lightGray,
  },
  addToBasketButton: {
    backgroundColor: colors.green,
    borderRadius: 10,
    paddingVertical: height * 0.02,
    alignItems: 'center',
  },
  addToBasketText: {
    fontSize: width * 0.05,
    fontFamily: fonts.regular,
    color: colors.white,
  },
});

export default ProductDetail;
