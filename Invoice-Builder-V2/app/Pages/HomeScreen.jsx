import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Components/Button/Button'
import AuthStore from '../config/storage';

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Log out" onPress={() => {
        AuthStore.removeData();
      }} />
    </View>
  )
}

const styles = StyleSheet.create({})