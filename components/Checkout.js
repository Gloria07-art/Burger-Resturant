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

export default function Checkout({ route }) {
  const navigation = useNavigation();
  // const { cart, totalPrice, count } = route.params;

  // const handleDelete = (menuTitle) => {
   
  //   const updatedCart = cart.filter(item => item.menuTitle !== menuTitle);
  //   let updatedTotalPrice = 0;
  //   let updatedCount = 0;

  //   updatedCart.forEach((item) => {
  //     updatedTotalPrice += item.menuPrice * item.menuQuantity;
  //     updatedCount += item.menuQuantity;
  //   });
  // }


  return (
    <View style={styles.container}>
      
<View style={styles.topMain}>
        {" "}
        <Image
          style={styles.logo}
          source={require("../assets/boss.png")}
        />{" "}
       
        <TouchableOpacity onPress={() => navigation.navigate("Pop")}>
          <Image style={styles.menu} source={require("../assets/menus.png")} />{" "}
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        {/* <TouchableOpacity style={styles.box}>
          <Text style={styles.boldTxt}>Order</Text>
        </TouchableOpacity> */}


        <View style={styles.checkItem}>
        <View>
            <Text>Date</Text>
            <Text>20/10/2023</Text>{" "}
          </View>
        <View>
            <Text>Order Number</Text>
            <Text>Bb87W3456</Text>{" "}
          </View>
          <View>
            <Text>Quantity</Text>
            <Text>2</Text>{" "}
          </View>
          <View>
            <Text>Item</Text>
            <Text>Cheese Burger</Text>{" "}
          </View>
          <View>
            <Text>Price</Text>
            <Text>R120</Text>
          </View>

          <TouchableOpacity>
            <Image
              style={styles.logo}
              source={require("../assets/delete.png")}
            />
          </TouchableOpacity>
        </View>{" "}
        <View > <Text style={styles.boldTxt}>Total</Text>
        <Text>R120</Text></View>
        <Text style={styles.boldTxt}>Total</Text>
        <Text>R120</Text>
      </View>

      <View style={styles.bottomContainer}>
        {" "}
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("OrderConfirm")}>
          <Text style={styles.boldTxt}> CONFIRM ORDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#FFFFDD",
    paddingBottom: 160,
  },

  topContainer: {
    width: 300,
    height: 400,
    backgroundColor: "white",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 50,
    paddingLeft: 25,
    padding: 20,
  },
  bottomContainer: {
    // width: 270,
    // height: 70,
    // backgroundColor: "white",
    justifyContent: "center",
    // borderWidth: 1,
    // borderRadius: 5,
    // marginTop: 40,
    flexDirection: "ROW",
    alignItems: "center",
    // padding: 30,
  },
  box: {
    backgroundColor: "#FFC436",
    width: 160,
    height: 52,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -170,
    marginLeft: 50,
  },
  boldTxt: { fontWeight: "bold" },

  logo: { width: 20, height: 20 },
  checkItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
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

  topMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
  }
});
