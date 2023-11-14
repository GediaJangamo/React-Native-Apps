import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from "react-native";
import database from "../../config/firebaseconfig"
import styles from './style';
import {Feather } from "@expo/vector-icons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function NewUser({navigation}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erroRegister, setErroRegister] = useState("");

    const register = () => {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            
            const user = userCredential.user;
            navigation.navigate("Task", {idUser: user.uid})
    
          })
          .catch((error) => {
            setErroRegister(true)
            const errorCode = error.code;
            const errorMessage = error.message;
    
          });
    }

   return(
    <KeyboardAvoidingView 
        
    behavior = {Platform.OS === "android" ? "padding" : "height"}
    style ={styles.container}> 

        <Text style = {styles.label}> Email</Text>
        <TextInput 
        placeholder='Digite um email valido'
         onChangeText = {setEmail}
         value = {email}
          style = {styles.input}
        />

        <Text style = {styles.label}> Senha</Text>
        <TextInput 
         placeholder='Digite uma senha '
         secureTextEntry ={true}
         onChangeText= {setPassword}
         value = {password}
       
          style ={styles.input}
        />


        {erroRegister === true 
         ?
         <View style ={styles.error}> 
        
            <Feather name="alert-circle" size={24} color="red" />

            <Text style = {styles.warning}>Email ou Senha incorrectos</Text>
          </View>
          :
            <View/>
        }  
         
        { email === " " || password === " " 
         ?
          <TouchableOpacity 
            disabled ={true}
            style = {styles.button}>
            <Text style ={styles.ButtonText}> Registar</Text>
            </TouchableOpacity>
         :
        
         <TouchableOpacity 
          onPress = {register}
         style = {styles.button}>
         <Text style ={styles.ButtonText}> Registar</Text>
         </TouchableOpacity>
        }

        <Text style = {styles.acount}>
             Tem uma conta ? 

            <Text
               onPress={() => navigation.navigate("Login")}
              style = {styles.conta}>
                Login...
            </Text>
        </Text>
        <View style = {{ height:100}}/>
    </KeyboardAvoidingView>
    );
}