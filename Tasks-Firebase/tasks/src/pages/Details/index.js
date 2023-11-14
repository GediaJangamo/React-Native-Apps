import React, { useState } from "react";
import {Text, View, TouchableOpacity, TextInput} from "react-native";
import styles from "./style";

import database from "../../config/firebaseconfig";

export default function Details({navigation, route}){

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id

    function editTask(id, description){
        database.collection(route.params.idUser).doc(id).update({
            description: descriptionEdit
        })

        navigation.navigate("Task")
    }

    return(
        <View style = {styles.container}>
        <Text 
         style = {styles.label}
        >Description</Text>
        <TextInput 
          style = {styles.input}
          onChangeText = {setDescriptionEdit}
          value = {descriptionEdit}
          placeholder="EX: ir as compras"
        />

        <TouchableOpacity 
         style = {styles.buttonNewTask}
         onPress={() => {
            editTask(idTask, descriptionEdit)
        }}
        >
            <Text 
            style = {styles.textButton}
            
            >Save</Text>
        </TouchableOpacity>
    </View>
    )
}