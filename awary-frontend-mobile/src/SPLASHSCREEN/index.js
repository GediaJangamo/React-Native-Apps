import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';



const SPLASHSCREEN = ({ navigation }) => {
  useEffect(() => {
    // Simula algum carregamento assincrono
    setTimeout(() => { 
       navigation.replace('Home');
    }, 2000); 
   }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Logopng.png')} 
         style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SPLASHSCREEN;
