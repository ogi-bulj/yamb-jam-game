import { View } from "react-native";
import { styles } from "./Home.styles";
import { HomeNavigation } from "../../navigation/stacks/HomeStackNavigator";
import Heading from "../../components/heading/Heading";
import { colors } from "../../constants/colors";
import CustomText from "../../components/customText/CustomText";
import { SafeAreaView } from "react-native-safe-area-context";

interface HomeProps {
  navigation: HomeNavigation;
}
const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <CustomText
            color={colors.gold}
            style={styles.subheader}
            variant="medium"
          >
            Welcome to the
          </CustomText>
          <Heading color={colors.orangeRed} variant="large">
            Yamb Jam
          </Heading>
        </View>
        <View style={styles.buttonsContainer}></View>
      </SafeAreaView>
    </View>
  );
};
export default Home;
