import React, {useState} from 'react';
import {TextInput,Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './style'
import { FontAwesome, MaterialIcons, FontAwesome5} from "@expo/vector-icons"; 
import * as ImagePicker from "expo-image-picker";


export default function MYPROFILE ({navigation}){
  
    
   return(
   <View style = {styles.container}>

      <View>
         <Image 
           source = {require("../../assets/im2.jpg")}
           style={styles.imagem}  
         />
      </View>

      <View>
        <Text style = {styles.name}>Gedia Jangamo</Text>

        <View style = {styles.biografia}>
          <Text style = {styles.biografiaText}>
          Apaixonada por códigos e design, sou uma desenvolvedora frontend que transforma ideias em interfaces incríveis. Combinando tecnologia e criatividade, construo experiências visuais que cativam os usuários. #FrontendDev #UIUX #CodingPassion
          </Text>

        </View>

        <View style = {styles.contactos}>
            <Text style = {styles.cont}>845771303</Text>
            <Text style = {styles.cont}>gedyahgennyfah@gmail.com</Text>
        </View>
      </View>

    


    </View>
   )
}