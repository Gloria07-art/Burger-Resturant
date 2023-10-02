import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    CheckBox,
    ImageBackground,
  } from 'react-native';
  
  import { useNavigation } from "@react-navigation/native";

  export default function Detail() {

    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/grilled-gourmet-cheeseburger-with-fresh-vegetables-fries-generated-by-ai.jpg')}
          resizeMode="cover"
          style={styles.image}></ImageBackground>
  
        <Text style={styles.heading}>Chicken Burger</Text>
  <View style={styles.paragraph} >
        <Text>
          A saucy chicken burger fillet topped with grilled onions and a garlic
          buttered roll served with a single side of your choice.
        </Text>
  </View>
        <View style={styles.main}>
          <Text style={styles.heading}>Quantity</Text>
  
          <View style={styles.mainTwo}>
            {' '}
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../assets/minus.png')}
              />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity>
              <Image style={styles.logo} source={require('../assets/add.png')} />
            </TouchableOpacity>
          </View>
        </View>
  <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Order')}>
          {' '}
            <Text style={styles.buttonText}>ADD TO ORDER R139.00</Text>
            </TouchableOpacity>
          </View>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 0,
      backgroundColor: '#FFFFDD',
      paddingBottom: 60,
    },
  
    image: { width: 330, height: 150 },
  
    main: {
      backgroundColor: 'rgba(255, 255, 255, 0.70)',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      paddingBottom:20
    },
    logo: { width: 40, height: 40 },
    mainTwo: { flexDirection: 'row', justifyContent: 'space-between' },
  
    button: {
      width: 202,
      height: 68,
      borderRadius: 22,
      backgroundColor: '#FFC436',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      marginTop:30
    },
    heading: {
      fontSize: 20,
      fontWeight: 'Bold',
      marginLeft: 0,
      paddingTop: 10,
      paddingBottom: 20,
    },
    paragraph:{marginBottom:20, padding:10},
    buttonText: { fontWeight: 'bold', fontSize: 15 },
  
    footer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
  });
  