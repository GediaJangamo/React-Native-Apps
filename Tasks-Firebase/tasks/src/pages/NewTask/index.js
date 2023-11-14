import React, {useState} from "react";
import {Text, View, TextInput, TouchableOpacity} from "react-native";
import styles from "./style";
import database from "../../config/firebaseconfig";


export default function NewTask({navigation, route}){
   
    const [description, setDescription] = useState(null)

    function addTask(){
        database.collection(route.params.idUser).add(
            {
                description: description,
                status: false
            }
        )

        navigation.navigate("Task")
    }
    return(
        <View style = {styles.container}>
            <Text 
             style = {styles.label}
            >Description</Text>
            <TextInput 
              style = {styles.input}
              onChangeText={setDescription} value={description}
              placeholder="EX: ir as compras"
            />

            <TouchableOpacity 
             style = {styles.buttonNewTask}
             onPress={() => {
                addTask()
            }}
            >
                <Text 
                style = {styles.textButton}
                
                >Save</Text>
            </TouchableOpacity>
        </View>
    )
}