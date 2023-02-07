import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppText from "../components/AppText/AppText";
import Card from "../components/Basic_Card/Basic_Card";
import IconButton from "../components/IconButton/IconButton";
import ItemCard from "../components/ItemCard/ItemCard";
import Screen from "../components/Screen/Screen";
import AppTextInput from "../components/TextInput/TextInput";
import useAuth from "../config/auth";
import colors from "../config/colors";
export default function CreateInvoice({ route, navigation }) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const { companyData } = useAuth();

  const {
    Company_Contact,
    Company_name,
    Company_email,
    Company_address,
    Company_logo,
  } = JSON.parse(companyData);

  const { Items, color, Tax, FinalAmount } = route.params.InvoiceData;

  const HandleSubmit = () => {
    if (!customerAddress || !customerName || !customerPhone) {
      return Toast.show("Fill Customer Details", Toast.durations.SHORT);
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
      FinalAmount,
    };

    navigation.push("PickTemplate", { allData });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <IconButton title="Check Your Details" name="edit" size={40} />
        <View style={styles.ItemCardContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row-reverse" }}>
              {Items.map((Item, i) => (
                <ItemCard
                  cross={false}
                  key={i + 1}
                  id={i + 1}
                  Name={Item.Item_Name}
                  Price={Item.Item_Price}
                  Final_Price={Item.Final_Price}
                  Quantity={Item.Item_Quantity}
                  onPress={() => RemoveItem(Item)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        <Card>
          <AppText style={{ textAlign: "center" }}>Bill Details</AppText>
          <AppText>Tax - {Tax}</AppText>
          <AppText>Final Amount - {FinalAmount} ₹</AppText>
        </Card>

        <Card>
          <AppText style={{ textAlign: "center" }}>Company Details</AppText>
          <AppText>Name - {Company_name}</AppText>
          <AppText>Email - {Company_email}</AppText>
          <AppText>Phone no - {Company_Contact}</AppText>
          <AppText>address - {Company_address}</AppText>
        </Card>

        <Card>
          <AppText style={{ textAlign: "center" }}>Customer Details</AppText>
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
        </Card>
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
  ItemCardContainer: {
    marginTop: 20,
  },
  container: {
    padding: 10,
  },
  button: {
    padding: 10,
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    elevation: 4,
  },
});
