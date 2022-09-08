import { ScrollView, StyleSheet, Text, TouchableNativeFeedback,TouchableNativeFeedbackBase, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup";
import { Form, FormField, FormImagePicker, SubmitButton } from '../Components/Forms';
import Screen from '../Components/Screen/Screen';
import AppText from '../Components/AppText/AppText';
import { MaterialIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppTextInput from '../Components/TextInput/TextInput';
import ItemCard from '../Components/ItemCard/ItemCard';


export default function InvoiceData() {
    const [Items,setItems] = useState([]);
    const [Item_Name,setItemName] = useState('');
    const [Item_Price,setItemPrice]= useState(0);

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(Item_Name,Item_Price);
    }
  return (
   <Screen style={styles.container}>
        
           
            <View style={styles.getCard}>
            <AppText>Product Details</AppText>
            <AppTextInput maxLength={255} 
            name="Item_Name" 
            icon="supervised-user-circle" 
            placeholder="Item Name" 
            value={Item_Name}
            onChangeText={(e) =>  setItemName(e)}
            />
            <AppTextInput name="Item_Price"
              placeholder="Item Price"
               icon="attach-money"
                keyboardType='numeric' 
                value={Item_Price}
                onChangeText={(e) =>  setItemPrice(e)}
                />
            </View>
            
            <View style={styles.iconButton}>
                <TouchableOpacity>
                <MaterialIcons name='add' size={30} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.ItemCardContainer}>
                <ScrollView horizontal>
                       <ItemCard /> 
                       <ItemCard />
                       <ItemCard />
                </ScrollView>
            </View>
          
   </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:defaultStyles.colors.gray
    },
    getCard:{
        padding:10,
        borderRadius:15,
        backgroundColor:defaultStyles.colors.white,
        margin:10,
        elevation:10,
        alignItems:'center' 
        
    },
    icon:{
        height:'100%',
        width:'100%'
    },
    iconButton:{
        height:50,
        width:50,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:defaultStyles.colors.white,
        padding:10,
        elevation:10,
        borderRadius:30,
        alignSelf:'center'
        
    },
    ItemCardContainer:{
        marginTop:20
    }   
})