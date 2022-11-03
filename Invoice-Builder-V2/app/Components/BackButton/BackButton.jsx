import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import {EvilIcons} from '@expo/vector-icons';

export default function BackButton({onPress,style}) {
  return (
    <View style={[styles.button,style]} >
        <TouchableOpacity onPress={onPress}>
        <EvilIcons name="chevron-left" size={50} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        height:60,
        width:60,
        borderRadius:50,
        elevation:4,
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginLeft:10,
        alignSelf:'flex-start',
        position:'relative'
    }
})