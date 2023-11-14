import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from "react-native";
import database from "../../config/firebaseconfig"
import styles from './style';
import {Feather } from "@expo/vector-icons"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Login({navigation}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

 const loginFirebase = () =>{

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate("Task", {idUser: user.uid})
      })
      .catch((error) => {
        setError(true)
        const errorCode = error.code;
        const errorMessage = error.message;
      });
     
    }


    useEffect (()=>{
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {  
          navigation.navigate("Task", {idUser: user.uid})
        } 
      });
    }, []);

    return(
        <KeyboardAvoidingView 
        
        behavior = {Platform.OS === "android" ? "padding" : "height"}
        style ={styles.container}> 

            <Text style = {styles.label}> Email</Text>
            <TextInput 
            placeholder='Ex:gedyahgennyfah@gmail.com'
            onChangeText={setEmail}
            value = {email}
              style ={styles.input}
            />

            <Text style = {styles.label}> Senha</Text>
            <TextInput 
             placeholder='Ex: gedia8457@'
             secureTextEntry ={true}
             onChangeText={setPassword}
            value = {password}
              style ={styles.input}
            />


            {error === true 
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
                <Text style ={styles.ButtonText}> Sign in</Text>
                </TouchableOpacity>
             :
            
             <TouchableOpacity 
              onPress = {loginFirebase}
             style = {styles.button}>
             <Text style ={styles.ButtonText}> Sign in</Text>
             </TouchableOpacity>
            }

            <Text style = {styles.acount}>
                Nao tem uma conta?

                <Text
                   onPress={() => navigation.navigate("NewUser")}
                  style = {styles.conta}>
                    Clique aqui!
                </Text>
            </Text>
            <View style = {{ height:100}}/>
        </KeyboardAvoidingView>
    )
}