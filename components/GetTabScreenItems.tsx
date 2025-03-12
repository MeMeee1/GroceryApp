import { Image, ImageSourcePropType, useWindowDimensions } from 'react-native';

// Define a type for the route names
export type RouteName = 'index' | 'explore' | 'cart' | 'favorite' | 'account';

// Function to get the tab bar icon
export const getTabBarIcon = (
  routeName: RouteName,
  focused: boolean
): JSX.Element => {
  const { width } = useWindowDimensions(); // Get the current screen width

  // Define icon sizes relative to screen width
  const iconSizes: Record<RouteName, { width: number; height: number }> = {
    index: { width: width * 0.05, height: width * 0.05 }, // 5% of screen width
    explore: { width: width * 0.06, height: width * 0.04 }, // 6% of screen width
    cart: { width: width * 0.045, height: width * 0.045 }, // 4.5% of screen width
    favorite: { width: width * 0.05, height: width * 0.05 }, // 5% of screen width
    account: { width: width * 0.06, height: width * 0.06 }, // 6% of screen width
  };

  let iconName: ImageSourcePropType;

  switch (routeName) {
    case 'index':
      iconName = focused
        ? require('~/assets/icons/active_shop.png')
        : require('~/assets/icons/inactive_shop.png');
      break;
    case 'explore':
      iconName = focused
        ? require('~/assets/icons/active_explore.png')
        : require('~/assets/icons/inactive_explore.png');
      break;
    case 'cart':
      iconName = focused
        ? require('~/assets/icons/active_cart.png')
        : require('~/assets/icons/inactive_cart.png');
      break;
    case 'favorite':
      iconName = focused
        ? require('~/assets/icons/active_favorite.png')
        : require('~/assets/icons/inactive_favorite.png');
      break;
    case 'account':
      iconName = focused
        ? require('~/assets/icons/active_account.png')
        : require('~/assets/icons/inactive_account.png');
      break;
    default:
      iconName = require('~/assets/icons/active_shop.png'); // Fallback icon
      break;
  }

  // Get the custom size for the current route, with a fallback
  const size = iconSizes[routeName] || { width: width * 0.06, height: width * 0.06 };

  return (
    <Image
      source={iconName}
      style={{ width: size.width, height: size.height }}
      resizeMode="contain"
    />
  );
};

// Function to get the tab bar label
export const getTabBarLabel = (routeName: RouteName): string => {
  switch (routeName) {
    case 'index':
      return 'Shop';
    case 'explore':
      return 'Explore';
    case 'cart':
      return 'Cart';
    case 'favorite':
      return 'Favorite';
    case 'account':
      return 'Account';
   
  }
};

// Function to set header title
export const getHeaderTitle = (routeName: RouteName): string => {
  switch (routeName) {
    case 'index':
      return 'Shop';
    case 'explore':
      return 'Find Products';
    case 'cart':
      return 'My Cart';
    case 'favorite':
      return 'Favorite';
    case 'account':
      return 'Account';
   
  }
};

// Function to enable/disable tab header
export const enableTabHeader = (routeName: RouteName): boolean => {
  switch (routeName) {
    case 'cart':
      return true;
    case 'favorite':
      return true;
    default:
      return false;
  }
};