import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import Button from '../Components/Button/Button'
import useAuth from '../config/auth';
import Screen from '../Components/Screen/Screen';
import Card from '../Components/Basic_Card/Card';
import AppText from '../Components/AppText/AppText';
import IconButton from '../Components/IconButton/IconButton';

export default function HomeScreen() {
  const {logOut,companyData} = useAuth();
  const {Company_Contact,Company_stamp,Company_name,Company_email,Company_address,Company_logo,Owner_Signature} = JSON.parse(companyData);
 
  // console.log(companyData);
  return (
    <Screen>
      
      <View style={styles.container}>
      <IconButton name="addfile" size={40} />
      <Card>
        <AppText style={styles.MainText}>
          COMPANY DETAILS
        </AppText>
        <AppText>
          Company Name - {Company_name}
        </AppText>
        <AppText>
          Company Contact - {Company_Contact}
        </AppText>
        <AppText>
          Company Address - {Company_address}
        </AppText>
      </Card>
      <Card>
      <AppText style={styles.MainText}>
          Signature & Stamp
        </AppText>
      <View style={styles.ImgContainer}>
      <Image
        style={styles.image}
        source={{
          uri: Owner_Signature,
        }}
      />

    <Image
        style={styles.image}
        source={{
          uri: Company_stamp,
        }}
      />
      </View>
      

       
      </Card>
      <Button title="Log out" onPress={() => {
        logOut();
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
  },
  image:{
    height:150,
    width:170,
    borderRadius:10,
    elevation:4
  },

  ImgContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})