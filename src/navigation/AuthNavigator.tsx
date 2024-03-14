import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProp } from "@react-navigation/native";
import { Welcome } from "../screens";
import HomeStackNavigator from "./stacks/HomeStackNavigator";

export type ScreenNames = ["Home Stack", "Welcome"];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type AuthNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home Stack" component={HomeStackNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
