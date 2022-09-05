import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Pages/Home/Home';

const Stack = createStackNavigator();


export default function Main() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})