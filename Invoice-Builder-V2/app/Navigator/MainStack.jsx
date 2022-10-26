import { createStackNavigator } from "@react-navigation/stack";
import CreateInvoice from "../Pages/CreateInvoice";
import FeedBack from "../Pages/FeedBack";
import HomeScreen from "../Pages/HomeScreen";
import InvoiceData from "../Pages/InvoiceData";
import InvoiceFileList from "../Pages/InvoiceFileList";
import PickTemplate from "../Pages/PickTemplate";
import PickYourInvoice from "../Pages/PickYourInvoice";

const Stack = createStackNavigator();

export default MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
             
        }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="getInvoiceData" component={InvoiceData} />
            <Stack.Screen name="CreateInvoice" component={CreateInvoice} />
            <Stack.Screen name="feedback" component={FeedBack} />
            <Stack.Screen name="ListInvoice" component={InvoiceFileList} />
            {/* <Stack.Screen name="PickYourInvoice" component={PickYourInvoice} /> */}
            <Stack.Screen name="PickTemplate" component={PickTemplate} />
        </Stack.Navigator>
    )
}