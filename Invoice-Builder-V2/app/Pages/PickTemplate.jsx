import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import AppText from "../components/AppText/AppText";
import Screen from "../components/Screen/Screen";
import ActivityIndicator from "../components/ActivityIndicator/Activityindicator";
import Template from "../Templates/Template";
import dateFormat from "dateformat";
import CircleButton from "../components/CircleButton/CircleButton";
import * as Print from "expo-print";
import Toast from "react-native-root-toast";
import Temp1 from "../components/TemplateCodes/Temp1";
import Temp2 from "../components/TemplateCodes/Temp2";
import Temp3 from "../components/TemplateCodes/Temp3";
import { shareAsync } from "expo-sharing";

export default function PickTemplate({ route }) {
  const [loading, setLoading] = useState(false);
  const data = Template.map((template, index) => ({
    key: template.key,
    photo: template.img,
  }));

  function GetTime(date) {
    var hours = parseInt(dateFormat(date, "hh"));
    var minutes = parseInt(dateFormat(date, "MM"));
    var ampm = hours >= 12 ? "AM" : "PM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  const newDate = GetTime(new Date());

  const { width, height } = Dimensions.get("screen");
  const ITEM_WIDTH = width * 0.76;
  const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

  const allData = route.params.allData;
  const {
    Company_Contact,
    Company_address,
    Company_email,
    Company_logo,
    Company_name,
    FinalAmount,
    Items,
    Tax,
    color,
    customerAddress,
    customerName,
    customerPhone,
  } = allData;

  const PrintPDF = async (html) => {
    try {
      const { uri } = await Print.printToFileAsync({
        html,
      });
      console.log("File has been saved to:", uri);
      await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
    } catch (err) {
      console.log(err);
    }
  };
  const createInvoice = async (name) => {
    setLoading(true);
    if (!name) {
      setLoading(false);
      return Toast.show("Something go Wrong", Toast.durations.SHORT);
    }
    let newHtml;
    switch (name) {
      case "Temp1":
        //  {console.log("Temp 1 is selected");}
        newHtml = Temp1(
          Company_Contact,
          Company_address,
          Company_email,
          Company_logo,
          Company_name,
          FinalAmount,
          Items,
          Tax,
          color,
          customerAddress,
          customerName,
          customerPhone,
          newDate
        );
        await PrintPDF(newHtml);
        break;
      case "Temp2":
        // {console.log("Temp 2 is selected");}
        newHtml = Temp2(
          Company_Contact,
          Company_address,
          Company_email,
          Company_logo,
          Company_name,
          FinalAmount,
          Items,
          Tax,
          color,
          customerAddress,
          customerName,
          customerPhone,
          newDate
        );
        await PrintPDF(newHtml);
        break;
      case "Temp3":
        // {console.log("Temp 1 is selected");}
        newHtml = Temp3(
          Company_Contact,
          Company_address,
          Company_email,
          Company_logo,
          Company_name,
          FinalAmount,
          Items,
          Tax,
          color,
          customerAddress,
          customerName,
          customerPhone,
          newDate
        );
        await PrintPDF(newHtml);
        break;
      default:
        setLoading(false);
        return Toast.show("Not Available Yet", Toast.durations.SHORT);
    }
    setLoading(false);
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 20,
                }}
              >
                <View
                  style={{
                    borderRadius: 18,
                    shadowColor: "#000",
                    shadowOpacity: 1,
                    shadowRadius: 20,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    borderRadius: 18,
                    padding: 12,
                    backgroundColor: "transparent",
                    width: width * 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                      overflow: "hidden",
                      alignItems: "center",
                      borderRadius: 18,
                    }}
                  >
                    <Image
                      source={item.photo}
                      style={{
                        width: ITEM_WIDTH,
                        height: ITEM_HEIGHT,
                        resizeMode: "contain",
                      }}
                    />
                  </View>
                </View>

                <CircleButton onPress={() => createInvoice(item.key)} />
              </View>
            );
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
