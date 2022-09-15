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
    const [Tax,setTax] = useState(0);
    const [FinalAmount,setFinalAmount] = useState(0);

    const addItem = () => {
        const Id = Items.length + 1;
        setItems([...Items,{Item_Id:Id,Item_Name,Item_Price}]);
        setItemName('');
        setItemPrice(0);
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
                <TouchableOpacity onPress={() => addItem()}>
                <MaterialIcons name='add' size={30} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.ItemCardContainer}>
                <ScrollView horizontal={true}
                 showsHorizontalScrollIndicator={false}
                >
                    <View style={{flexDirection:'row-reverse'}}>
                    {
                        Items.map(Item => 
                             <ItemCard key={Item.Item_Id} id={Item.Item_Id} Name={Item.Item_Name} Price={Item.Item_Price} />
                        )
                    }
                    </View>
                       
                </ScrollView>
            </View>

            <View style={styles.getCard}>
            <AppText>Tax Information</AppText>
            <AppTextInput maxLength={255} 
            name="Tax" 
            icon="verified" 
            placeholder="Tax Price" 
            value={Tax}
            onChangeText={(e) => {
                let Amount = 0;
                Items.map(Item => {
                    Amount = parseInt(Item.Item_Price) + Amount;
                })

                setTax(e);
                let check = parseInt(e) + parseInt(Amount);
                setFinalAmount(check);
            }}
            />
            {
                FinalAmount && <AppText>Final Amount - {FinalAmount} ₹</AppText>
            }
            <AppTextInput name="Final Amount"
              placeholder="Final Amount ₹"
               icon="attach-money"
                keyboardType='numeric' 
                value={FinalAmount}
                onChangeText={(e) =>  setFinalAmount(e)}
                />
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
        marginTop:20,
    }   
})