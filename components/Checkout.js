import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { db } from "../FirebaseAuth/config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Checkout({ route }) {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone ] = useState('');
  const [address, setAddress] = useState('');

  const checkOut = async () => {
    try {
      const authUser = getAuth().currentUser;
      if (authUser) {
        const docRef = await addDoc(collection(db, "Cart" + authUser.uid), {
          owner_uid: authUser.uid,
          Name: cart.Name,
          Price: total,
          Amount: count,
          Buyer: name,
          Number: phone,
          Address: address,
        });
        console.log("Document written with ID: ", docRef.id);
        navigation.navigate("OrderConfirm");
      } else {
        console.error("User not authenticated");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


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
            <Text>Name</Text>
            <TextInput placeholder="Enter name"
            value={name}
            onChangeText={(text) => setName(text)}></TextInput>{" "}
          </View>
          {/* onChangeText={(text) => setProfile(text) */}
        <View>
            <Text>Phone Number</Text>
            <TextInput placeholder="Enter name"
            value={phone}
            onChangeText={(text) => setPhone(text)}></TextInput>{" "}
          </View>
          <View>
            <Text>Address</Text>
            <Text placeholder="Enter Your name"
            value={address}
            onChangeText={(text) => setAddress(text)}></Text>{" "}
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
        <TouchableOpacity style={styles.box} onPress={Checkout}>
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
