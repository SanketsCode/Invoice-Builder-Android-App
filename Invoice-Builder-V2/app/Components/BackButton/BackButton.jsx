import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../config/colors";
import defaultStyle from "../../config/styles";

export default function BackButton({ onPress, style }) {
  return (
    <View style={[styles.button, defaultStyle.background, style]}>
      <TouchableOpacity onPress={onPress}>
        <EvilIcons name="chevron-left" size={50} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 60,
    borderRadius: 50,
    elevation: 4,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
    alignSelf: "flex-start",
    position: "relative",
  },
});
