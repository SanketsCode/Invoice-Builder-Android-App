import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import defaultStyles from '../../config/styles';

export default function ItemCard({id,Name,Price}) {
  return (
    <View style={styles.card}>
        <AppText>id - {id}</AppText>
      <AppText>Name - {Name}</AppText>
      <AppText>Price - {Price} ₹</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
      flex:1,
      width:200,
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