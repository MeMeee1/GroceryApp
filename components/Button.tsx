import { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View, Dimensions } from 'react-native';
import colors from '~/components/Colors';
import fonts from './Fonts';

type ButtonProps = {
  hasIcon?: boolean;
  icon?: JSX.Element;
  title?: string;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ hasIcon = false, icon, title, ...touchableProps }, ref) => {
  const screenHeight = Dimensions.get('window').height;
  const padding = screenHeight * 0.02; // 2% of screen height

  return (
    <TouchableOpacity 
      ref={ref} 
      {...touchableProps} 
      style={[styles.button, { padding }, touchableProps.style]}
    >
      {hasIcon && icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 24,
    elevation: 5,
    flexDirection: 'row',  // Allow icon + text layout
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      height: 50,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    marginRight: 20, 
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
});