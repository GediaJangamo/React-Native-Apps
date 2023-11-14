import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
  Image
} from "react-native";
import styles from "./style";
import { useFonts } from "expo-font";

import {AntDesign} from "@expo/vector-icons"
import api from "../SERVICES/api";

export default function FORMLOGIN({ navigation }) {
  const [fontsLoaded] = useFonts({
    Lobster: require("../../assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Awary</Text>
          
      <Text style={styles.textEs}   
       onPress={() => navigation.navigate("FORMREGISTER")}
               
      >Nao tenho conta</Text>

      <Pressable onPress={Keyboard.dismiss}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.Input}
         
        />

         <Text style={styles.label}>Senha</Text> 
        <TextInput
          style={styles.Input}
         
        />

        <Text style={styles.textEs}  
           onPress={() => navigation.navigate("FORGOTPASSWORD")}
               
        >Esqueci Senha</Text>

        <TouchableOpacity style={styles.Button} 
         onPress={() => navigation.navigate("TAB")}
        >
          <Text style={styles.ButtonText}>Entrar</Text>
        </TouchableOpacity>

               <Text style={styles.textSign}   
               
               
               >Ou entrar com</Text>

        <TouchableOpacity style={styles.ButtonGoogle}>

           <Image     
             source={require("../../assets/google.png")}
             style = {styles.Icon}
           />
          <Text style={styles.ButtonTextGoogle}>GOOGLE</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
