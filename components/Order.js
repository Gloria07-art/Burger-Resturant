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
import {auth, db} from "../FirebaseAuth/config";
import { useNavigation } from "@react-navigation/native";

export default function Order({route}) {
  const { cart, totalPrice} = route.params;

  console.log(cart)
// const [totalPrice, setTotalPrice] = useState(0);

const fetchCartDetails = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "menu"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setMenu(newData);
    console.log(newData);
  } catch (error) {
    alert("error");
    console.error("Error fetching cart: ", error);
  }
};
useEffect(() => {
  fetchCartDetails ();
}, []);


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
        <Image
          style={styles.menu}
          source={require("../assets/menus.png")}
        />{" "}</TouchableOpacity>
      </View>
      <View style={styles.imgMain}>
        <Text style={styles.heading}>Checkout</Text>
        <Text>Delivery</Text>

        <View style={styles.border}>
          <Text>71 Jacobus Avenue</Text>
        </View>
        <Text style={styles.boldText}>ORDER SUMMARY</Text>
        <View style={styles.orderDefine}>
{/* 
          <FlatList
          data= {cart}
          keyExtractor={(data) => NavItem.id}
          renderItem={({item}) => (
            <View> <Text> {data.menuTitle}</Text>
            <Text> R{data.price}</Text></View>
          )}/> */}

          
          <Text>Total Price : R{totalPrice}</Text>

          <Text>
            1 * Cheese Burger <br></br>  //Quantity update + menuTitle
            Cheddamalt cheese <br></br>with bedd{" "} 
          </Text>
          <Text>R120</Text> ///sum update
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.add}>
          <Text> + Add Item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgMain}>
        {" "}
        <Text style={styles.boldText}>Order Amount</Text>{" "}
        <View style={styles.orderDefine}>
          {" "}
          <Text>Subtotal</Text> <Text>R40</Text>  //sum of all costs
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
        </View>
      </View>{" "}
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
    width: 270,
    height: 300,
    backgroundColor: "white",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 40,
    paddingLeft: 25,
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
    padding: 15,
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
    marginLeft: 70,
    marginBottom: 10,
    marginTop: -40,
  },
  border: { borderWidth: 0.5, width: 200, borderRadius: 5, margin: 7 },
  buttonMain: { justifyContent: "center", alignItems: "center" },

  add: { marginTop: 50 },
});
