import { View, Text, Pressable } from "react-native";
import { styles } from "./Home.styles";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigation } from "../../navigation/main/HomeStackNavigator";

interface HomeProps {
  navigation: HomeNavigation;
}
const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
            <Text style={styles.heading}>xo-xo</Text>
            <Text className="text-gold text-xl font-FingerPaint">The Game</Text>
          </View>
    </View>
  );
};
export default Home;
