import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  CheckBox,
  ImageBackground,
} from "react-native";
import React, { useState,  useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { query, orderBy, limit } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseAuth/config";

export default function Detail( {  route })  {
  const [menu, setMenu] = useState("");
  const { data } = route.params;

  const fetchMenu = async () => {
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
      console.error("Error fetching menu: ", error);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const navigation = useNavigation();

  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={data.imageUrl}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>

      <Text style={styles.heading}>{data.menuTitle}</Text>
      <View style={styles.paragraph}>
        <Text>
          {data.Description}
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.heading}>Quantity</Text>

        <View style={styles.mainTwo}>
          {" "}
          <TouchableOpacity onPress={decreaseCount}>
            <Image
              style={styles.logo}
              source={require("../assets/minus.png")}
            />
          </TouchableOpacity>
          <Text style={styles.countTxt}>{count}</Text>
          <TouchableOpacity onPress={increaseCount}>
            <Image style={styles.logo} source={require("../assets/add.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Order")}
        >
          {" "}
          <Text style={styles.buttonText}>ADD TO CART</Text>
          <Text>R139.00</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 0,
    backgroundColor: "#FFFFDD",
    paddingBottom: 60,
  },

  image: { width: 370, height: 150 },

  main: {
    backgroundColor: "rgba(255, 255, 255, 0.70)",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  logo: { width: 40, height: 40 },
  mainTwo: { flexDirection: "row", justifyContent: "space-between" },

  button: {
    width: 202,
    height: 68,
    borderRadius: 22,
    backgroundColor: "#FFC436",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginTop: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: "Bold",
    marginLeft: 0,
    paddingTop: 10,
    paddingBottom: 20,
  },
  paragraph: { marginBottom: 20, padding: 10 },
  buttonText: { fontWeight: "bold", fontSize: 15 },

  footer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  countTxt: { fontSize: 30, margin: 10, marginTop: -5 },
});
