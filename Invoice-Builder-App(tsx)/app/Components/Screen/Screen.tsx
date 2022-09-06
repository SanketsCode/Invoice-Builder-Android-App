import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

interface AuxProps {
    children : React.ReactNode
}

export default function Screen({children}:AuxProps) {
  return (
    <View style={[styles.screen]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        flex:1,
        paddingLeft:10,
        paddingRight:10
    }
})