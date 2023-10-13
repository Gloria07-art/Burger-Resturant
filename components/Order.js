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

  const navigation = useNavigation();

  // const handleDelete = (menuTitle) => {
   
  //   const updatedCart = cart.filter(item => item.menuTitle !== menuTitle);
  //   let updatedTotalPrice = 0;
  //   let updatedCount = 0;

  //   updatedCart.forEach((item) => {
  //     updatedTotalPrice += item.menuPrice * item.menuQuantity;
  //     updatedCount += item.menuQuantity;
  //   });

  // }

  

  console.log(totalPrice);

  console.log(cart);

  console.log(cart[0].menuTitle);

  console.log(count);
 



  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {" "}
        <Image
          style={styles.logo}
          source={require("../assets/boss.png")}
        />{" "}
       
        <TouchableOpacity onPress={() => navigation.navigate("Pop")}>
          <Image style={styles.menu} source={require("../assets/menus.png")} />{" "}
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.buttonMain}>
          <Text style={styles.heading}>My Cart Items</Text>
        </View>

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
          {/* <View>
            <TouchableOpacity onPress={handleDelete}>
              <Image
                style={styles.deleteLogo}
                source={require("../assets/delete.png")}
              />
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={styles.buttonMain}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() =>
              navigation.navigate("Checkout"
              // ,{ cart: cartItem, totalPrice, count }
              )
            }
          >
            <Text style={styles.boldText}>
            ORDER
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
    paddingBottom: 200,
  },

  main: {
    width: 300,
    height: 600,
    padding: 20,
    backgroundColor: "white",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: -280,
    marginTop: 20,
  },

  imgMain: {
    width: 300,
    height: 500,
    backgroundColor: "white",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    paddingTop: -30,
  },
  orderDefine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -140,
    // margin: 5,
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
    marginTop: -380,
    fontSize: 20,
  },
  border: { borderWidth: 0.5, width: 200, borderRadius: 5, margin: 7 },
  buttonMain: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  add: { marginTop: 50 },
  deleteLogo: { width: 20, height: 20 },
});
