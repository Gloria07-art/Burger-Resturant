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

export default function Address() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {" "}
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/boss.png")} />
        <Text style={styles.createText}>Address</Text>
      </View>
      <View style={styles.section}>
        <TextInput style={styles.inputStyle} />

        <Image source={require("../assets/pin.png")} style={styles.pin} />
      </View>
      <View style={styles.mainButtons}>
        <Text>Select the Restaurant Location:</Text>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Home")}
        >
          {" "}
          <Text>Restaurant 1 - Edenburg - R40</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Restaurant 2 - Boksburg - R30</Text>
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
    paddingBottom: 300,
  },
  arrow: { width: 20, height: 17 },
  arrowContainer: { flexDirection: "row" },
  arrowText: { fontSize: 12, fontWeight: "bold" },
  logoContainer: {
    justifyContent: "center",
    marginLeft: 60,
    padding: 20,
    marginTop: 20,
  },
  logo: {
    height: 108,
    width: 111,
    borderRadius: 100,
  },
  createText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },

  section: {
    flex: 1,
    borderWidth: 1,
    width: 250,
    height: 60,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "white",
    margin: 5,
    marginBottom: 20,
  },
  pin: { marginRight: 20, height: 15, width: 15 },

  buttons: {
    width: 220,
    height: 68,
    borderRadius: 22,
    backgroundColor: "#FFC436",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  mainButtons: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: { fontWeight: "bold", fontSize: 20 },

  createSign: { fontWeight: "bold" },
});
