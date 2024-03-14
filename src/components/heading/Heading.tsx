import { StyleProp, Text, TextStyle } from "react-native";
import { styles } from "./Heading.styles";

interface HeadingProps {
  children: string;
  color: string;
  style?: StyleProp<TextStyle>;
  variant: "small" | "medium" | "large";
}
const Heading: React.FC<HeadingProps> = ({
  children,
  style,
  color,
  variant,
}) => {
  let size;
  let lineHeight;
  if (variant === "small") {
    lineHeight = 32;
    size = 24;
  } else if (variant === "medium") {
    lineHeight = 30;
    size = 36;
  } else if (variant === "large") {
    lineHeight = 54;
    size = 48;
  }
  return (
    <Text
      style={[
        { color: color, fontSize: size, lineHeight: lineHeight },
        styles.text,
        style,
      ]}
    >
      {children}
    </Text>
  );
};
export default Heading;
