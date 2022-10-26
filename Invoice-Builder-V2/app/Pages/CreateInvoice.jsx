import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Screen from "../Components/Screen/Screen";
import Card from "../Components/Basic_Card/Card";
import AppText from "../Components/AppText/AppText";
import colors from "../config/colors";
import IconButton from "../Components/IconButton/IconButton";
import AppTextInput from "../Components/TextInput/TextInput";
import { AntDesign } from "@expo/vector-icons";
import Toast from "react-native-root-toast";

export default function CreateInvoice({ route,navigation }) {
    const [customerName,setCustomerName] = useState('');
    const [customerPhone,setCustomerPhone] = useState('');
    const [customerAddress,setCustomerAddress] = useState('');
  const { companyData } = useAuth();
  const {
    Company_Contact,
    Company_name,
    Company_email,
    Company_address,
    Company_logo
  } = JSON.parse(companyData);

  const { Items, color, Tax, FinalAmount } = route.params.InvoiceData;

 

  const HandleSubmit = () => {
    if(!customerAddress || !customerName || !customerName){
      return Toast.show("Fill Customer Details",Toast.durations.SHORT);
    }
    const allData = {
      customerName,
      customerAddress,
      customerPhone,
      Company_Contact,
      Company_name,
      Company_email,
      Company_address,
      Company_logo,
      Items,
      color,
      Tax,
      FinalAmount
    }

    navigation.push("PickTemplate",{
      allData
    });

  }

  return (
    <Screen>
      <View style={styles.container}>
        <IconButton title="Check Your Details" name="edit" size={40} />
        <View style={styles.ItemCardContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Items.map((item, i) => {
              
              const { Item_Name, Item_Price, Item_Quantity, Final_Price } =
                item;
                // setNewFinalAmount(newFinalAmount + parseInt(Item_Price));
              return (
                <View key={i + 1} style={styles.ItemCard}>
                  <AppText>id - {i + 1}</AppText>
                  <AppText>Name - {Item_Name}</AppText>
                  <AppText>Price - {Item_Price} ₹</AppText>
                  <AppText>Final Amount - {Final_Price} ₹</AppText>
                  <AppText>Quantity - {Item_Quantity}</AppText>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <Card>
          <AppText style={{ textAlign: "center" }}>Bill Details</AppText>
          <AppText>Tax - {Tax} ₹</AppText>
          <AppText>Final Amount - {FinalAmount} ₹</AppText>
        </Card>
     
        <Card>
          <AppText style={{ textAlign: "center" }}>Company Details</AppText>
          <AppText>Name - {Company_name}</AppText>
          <AppText>Email - {Company_email}</AppText>
          <AppText>Phone no - {Company_Contact}</AppText>
          <AppText>address - {Company_address}</AppText>
        </Card>
    
        <View style={styles.getCard}>
          <AppText>Customer Details</AppText>
          <AppTextInput
            name="Customer Name"
            icon="supervised-user-circle"
            placeholder="Customer Name"
            value={customerName}
            onChangeText={(e) => setCustomerName(e)}
          />
          <AppTextInput
            name="Customer Contact"
            placeholder="Customer Contact"
            icon="phone"
            keyboardType="numeric"
            value={customerPhone}
            onChangeText={(e) => setCustomerPhone(e)}
          />
          <AppTextInput
            name="Customer Address"
            placeholder="Customer Address"
            icon="event-note"
            value={customerAddress}
            onChangeText={(e) => setCustomerAddress(e)}
          />
        </View>
            <TouchableOpacity onPress={() => HandleSubmit()}>
            <View style={styles.button}>
                <AntDesign name="arrowright" size={30} />
            </View>
            </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  ItemCard: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 10,
    elevation: 4,
    alignItems: "flex-start",
  },
  ItemCardContainer: {
    marginTop: 20,
  },
  getCard: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 10,
    elevation: 10,
    alignItems: "center",
  },
  button:{
    padding:10,
    justifyContent:'center',
    backgroundColor:colors.white,
    borderRadius:50,
    alignSelf:'center',
    alignItems:'center',
    elevation:4
  }
});
