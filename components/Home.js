import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  CheckBox,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseAuth/config";

export default function Home() {
  const navigation = useNavigation();
  const [menu, setMenu] = useState([]);

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

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {" "}
        <Image
          style={styles.logo}
          source={require("../assets/boss.png")}
        />{" "} <TouchableOpacity>
        <Image style={styles.menu} source={require("../assets/menus.png")} />{" "}
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TextInput style={styles.inputStyle} />
        <Image source={require("../assets/pin.png")} style={styles.pin} />
      </View>

      <View style={styles.border}></View>

      <Text style={styles.heading}>Our Burgers </Text>

      <View style={styles.main}>
        <ScrollView>
        <View style={styles.flexBox}>
          {menu.map((menu) => (
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <View style={styles.imgMain}>
                {" "}
                <Text style={styles.inTxt}>{menu.menuTitle}</Text>
                <Image
                  source={require("../assets/beef.png")}
                  style={styles.img}
                />
                <Text style={styles.inTxt}>{menu.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
          </View>
        </ScrollView>

        {/* {' '}
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={styles.imgMain}>
            {' '}
            <Text style={styles.inTxt}>Chicken Burger</Text>
            <Image source={require('../assets/chicken.jpg')} style={styles.img} />
            <Text style={styles.inTxt}>R120</Text>
          </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={styles.imgMain}>
            {' '}
            <Text style={styles.inTxt}>Chicken Burger</Text>
            <Image source={require('../assets/beef.png')} style={styles.img} />
            <Text style={styles.inTxt}>R120</Text>
          </View>
          </TouchableOpacity> */}
      </View>

      {/* <View style={styles.main}>
          {' '}<TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={styles.imgMain}>
            {' '}
            <Text style={styles.inTxt}>Chicken Burger</Text>
            <Image source={require('../assets/veggie.jpg')} style={styles.img} />
            <Text style={styles.inTxt}>R120</Text>
          </View>
          </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={styles.imgMain}>
            {' '}
            <Text style={styles.inTxt}>Chicken Burger</Text>
            <Image source={require('../assets/cheese.png')} style={styles.img} />
            <Text style={styles.inTxt}>R120</Text>
          </View>
          </TouchableOpacity>
        </View>
  
        <View style={styles.main}>
          {' '}<TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={styles.imgMain}>
            {' '}
            <Text style={styles.inTxt}>Chicken Burger</Text>
            <Image source={require('../assets/fish.jpg')} style={styles.img} />
            <Text style={styles.inTxt}>R120</Text>
            
          </View></TouchableOpacity>
  
  <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={styles.imgMain}>
            {' '}
            <Text style={styles.inTxt}>Chicken Burger</Text>
            <Image
              source={require('../assets/grilled-gourmet-cheeseburger-with-fresh-vegetables-fries-generated-by-ai.jpg')}
              style={styles.img}
            />
            <Text style={styles.inTxt}>R120</Text>
          </View>
          </TouchableOpacity>
        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#FFFFDD",
    paddingBottom: 150,
  },
  flexBox:{flexDirection: 'row',
  flexWrap: 'wrap'},

  logo: {
    height: 50,
    width: 56,
    borderRadius: 100,
  },
  menu: {
    height: 44,
    width: 43,
  },

  topContainer: { flexDirection: "row", justifyContent: "space-between" },

  pin: { marginRight: 0, height: 15, width: 15 },

  section: {
    flex: 1,
    borderWidth: 1,
    width: 210,
    height: 100,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "white",
    margin: 25,
  },
  border: { width: 300, height: 12, borderWidth: 2, backgroundColor: "black" },
  heading: { fontSize: 20, fontWeight: "Bolder", marginLeft: 80 },
  img: { height: 89, width: 105, borderRadius: 5 },
  imgMain: {
    width: 142,
    height: 163,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  main: { justifyContent: "space-between" },
  inTxt: { fontSize: 15, fontWeight: "bold", marginBottom: 10 },
});
