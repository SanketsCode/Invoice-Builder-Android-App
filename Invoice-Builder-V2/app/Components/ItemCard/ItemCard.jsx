import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import defaultStyles from '../../config/styles';
import { Entypo } from '@expo/vector-icons';
import colors from '../../config/colors';

export default function ItemCard({id,Name,Price,Quantity,onPress,Final_Price}) {
  return (
    <View style={styles.card}>
     <TouchableOpacity style={{ 
        alignSelf:'flex-end',
        position:'absolute',
        marginVertical:-10,
        marginRight:-10,
        backgroundColor:colors.gray,
        padding:3,
        borderRadius:50,
        elevation:4
      }}
      onPress={onPress}
      >
     <Entypo name='cross' size={30}
      
      />
     </TouchableOpacity>
      <AppText>id - {id}</AppText>
      <AppText>Name - {Name}</AppText>
      <AppText>Price - {Price} ₹</AppText>
      <AppText>Final Amount - {Final_Price} ₹</AppText>
      <AppText>Quantity - {Quantity}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
      flex:1,
      width:'100%',
      flexDirection:'column',
      flexWrap:'wrap',
      justifyContent:'flex-start',
      alignContent:'flex-start',
        padding:10,
        borderRadius:15,
        backgroundColor:defaultStyles.colors.white,
        margin:10,
        elevation:4,
        alignItems:'flex-start',
    }
})