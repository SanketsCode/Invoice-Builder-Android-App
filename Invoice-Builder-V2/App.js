import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateCompany from './app/Pages/CreateCompany';
import InvoiceData from './app/Pages/InvoiceData';
import authStore from './app/config/storage';
import AuthContext from './app/config/context';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './app/Navigator/MainStack';
import AuthStack from './app/Navigator/AuthStack';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


SplashScreen.preventAutoHideAsync();
let customFonts = {
  'Monst': require('./app/font/Monst.ttf'),
};

export default function App() {
 
  const [companyData,setCompanyData] = useState(null);
  const [isReady,setReady] = useState(false);

  const restoreCompany = async () => {
    const company = await authStore.getData();
    setCompanyData(company);
    await Font.loadAsync(customFonts);
    await SplashScreen.hideAsync();

  }

  useEffect(() => {
    restoreCompany();
  },[])


  return (
    <AuthContext.Provider value={{companyData,setCompanyData}}>

      <NavigationContainer>
        {companyData ? <MainStack /> : <AuthStack />}
      </NavigationContainer>

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
