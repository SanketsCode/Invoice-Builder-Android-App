import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import colors from "../../config/colors";
import * as ImagePicker from "expo-image-picker";
export default function ImageInput({ imageUri, onChangeImage, extra }) {
  //Permission Gallary
  const requestPermission = async () => {
    const result = await ImagePicker.getMediaLibraryPermissionsAsync();
  };

  useEffect(() => {
    requestPermission();
  }, []);

  // Click and move to gallary
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are You shure to delete this Image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "no" },
      ]);
    }
  };

  //select Image
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log(error);
      Alert.alert("Something went wrong!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={[
          styles.container,
          extra && { width: "95%", height: 200, alignSelf: "center" },
        ]}
      >
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 150,
    justifyContent: "center",
    width: 150,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
