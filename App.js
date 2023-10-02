import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import "react-native-gesture-handler";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Address from "./components/Address";
import Home from "./components/Home";
import Order from "./components/Order";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Pop from "./components/Pop";
import Checkout from "./components/Checkout";
import Detail from "./components/Detail";

import HomeStack from "./routes/homeStack";

export default function App() {
  return (
   
      <HomeStack/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
