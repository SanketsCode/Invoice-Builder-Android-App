import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import defaultStyles from '../../config/styles';

export default function Card({children}) {

  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        borderRadius:15,
        backgroundColor:defaultStyles.colors.white,
        elevation:10
    }
})