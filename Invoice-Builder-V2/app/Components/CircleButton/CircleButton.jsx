import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {EvilIcons} from 'react-native-vector-icons'
import colors from '../../config/colors'
export default function CircleButton({onPress}) {
  return (
    <View style={styles.button}>
        <TouchableOpacity onPress={onPress}>
        <EvilIcons name="chevron-right" size={50} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        height:50,
        width:50,
        borderRadius:50,
        elevation:4,
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    }
})