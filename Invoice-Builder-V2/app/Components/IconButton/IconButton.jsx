import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";

export default function IconButton({ name, size, title }) {
  return (
    <View>
      <View style={styles.iconButton}>
        <AntDesign color={colors.black} name={name} size={size} />
      </View>
      <View style={styles.container}>
        <AppText style={styles.text}>{title}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: colors.white,
    marginBottom: 10,
    borderRadius: 50,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    textAlignVertical: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  iconButton: {
    padding: 10,
    position: "absolute",
    zIndex: 1,
    backgroundColor: colors.white,
    elevation: 10,
    borderRadius: 50,
    marginTop: -5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    display: "flex",
    textAlignVertical: "center",
  },
});
