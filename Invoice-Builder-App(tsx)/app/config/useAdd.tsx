import { useContext } from "react";
import AppContext from "./context";
import InvoiceData  from './storage';

export default  ( ) : object => {
 const {companies,setCompanies} = useContext(AppContext);
 const logout = () => {
    //It will Delete all The Companies
    setCompanies(null);
    InvoiceData.removeData();
}

const logIn = (user : Object) => {
        setCompanies(user)          
        InvoiceData.storeData(user);
}

return {logIn,logout};

}