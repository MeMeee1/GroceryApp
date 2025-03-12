import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import { Container } from '~/components/Container';
import { SearchBar } from '~/components/SearchBar';
import fonts from '~/components/Fonts';
import colors from '~/components/Colors';
import { Ionicons } from '@expo/vector-icons';
import BeverageComponent from '~/components/BeverageComponent'; // Import the BeverageComponent
import GroceryComponent from '~/components/GroceryComponent'; // Import the GroceryComponent

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Define the type for product items
interface Product {
  id: string;
  name: string;
  size: string;
  price: string;
  imageUrl: ImageSourcePropType;
}

// Mock data for products
const exclusiveOfferProducts: Product[] = [
  { id: '1', name: 'Organic Bananas', size: '7pcs', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
  { id: '2', name: 'Red Apple', size: '1kg', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
  { id: '3', name: 'Beef Bone', size: '1kg', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
  { id: '4', name: 'Broiler Chicken', size: '1kg', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
];

const bestSellingProducts: Product[] = [
  { id: '5', name: 'Organic Bananas', size: '7pcs', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
  { id: '6', name: 'Red Apple', size: '1kg', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
  { id: '7', name: 'Beef Bone', size: '1kg', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
  { id: '8', name: 'Broiler Chicken', size: '1kg', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
];

const groceryProducts: Product[] = [
  { id: '9', name: 'Beef Bone', size: '1kg', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
  { id: '10', name: 'Broiler Chicken', size: '1kg', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
  { id: '11', name: 'Pulses', size: '1kg', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
  { id: '12', name: 'Rice', size: '1kg', price: '$4.99', imageUrl: require('~/assets/food_category_icons/bread_icon.png') },
];

const Explore: React.FC = () => {
  // Render a horizontal product list
  const renderHorizontalProductList = (products: Product[], sectionTitle: string) => (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        <TouchableOpacity onPress={() => console.log('See All pressed')}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {products.map((item) => (
          <View key={item.id} style={styles.horizontalProductItem}>
            <BeverageComponent
              name={item.name}
              size={item.size}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );

  // Render the grocery section with custom header
  const renderGrocerySection = () => (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Groceries</Text>
        <TouchableOpacity onPress={() => console.log('See All pressed')}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* Custom header for Pulses and Rice */}
      <View style={styles.groceryHeader}>
        <GroceryComponent
          icon={require('~/assets/food_category_icons/bread_icon.png')}
          text="Pulses"
          backgroundColor={colors.custom_light_yellow}
        />
        <GroceryComponent
          icon={require('~/assets/food_category_icons/bread_icon.png')}
          text="Rice"
          backgroundColor={colors.custom_light_green}
        />
      </View>
      {/* Horizontal product list */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {groceryProducts.map((item) => (
          <View key={item.id} style={styles.horizontalProductItem}>
            <BeverageComponent
              name={item.name}
              size={item.size}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <Container enableBackground={true}>
      <ScrollView>
        {/* Header Section */}
        <View>
          <Image source={require("~/assets/o_carrot_icon.png")} style={styles.logo} />
          <Text style={styles.title}><Ionicons name="location" size={20}/> Dhaka, Banassre</Text>
          <SearchBar />
          <Image source={require("~/assets/banner.png")} style={styles.banner} resizeMode="contain"/>
        </View>

        {/* Exclusive Offer Section */}
        {renderHorizontalProductList(exclusiveOfferProducts, 'Exclusive Offer')}

        {/* Best Selling Section */}
        {renderHorizontalProductList(bestSellingProducts, 'Best Selling')}

        {/* Grocery Section */}
        {renderGrocerySection()}
      </ScrollView>
    </Container>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: width * 0.06, // 2% of screen width
    alignSelf: 'center',
    marginBottom: height * 0.02, // 2% of screen height
    fontFamily: fonts.bold,
    color: 'black',
  },
  logo: {
    marginTop: "2%",
    width: 33,
    height: 40,
    marginBottom: "1%",
    alignSelf: "center",
  },
  banner: {
    width: width * 0.9,  // 90% of screen width
    height: height * 0.2, // 20% of screen height
    alignSelf: 'center',
    borderRadius: 10, // Smooth rounded corners
    marginBottom: height * 0.02, // Space below banner
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: width * 0.05,
    marginBottom: height * 0.02,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  seeAllText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.green,
  },
  horizontalScrollView: {
    // paddingHorizontal: width * 0.05,
    marginBottom: height * 0.02,
  },
  horizontalProductItem: {
    width: width * 0.4, // Adjust width as needed
    marginRight: width * 0.03,
  },
  groceryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: height * 0.01,
  },
});

export default Explore;