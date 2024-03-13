import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigation/main/HomeStackNavigator";
import { StatusBar } from "expo-status-bar";
import { useCustomFonts } from "./src/hooks/useCustomFonts";

export default function App() {
  const isFontLoaded = useCustomFonts();
  if (!isFontLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </>
  );
}
