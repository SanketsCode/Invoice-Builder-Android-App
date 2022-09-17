import {
  ScrollView,
  StyleSheet,
  Switch,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "../Components/Screen/Screen";
import AppText from "../Components/AppText/AppText";
import { AntDesign, Entypo, EvilIcons, FontAwesome, Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppTextInput from "../Components/TextInput/TextInput";
import ItemCard from "../Components/ItemCard/ItemCard";
import ColorContainer from "../Components/ColorContainer/ColorContainer";
import colors from "../config/colors";
import IconButton from "../Components/IconButton/IconButton";
import Toast from 'react-native-root-toast';



export default function InvoiceData({navigation}) {
  const [Items, setItems] = useState([]);
  const [Item_Name, setItemName] = useState("");
  const [Item_Price, setItemPrice] = useState(null);
  const [Item_Quantity, setItemQuantity] = useState(null);
  const [Tax, setTax] = useState(0);
  const [FinalAmount, setFinalAmount] = useState(null);
  const [color, setColor] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  
  

  //Reset Form
  const Resetdata = () => {
    setItems([]);
    setItemName('');
    setItemPrice(null);
    setItemQuantity(null);
    setTax(0);
    setFinalAmount(null);
    setColor(null);
    setIsEnabled(false);
  }


  const addItem = () => {
    setItems([
      ...Items,
      {
        Item_Name,
        Item_Quantity,
        Item_Price,
        Final_Price: parseInt(Item_Price) * parseInt(Item_Quantity),
      },
    ]);
    setItemName("");
    setItemPrice(null);
    setItemQuantity(null);
  };

  const RemoveItem = (item) => {
    let newItems = [];
    Items.map((myitem) => {
      if (item !== myitem) {
        newItems.push(myitem);
      }
    });

    setItems(newItems);
  };

  //Moving Data to next
  const moveNext = () => {
    
            
      //check for if data is not valid
      if(Items.length < 1){
        return Toast.show('Please Add at least 1 Item', {
          duration: Toast.durations.SHORT,
        });
      }

      if(!color){
        return Toast.show('Please Select Your Color', {
          duration: Toast.durations.SHORT,
        });
      }

      if(!FinalAmount){
        let Amount = 0;
        Items.map((Item) => {
          Amount = parseInt(Item.Final_Price) + Amount;
        });
        setFinalAmount(Amount);
      }

      let myTax = Tax ? Tax : 0;


      navigation.push("CreateInvoice",{
        InvoiceData : {
          Items,
          Tax:myTax,
          color,
          FinalAmount
        }
      });
      
      
  }
  


  const setColorName = (name) => {
    setColor(name);
  };
  return (
    <Screen>
      <View style={styles.container}>
        <IconButton title="Fill Invoice Details" name="edit" size={40} />
        <View style={styles.getCard}>
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
            placeholder="Item Price"
            icon="attach-money"
            keyboardType="numeric"
            value={Item_Price}
            onChangeText={(e) => setItemPrice(e)}
          />
          <AppTextInput
            name="Item Quantity"
            placeholder="Quantity"
            icon="event-note"
            keyboardType="numeric"
            value={Item_Quantity}
            onChangeText={(e) => setItemQuantity(e)}
          />

          {Item_Quantity && Item_Price && (
            <AppText>
              Final Amount - {parseInt(Item_Quantity) * parseInt(Item_Price)} ₹
            </AppText>
          )}
        </View>

        <View style={styles.iconButton}>
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

        <View style={styles.getCard}>
          <View style={styles.TaxSwitch}>
            <AppText>Tax Information</AppText>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? colors.primary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
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
                    Amount = parseInt(Item.Final_Price) + Amount;
                  });

                  setTax(e);
                  let check = parseInt(e) + parseInt(Amount);
                  setFinalAmount(check);
                }}
              />

              <AppTextInput
                name="Final Amount"
                placeholder="Final Amount ₹"
                icon="attach-money"
                keyboardType="numeric"
                value={FinalAmount}
                onChangeText={(e) => setFinalAmount(e)}
              />
            </View>
          )}

          {FinalAmount && <AppText>Final Amount - {FinalAmount} ₹</AppText>}
        </View>

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
    backgroundColor: defaultStyles.colors.gray,
  },
  getCard: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    margin: 10,
    elevation: 10,
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconButton: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.white,
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
    justifyContent:'center',
    alignItems:'center'
  },
  LastButtonContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems:'center'
  },
});
