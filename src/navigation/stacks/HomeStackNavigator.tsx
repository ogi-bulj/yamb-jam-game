import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/home/Home";
import Welcome from "../../screens/welcome/Welcome";
import { NavigationProp } from "@react-navigation/native";

export type ScreenNames = ["Home", "Welcome"];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type HomeNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
