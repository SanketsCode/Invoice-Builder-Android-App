import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import defaultStyles from '../../config/styles';

export default function ItemCard({key,Name,Price}) {
  return (
    <View style={styles.card}>
        <AppText>id - 1</AppText>
      <AppText>Name - Product 1</AppText>
      <AppText>Price - 200</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        height:100,
        width:200,
        padding:10,
        borderRadius:15,
        backgroundColor:defaultStyles.colors.white,
        margin:10,
        elevation:4,
        alignItems:'center'
    }
})