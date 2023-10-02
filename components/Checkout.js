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

export default function Checkout() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boldTxt}>Checkout </Text>
        </TouchableOpacity>
        <View style={styles.checkItem}>
          <Text>1 *Chicken Burger R120</Text>{" "}
          <TouchableOpacity>
            <Image
              style={styles.logo}
              source={require("../assets/delete.png")}
            />
          </TouchableOpacity>
        </View>{" "}
        <View style={styles.checkItem}>
          <Text>2 *Beef Burger R120</Text>{" "}
          <TouchableOpacity>
            <Image
              style={styles.logo}
              source={require("../assets/delete.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        {" "}
        <Text style={styles.boldTxt}>Order</Text>
        <Text>R120</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#FFFFDD",
    paddingBottom: 160,
  },

  topContainer: {
    width: 270,
    height: 250,
    backgroundColor: "white",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 40,
    paddingLeft: 25,
    padding: 20,
  },
  bottomContainer: {
    width: 270,
    height: 70,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 40,
    flexDirection: "ROW",
    alignItems: "center",
    padding: 30,
  },
  box: {
    backgroundColor: "#FFC436",
    width: 124,
    height: 48,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -170,
    marginLeft: 50,
  },
  boldTxt: { fontWeight: "bold" },

  logo: { width: 20, height: 20 },
  checkItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
