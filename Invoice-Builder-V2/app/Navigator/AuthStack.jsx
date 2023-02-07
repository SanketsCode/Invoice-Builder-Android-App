import { createStackNavigator } from "@react-navigation/stack";
import CreateCompany from "../Pages/CreateCompany";

const Stack = createStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="create" component={CreateCompany} />
    </Stack.Navigator>
  );
};
