import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '~/components/Colors';
import fonts from '~/components/Fonts';

const { width, height } = Dimensions.get('window');

const cartItems = [
  { id: 1, name: 'Bell Pepper Red', price: 4.99, quantity: 1, image: require('~/assets/beverages/cocacola.png') },
  { id: 2, name: 'Egg Chicken Red', price: 1.99, quantity: 1, image: require('~/assets/beverages/cocacola.png') },
  { id: 3, name: 'Organic Bananas', price: 3.00, quantity: 1, image: require('~/assets/beverages/cocacola.png') },
  { id: 4, name: 'Ginger', price: 2.99, quantity: 1, image: require('~/assets/beverages/cocacola.png') },
];

const MyCart = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cartList}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemSubtitle}>1kg, Price</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Ionicons name="remove" size={20} color={colors.black} />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <Ionicons name="add" size={20} color={colors.green} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.checkoutText}>Go to Checkout</Text>
        <Text style={styles.checkoutPrice}>${totalCost}</Text>
      </TouchableOpacity>

      {/* Checkout Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Checkout</Text>

            {/* Delivery Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Delivery</Text>
              <TouchableOpacity style={styles.selectMethod}>
                <Text style={styles.selectMethodText}>Select Method</Text>
                <Ionicons name="chevron-forward" size={20} color={colors.gray} />
              </TouchableOpacity>
            </View>

            {/* Payment Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Payment</Text>
              <TouchableOpacity style={styles.selectMethod}>
                <Text style={styles.selectMethodText}>Pick discount</Text>
                <Ionicons name="chevron-forward" size={20} color={colors.gray} />
              </TouchableOpacity>
            </View>

            {/* Promo Code Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Promo Code</Text>
              <TouchableOpacity style={styles.selectMethod}>
                <Text style={styles.selectMethodText}>Add Promo Code</Text>
                <Ionicons name="chevron-forward" size={20} color={colors.gray} />
              </TouchableOpacity>
            </View>

            {/* Total Cost */}
            <View style={styles.totalCostContainer}>
              <Text style={styles.totalCostText}>Total Cost</Text>
              <View style={styles.totalCostAmountContainer}>
                <Text style={styles.totalCostAmount}>${totalCost}</Text>
                <Ionicons name="chevron-forward" size={20} color={colors.gray} />
              </View>
            </View>

            {/* Terms and Conditions */}
            <Text style={styles.termsText}>
              By placing an order, you agree to our Terms and Conditions
            </Text>

            {/* Place Order Button */}
            <TouchableOpacity style={styles.placeOrderButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.03,
  },
  header: {
    fontSize: width * 0.06,
    fontFamily: fonts.bold,
    textAlign: 'center',
    marginVertical: height * 0.02,
  },
  cartList: {
    flexGrow: 1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  itemImage: {
    width: width * 0.15,
    height: width * 0.15,
    resizeMode: 'contain',
  },
  itemDetails: {
    flex: 1,
    marginLeft: width * 0.03,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: width * 0.04,
    fontFamily: fonts.bold,
    textAlign: 'left',
  },
  itemSubtitle: {
    fontSize: width * 0.035,
    color: colors.gray,
    textAlign: 'left',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
    justifyContent: 'flex-start',
  },
  quantityButton: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  quantityText: {
    marginHorizontal: width * 0.04,
    fontSize: width * 0.045,
    fontFamily: fonts.bold,
  },
  itemPrice: {
    fontSize: width * 0.045,
    fontFamily: fonts.bold,
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 10,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.02,
    position: 'relative',
  },
  checkoutText: {
    fontSize: width * 0.05,
    fontFamily: fonts.regular,
    color: colors.white,
    textAlign: 'center',
  },
  checkoutPrice: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.dark_transparent,
    fontSize: width * 0.03,
    fontFamily: fonts.medium,
    color: colors.white,
    position: 'absolute',
    right: width * 0.05,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: width * 0.05,
  },
  modalHeader: {
    fontSize: width * 0.06,
    fontFamily: fonts.bold,
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  section: {
    marginBottom: height * 0.02,
  },
  sectionTitle: {
    fontSize: width * 0.04,
    fontFamily: fonts.bold,
    marginBottom: height * 0.01,
  },
  selectMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height * 0.01,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  selectMethodText: {
    fontSize: width * 0.04,
    fontFamily: fonts.regular,
    color: colors.black,
  },
  totalCostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02,
    paddingVertical: height * 0.01,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  totalCostText: {
    fontSize: width * 0.04,
    fontFamily: fonts.bold,
  },
  totalCostAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalCostAmount: {
    fontSize: width * 0.045,
    fontFamily: fonts.bold,
    marginRight: width * 0.02,
  },
  termsText: {
    fontSize: width * 0.03,
    color: colors.gray,
    textAlign: 'left',
    marginVertical: height * 0.02,
  },
  placeOrderButton: {
    backgroundColor: colors.green,
    borderRadius: 10,
    paddingVertical: height * 0.02,
    alignItems: 'center',
  },
  placeOrderText: {
    fontSize: width * 0.05,
    fontFamily: fonts.bold,
    color: colors.white,
  },
});

export default MyCart; 