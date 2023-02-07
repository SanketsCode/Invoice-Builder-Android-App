import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppText from "../AppText/AppText";
import defaultStyles from "../../config/styles";
import colors from "../../config/colors";
import { Entypo } from "@expo/vector-icons";
export default function ItemCard({
  id,
  Name,
  Price,
  Quantity,
  onPress,
  Final_Price,
  cross = true,
}) {
  return (
    <View style={[styles.card, defaultStyles.background]}>
      {cross && (
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            position: "absolute",
            marginVertical: -10,
            marginRight: -10,
            backgroundColor: colors.gray,
            padding: 3,
            borderRadius: 50,
            elevation: 4,
          }}
          onPress={onPress}
        >
          <Entypo name="cross" size={30} />
        </TouchableOpacity>
      )}

      <AppText>id - {id}</AppText>
      <AppText>Name - {Name}</AppText>
      <AppText>Price - {Price} ₹</AppText>
      <AppText>Final Amount - {Final_Price} ₹</AppText>
      <AppText>Quantity - {Quantity}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    padding: 10,
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    margin: 10,
    elevation: 4,
    alignItems: "flex-start",
  },
});
