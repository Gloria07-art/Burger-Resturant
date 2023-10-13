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

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Pop")}>
        <Image style={styles.menu} source={require("../assets/menus.png")} />
      </TouchableOpacity>
      <Text style={styles.heading}>My Profile</Text>

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/user(1).png")} />
      </View>

      <Text style={styles.inTxt}>Username</Text>

      <View style={styles.section}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Piggy White"
        ></TextInput>
      </View>
      <Text style={styles.inTxt}>Email ID</Text>
      <View style={styles.section}>
        <TextInput style={styles.inputStyle} placeholder="piggywhite@gee.com" />
      </View>

      <View style={styles.mytext}>
        <Text>
          The next time you see me savoring a burger <br />
          with an audacious flair, know that it's not<br />
           just any burger;it's my bossy burger, stealing <br />
           the show and making my taste buds making my taste <br />
            buds sing with joy. -Boss Burger
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 2,
    backgroundColor: "#FFFFDD",
    paddingBottom: 450,
  },

  menu: {
    height: 34,
    width: 43,
    marginLeft: 250,
  },

  heading: {
    fontSize: 20,
    fontWeight: "Bold",
    marginLeft: 0,
    paddingTop: 40,
    paddingBottom: 20,
  },
  logoContainer: {
    justifyContent: "center",
    marginLeft: 60,
    padding: 20,
    marginTop: 5,
  },

  logo: { height: 108, width: 90, borderRadius: 100 },

  inTxt: { fontSize: 15, fontWeight: "bold", marginBottom: 10 },
  inputStyle: { flex: 1, width: 250, height: 35, padding: 10 },

  sub: { fontSize: 15, paddingBottom: 20 },

  section: {
    flex: 1,
    borderWidth: 1,
    width: 250,
    height: 60,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "white",
    margin: 5,
  },
  mytext: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop:180,
    fontSize: 15,
    backgroundColor:'',
    borderWidth:2,
    borderColor:'#faebd7'
  },
});
