import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import { Container } from '~/components/Container';
import { SearchBar } from '~/components/SearchBar';
import { ProductCategory } from '~/components/ProductCategory';
import fonts from '~/components/Fonts';
import colors from '~/components/Colors';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Mock data for products
const products = [
  { id: '1',title: 'Fresh Fruits & Vegetable', imageUrl: require('~/assets/food_category_icons/vegetables_icon.png'),borderColor:colors.green, color:colors.custom_light_green },
  { id: '2', title: 'Cooking Oil & Ghee', imageUrl: require('~/assets/food_category_icons/oil_icon.png'),borderColor:colors.custom_light_yellow,color:colors.custom_dark_yellow },
  { id: '3', title: 'Meat & Fish', imageUrl: require('~/assets/food_category_icons/meat_icon.png'),borderColor:colors.red,color:colors.custom_light_red},
  { id: '4', title: 'Bakery & Snacks', imageUrl: require('~/assets/food_category_icons/bread_icon.png'),borderColor:colors.violet,color:colors.custom_light_purple },
  { id: '5', title: 'Dairy & Eggs', imageUrl: require('~/assets/food_category_icons/cheese_icon.png'),borderColor:colors.custom_dark_yellow ,color:colors.custom_light_yellow },
  { id: '6', title: 'Beverages', imageUrl: require('~/assets/food_category_icons/beverage_icon.png'),borderColor:colors.green,color:colors.custom_light_green },
  { id: '7', title: 'Meat & Fish', imageUrl: require('~/assets/food_category_icons/meat_icon.png'),borderColor:colors.red,color:colors.custom_light_red},
  { id: '8', title: 'Bakery & Snacks', imageUrl: require('~/assets/food_category_icons/bread_icon.png'),borderColor:colors.violet,color:colors.custom_light_purple },
 
];

const Explore = () => {
  // Render the header and search bar
  const renderHeader = () => (
    <View>
      <Text style={styles.title}>Find Products</Text>
      <SearchBar />
    </View>
  );

  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2} // 2-column layout
        ListHeaderComponent={renderHeader} // Render header at the top
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
          <View style={styles.productItemWrapper}>
            <ProductCategory 
              hasPrice = {true}
              borderColor = {item.borderColor}
              color = {item.color}
              title={item.title} 
              imageUrl={item.imageUrl} 
            />
          </View>
        )}
      />
    </Container>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: width * 0.06, // 6% of screen width
    alignSelf: 'center',
    marginBottom: height * 0.02, // 2% of screen height
    fontFamily: fonts.bold,
    color: 'black',
  },
  productList: {
    paddingHorizontal: width * 0.02, // Add some horizontal padding
  },
  productItemWrapper: {
    width: '50%', // Each item takes 50% of the width
    padding: width * 0.01 , // Add some padding between items
  },
});
  
export default Explore;