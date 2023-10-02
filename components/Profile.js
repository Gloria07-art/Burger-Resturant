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
  
  
  export default function Profile() {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <Image style={styles.menu} source={require('../assets/menus.png')} />
  
        <Text style={styles.heading}>My Profile</Text>
  
        <Text style={styles.inTxt}>Username</Text>
  
        <View style={styles.section}>
          <TextInput style={styles.inputStyle} />
        </View>
        <Text style={styles.inTxt}>Email ID</Text>
       <View style={styles.section}>
          <TextInput style={styles.inputStyle} />
        </View>
        <Text style={styles.inTxt}>Delivery Location</Text>
  
        <View style={styles.section}>
          <TextInput style={styles.inputStyle} />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 24,
      backgroundColor: '#FFFFDD',
      paddingBottom: 250,
    },
  
    menu: {
      height: 34,
      width: 43,
      marginLeft: 250,
    },
  
    heading: {
      fontSize: 20,
      fontWeight: 'Bold',
      marginLeft: 0,
      paddingTop: 40,
      paddingBottom: 20,
    },
  
    inTxt: { fontSize: 15, fontWeight: 'bold', marginBottom: 10 },
  
    sub: { fontSize: 15, paddingBottom: 20 },
  
    section: {
      flex: 1,
      borderWidth: 1,
      width: 250,
      height: 60,
      borderColor: 'black',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor: 'white',
      margin: 5,
      
    },
  });
  