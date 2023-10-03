import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { auth } from "../FirebaseAuth/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
        navigation.goBack();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/boss.png")} />
      <Text style={styles.createText}>Forgot Password</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.buttons} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#FFFFDD",
    paddingBottom: 180,
    alignContent:'center',
    alignItems:'center'
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

  inputStyle: {
    flex: 1,
    width: 250,
    height: 35,
    padding: 10,
    backgroundColor:'white',
    borderWidth: 1,
    borderColor:'black',
    borderRadius: 50
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
});
