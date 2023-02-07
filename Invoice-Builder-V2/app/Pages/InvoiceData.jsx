import { Entypo, Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Switch,
} from "react-native";
import Toast from "react-native-root-toast";
import AppText from "../components/AppText/AppText";
import Card from "../components/Basic_Card/Basic_Card";
import ColorContainer from "../components/ColorContainer/ColorContainer";
import IconButton from "../components/IconButton/IconButton";
import ItemCard from "../components/ItemCard/ItemCard";
import Screen from "../components/Screen/Screen";
import AppTextInput from "../components/TextInput/TextInput";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function InvoiceData({ navigation }) {
  const [Items, setItems] = useState([]);
  const [Item_Name, setItemName] = useState("");
  const [Item_Price, setItemPrice] = useState(null);
  const [Item_Quantity, setItemQuantity] = useState(null);
  const [Tax, setTax] = useState(0);
  const [FinalAmount, setFinalAmount] = useState(null);
  const [color, setColor] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  //Reset values
  const Resetdata = () => {
    setItems([]);
    setItemName("");
    setItemPrice(null);
    setItemQuantity(null);
    setFinalAmount(null);
    setTax(0);
    setColor(null);
    setIsEnabled(false);
  };

  //add item to items
  const addItem = () => {
    if (!Item_Name || !Item_Price || !Item_Quantity) {
      return Toast.show("Need to fill all data");
    }

    setItems([
      ...Items,
      {
        Item_Name,
        Item_Quantity,
        Item_Price,
        Final_Price: parseFloat(Item_Quantity) * parseFloat(Item_Price),
      },
    ]);

    setItemName("");
    setItemPrice(null);
    setItemQuantity(null);
  };

  // Remove item
  const RemoveItem = (item) => {
    let newItems = [];
    Items.map((myitem) => {
      if (item !== myitem) {
        newItems.push(myitem);
      }
    });

    setItems(newItems);
  };

  //moving to next
  const moveNext = () => {
    if (Items.length < 1) {
      return Toast.show("Please add at least 1 item");
    }

    if (!color) {
      return Toast.show("Please Pick a color");
    }

    //Tax
    // let myTax = Tax ? Tax : 0;
    let Amount = 0;
    Items.map((Item) => {
      Amount = parseFloat(Item.Final_Price) + Amount;
    });

    navigation.push("CreateInvoice", {
      InvoiceData: {
        Items,
        Tax,
        color,
        FinalAmount: Amount + parseFloat(Tax),
      },
    });
  };

  //color
  const setColorName = (name) => {
    setColor(name);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <IconButton title="Fill Invoice Details" name="edit" size={40} />

        <Card style={{ alignItems: "center" }}>
          <AppText>Product Details</AppText>
          <AppTextInput
            name="Item_Name"
            icon="supervised-user-circle"
            placeholder="Item Name"
            value={Item_Name}
            onChangeText={(e) => setItemName(e)}
          />
          <AppTextInput
            name="Item_Price"
            icon="attach-money"
            placeholder="Item Price"
            value={Item_Price}
            onChangeText={(e) => setItemPrice(e)}
          />
          <AppTextInput
            name="Item_Quantity"
            icon="event-note"
            placeholder="Item Quantity"
            value={Item_Quantity}
            onChangeText={(e) => setItemQuantity(e)}
          />
          {Item_Quantity && Item_Price && (
            <AppText>
              Final Amount -{" "}
              {parseFloat(Item_Quantity) * parseFloat(Item_Price)} ₹
            </AppText>
          )}
        </Card>
        <View style={[styles.iconButton, defaultStyles.background]}>
          <TouchableOpacity onPress={() => addItem()}>
            <MaterialIcons name="add" size={30} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.ItemCardContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row-reverse" }}>
              {Items.map((Item, i) => (
                <ItemCard
                  key={i + 1}
                  id={i + 1}
                  Name={Item.Item_Name}
                  Price={Item.Item_Price}
                  Final_Price={Item.Final_Price}
                  Quantity={Item.Item_Quantity}
                  onPress={() => RemoveItem(Item)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {Items[0] && (
          <Card style={{ alignItems: "center" }}>
            <View style={styles.TaxSwitch}>
              <AppText>Tax Information</AppText>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? colors.primary : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
                ios_backgroundColor="#3e3e3e"
                style={{ alignSelf: "flex-end" }}
              />
            </View>

            {isEnabled && (
              <View style={{ padding: 10 }}>
                <AppTextInput
                  maxLength={255}
                  name="Tax"
                  icon="verified"
                  keyboardType="numeric"
                  placeholder="Tax Price"
                  value={Tax}
                  onChangeText={(e) => {
                    let Amount = 0;
                    Items.map((Item) => {
                      Amount = parseFloat(Item.Final_Price) + Amount;
                    });

                    setTax(e);
                    let check = parseInt(e) + parseInt(Amount);
                    setFinalAmount(check);
                  }}
                />
              </View>
            )}
            {FinalAmount && <AppText>Final Amount - {FinalAmount}₹ </AppText>}
          </Card>
        )}

        <ColorContainer onSetColor={setColorName} color={color} />

        <View style={styles.LastButtonContainer}>
          <TouchableOpacity onPress={() => navigation.push("Home")}>
            <View style={styles.finalButton}>
              <Entypo name="cross" size={30} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Resetdata()}>
            <View style={styles.finalButton}>
              <Ionicons name="refresh" size={30} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => moveNext()}>
            <View style={styles.finalButton}>
              <AntDesign name="check" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.gray,
  },
  iconButton: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: colors.white,
    padding: 10,
    elevation: 10,
    borderRadius: 30,
    alignSelf: "center",
  },
  ItemCardContainer: {
    marginTop: 20,
  },
  TaxSwitch: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
  },
  finalButton: {
    padding: 10,
    backgroundColor: colors.white,
    elevation: 4,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  LastButtonContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
