import React from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles from "../../config/styles";
export default function Card({ children, style }) {
  return (
    <View style={[styles.container, defaultStyles.background, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    elevation: 10,
    marginBottom: 10,
    margin: 10,
    elevation: 10,
  },
});
