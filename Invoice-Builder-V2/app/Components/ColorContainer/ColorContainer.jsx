import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import InvoiceColors from "../../config/InvoiceColor";
import AppText from "../AppText/AppText";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

export default function ColorContainer({ onSetColor, color }) {
  return (
    <View style={[styles.container, defaultStyles.background]}>
      <AppText>Select Your Color - </AppText>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {Object.keys(InvoiceColors).map((key) => {
          let mycolor = InvoiceColors[key];

          return (
            <View key={key} style={styles.colorCard}>
              <TouchableOpacity onPress={() => onSetColor(key)}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    padding: 1,
                    borderRadius: 50,
                    backgroundColor: mycolor,
                  }}
                ></View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      {color && <AppText>You Selected - {color}</AppText>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 10,
    elevation: 10,
    alignItems: "center",
  },
  colorCard: {
    backgroundColor: colors.white,
    padding: 1,
    elevation: 4,
    borderRadius: 50,
    margin: 6,
  },
});
