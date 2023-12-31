import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Pop from "../components/Pop";
import Order from "../components/Order";
import Detail from "../components/Detail";
import Contact from "../components/Contact";
import Checkout from "../components/Checkout";
import Address from "../components/Address";
import ForgotPassword from "../components/ForgotPassword";
import OrderConfirmed from "../components/OrderConfirm";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />

        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Pop" component={Pop} />
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="OrderConfirm" component={OrderConfirmed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
