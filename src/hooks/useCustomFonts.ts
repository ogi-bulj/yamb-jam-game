import { Bungee_400Regular } from "@expo-google-fonts/bungee";
import { FingerPaint_400Regular } from "@expo-google-fonts/finger-paint";
import {
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import {
  Rajdhani_300Light,
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_600SemiBold,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";
import { useLayoutEffect, useState } from "react";

export const useCustomFonts = () => {
  const [loaded, setLoaded] = useState(false);
  useLayoutEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Bungee_400Regular,
        FingerPaint_400Regular,
        Nunito_200ExtraLight,
        Nunito_300Light,
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_600SemiBold,
        Nunito_700Bold,
        Nunito_800ExtraBold,
        Rajdhani_300Light,
        Rajdhani_400Regular,
        Rajdhani_500Medium,
        Rajdhani_600SemiBold,
        Rajdhani_700Bold,
      });
      setLoaded(true);
    };
    loadFonts();
  }, []);
  return loaded;
};
