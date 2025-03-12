import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons, AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import colors from "~/components/Colors";
import fonts from "~/components/Fonts";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
const { width, height } = Dimensions.get("window");

const Account = () => {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: "https://picsum.photos/seed/picsum/200" }} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>Afsar Hossen{' '}
          <TouchableOpacity>
            <SimpleLineIcons name="pencil" size={15} color={colors.green} />
            </TouchableOpacity>
          </Text>
          <Text style={styles.profileEmail}>lmshuvo97@gmail.com</Text>
        </View>
      </View>

      {/* Menu Items */}
      <ScrollView contentContainerStyle={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <item.icon name={item.iconName} size={item.size} color={colors.black} />
            <Text style={styles.menuText}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={18} color={colors.black} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => console.log("Logout pressed")}>
        <Ionicons name="log-out-outline" size={20} color={colors.green} style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

// Menu items with icons
const menuItems = [
  { label: "Orders", icon: Feather, iconName: "shopping-bag", size: 20 },
  { label: "My Details", icon: FontAwesome, iconName: "address-card-o", size: 20 },
  { label: "Delivery Address", icon: Ionicons, iconName: "location-outline", size: 23 },
  { label: "Payment Methods", icon: FontAwesome5, iconName: "credit-card", size: 18 },
  { label: "Promo Code", icon: Ionicons, iconName: "ticket-outline", size: 23 },
  { label: "Notifications", icon: Ionicons, iconName: "notifications-outline", size: 24 },
  { label: "Help", icon: AntDesign, iconName: "questioncircleo", size: 20 },
  { label: "About", icon: AntDesign, iconName: "exclamationcircleo", size: 20 },
];

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: width * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  profileImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: width * 0.05,
    fontFamily: fonts.bold,
  },
  profileEmail: {
    fontSize: width * 0.035,
    color: colors.gray,
    fontFamily: fonts.light,
  },
  menuContainer: {
    flexGrow: 1,
    paddingBottom: height * 0.08,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  menuText: {
    flex: 1,
    fontSize: width * 0.045,
    marginLeft: 10,
    fontFamily: fonts.medium,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center the text
    padding: height * 0.02,
    backgroundColor: colors.light_gray_transparent,
    borderRadius: 10,
    position: "absolute",
    bottom: height * 0.02,
    left: width * 0.05,
    right: width * 0.05,
  },
  logoutIcon: {
    position: "absolute", // Position the icon absolutely
    left: width * 0.05, // Align the icon to the left
  },
  logoutText: {
    fontSize: width * 0.045,
    color: colors.green,
    fontFamily: fonts.medium,
  },
});

export default Account;