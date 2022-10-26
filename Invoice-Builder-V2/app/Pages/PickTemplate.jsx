import {  Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Templates from "../Templates/Template";
import CircleButton from "../Components/CircleButton/CircleButton";
import colors from "../config/colors";
import Toast from "react-native-root-toast";
import ActivityIndicator from "../Components/ActivityIndicator/ActivityIndicator";

export default function PickTemplate({ route,navigation }) {
  const data = Templates.map((template, index) => ({
    key: template.key,
    photo: template.img,
  }));

  const { width, height } = Dimensions.get("screen");
  const ITEM_WIDTH = width * 0.76;
  const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

  const allData = route.params.allData;



  const createInvoice = (name) => {
    if(!name){
        return Toast.show("Something go Wrong",Toast.durations.SHORT);

    }

    switch (name){
        case 'Temp1':
            break;
        case 'Temp2':
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
