import React from 'react';
import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import BackgroundImage from '~/components/BackgroundImage';
import { router, useLocalSearchParams } from 'expo-router';
import BeverageComponent from '~/components/BeverageComponent';

const { width, height } = Dimensions.get('window');

interface BeverageItem {
  id: string;
  name: string;
  size: string;
  price: string;
  imageUrl: any;
}

const beverages: BeverageItem[] = [
  { id: '1', name: 'Diet Coke', size: '355ml', price: '$1.99', imageUrl: require('~/assets/beverages/diet_coke.png') },
  { id: '2', name: 'Sprite Can', size: '325ml', price: '$1.50', imageUrl: require('~/assets/beverages/pepsi.png') },
  { id: '3', name: 'Apple & Grape Juice', size: '2L', price: '$15.99', imageUrl: require('~/assets/beverages/apple_grape_juice.png') },
  { id: '4', name: 'Orange Juice', size: '2L', price: '$15.99', imageUrl: require('~/assets/beverages/orange_juice.png') },
  { id: '5', name: 'Coca-Cola', size: '2L', price: '$15.99', imageUrl: require('~/assets/beverages/cocacola.png') },
  { id: '6', name: 'Sprite', size: '2L', price: '$15.99', imageUrl: require('~/assets/beverages/sprite.png') },
];

const CategoryItems: React.FC = () => {
  const { title } = useLocalSearchParams<{ title: string }>();

  return (
    <BackgroundImage GoBack={() => router.back()} title={title} EnableFilterButton useBackgroundImage={false}>
      <View style={styles.container}>
        <FlatList
          data={beverages}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.productList}
          renderItem={({ item }) => (
            <View style={styles.productItemWrapper}>
              <BeverageComponent {...item} />
            </View>
          )}
        />
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: height * 0.1,
  },
  productList: {
    paddingHorizontal: width * 0.02,
  },
  productItemWrapper: {
    width: '50%',
    padding: width * 0.01,
  },
});

export default CategoryItems;
