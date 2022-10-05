import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PickYourInvoice() {
  return (
    <View style={styles.container}>
      <Text>PickYourInvoice</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})