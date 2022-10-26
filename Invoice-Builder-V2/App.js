import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateCompany from './app/Pages/CreateCompany';
import InvoiceData from './app/Pages/InvoiceData';
import authStore from './app/config/storage';
import AuthContext from './app/config/context';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './app/Navigator/MainStack';
import AuthStack from './app/Navigator/AuthStack';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import { RootSiblingParent } from 'react-native-root-siblings';



export default function App() {
 
  const [companyData,setCompanyData] = useState(null);
  const [isReady,setReady] = useState(false);
  const [fontsLoaded] = useFonts({
    'Poppins': require('./app/font/Poppins.ttf'),
  });

  const restoreCompany = async () => {
    const company = await authStore.getData();
    setCompanyData(company);
    
    await SplashScreen.hideAsync();

  }

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    restoreCompany();
    prepare();
  }, [fontsLoaded]);



  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={{companyData,setCompanyData}}>

     <RootSiblingParent>
     <NavigationContainer  >
        {companyData ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
     </RootSiblingParent>

    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
