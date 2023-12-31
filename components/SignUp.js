import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../FirebaseAuth/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  console.log(email, password);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Signed up");
        navigation.navigate("Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/boss.png")} />
        <Text style={styles.createText}>Create Account</Text>
      </View>

      <Text style={styles.inputText}>Email ID</Text>
      <View style={styles.section}>
        <TextInput
          style={styles.inputStyle}
          value={email}
          onChangeText={setEmail}
        />
        <Image source={require("../assets/email.png")} style={styles.mail} />
      </View>
      <Text style={styles.inputText}>Password</Text>
      <View style={styles.section}>
        <TextInput
          style={styles.inputStyle}
          value={password}
          onChangeText={setPassword}
        />
        <Image source={require("../assets/lock.png")} style={styles.lock} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons} onPress={signUp}>
          {" "}
          <Text style={styles.buttonText}> Register Now</Text>
        </TouchableOpacity>
      </View>
      <View >
        <Text style={styles.text}>
          Already Have An Account? 
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}> Login </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#FFFFDD",
    paddingBottom: 200,
  },
  logoContainer: {
    justifyContent: "center",
    marginLeft: 60,
    padding: 20,
    marginTop: 5,
  },

  checkContainer: { marginTop: 20, paddingTop: 10 },
  buttonContainer: {
    justifyContent: "center",
    marginLeft: 40,
    marginTop: 40,
    marginBottom: 20,
  },
  socialMain: { flexDirection: "row", justifyContent: "center" },
  logo: {
    height: 108,
    width: 111,
    borderRadius: 100,
  },
  arrow: { width: 20, height: 17 },
  arrowContainer: { flexDirection: "row" },
  arrowText: { fontSize: 12, fontWeight: "bold" },
  createText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
  inputText: { marginLeft: 20 },

  inputStyle: {
    flex: 1,
    width: 250,
    height: 35,
    padding: 10,
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
  },
  user: { marginRight: 20 },
  mail: { marginRight: 20, height: 15, width: 15 },
  lock: { marginRight: 20 },
  buttons: {
    width: 202,
    height: 68,
    borderRadius: 22,
    backgroundColor: "#FFC436",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  loginText: { color: "blue" },
  buttonText: { fontWeight: "bold" },
  text: { marginLeft: 50, padding: 10 },
  checkbox: { marginRight: 5 },

  socials: { height: 45, width: 45, margin: 20 },
  textContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
