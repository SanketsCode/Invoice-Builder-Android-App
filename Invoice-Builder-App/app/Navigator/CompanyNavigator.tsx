import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CreateCompany from '../Pages/CreateCompany/CreateCompany';
// import Home from '../Pages/Home/Home';

const Stack = createStackNavigator();


export function CompanyNavigator(){
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="CreateCompany" component={CreateCompany} />
    </Stack.Navigator>
  )
}
