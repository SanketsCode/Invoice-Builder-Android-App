import * as SecureStore from 'expo-secure-store';


const key="CompanyData";


const storeData = async (company) => {
    try {
        await SecureStore.setItemAsync(key,JSON.stringify(company));
   
    } catch (error) {
        //Add React native Toast
        console.log("Error While Storing data");
    }
}

const getData = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Error While Getting Data",error);
    }

}

const removeData = async () => {
    try{
            await SecureStore.deleteItemAsync(key);
         
    }catch(error){
        console.log("Error while Deleting User",error);
    }
}

export default {
    getData,
    storeData,
    removeData
}
