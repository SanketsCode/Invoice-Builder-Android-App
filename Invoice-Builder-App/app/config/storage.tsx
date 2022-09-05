import * as SecureStore from 'expo-secure-store';

const key="InvoiceForCompanies";

const storeData = async (Company:Object) => {
    try {
        await SecureStore.setItemAsync(key,JSON.stringify(Company));
    } catch (error) {
        console.log("Error While Storing the data",error);
    }
    return 1;
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