import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Pages/HomeScreen";
import InvoiceData from "../Pages/InvoiceData";

const Stack = createStackNavigator();

export default MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="getInvoiceData" component={InvoiceData} />
        </Stack.Navigator>
    )
}