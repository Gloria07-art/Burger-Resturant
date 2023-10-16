import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

export default function OrderConfirmed() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {" "}
        <Image style={styles.logo} source={require("../assets/boss.png")} />
        <Text style={styles.txt}>
          YOUR BURGER <br /> ORDER IS <br />
          CONFIRMED!
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          {" "}
          <Text>Go back to menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#FFFFDD",
    height: 750,
  },
  main: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  txt: { fontWeight: "bold", fontSize: 25 },

  logo: { width: 108, height: 111, borderRadius: 100, padding: 5 },

  backButton: {
    backgroundColor: "white",
    width: 114,
    height: 68,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginTop: 20,
  },
});
