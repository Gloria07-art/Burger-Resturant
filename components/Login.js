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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseAuth/config";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Logged in!");
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        alert(errorMessage);
      });
  };

  const navigateSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.container}>
      {" "}
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/boss.png")} />
        <Text style={styles.createText}>Hello</Text>
        <Text style={styles.createSign}> Sign In Your Account</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.inputText}>Email ID</Text>
        <View style={styles.section}>
          <TextInput
            style={styles.inputStyle}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={styles.inputText}>Password</Text>
        <View style={styles.section}>
          <TextInput
            style={styles.inputStyle}
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View >
      <View style={styles.forgotPass}>
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text> Forgot Password ?</Text>
      </TouchableOpacity></View>
      <View style={styles.buttonMain}>
        <TouchableOpacity style={styles.buttons} onPress={signIn}>
          {" "}
          <Text style={styles.buttonText}>Login </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.forgotPass} >
      <Text>
        Don't Have An Account?{" "}
        <TouchableOpacity onPress={navigateSignUp}>
          {" "}
          <Text style={styles.registerText}>Register Now </Text>
        </TouchableOpacity>
      </Text></View>
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
  arrow: { width: 20, height: 17 },
  arrowContainer: { flexDirection: "row" },
  arrowText: { fontSize: 12, fontWeight: "bold" },
  logoContainer: {
    justifyContent: "center",
    marginLeft: 0,
    padding: 0,
    marginTop: 20,
    alignItems: "center",
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

  forgotPass:{justifyContent:'center',
alignContent:'center',
alignItems:'center'},

  createSign: { fontWeight: "bold", alignItems: "center" },

  input: { marginTop: 30, padding: 5, marginBottom: 20 },
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
    height: 80,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "white",
    margin: 5,
  },

  buttons: {
    width: 202,
    height: 68,
    borderRadius: 22,
    backgroundColor: "#FFC436",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginTop: 30,
    marginBottom: 30,
  },
  buttonText: { fontWeight: "bold", fontSize: 20 },
  buttonMain: { justifyContent: "center", alignItems: "center" },
  socialMain: { flexDirection: "row", justifyContent: "center" },

  socials: { height: 45, width: 45, margin: 20 },

  user: { marginRight: 20 },
  mail: { marginRight: 20, height: 15, width: 15 },
  lock: { marginRight: 20 },
  registerText: { color: "blue" },
});
