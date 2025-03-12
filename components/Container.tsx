import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import fonts from './Fonts';
import colors from './Colors';

interface ContainerProps {
  enableBackground?: boolean;
  children: React.ReactNode;
  enablecustomTitle?: boolean;
  title?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  enablecustomTitle,
  title,
  enableBackground,
}) => {
  const containerStyle = [
    styles.container,
    enableBackground && { backgroundColor: colors.white }, // Conditional style
  ];

  return (
    <SafeAreaView style={containerStyle}>
      {/* Title */}
      {enablecustomTitle && title && (
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.bottomLine} />
        </View>
      )}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: fonts.bold,
    textAlign: 'center',
  },
  bottomLine: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});