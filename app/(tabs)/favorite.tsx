import React from 'react';
import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Container } from '~/components/Container';
import FavoriteItem  from '~/components/FavoriteItem';
import colors from '~/components/Colors';
import { Button } from '~/components/Button';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

interface Product {
  id: string;
  title: string;
  imageUrl: any;
  borderColor: string;
  color: string;
}

// Mock data for products
const products: Product[] = [
  { id: '1', title: 'Fresh Fruits & Vegetables', imageUrl: require('~/assets/food_category_icons/vegetables_icon.png'), borderColor: colors.green, color: colors.custom_light_green },
  { id: '2', title: 'Cooking Oil & Ghee', imageUrl: require('~/assets/food_category_icons/oil_icon.png'), borderColor: colors.custom_light_yellow, color: colors.custom_dark_yellow },
  { id: '3', title: 'Meat & Fish', imageUrl: require('~/assets/food_category_icons/meat_icon.png'), borderColor: colors.red, color: colors.custom_light_red },
  { id: '4', title: 'Bakery & Snacks', imageUrl: require('~/assets/food_category_icons/bread_icon.png'), borderColor: colors.violet, color: colors.custom_light_purple },
  { id: '5', title: 'Dairy & Eggs', imageUrl: require('~/assets/food_category_icons/cheese_icon.png'), borderColor: colors.custom_dark_yellow, color: colors.custom_light_yellow },
  { id: '6', title: 'Beverages', imageUrl: require('~/assets/food_category_icons/beverage_icon.png'), borderColor: colors.green, color: colors.custom_light_green },
  { id: '7', title: 'Meat & Fish', imageUrl: require('~/assets/food_category_icons/meat_icon.png'), borderColor: colors.red, color: colors.custom_light_red },
  { id: '8', title: 'Bakery & Snacks', imageUrl: require('~/assets/food_category_icons/bread_icon.png'), borderColor: colors.violet, color: colors.custom_light_purple },
  { id: '9', title: 'Fresh Fruits & Vegetables', imageUrl: require('~/assets/food_category_icons/vegetables_icon.png'), borderColor: colors.green, color: colors.custom_light_green },
  { id: '10', title: 'Cooking Oil & Ghee', imageUrl: require('~/assets/food_category_icons/oil_icon.png'), borderColor: colors.custom_light_yellow, color: colors.custom_dark_yellow },
  { id: '11', title: 'Meat & Fish', imageUrl: require('~/assets/food_category_icons/meat_icon.png'), borderColor: colors.red, color: colors.custom_light_red },
  { id: '12', title: 'Bakery & Snacks', imageUrl: require('~/assets/food_category_icons/bread_icon.png'), borderColor: colors.violet, color: colors.custom_light_purple },
];

const Favorite: React.FC = () => {
  return (
    <Container enablecustomTitle={true}  enableBackground={true}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
          <View style={styles.productItemWrapper}>
            <FavoriteItem subtitle={"330ml, Price"} title={item.title} imageUrl={item.imageUrl} price={"$3.5"}/>
            
          </View>
          
        )}
      />
      <Button style={styles.button} title="Add All Items To Cart"/>
    </Container>
  );
};

// Styles
const styles = StyleSheet.create({
  productList: {
    //paddingHorizontal: width * 0.02,
  },
  productItemWrapper: {
    width: '100%', 
    padding: width * 0.01,
  },
  button: {
        width: "100%",
        backgroundColor: colors.green,
        
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: "8%",
    },
});

export default Favorite;
