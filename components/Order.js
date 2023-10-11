import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useState } from "react";
import { auth, db } from "../FirebaseAuth/config";
import { useNavigation } from "@react-navigation/native";

export default function Order({ route }) {
  const { cart, totalPrice, count } = route.params;
  console.log(totalPrice);

  console.log(cart);

  console.log(cart[0].menuTitle);

  console.log(count);
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {" "}
        <Image
          style={styles.logo}
          source={require("../assets/boss.png")}
        />{" "}
        <TouchableOpacity onPress={() => addToCart(menu)}>
          <Image
            source={require("../assets/shopping-cart.png")}
            style={styles.cart}
          />{" "}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Pop")}>
          <Image style={styles.menu} source={require("../assets/menus.png")} />{" "}
        </TouchableOpacity>
      </View>
      <View style={styles.imgMain}>
        <View style={styles.buttonMain}>
        <Text style={styles.heading}>My Cart Items</Text></View>

        <View style={styles.orderDefine}>
          <View>
            <Text style={styles.boldText}>Quantity</Text>
            <Text>{count}</Text>{" "}
          </View>
          <View>
            <Text style={styles.boldText}>Item</Text>
            <Text>{cart[1].menuTitle}</Text>{" "}
          </View>
          <View>
            <Text style={styles.boldText}>Price</Text>
            <Text> R{totalPrice}</Text>{" "}
          </View>
        </View>
        <View style={styles.buttonMain}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate("Checkout")}
          >
            <Text style={styles.boldText}>
              Place <br></br> Order
            </Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.add}
        ></TouchableOpacity> */}
      </View>
      {/* <View style={styles.imgMain}>
        {" "}
        <Text style={styles.boldText}>Order Amount</Text>{" "}
        <View style={styles.orderDefine}>
          {" "}
          <Text>Subtotal</Text> <Text>R40</Text> //sum of all costs
        </View>
        <View style={styles.orderDefine}>
          {" "}
          <Text>Delivery Fee</Text>
          <Text>R17</Text>
        </View>
        <View style={styles.orderDefine}>
          {" "}
          <Text>Driver Tip</Text>
          <Text>R17</Text>
        </View>
        <View style={styles.orderDefine}>
          {" "}
          <Text>Total</Text> <Text>R120</Text>
        </View>
        <View style={styles.buttonMain}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate("Checkout")}
          >
            <Text style={styles.boldText}>
              Place <br></br> Order
            </Text>
          </TouchableOpacity>
        </View> */}
      {/* </View>{" "} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#FFFFDD",
  },
  imgMain: {
    width: 300,
    height: 500,
    backgroundColor: "white",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 0,
    paddingTop: -50,
  },
  orderDefine: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  logo: {
    height: 50,
    width: 56,
    borderRadius: 100,
  },
  menu: {
    height: 34,
    width: 43,
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
  },
  cart: { height: 34, width: 33, marginLeft: 70 },

  buttons: {
    width: 114,
    height: 68,
    borderRadius: 22,
    backgroundColor: "#FFC436",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  boldText: { fontWeight: "bold" },
  heading: {
    fontWeight: "bold",
    // marginLeft: 70,
    marginBottom: 10,
    // marginTop: -40,
  },
  border: { borderWidth: 0.5, width: 200, borderRadius: 5, margin: 7 },
  buttonMain: { justifyContent: "center", alignItems: "center" },

  add: { marginTop: 50 },
});
