import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Components/Button/Button'
import useAuth from '../config/auth';
import Screen from '../Components/Screen/Screen';
import Card from '../Components/Basic_Card/Card';
import AppText from '../Components/AppText/AppText';

export default function HomeScreen() {
  const {logOut,companyData} = useAuth();
  const {Company_Contact,Company_name} = JSON.parse(companyData);
  // console.log(companyData);
  return (
    <Screen>
      <View style={styles.container}>
      <Card>
        <AppText style={styles.MainText}>
          COMPANY DETAILS
        </AppText>
        <AppText>
          COMPANY NAME - {Company_name}
        </AppText>
        <AppText>
          COMPANY Contact - {companyData["Company_Contact"]}
        </AppText>
      </Card>
      <Button title="Log out" onPress={() => {
        AuthStore.removeData();
      }} />
    </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10
  },
  MainText:{
    fontSize:20,
    textAlign:'center',
    fontFamily:'Monst'
  }
})