import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {EvilIcons} from 'react-native-vector-icons'
import colors from '../../config/colors'
export default function CircleButton({onPress}) {
  return (
    <View style={styles.button}>
        <TouchableOpacity onPress={onPress}>
        <EvilIcons name="check" size={40} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        height:60,
        width:60,
        borderRadius:60,
        elevation:4,
        backgroundColor:colors.white,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    }
})