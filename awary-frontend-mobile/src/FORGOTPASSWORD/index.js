import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";
import styles from "./style";
 import { useFonts } from "expo-font";


export default function FORGOTPASSWORD({ navigation }) {
  const [fontsLoaded] = useFonts({
    Lobster: require("../../assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Alterar Senha</Text>

      <Pressable onPress={Keyboard.dismiss}>
        <Text style={styles.label}>Nova Senha</Text>
        <TextInput
          style={styles.Input}
          placeholder="Digite uma nova senha"
        />

        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          style={styles.Input}
          placeholder="Confirme a sua senha"
        />

        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonCancelar} 
         onPress={() => navigation.navigate("FORMLOGIN")}
        >
          <Text style={styles.ButtonTextCancelar}>Cancelar</Text>
        </TouchableOpacity>

           
       
      </Pressable>
    </View>
  );
}
