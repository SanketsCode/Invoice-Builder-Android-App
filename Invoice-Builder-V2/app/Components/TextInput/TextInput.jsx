import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons'
import defaultStyle from '../../config/styles';

export default function AppTextInput({icon,width="95%",onChangeText,...otherProps}) {
  return (
    <View style={[styles.container,{width}]}>
        {icon && <MaterialIcons
        name={icon}
        size={20} color={defaultStyle.colors.medium}
        style={styles.icon}
        /> }

        <TextInput 
        placeholderTextColor={defaultStyle.colors.medium}
       onChangeText={onChangeText}
        style={[defaultStyle.text,{width:"100%"}]} {...otherProps}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    container :{
      alignSelf:'center',
        backgroundColor : defaultStyle.colors.light,
        borderRadius:15,
        flexDirection : "row",
        padding:15,
        marginVertical:10,
        elevation:4
    },
    icon:{
        marginRight:10,
        paddingTop:5
    }
})