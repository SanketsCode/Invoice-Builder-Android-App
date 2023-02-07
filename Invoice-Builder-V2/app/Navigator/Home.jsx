import { createStackNavigator } from "@react-navigation/stack";
import CreateInvoice from "../Pages/CreateInvoice";
import Feedback from "../Pages/Feedback";
import HomeScreen from "../Pages/HomeScreen";
import InvoiceData from "../Pages/InvoiceData";
import PickTemplate from "../Pages/PickTemplate";

const Stack = createStackNavigator();

export default Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="create" component={HomeScreen} />
      <Stack.Screen name="feedback" component={Feedback} />
      <Stack.Screen name="getInvoiceData" component={InvoiceData} />
      <Stack.Screen name="CreateInvoice" component={CreateInvoice} />
      <Stack.Screen name="PickTemplate" component={PickTemplate} />
    </Stack.Navigator>
  );
};
