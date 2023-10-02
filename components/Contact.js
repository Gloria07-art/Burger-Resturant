import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    CheckBox,
  } from 'react-native';

  import { useNavigation } from "@react-navigation/native";
  
  export default function Contact() {

    const navigation = useNavigation();
    
    return (
      <View style={styles.container}>
        <Image style={styles.menu} source={require('../assets/menus.png')} />
  
        <Text style={styles.heading}>Contact</Text>
  
        <Text style={styles.sub}>
          Need to get hold of us? We’d love to hear from you! Reach out to us the
          details below.
        </Text>
  
        <Text style={styles.inTxt}>Email</Text>
  
        <Text style={styles.sub}>info@burgers.co.za</Text>
  <Text style={styles.inTxt}>Phone</Text>
        <Text style={styles.sub}>086 765  0865 <br></br>
        07:30 - 21:00 Monday to Sunday</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 24,
      backgroundColor: '#FFFFDD',
       paddingBottom: 200
    },
  
    menu: {
      height: 34,
      width: 43,
      marginLeft: 250,
    },
  
    heading: { fontSize: 20, fontWeight: 'Bold', marginLeft: 0 , paddingTop:40, paddingBottom:20},
  
     inTxt: { fontSize: 15, fontWeight: 'bold', marginBottom: 10 },
  
     sub:{fontSize:15, paddingBottom:20}
  });
  