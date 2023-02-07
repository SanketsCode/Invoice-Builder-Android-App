import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

const key = "CompanyData";

// Insert value
const storeData = async (company) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(company));
  } catch (err) {
    Alert.alert("Something went wrong");
    console.log(err);
  }
};

// retrive

const getData = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (err) {
    console.log("Error ", err);
  }
};

//remove

const removeData = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getData,
  storeData,
  removeData,
};
