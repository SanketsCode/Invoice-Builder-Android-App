import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Share,
} from "react-native";
import Toast from "react-native-root-toast";
import AppText from "../components/AppText/AppText";
import Card from "../components/Basic_Card/Basic_Card";
import Button from "../components/Button/Button";
import IconButton from "../components/IconButton/IconButton";
import Screen from "../components/Screen/Screen";
import useAuth from "../config/auth";
import colors from "../config/colors";

export default function HomeScreen({ navigation }) {
  const { logOut, companyData } = useAuth();

  const ShareApp = async () => {
    await Share.share({
      message:
        "https://play.google.com/store/apps/details?id=in.codemock.invoice_builder",
    });
  };

  const IconTextButton = ({ onPress, iconName, text, nameofVector }) => {
    return (
      <View style={styles.TextButton}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.iconButton}>
            {nameofVector === "Ionicons" && (
              <Ionicons color={colors.black} name={iconName} size={40} />
            )}
            {nameofVector === "EvilIcons" && (
              <EvilIcons color={colors.black} name={iconName} size={40} />
            )}
            {nameofVector === "AntDesign" && (
              <AntDesign color={colors.black} name={iconName} size={30} />
            )}
          </View>
        </TouchableOpacity>
        <AppText>{text}</AppText>
      </View>
    );
  };

  const {
    Company_Contact,
    Company_name,
    Company_email,
    Company_address,
    Company_logo,
  } = JSON.parse(companyData);
  // console.log(Company_logo);
  return (
    <Screen>
      <View style={styles.container}>
        <IconButton name="addfile" title="Create Your Invoice" size={40} />
        <Card>
          <AppText style={styles.MainText}>Logo</AppText>
          <View style={styles.ImgContainer}>
            <Image
              style={styles.image}
              source={{
                uri: Company_logo,
              }}
            />
          </View>
          <AppText>Company Name - {Company_name}</AppText>
          <AppText>Company Contact - {Company_Contact}</AppText>
          <AppText>Company Address - {Company_address}</AppText>
        </Card>

        <Card>
          <View style={styles.ButtonContainer}>
            <IconTextButton
              onPress={() => navigation.push("getInvoiceData")}
              iconName="create-outline"
              text="Create Invoice"
              nameofVector="Ionicons"
            />
            <IconTextButton
              onPress={() => navigation.push("feedback")}
              iconName="comment"
              text="Give Feedback"
              nameofVector="EvilIcons"
            />
            <IconTextButton
              onPress={() => ShareApp()}
              iconName="sharealt"
              text="Share App"
              nameofVector="AntDesign"
            />
            <IconTextButton
              onPress={() => Toast.show("Coming Soon")}
              iconName="profile"
              text="Invoice List"
              nameofVector="AntDesign"
            />
          </View>
        </Card>
        <Button title="Log Out" onPress={() => logOut()} />
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
    height: 170,
    width: 170,
    borderRadius: 100,
    elevation: 4,
    marginBottom: 10,
  },
  ImgContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
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
