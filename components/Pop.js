import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from "@react-navigation/native";

export default function Pop() {
  const navigation = useNavigation();

  return (<View style={styles.container}>
  
  <View style={styles.pop}>
  

  <TouchableOpacity>
  <Image style={styles.menu} source={require('../assets/close-button.png')} />
   </TouchableOpacity>
  <Image style={styles.logo} source={require('../assets/boss.png')} />

  <View style={styles.main}>
  <Text style={styles.menuTxt}>
  <TouchableOpacity>Home</TouchableOpacity> <br></br>
<TouchableOpacity>Orders </TouchableOpacity><br></br><TouchableOpacity>
Profile</TouchableOpacity><br></br>
<TouchableOpacity>Contact</TouchableOpacity></Text>
  </View>
  </View>
  

   </View>
  )}

  

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFDD',
  },

  pop:{backgroundColor:" rgba(0, 0, 0, 0.70)",
  height:800, width:309},
  menu: {
    height: 60,
    width: 60,
    marginLeft: 230,
    marginTop:20
  },

  logo: {
    height: 108,
    width: 111,
    borderRadius: 100,
    marginTop:0,
margin:90  },

menuTxt:{color:'white',fontSize:36, marginBottom:20
},
main:{alignItems:'center', marginTop:-30}
})

