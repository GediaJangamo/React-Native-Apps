import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import { useFonts } from "expo-font";

export default function Home({navigation}){

    const [fontsLoaded] = useFonts({
      Lobster: require("../../assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
    
   return(
   <View style = {styles.container}>
     <Image
      source = {require("../../assets/Union.png")}
      style={styles.image}
    
    /> 

        <Text style = {styles.Welcome}> Bem-Vindo ao Awary </Text>

        <TouchableOpacity style = {styles.Button} 
          onPress={() => navigation.navigate("FORMLOGIN")}>
           <Text style = {styles.ButtonText}>Vamos la</Text>
        </TouchableOpacity>
    </View>
   )
}