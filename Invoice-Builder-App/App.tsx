import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useState,useCallback, useEffect } from 'react';
import AppContext from './app/config/context';
import Main from './app/Navigator/Main';
import { NavigationContainer } from '@react-navigation/native';
import InvoiceData from './app/config/storage';
import {CompanyNavigator} from './app/Navigator/CompanyNavigator';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();



export default function App() {
  const [companies,setCompanies] = useState<Object>();
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        const company:any = await InvoiceData.getData();
        setCompanies(company);
        // await new Promise(resolve => setTimeout(resolve, 2000));
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);


  if (!appIsReady) {
    return null;
  }

  return (
    <AppContext.Provider value={{companies,setCompanies}}>
      <NavigationContainer>
     
   {companies ? <Main/> : <CompanyNavigator />}
      </NavigationContainer>
    </AppContext.Provider>
  ); 
}


