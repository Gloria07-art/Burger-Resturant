import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';




import 'react-native-gesture-handler';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

import Funny from './components/Funny';

import SignUp from './components/SignUp';

import Login from './components/Login'
import Address from './components/Address'

import Home from './components/Home'

import Order from './components/Order'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Pop from './components/Pop'
import Checkout from './components/Checkout'
import Detail from './components/Detail'


export default function App() {
  return (
    <View style={styles.container}>
      <SignUp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
