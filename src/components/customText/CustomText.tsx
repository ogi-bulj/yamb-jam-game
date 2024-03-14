import { StyleProp, Text, TextStyle } from "react-native";
import { styles } from "./CustomText.styles";

interface CustomTextProps {
  children: string;
  color: string;
  style?: StyleProp<TextStyle>;
  variant: "small" | "medium" | "large";
}
const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  color,
  variant,
}) => {
  let size;
  if (variant === "small") {
    size = 14;
  } else if (variant === "medium") {
    size = 16;
  } else if (variant === "large") {
    size = 20;
  }
  return (
    <Text style={[{ color: color, fontSize: size }, styles.text, style]}>
      {children}
    </Text>
  );
};
export default CustomText;
