import { StyleSheet, Text, View, TouchableWithoutFeedback,Image } from "react-native";
import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../config/colors";

interface ImageGets {
  imageUri: string;
  onChangeImage: () => void;
}

export default function ImageInput({ imageUri, onChangeImage }: ImageGets) {
  const requestPermission = async () => {
    const result = await ImagePicker.getMediaLibraryPermissionsAsync();
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return <TouchableWithoutFeedback>
        <View style={styles.container}>
                {
                    !imageUri && (
                        <MaterialCommunityIcons name='camera' color={colors.medium} />
                    )
                }
                {
                    imageUri && <Image source={{uri:imageUri}} style={styles.image}/>
                }
        </View>

  </TouchableWithoutFeedback>;
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor:colors.light,
    borderRadius:15,
    height:100,
    justifyContent:'center',
    width:100,
    overflow:"hidden"
},
image:{
    width:'100%',
    height:'100%'
}
});
