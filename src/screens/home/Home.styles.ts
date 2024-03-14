import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.charcoal,
    height: "100%",
    paddingHorizontal: "5%",
    paddingVertical: "10%",
  },
  headingContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  subheader: {
    fontFamily: "FingerPaint_400Regular",
  },
  buttonsContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
});
