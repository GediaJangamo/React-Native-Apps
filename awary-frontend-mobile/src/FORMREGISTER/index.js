import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styles from "./style";
 import { useFonts } from "expo-font";


export default function FORMREGISTER({ navigation }) {
  const [fontsLoaded] = useFonts({
    Lobster: require("../../assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
   
    <ScrollView style = {styles.container} showsVerticalScrollIndicator={false} >
    
        <Text style={styles.texto}>Criar conta</Text> 

      <KeyboardAvoidingView behavior= {Platform.OS == "ios" ? "padding" : "position"}> 
         <Text style={styles.label}>Escolha um nome de usuario</Text> 
        <TextInput
          style={styles.Input}
        />

         <Text style={styles.label}>Email</Text> 
        <TextInput
          style={styles.Input} 
        />

      <Text style={styles.label}>Senha</Text> 
        <TextInput
          style={styles.Input}
          
        />

       <Text style={styles.label}>Data Nascimento</Text>
        <TextInput
          style={styles.Input2}    
   />

      <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={styles.Input2}
        />

        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Criar</Text>
        </TouchableOpacity>    
       
       </KeyboardAvoidingView> 

       <View/> 
    </ScrollView>
   
   
  );
}
