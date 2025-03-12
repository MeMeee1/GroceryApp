import React, { forwardRef } from 'react';  
import {   
    StyleSheet,  
    TouchableOpacity,
    View,
    Image,
    Text,
    TextInput
} from 'react-native';  
import fonts from './Fonts';
import colors from '~/components/Colors';  
import { router } from 'expo-router';

type ProductCategoryProps = {  
  hasPrice?: boolean;  
  icon?: JSX.Element;  
  title?: string;  
  imageUrl?: string; 
  color?: string;
  borderColor?:string;
};  

export const ProductCategory = forwardRef<TextInput, ProductCategoryProps>(({ borderColor = colors.custom_dark_blue,hasPrice = false, title, imageUrl, color = colors.lightGray, ...props }, ref) => {  
  return (  
    <View style={[styles.container,{backgroundColor: color,  borderColor:borderColor }]}>  
      <TouchableOpacity style={styles.touchable} onPress={()=>router.push({pathname:'/product_category_details',params:{title:title}})}>
        {imageUrl && (
          <Image 
            source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl} 
            style={styles.image} resizeMode={"contain"}
          />
        )}
        <Text style={styles.title}>{title}</Text>
        
      </TouchableOpacity>
    </View>  
  );  
});  

const styles = StyleSheet.create({  
  container: {  
     
    borderWidth:0.1,
  
    borderRadius: 9,  
    paddingHorizontal: 10,  
    paddingVertical: 50,  
  
    
  },  
  touchable: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height:100,
  //borderRadius: 25,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    color: colors.black, 
    fontFamily:fonts.bold,
   textAlign:"center",
  },
});