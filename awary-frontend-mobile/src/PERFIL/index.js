import React, {useState} from 'react';
import {TextInput,Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './style'
import { FontAwesome, MaterialIcons, FontAwesome5} from "@expo/vector-icons"; 
import * as ImagePicker from "expo-image-picker";


export default function PERFIL ({navigation}){
  const [imageUri, setImageUri] = useState(null);

  const handleCameraIconPress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };
    
   return(
   <View style = {styles.container}>

      <View>
         <Image 
           source = {require("../../assets/im2.jpg")}
           style={styles.imagem} 
         />
        <TouchableOpacity onPress={handleCameraIconPress} >
        <FontAwesome name="camera" size={30} color="black"  style = {styles.myCamera}/>
      </TouchableOpacity>
      </View>

    <View style={styles.Inputs}>
        <View style={styles.InputInterno}>
          <MaterialIcons name="edit" size={24} color="black" />
          <View style={styles.InputContainer}>
            <TextInput placeholder='Alterar nome do usuário' />
          </View>
        </View>

        <View style={styles.InputInterno}>
          <FontAwesome5 name="user-alt" size={24} color="black" />
          <View style={styles.InputContainer}>
            <TextInput placeholder='Alterar nome do usuário' />
          </View>
        </View>

        <View style={styles.InputInterno}>
          <MaterialIcons name="edit" size={24} color="black" />
          <View style={styles.InputContainer}>
            <TextInput placeholder='Alterar nome do usuário' />
          </View>
        </View>

        <TouchableOpacity style = {styles.button} >
          <Text style = {styles.buttonText} >Salvar</Text>
       </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonPost} >
          <Text style = {styles.buttonTextPost}
           onPress={() => navigation.navigate("POST")}>Novo Post</Text>
      </TouchableOpacity>
   </View>


    </View>
   )
}