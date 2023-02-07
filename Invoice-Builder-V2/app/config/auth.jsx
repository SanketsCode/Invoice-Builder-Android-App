import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { companyData, setCompanyData } = useContext(AuthContext);

  const logOut = () => {
    authStorage.removeData();
    setCompanyData(null);
  };

  const logIn = (company) => {
    authStorage.storeData(company);
    setCompanyData(JSON.stringify(company));
  };

  return { companyData, setCompanyData, logOut, logIn };
};
