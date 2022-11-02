import {  Alert, Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Templates from "../Templates/Template";
import CircleButton from "../Components/CircleButton/CircleButton";
import colors from "../config/colors";
import Toast from "react-native-root-toast";
import ActivityIndicator from "../Components/ActivityIndicator/ActivityIndicator";
import dateFormat, { masks } from "dateformat";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import Temp1 from "../Components/TemplateCodes/Temp1";



export default function PickTemplate({ route,navigation }) {
  const data = Templates.map((template, index) => ({
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
  // const [html,setHtml] = useState('');
  const { width, height } = Dimensions.get("screen");
  const ITEM_WIDTH = width * 0.76;
  const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

  const allData = route.params.allData;

  const PrintPDF = async (html) => {
    try{
      const { uri } = await Print.printToFileAsync({
        html
      });
      console.log('File has been saved to:', uri);
      await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  
  
    }catch(err){
      console.log(err);
        Alert.alert("Make shure You have Internet Connection or contact @+91 8530730017");
    }
  }

  // console.log(allData);
   const {Company_Contact,Company_address,Company_email,Company_logo,Company_name,FinalAmount,Items,Tax,color,customerAddress,customerName,customerPhone} = allData;


  const createInvoice = async (name) => {
    if(!name){
        return Toast.show("Something go Wrong",Toast.durations.SHORT);

    }

    switch (name){
        case 'Temp1':
          //  {console.log("Temp 1 is selected");}
           let newHtml = Temp1(Company_Contact,Company_address,Company_email,Company_logo,Company_name,FinalAmount,Items,Tax,color,customerAddress,customerName,customerPhone,newDate);
           await PrintPDF(newHtml);
           break;
        case 'Temp2':
          {console.log("Temp 2 is selected");}
            break;
        case 'Temp3':
          {console.log("Temp 1 is selected");}
          break;
        default:
            return Toast.show("Not Available Yet",Toast.durations.SHORT);
    }

  }

  return (
    <>
    {/* <ActivityIndicator visible={true} /> */}
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <View
              style={{ width, justifyContent: "center", alignItems: "center",paddingBottom:20 }}
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
                  backgroundColor: 'transparent',
                  width:width*1.5,
                  justifyContent:'center',
                  alignItems:'center'

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
                      width: ITEM_WIDTH ,
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
