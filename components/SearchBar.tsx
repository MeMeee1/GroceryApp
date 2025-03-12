import React, { forwardRef } from 'react';  
import {   
    TouchableWithoutFeedback,  
    Keyboard,  
    TextInput,  
    StyleSheet,  
    View   
} from 'react-native';  
import colors from '~/components/Colors';  
import { Ionicons } from "@expo/vector-icons";  


export const SearchBar = () => {  
  return (  
    <View style={styles.container}>  
      <Ionicons name="search" size={24} color={colors.black} style={styles.icon} />  
      <TextInput  
    
        style={styles.input}  
        placeholder="Search"  
        placeholderTextColor={colors.gray} 
  
      />  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flexDirection: 'row',  
    alignItems: 'center',  
    backgroundColor: colors.lightGray,  
    borderRadius: 9,  
    paddingHorizontal: 10,  
    marginBottom:15
    
  },  
  icon: {  
    marginRight: 10,  
  },  
  input: {  
    flex: 1,  
    height: 50,  
    padding: 10,  
    fontSize: 16,  
    color: colors.black,  
  },  
});  