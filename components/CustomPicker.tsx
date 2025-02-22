import React, { useState } from "react";  
import {   
  View,   
  Text,   
  TouchableOpacity,   
  Modal,   
  FlatList,   
  StyleSheet   
} from "react-native";  
import { Ionicons } from "@expo/vector-icons"; // For dropdown arrow  
import { useFonts } from "expo-font";
interface CustomPickerProps {  
  value: string;  
  onValueChange: (value: string) => void;  
  options: string[];  
}  

const CustomPicker: React.FC<CustomPickerProps> = ({ value, onValueChange, options }) => {  
  const [modalVisible, setModalVisible] = useState(false);  

  return (  
    <View style={styles.container}>  
      {/* Selected Value */}  
      <TouchableOpacity style={styles.picker} onPress={() => setModalVisible(true)}>  
        <Text style={styles.text}>{value || "Select an option"}</Text>  
        <Ionicons name="chevron-down" size={20} color="gray" />  
      </TouchableOpacity>  

      {/* Dropdown Modal */}  
      <Modal visible={modalVisible} transparent animationType="fade">  
        <TouchableOpacity  
          style={styles.overlay}  
          activeOpacity={1}  
          onPress={() => setModalVisible(false)}  
        >  
          <View style={styles.dropdown}>  
            <FlatList  
              data={options}  
              keyExtractor={(item) => item}  
              renderItem={({ item }) => (  
                <TouchableOpacity  
                  style={styles.option}  
                  onPress={() => {  
                    onValueChange(item);  
                    setModalVisible(false);  
                  }}  
                >  
                  <Text style={styles.optionText}>{item}</Text>  
                </TouchableOpacity>  
              )}  
            />  
          </View>  
        </TouchableOpacity>  
      </Modal>  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    width: "90%",  
    marginBottom: 15,  
  },  
  picker: {  
    flexDirection: "row",  
    justifyContent: "space-between",  
    alignItems: "center",  
  
    borderRadius: 10,  
    paddingVertical: 12,  
    paddingHorizontal: 15,  
    borderWidth: 1,  
    borderTopWidth: 0, // This removes the top border line  
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomColor: "#E0E0E0",  
  },  
  text: {  
    fontSize: 16,  
    color: "#333",  
  },  
  overlay: {  
    flex: 1,  
    justifyContent: "center",  
    alignItems: "center",  
    backgroundColor: "rgba(0,0,0,0.3)",  
  },  
  dropdown: {  
    width: "80%",  
    backgroundColor: "white",  
    borderRadius: 10,  
    paddingVertical: 10,  
    shadowColor: "#000",  
    shadowOpacity: 0.1,  
    shadowRadius: 4,  
    elevation: 5,  
  },  
  option: {  
    paddingVertical: 12,  
    paddingHorizontal: 15,  
  },  
  optionText: {  
    fontSize: 16,  
    color: "#333",   
  },  
});  

export default CustomPicker;