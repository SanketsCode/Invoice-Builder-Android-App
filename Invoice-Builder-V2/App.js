import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthStack from "./app/Navigator/AuthStack";
import AuthContext from "./app/config/context";
import Home from "./app/Navigator/Home";
import authStore from "./app/config/storage";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { RootSiblingParent } from "react-native-root-siblings";
import PickTemplate from "./app/Pages/PickTemplate";

export default function App() {
  const [companyData, setCompanyData] = useState(null);
  const [fontLoaded] = useFonts({
    Poppins: require("./app/font/Poppins.ttf"),
  });

  const restoreCompany = async () => {
    const company = await authStore.getData();
    setCompanyData(company);
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      if (fontLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
    restoreCompany();
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ companyData, setCompanyData }}>
      <RootSiblingParent>
        <NavigationContainer>
          {companyData ? <Home /> : <AuthStack />}
        </NavigationContainer>
      </RootSiblingParent>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
