import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../config/colors";
import defaultStyle from "../../config/styles";

export default function CircleButton({ onPress }) {
  return (
    <View style={[defaultStyle.background, styles.button]}>
      <TouchableOpacity onPress={onPress}>
        <EvilIcons name="check" size={40} />
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
  },
});
