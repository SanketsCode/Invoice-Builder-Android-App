import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Button from "../Components/Button/Button";
import useAuth from "../config/auth";
import Screen from "../Components/Screen/Screen";
import Card from "../Components/Basic_Card/Card";
import AppText from "../Components/AppText/AppText";
import IconButton from "../Components/IconButton/IconButton";
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function HomeScreen({ navigation }) {
  const { logOut, companyData } = useAuth();
  const {
    Company_Contact,
    Company_stamp,
    Company_name,
    Company_email,
    Company_address,
    Company_logo,
    Owner_Signature,
  } = JSON.parse(companyData);

  // console.log(companyData);
  return (
    <Screen>
      <View style={styles.container}>
        <IconButton name="addfile" size={40} />
        <Card>
          <AppText style={styles.MainText}>COMPANY DETAILS</AppText>
          <AppText>Company Name - {Company_name}</AppText>
          <AppText>Company Contact - {Company_Contact}</AppText>
          <AppText>Company Address - {Company_address}</AppText>
        </Card>
        <Card>
          <AppText style={styles.MainText}>Signature & Stamp</AppText>
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
        <Card>
          <View style={styles.ButtonContainer}>
            <View style={styles.TextButton}>
              <TouchableOpacity
                onPress={() => navigation.push("getInvoiceData")}
              >
                <View style={styles.iconButton}>
                  <Ionicons
                    color={colors.black}
                    name="create-outline"
                    size={40}
                  />
                </View>
              </TouchableOpacity>
              <AppText>Create Invoice</AppText>
            </View>

            <View style={styles.TextButton}>
              <TouchableOpacity>
                <View style={styles.iconButton}>
                  <EvilIcons color={colors.black} name="comment" size={40} />
                </View>
              </TouchableOpacity>

              <AppText>Give Feedback</AppText>
            </View>

            <View style={styles.TextButton}>
              <TouchableOpacity>
                <View style={styles.iconButton}>
                  <AntDesign color={colors.black} name="sharealt" size={30} />
                </View>
              </TouchableOpacity>
              <AppText>Share App</AppText>
            </View>

            <View style={styles.TextButton}>
              <TouchableOpacity>
                <View style={styles.iconButton}>
                  <AntDesign color={colors.black} name="profile" size={30} />
                </View>
              </TouchableOpacity>
              <AppText>Invoice List</AppText>
            </View>
          </View>
        </Card>

        <Button
          title="Log out"
          onPress={() => {
            logOut();
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  MainText: {
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    height: 150,
    width: 170,
    borderRadius: 10,
    elevation: 4,
  },

  ImgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ButtonContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  iconButton: {
    padding: 10,
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    elevation: 10,
    borderRadius: 50,
  },
  TextButton: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
